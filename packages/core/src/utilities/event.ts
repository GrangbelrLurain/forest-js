import { ensureMeta } from "@core/dom";
import { EventUtility, Utility } from "@core/types";
import { createUtility } from "./core";

export const addEvent: EventUtility = <E extends Element, K extends keyof HTMLElementEventMap>(
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
