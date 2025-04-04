/**
 * Reactive store for state management.
 * Stores a value and provides reactive updates.
 * Used for managing dynamic data within Forest.js.
 *
 * @template T Type of value stored in the store
 * @example
 * ```ts
 * const myStore = createStore({ value: "Hello" });
 * myStore.set({ value: "World" });
 * myStore.subscribe(() => console.log(myStore.get()));
 * ```
 */
export type Store<T> = {
  /**
   * Get the current value from the store.
   * @returns {T} The current store value.
   */
  get: () => T;
  /**
   * Set a new value in the store and notify subscribers.
   * @param value - The new value to store.
   */
  set: (value: T) => void;
  /**
   * Update the store value using a function and notify subscribers.
   * @param fn - A function that takes the previous value and returns the new value.
   */
  update: (fn: (prev: T) => T) => void;
  /**
   * Subscribe to store changes.
   * @param fn - The callback function to execute on updates.
   * @returns {() => void} A function to unsubscribe from changes.
   * @example
   * ```ts
   * const unsubscribe = myStore.subscribe(() => console.log("Updated!"));
   * unsubscribe(); // To stop listening
   * ```
   */
  subscribe: (fn: () => void) => () => void;
  /**
   * Unsubscribe a previously registered callback.
   * Typically called using the function returned from `subscribe()`.
   * @param fn - The function that was initially registered.
   */
  unsubscribe: (fn: () => void) => void;
};

/**
 * Map of named stores.
 * Allows organizing multiple stores under a single object.
 *
 * @template T Optional type for the store values
 * @example
 * ```ts
 * const firstStore = createStore({ value: "Hello" });
 * const secondStore = createStore({ value: "World" });
 * const storeMap: StoreMap<{ first: string, second: string }> = {
 *   first: firstStore,
 *   second: secondStore
 * };
 * ```
 */
export type StoreMap<T = any> = {
  [K in keyof T]: Store<T[K]>;
};

/**
 * Helper type to extract values from a StoreMap.
 * Transforms a map of stores into a map of their inner values.
 *
 * @template S StoreMap to extract values from
 * @example
 * ```ts
 * const myStore = createStore({ value: "Hello" });
 * const myStoreMap: StoreMap<{ myStore: string }> = { myStore };
 * const myValues: StoreValues<typeof myStoreMap> = { myStore: "Hello" };
 * ```
 */
export type StoreValues<S extends StoreMap<any>> = {
  [K in keyof S]: S[K] extends Store<infer T> ? T : never;
};
