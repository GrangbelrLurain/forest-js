import { Store } from "@core/types";

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
