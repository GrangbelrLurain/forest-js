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
 * Creates a utility function that enqueues a function to be executed on the next tick.
 * Useful for batching updates to avoid layout thrashing.
 *
 * @template E - Element type.
 * @param fn - The function to be executed.
 * @returns A utility function that processes the element.
 * @example
 * ```ts
 * const delayedUpdate = createUtility<HTMLDivElement>((el) => {
 *   el.style.color = "blue";
 *   return el;
 * });
 * ```
 */
export type CreateUtility = <E extends Element>(fn: (el: E) => void) => Utility<E>;

/**
 * Combines multiple utility functions into a single utility.
 * Sequentially applies each utility to the element.
 *
 * @template E - Element type.
 * @example
 * ```ts
 * const combinedUtility = use<HTMLDivElement>(
 *   addAttribute({ "data-active": true })
 * );
 *
 * combinedUtility(MyElement);
 * ```
 */
export type UseUtility = <E extends Element>(...utils: Utility<E>[]) => Utility<E>;

/**
 * Directly applies multiple utility functions to an element.
 * Similar to UseUtility but applies immediately.
 *
 * @template E - Element type.
 * @example
 * ```ts
 * decorate(MyElement, addAttribute({ "data-active": true }));
 * ```
 */
export type DecorateUtility = <E extends Element>(el: E, ...utils: Utility<E>[]) => E;

/**
 * Clears store bindings when a specific condition is met.
 *
 * @template S - StoreMap type.
 * @param store - The store to clear.
 * @param shouldClear - Condition to trigger clearing.
 * @returns A utility for handling store cleanup.
 * @example
 * ```ts
 * const clearStore = addClear(myStore, (values) => values.name === "John")(MyElement);
 * ```
 */
export type ClearUtility = <S extends StoreMap>(store: S, shouldClear: (values: Record<keyof S, ReturnType<S[keyof S]["get"]>>) => boolean) => Utility<HTMLElement>;

/**
 * @kind Experimental Utility
 * Adds attributes to an element.
 * Supports reactive attributes when using stores.
 *
 * @template E - Element type.
 * @template R - Object with attributes to add.
 * @template S - StoreMap type when used reactively.
 * @example
 * ```ts
 * const addTitle = addAttribute<HTMLDivElement, { title: string }>(
 *   { title: "Hello" }
 * )(MyElement);
 * ```
 */
export type AttributeUtility = <E extends Element, R extends Partial<E>, S extends StoreMap = StoreMap>(...args: UtilityProps<R, S>) => Utility<E>;

/**
 * Attaches event listeners to an element.
 * Allows specifying event types and handlers.
 *
 * @template E - Element type.
 * @template K - Event key.
 * @example
 * ```ts
 * const onClick = addEvent("click", (e) => console.log(e.currentTarget))(MyElement);
 * ```
 */
export type EventUtility = <E extends Element, K extends keyof HTMLElementEventMap>(
  type: K,
  handler: (e: HTMLElementEventMap[K] & { currentTarget: E }) => void,
  options?: AddEventListenerOptions
) => Utility<E>;

/**
 * Applies CSS styles to an element.
 * Supports reactive styles when using stores.
 *
 * @template R - Style properties to apply.
 * @template S - StoreMap type when used reactively.
 * @template E - Element type (defaults to HTMLElement).
 * @example
 * ```ts
 * const setColor = addStyle<HTMLDivElement, { color: string }>(
 *   { color: "red" }
 * )(MyElement);
 * ```
 */
export type StyleUtility = <R extends Partial<CSSStyleDeclaration>, S extends StoreMap = StoreMap, E extends HTMLElement = HTMLElement>(...args: UtilityProps<R, S>) => Utility<E>;

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
 * Utility for adding triggers to an element
 * @template R Trigger object to add
 * @template S StoreMap type when used reactively
 * @template E Element type (defaults to HTMLElement)
 * @example
 * ```ts
 * addTrigger({ customTrigger: () => console.log("Custom trigger") })(MyElement);
 * const triggers = getTriggers(MyElement);
 * triggers.customTrigger();
 * ```
 */
export type TriggerUtility = <R extends Triggers, S extends StoreMap = StoreMap, E extends HTMLElement = HTMLElement>(...args: UtilityProps<R, S>) => Utility<E>;

/**
 * Utility for getting triggers from an element for use outside of component
 * @template T Trigger object type
 * @template E Element type (defaults to HTMLElement)
 * @example
 * ```ts
 * const triggers = getTriggers(MyElement);
 * triggers.customTrigger();
 * ```
 */
export type GetTrigger = <T extends Triggers, E extends HTMLElement>(el: E) => Readonly<T>;

/**
 * Type representing a child or children that can be added to an element
 */
export type Child = TreeNode | TreeNode[];

/**
 * Utility for adding children to an element
 * @template E Element type
 * @template R Child content to add (can be promise or dynamic import)
 * @template S StoreMap type when used reactively
 */
export type ChildUtility = <E extends HTMLElement, R extends Child | Promise<Child> | Promise<{ default: Child }>, S extends StoreMap = StoreMap>(...args: UtilityProps<R, S>) => (el: E) => E;
