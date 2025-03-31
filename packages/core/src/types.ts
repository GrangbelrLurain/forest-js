/**
 * Core Types
 */

export type ElementName = keyof HTMLElementTagNameMap;

export type DomElement<T extends ElementName> = HTMLElementTagNameMap[T];

export type TreeNode = Node | string | number | null | undefined;

export type ElementMeta = {
  listeners?: Record<string, EventListener>;
  triggers?: Triggers;
  mounted?: boolean;
  storeBindings?: Set<() => void>;
};

/**
 * Utility Core Types
 */

export type Utility<E extends Element> = (el: E) => E;

/**
 * Store Core Types
 */

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

/**
 * Utilities Props Types
 */

export type StoreProps<R, S extends StoreMap = StoreMap> = [S, (values: StoreValues<S>) => R];

export type DirectProps<R> = [R];

export type UtilityProps<R, S extends StoreMap = StoreMap> = StoreProps<R, S> | DirectProps<R>;

/**
 * Utilities Types
 */

export type AttributeUtility = <E extends Element, R extends Partial<E>, S extends StoreMap = StoreMap>(...args: UtilityProps<R, S>) => Utility<E>;

export type EventUtility = <E extends Element, K extends keyof HTMLElementEventMap>(
  type: K,
  handler: (e: HTMLElementEventMap[K] & { currentTarget: E }) => void,
  options?: AddEventListenerOptions
) => Utility<E>;

export type StyleUtility = <R extends Partial<CSSStyleDeclaration>, S extends StoreMap = StoreMap, E extends HTMLElement = HTMLElement>(...args: UtilityProps<R, S>) => Utility<E>;

export type Triggers = {
  [K in string]: (...args: never[]) => void;
};

export type TriggerUtility = <R extends Triggers, S extends StoreMap = StoreMap, E extends HTMLElement = HTMLElement>(...args: UtilityProps<R, S>) => Utility<E>;

export type ChildUtility = <R extends TreeNode | TreeNode[], S extends StoreMap = StoreMap, E extends Element = Element>(...args: UtilityProps<R, S>) => Utility<E>;
