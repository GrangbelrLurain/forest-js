export type Store<T> = {
  get: () => T;
  set: (value: T) => void;
  update: (fn: (prev: T) => T) => void;
  subscribe: (fn: () => void) => () => void;
  unsubscribe: (fn: () => void) => void;
};

export type StoreMap<T = any> = {
  [K in keyof T]: Store<T[K]>;
};

export type StoreValues<S extends StoreMap<any>> = {
  [K in keyof S]: S[K] extends Store<infer T> ? T : never;
};
