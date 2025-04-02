import { ensureMeta } from "@core/dom";
import { StoreMap, StyleUtility, UtilityProps } from "@core/types";

export const addStyle: StyleUtility = <E extends HTMLElement, R extends Partial<CSSStyleDeclaration>, S extends StoreMap = StoreMap>(...args: UtilityProps<R, S>) => {
  return (el: E) => {
    if (args.length === 2 && typeof args[1] === "function") {
      // Reactive mode
      const [stores, mapper] = args as [S, (values: S) => R];

      const apply = () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();
        if (el instanceof HTMLElement) {
          Object.assign(el.style, mapper(values as S));
        } else {
          console.warn("[Forest Warning: addStyle] el is not an HTMLElement, style will not be applied");
        }
      };

      apply();

      const unsubs = Object.values(stores).map((store) => store.subscribe(() => apply()));

      const meta = ensureMeta(el);
      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else {
      // Static mode
      const [style] = args as [R];
      if (el instanceof HTMLElement) {
        Object.assign(el.style, style);
      } else {
        console.warn("[Forest Warning: addStyle] el is not an HTMLElement, style will not be applied");
      }
    }

    return el;
  };
};
