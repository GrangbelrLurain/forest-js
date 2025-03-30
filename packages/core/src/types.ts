export type ElementName = keyof HTMLElementTagNameMap;

export type DomElement<T extends ElementName> = HTMLElementTagNameMap[T];

export type TreeNode = Node | string | number | null | undefined;

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

export type StoreAwareUtilityProps<
  R,
  S extends StoreMap<any> = StoreMap<any>
> = [S, (values: StoreValues<S>) => R] | [R];

export type Utility<E extends Element> = (el: E) => E;

export type CreateStoreAwareUtility<T = unknown> = <
  R extends T,
  S extends StoreMap = StoreMap,
  E extends Element = Element
>(
  ...args: StoreAwareUtilityProps<R, S>
) => Utility<E>;

export type Triggers = {
  [K in string]: (...args: never[]) => void;
};

export type ElementMeta = {
  listeners?: Record<string, EventListener>;
  triggers?: Triggers;
  mounted?: boolean;
  storeBindings?: Set<() => void>;
};
