import { enqueue, ensureMeta } from "@core/dom";
import { EventUtility, StoreMap, Utility } from "@core/types";
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

export const addClear =
  <S extends StoreMap>(store: S, shouldClear: (values: Record<keyof S, ReturnType<S[keyof S]["get"]>>) => boolean): Utility<HTMLElement> =>
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
