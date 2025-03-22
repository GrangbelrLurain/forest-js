// core/index.ts
import { DomElement, DomProps, ElementName, DomNode } from "./types";

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
  const props = (el as any).__props as Partial<DomProps<any>>;
  if (!props) return;

  for (const [key, value] of Object.entries(props)) {
    if (key === "children") {
      while (el.firstChild) el.removeChild(el.firstChild);
      const nodes = normalizeChildren(value);
      nodes.forEach((child) => el.appendChild(child));
    } else if (key === "style" && typeof value === "object") {
      Object.assign((el as HTMLElement).style, value);
    } else if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), value);
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
    return children.map((child) => (typeof child === "string" ? document.createTextNode(child) : child));
  }
  return [children];
}

export function dom<T extends ElementName>(tag: T, props: DomProps<T>): DomElement<T> {
  const el = document.createElement(tag) as DomElement<T>;

  // 내부 props 저장
  (el as any).__props = props;

  el.update = (newProps: Partial<DomProps<T>>) => {
    const current = (el as any).__props as DomProps<T>;
    (el as any).__props = { ...current, ...newProps };
    updateQueue.add(el);
    scheduleUpdateFlush();
  };

  applyProps(el);
  return el;
}
