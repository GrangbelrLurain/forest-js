export type ElementName = keyof HTMLElementTagNameMap;

export type DomElement<T extends ElementName> = HTMLElementTagNameMap[T];

export type Store<T> = {
  get: () => T;
  set: (next: T) => void;
  update: (fn: (prev: T) => T) => void;
  subscribe: (fn: () => void) => () => void;
  unsubscribe: (fn: () => void) => void;
};

export type StoreMap = Record<string, Store<any>>;

export type StoreAwareUtility<P extends StoreMap, R> = [props: R] | [stores: P, mapper: (values: P) => R];

export type Utility<E extends HTMLElement> = (el: E) => E;

export type CreateStoreAwareUtility<S extends StoreMap, R, E extends HTMLElement> = ([storeOrStyle, mapper]: StoreAwareUtility<S, R>) => Utility<E>;

export type Triggers = {
  [K in string]: (...args: never[]) => void;
};

export type ElementMeta = {
  listeners?: Record<string, EventListener>;
  triggers?: Triggers;
  mounted?: boolean;
  storeBindings?: Set<() => void>;
};
