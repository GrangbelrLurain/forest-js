import { Utility, StoreMap, CreateStoreAwareUtility } from "./types";

import { enqueue } from "./flush";
import { ensureMeta } from "./tree";

export function createUtility<E extends HTMLElement>(fn: (el: E) => void): Utility<E> {
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
export function use<E extends HTMLElement>(...utils: Utility<E>[]): Utility<E> {
  return (el: E) => utils.reduce((acc, fn) => fn(acc), el);
}

/**
 * Decorates an element by applying utility functions
 * @param el - Element to decorate
 * @param utils - Array of utility functions to apply
 * @returns Decorated element
 */
export function decorate<E extends HTMLElement>(el: E): (...utils: Utility<E>[]) => E {
  return (...utils) => use(...utils)(el);
}

export const addStyle: CreateStoreAwareUtility<StoreMap, Partial<CSSStyleDeclaration>, HTMLElement> = ([storeOrStyle, mapper]) => {
  return createUtility((el) => {
    if (typeof mapper === "function") {
      // reactive mode
      const stores = storeOrStyle as StoreMap;

      const apply = () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();
        Object.assign(el.style, mapper(values));
      };

      apply();

      const unsubs = Object.values(stores).map((store) => store.subscribe(() => enqueue(apply)));

      const meta = ensureMeta(el);
      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else {
      // static mode
      Object.assign(el.style, storeOrStyle);
    }

    return el;
  });
};

export const addAttribute: CreateStoreAwareUtility<StoreMap, Record<string, string>, HTMLElement> = ([storeOrAttrs, mapper]) => {
  return createUtility((el) => {
    if (typeof mapper === "function") {
      const stores = storeOrAttrs as StoreMap;
      const apply = () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();
        const attrs = mapper(values);
        for (const key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      };

      apply();

      const unsubs = Object.values(stores).map((store) => store.subscribe(() => enqueue(apply)));

      const meta = ensureMeta(el);
      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else if (typeof storeOrAttrs === "object") {
      for (const key in storeOrAttrs) {
        if (typeof storeOrAttrs[key] === "string") {
          el.setAttribute(key, storeOrAttrs[key]);
        }
      }
    }

    return el;
  });
};

export const addEvent = <E extends HTMLElement, K extends keyof HTMLElementEventMap>(
  type: K,
  handler: (e: HTMLElementEventMap[K] & { currentTarget: E }) => void,
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

const flatten = (nodes: any[]): Node[] => {
  return nodes.flatMap((node) => {
    if (Array.isArray(node)) return flatten(node);
    if (typeof node === "string" || typeof node === "number") {
      return document.createTextNode(String(node));
    }
    if (node instanceof Node) return node;
    return [];
  });
};

const isSameNode = (a: Node[], b: Node[]) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const addChild: CreateStoreAwareUtility<StoreMap, HTMLElement[], HTMLElement> = ([storeOrChildren, mapper]) =>
  createUtility((el) => {
    if (typeof mapper === "function") {
      const stores = storeOrChildren as StoreMap;
      const apply = () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();

        const newChildren = flatten(mapper(values));

        if (el.childNodes.length === 0) {
          newChildren.forEach((child) => el.appendChild(child));
        } else if (!isSameNode(Array.from(el.childNodes), newChildren)) {
          el.replaceChildren(...newChildren);
        }
      };

      apply();

      const unsubs = Object.values(stores).map((store) => store.subscribe(() => enqueue(apply)));

      const meta = ensureMeta(el);
      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else if (Array.isArray(storeOrChildren)) {
      flatten(storeOrChildren).forEach((child) => el.appendChild(child));
    }

    return el;
  });
