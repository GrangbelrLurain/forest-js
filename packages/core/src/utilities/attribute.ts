import { enqueue, ensureMeta } from "@core/dom";
import { StoreMap, StoreValues, Utility, UtilityProps } from "@core/types";

/**
 * @function addAttribute
 * @description Adds attributes to an element.
 * Supports reactive attributes when using stores.
 *
 * @template E - Element type.
 * @template R - Object with attributes to add.
 * @template S - StoreMap type when used reactively.
 * @param args - Attributes or store and mapper function
 * @returns Utility function for adding attributes
 * @example
 * ```ts
 * const addTitle = addAttribute<HTMLDivElement, { title: string }>(
 *   { title: "Hello" }
 * )(MyElement);
 * ```
 */
export const addAttribute = <E extends Element, R extends Partial<E>, S extends StoreMap = StoreMap>(...args: UtilityProps<R, S>): Utility<E> => {
  return (el: E) => {
    if (args.length === 2 && typeof args[1] === "function") {
      const [stores, mapper] = args;
      const apply = () => {
        const values: StoreValues<S> = {} as StoreValues<S>;
        for (const key in stores) values[key] = stores[key].get();
        const attrs = mapper(values as StoreValues<S>);
        for (const key in attrs) {
          if (key in el) {
            (el as any)[key] = attrs[key];
          }
        }
      };

      apply();

      const unsubs = Object.values(stores).map((store) => store.subscribe(() => enqueue(apply)));

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
