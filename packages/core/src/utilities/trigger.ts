import { ensureMeta, enqueue } from "@core/dom";
import { StoreMap, TriggerUtility, Triggers, UtilityProps } from "@core/types";
import { createUtility } from "./core";

export const addTrigger: TriggerUtility = <E extends HTMLElement, R extends Triggers, S extends StoreMap = StoreMap>(...args: UtilityProps<R, S>) => {
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

export const getTrigger = <T extends Triggers, E extends HTMLElement>(el: E): Readonly<T> => {
  const meta = ensureMeta(el);
  return meta.triggers as T;
};
