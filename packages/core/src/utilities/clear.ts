import { ensureMeta, enqueue } from "@core/dom";
import { ClearUtility, StoreMap, Utility } from "@core/types";

export const addClear: ClearUtility =
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
