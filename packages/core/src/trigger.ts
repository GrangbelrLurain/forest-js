import { Triggers, CreateStoreAwareUtility, StoreMap } from "./types";
import { createUtility } from "./utilities";
import { ensureMeta } from "./tree";
import { enqueue } from "./flush";

export const addTrigger: CreateStoreAwareUtility<StoreMap, Triggers, HTMLElement> = ([storeOrTriggers, mapper]) => {
  return createUtility((el) => {
    const meta = ensureMeta(el);
    const triggers = (meta.triggers ??= {});
    if (typeof mapper === "function") {
      const stores = storeOrTriggers as StoreMap;
      const apply = () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();
        Object.assign(triggers, mapper(values));
      };

      apply();

      const unsubs = Object.values(stores).map((store) => store.subscribe(() => enqueue(apply)));

      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else {
      Object.assign(triggers, storeOrTriggers);
    }

    return el;
  });
};

export const getTrigger = <T extends Triggers, E extends HTMLElement>(el: E): Readonly<T> => {
  const meta = ensureMeta(el);
  return meta.triggers as T;
};
