import { Store } from "@core/types/store";

/**
 * @function createStore
 * @description Create a store
 * @param initial - Initial value
 * @returns Store
 * @example
 * ```ts
 * const store = createStore(0);
 * ```
 */
export function createStore<T>(initial: T): Store<T> {
  let value = initial;
  const subscribers = new Set<() => void>();

  return {
    get: () => value,
    set: (next) => {
      value = next;
      subscribers.forEach((fn) => fn());
    },
    update: (fn) => {
      value = fn(value);
      subscribers.forEach((fn) => fn());
    },
    subscribe: (fn) => {
      subscribers.delete(fn);
      subscribers.add(fn);
      return () => subscribers.delete(fn);
    },
    unsubscribe: (fn) => {
      subscribers.delete(fn);
    },
  };
}
