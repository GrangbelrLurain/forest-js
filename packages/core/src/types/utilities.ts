import { TreeNode } from "./dom";
import { StoreMap, StoreValues } from "./store";

export type Utility<E extends Element> = (el: E) => E;

export type StoreProps<R, S extends StoreMap = StoreMap> = [
  S,
  (values: StoreValues<S>) => R
];

export type DirectProps<R> = [R] | [Promise<R>];

export type UtilityProps<R, S extends StoreMap = StoreMap> =
  | DirectProps<R>
  | [S, (values: StoreValues<S>) => R];

export type AttributeUtility = <
  E extends Element,
  R extends Partial<E>,
  S extends StoreMap = StoreMap
>(
  ...args: UtilityProps<R, S>
) => Utility<E>;

export type EventUtility = <
  E extends Element,
  K extends keyof HTMLElementEventMap
>(
  type: K,
  handler: (e: HTMLElementEventMap[K] & { currentTarget: E }) => void,
  options?: AddEventListenerOptions
) => Utility<E>;

export type StyleUtility = <
  R extends Partial<CSSStyleDeclaration>,
  S extends StoreMap = StoreMap,
  E extends HTMLElement = HTMLElement
>(
  ...args: UtilityProps<R, S>
) => Utility<E>;

export type Triggers = {
  [K in string]: (...args: never[]) => void;
};

export type TriggerUtility = <
  R extends Triggers,
  S extends StoreMap = StoreMap,
  E extends HTMLElement = HTMLElement
>(
  ...args: UtilityProps<R, S>
) => Utility<E>;

export type Child = TreeNode | TreeNode[];

export type ChildUtility = <
  E extends HTMLElement,
  R extends Child | Promise<Child> | Promise<{ default: Child }>,
  S extends StoreMap = StoreMap
>(
  ...args: UtilityProps<R, S>
) => (el: E) => E;
