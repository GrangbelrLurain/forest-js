import { ensureMeta, enqueue } from "@core/dom";
import { StoreMap, Triggers, Utility, UtilityProps } from "@core/types";
import { createUtility } from "./core";

/**
 * @function addTrigger
 * @description Utility for adding triggers to an element
 * @template R Trigger object to add
 * @template S StoreMap type when used reactively
 * @template E Element type (defaults to HTMLElement)
 * @param args - Trigger object or store and mapper function
 * @returns Utility function for adding triggers
 * @example
 * ```ts
 * addTrigger({ customTrigger: () => console.log("Custom trigger") })(MyElement);
 * const triggers = getTriggers(MyElement);
 * triggers.customTrigger();
 * ```
 */
export const addTrigger = <R extends Triggers, S extends StoreMap = StoreMap, E extends HTMLElement = HTMLElement>(...args: UtilityProps<R, S>): Utility<E> => {
  return createUtility((el: E) => {
    const meta = ensureMeta(el);
    const triggers = (meta.triggers ??= {});
    if (args.length === 2 && typeof args[1] === "function") {
      const [stores, mapper] = args as [S, (values: S) => R];
      const apply = () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();
        Object.assign(triggers, mapper(values as S));
      };

      apply();

      const unsubs = Object.values(stores).map((store) => store.subscribe(() => enqueue(apply)));

      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else {
      const [triggers] = args as [R];
      Object.assign(triggers, triggers);
    }

    return el;
  });
};

/**
 * @function getTrigger
 * @description Utility for getting triggers from an element for use outside of component
 * @template T Trigger object type
 * @template E Element type (defaults to HTMLElement)
 * @param el - Element to get triggers from
 * @returns Trigger object
 * @example
 * ```ts
 * const triggers = getTriggers(MyElement);
 * triggers.customTrigger();
 * ```
 */
export const getTrigger = <T extends Triggers, E extends HTMLElement>(el: E): Readonly<T> => {
  const meta = ensureMeta(el);
  return meta.triggers as T;
};
