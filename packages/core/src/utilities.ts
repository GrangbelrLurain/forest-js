import {
  Utility,
  StoreMap,
  TreeNode,
  StoreValues,
  AttributeUtility,
  UtilityProps,
  EventUtility,
  StyleUtility,
  ChildUtility,
} from "./types";

import { enqueue } from "./flush";
import { ensureMeta } from "./tree";

export function createUtility<E extends Element>(
  fn: (el: E) => void
): Utility<E> {
  return (el: E) => {
    enqueue(() => fn(el));
    return el;
  };
}

/**
 * Combines multiple utility functions to create a new utility function
 * @param utils - Array of utility functions to combine
 * @returns Combined utility function
 */
export function use<E extends Element>(...utils: Utility<E>[]): Utility<E> {
  return (el: E) => utils.reduce((acc, fn) => fn(acc), el);
}

/**
 * Decorates an element by applying utility functions
 * @param el - Element to decorate
 * @param utils - Array of utility functions to apply
 * @returns Decorated element
 */
export function decorate<E extends Element>(el: E, ...utils: Utility<E>[]): E {
  return use(...utils)(el);
}

export const addStyle: StyleUtility<HTMLElement> = <
  E extends HTMLElement,
  R extends Partial<CSSStyleDeclaration>,
  S extends StoreMap = StoreMap
>(
  ...args: UtilityProps<R, S>
) => {
  return (el: E) => {
    if (args.length === 2 && typeof args[1] === "function") {
      // Reactive mode
      const [stores, mapper] = args as [S, (values: S) => R];

      const apply = () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();
        if (el instanceof HTMLElement) {
          Object.assign(el.style, mapper(values as S));
        } else {
          console.warn(
            "[Forest Warning: addStyle] el is not an HTMLElement, style will not be applied"
          );
        }
      };

      apply();

      const unsubs = Object.values(stores).map((store) =>
        store.subscribe(() => apply())
      );

      const meta = ensureMeta(el);
      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else {
      // Static mode
      const [style] = args as [R];
      if (el instanceof HTMLElement) {
        Object.assign(el.style, style);
      } else {
        console.warn(
          "[Forest Warning: addStyle] el is not an HTMLElement, style will not be applied"
        );
      }
    }

    return el;
  };
};

export const addAttribute: AttributeUtility<HTMLElement> = <
  E extends HTMLElement,
  R extends Partial<HTMLElement>,
  S extends StoreMap = StoreMap
>(
  ...args: UtilityProps<R, S>
) => {
  return (el: E) => {
    if (args.length === 2 && typeof args[1] === "function") {
      const [stores, mapper] = args;
      const apply = () => {
        const values: StoreValues<S> = {} as StoreValues<S>;
        for (const key in stores) values[key] = stores[key].get();
        const attrs = mapper(values);
        for (const key in attrs) {
          if (key in el) {
            (el as any)[key] = attrs[key];
          }
        }
      };

      apply();

      const unsubs = Object.values(stores).map((store) =>
        store.subscribe(() => enqueue(apply))
      );

      const meta = ensureMeta(el);
      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else {
      const [attrs] = args as [R];
      for (const key in attrs) {
        if (key in el) {
          (el as any)[key] = attrs[key];
        }
      }
    }

    return el;
  };
};

export const addEvent: EventUtility<HTMLElement> = <E extends HTMLElement>(
  type: keyof HTMLElementEventMap,
  handler: (
    e: HTMLElementEventMap[keyof HTMLElementEventMap] & { currentTarget: E }
  ) => void,
  options?: AddEventListenerOptions
): Utility<E> =>
  createUtility((el) => {
    const meta = ensureMeta(el);
    if (!meta.listeners) meta.listeners = {};
    if (meta.listeners[type]) {
      el.removeEventListener(type, meta.listeners[type] as EventListener);
    }
    meta.listeners[type] = handler as EventListener;
    el.addEventListener(type, meta.listeners[type] as EventListener, options);
    return el;
  });

const toNode = (node: TreeNode): Node => {
  if (typeof node === "string" || typeof node === "number") {
    return document.createTextNode(String(node));
  }
  if (node === null || node === undefined) {
    return document.createTextNode("");
  }
  return node;
};

const flatten = (nodes: TreeNode | TreeNode[]): Node[] => {
  console.log(nodes);
  if (Array.isArray(nodes)) {
    return Array.from(nodes).flatMap((node) => {
      if (Array.isArray(node)) return flatten(node);
      if (node instanceof Node) return node;
      return toNode(node);
    });
  }
  return [toNode(nodes)];
};

const isSameNode = (a: Node[], b: Node[]) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const addChild: ChildUtility<Element> = <
  E extends Element,
  R extends TreeNode | TreeNode[],
  S extends StoreMap = StoreMap
>(
  ...args: UtilityProps<R, S>
) => {
  return (el: E) => {
    if (args.length === 2 && typeof args[1] === "function") {
      const [stores, mapper] = args as [S, (values: S) => R];
      const apply = () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();

        const newChildren = flatten(mapper(values as S));

        if (el.childNodes.length === 0) {
          newChildren.forEach((child) => el.appendChild(child));
        } else if (!isSameNode(Array.from(el.childNodes), newChildren)) {
          el.replaceChildren(...newChildren);
        }
      };

      apply();

      const unsubs = Object.values(stores).map((store) =>
        store.subscribe(() => enqueue(apply))
      );

      const meta = ensureMeta(el);
      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else {
      const [children] = args as [R];
      flatten(children).forEach((child) => el.appendChild(child));
    }

    return el;
  };
};

export const addClear =
  <S extends StoreMap>(
    store: S,
    shouldClear: (
      values: Record<keyof S, ReturnType<S[keyof S]["get"]>>
    ) => boolean
  ): Utility<HTMLElement> =>
  (el) => {
    const meta = ensureMeta(el);

    const apply = () => {
      const values: Record<keyof S, ReturnType<S[keyof S]["get"]>> = {} as any;
      for (const key in store) values[key] = store[key].get() as any;
      if (shouldClear(values)) {
        meta.storeBindings?.forEach((unsub) => unsub());
        meta.storeBindings?.clear();
      }
    };

    enqueue(apply);

    return el;
  };
