import { enqueue, ensureMeta } from "@core/dom";
import { AttributeUtility, StoreMap, StoreValues, UtilityProps } from "@core/types";

export const addAttribute: AttributeUtility = <E extends Element, R extends Partial<E>, S extends StoreMap = StoreMap>(...args: UtilityProps<R, S>) => {
  return (el: E) => {
    if (args.length === 2 && typeof args[1] === "function") {
      const [stores, mapper] = args;
      const apply = () => {
        const values: StoreValues<S> = {} as StoreValues<S>;
        for (const key in stores) values[key] = stores[key].get();
        const attrs = mapper(values);
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
