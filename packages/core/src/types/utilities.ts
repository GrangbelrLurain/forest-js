import { TreeNode } from "./dom";
import { StoreMap, StoreValues } from "./store";

/**
 * A utility function that takes an element, applies transformations, and returns the modified element.
 * Typically used to enhance or manipulate the DOM element in a declarative way.
 *
 * @template E - The type of element the utility operates on.
 * @example
 * ```ts
 * const addClass: Utility<HTMLDivElement> = (el) => {
 *   el.classList.add("highlight");
 *   return el;
 * };
 * ```
 */
export type Utility<E extends Element> = (el: E) => E;

/**
 * Type for reactive props derived from stores.
 * Allows dynamically mapping store values to specific properties.
 *
 * @template R - The result type.
 * @template S - StoreMap type.
 * @example
 * ```ts
 * const reactiveProps: StoreProps<string, MyStoreMap> = [{ myStore }, ({ myStore }) => myStore.values];
 * ```
 */
export type StoreProps<R, S extends StoreMap = StoreMap> = [S, (values: StoreValues<S>) => R];

/**
 * Type for direct (non-reactive) props.
 * Used when the props are static or pre-determined.
 *
 * @template R - The result type.
 * @example
 * ```ts
 * const directProps: DirectProps<number> = [42];
 * ```
 */
export type DirectProps<R> = [R] | [Promise<R>];

/**
 * Union type for props that can be either direct or store-derived.
 * Combines both direct and reactive prop types.
 *
 * @template R - The result type.
 * @template S - StoreMap type.
 * @example
 * ```ts
 * const myStore = createStore({ value: "Hello" });
 * const utilityProps: UtilityProps<string, typeof myStore> = [{ myStore }, ({ myStore }) => myStore.value];
 * const utilityProps: UtilityProps<string> = ["Hello"];
 * ```
 */
export type UtilityProps<R, S extends StoreMap = StoreMap> = DirectProps<R> | [S, (values: StoreValues<S>) => R];

/**
 * Object containing named trigger functions
 * For use in the TriggerUtility with ElementMeta.triggers
 * @example
 * ```ts
 * const triggers = getTriggers(MyElement);
 * triggers.customTrigger();
 * ```
 */
export type Triggers = {
  [K in string]: (...args: never[]) => void;
};

/**
 * Type representing a child or children that can be added to an element
 */
export type Child = TreeNode | TreeNode[];
