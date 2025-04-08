import { ensureMeta } from "@core/dom";
import { Utility } from "@core/types";
import { createUtility } from "./core";

/**
 * @function addEvent
 * @description Attaches event listeners to an element.
 * Allows specifying event types and handlers.
 *
 * @template E - Element type.
 * @template K - Event key.
 * @param type - Event type.
 * @param handler - Event handler.
 * @param options - Event options.
 * @returns Utility function for adding event listeners.
 * @example
 * ```ts
 * const onClick = addEvent("click", (e) => console.log(e.currentTarget))(MyElement);
 * ```
 */
export const addEvent = <E extends Element, K extends keyof HTMLElementEventMap>(
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
