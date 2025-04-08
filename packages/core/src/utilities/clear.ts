import { ensureMeta, enqueue } from "@core/dom";
import { StoreMap, Utility } from "@core/types";

/**
 * @function addClear
 * @description Clears store bindings when a specific condition is met.
 *
 * @template S - StoreMap type.
 * @param store - The store to clear.
 * @param shouldClear - Condition to trigger clearing.
 * @returns A utility for handling store cleanup.
 * @example
 * ```ts
 * const clearStore = addClear(myStore, (values) => values.name === "John")(MyElement);
 * ```
 */
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
