// core/index.ts
import { DomElement, ElementName, ElementMeta } from "./types";

const elementMeta = new WeakMap<Element, ElementMeta>();

export function ensureMeta(el: Element): ElementMeta {
  if (!elementMeta.has(el)) elementMeta.set(el, {});
  return elementMeta.get(el)!;
}

export function tree<T extends ElementName>(tag: T): DomElement<T> {
  const el = document.createElement(tag) as DomElement<T>;

  return el;
}
