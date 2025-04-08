import { ensureMeta } from "@core/dom";
import { StoreMap, Utility, UtilityProps } from "@core/types";

/**
 * @function addStyle
 * @description Applies CSS styles to an element.
 * Supports reactive styles when using stores.
 *
 * @template R - Style properties to apply.
 * @template S - StoreMap type when used reactively.
 * @template E - Element type (defaults to HTMLElement).
 * @param args - Style properties or store and mapper function
 * @returns Utility function for adding styles
 * @example
 * ```ts
 * const setColor = addStyle<HTMLDivElement, { color: string }>(
 *   { color: "red" }
 * )(MyElement);
 * ```
 */

export const addStyle = <R extends Partial<CSSStyleDeclaration>, S extends StoreMap = StoreMap, E extends HTMLElement = HTMLElement>(...args: UtilityProps<R, S>): Utility<E> => {
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
