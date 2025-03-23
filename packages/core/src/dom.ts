// core/index.ts
import { DomElement, DomProps, ElementName, DomNode } from "./types";

const listenerMap = new WeakMap<HTMLElement, Record<string, EventListener>>();

const updateMap = new WeakMap<
  HTMLElement,
  <T extends ElementName>(props: Partial<DomProps<T>>) => void
>();

const propsMap = new WeakMap<HTMLElement, Partial<DomProps<any>>>();

const updateQueue = new Set<HTMLElement>();
let updateScheduled = false;

function scheduleUpdateFlush() {
  if (updateScheduled) return;
  updateScheduled = true;

  requestAnimationFrame(() => {
    for (const el of updateQueue) applyProps(el);
    updateQueue.clear();
    updateScheduled = false;
  });
}

function applyProps(el: HTMLElement) {
  const props = propsMap.get(el);
  if (!props) return;

  for (const [key, value] of Object.entries(props)) {
    if (key === "children") {
      while (el.firstChild) el.removeChild(el.firstChild);
      const nodes = normalizeChildren(value);
      console.log(nodes);
      nodes.forEach((child) => el.appendChild(child));
    } else if (key === "style" && typeof value === "object") {
      Object.assign((el as HTMLElement).style, value);
    } else if (key.startsWith("on") && typeof value === "function") {
      const event = key.slice(2).toLowerCase();
      const listeners = listenerMap.get(el) ?? {};
      const prevListener = listeners[event];

      if (prevListener) {
        el.removeEventListener(event, prevListener);
      }

      el.addEventListener(event, value);
      listeners[event] = value;
      listenerMap.set(el, listeners);
    } else if (value !== undefined) {
      try {
        (el as any)[key] = value;
      } catch {
        el.setAttribute(key, String(value));
      }
    }
  }
}

function normalizeChildren(children: DomNode): Node[] {
  if (typeof children === "string") return [document.createTextNode(children)];
  if (Array.isArray(children)) {
    return children.map((child) => {
      if (typeof child === "string") {
        return document.createTextNode(child);
      }
      if (typeof child === "number") {
        return document.createTextNode(String(child));
      }
      return child;
    });
  }
  if (typeof children === "number") {
    return [document.createTextNode(String(children))];
  }
  if (typeof children === "string") {
    return [document.createTextNode(children)];
  }
  return [children];
}

export function dom<T extends ElementName>(
  tag: T,
  props: DomProps<T>
): DomElement<T> {
  const el = document.createElement(tag) as DomElement<T>;

  // 내부 props 저장
  propsMap.set(el, props);

  const update = <T extends ElementName>(newProps: Partial<DomProps<T>>) => {
    const current = propsMap.get(el) as DomProps<T>;
    propsMap.set(el, { ...current, ...newProps });
    updateQueue.add(el);
    scheduleUpdateFlush();
  };

  updateMap.set(el, update);

  applyProps(el);
  return el;
}

export function update<T extends ElementName>(
  el: DomElement<T>,
  props: Partial<DomProps<T>>
) {
  updateMap.get(el)?.(props);
}
