import { enqueue } from "@core/dom";
import { Utility } from "@core/types";

/**
 * @function createUtility
 * @description Creates a utility function that enqueues a function to be executed on the next tick.
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
export const createUtility = <E extends Element>(fn: (el: E) => void): Utility<E> => {
  return (el: E) => {
    enqueue(() => fn(el));
    return el;
  };
};

/**
 * @function use
 * @description Combines multiple utility functions into a single utility.
 * Sequentially applies each utility to the element.
 *
 * @template E - Element type.
 * @param utils - Array of utility functions to combine
 * @returns Combined utility function
 * @example
 * ```ts
 * const combinedUtility = use<HTMLDivElement>(
 *   addAttribute({ "data-active": true })
 * );
 *
 * combinedUtility(MyElement);
 * ```
 */
export const use = <E extends Element>(...utils: Utility<E>[]): Utility<E> => {
  return (el: E) => utils.reduce((acc, fn) => fn(acc), el);
};

/**
 * @function decorate
 * @description Directly applies multiple utility functions to an element.
 * Similar to UseUtility but applies immediately.
 *
 * @template E - Element type.
 * @param el - Element to decorate
 * @param utils - Array of utility functions to apply
 * @returns Decorated element
 * @example
 * ```ts
 * decorate(MyElement, addAttribute({ "data-active": true }));
 * ```
 */
export const decorate = <E extends Element>(el: E, ...utils: Utility<E>[]): E => {
  return use(...utils)(el);
};
