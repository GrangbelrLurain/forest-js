import { enqueue } from "@core/dom";
import { ClearUtility, CreateUtility, DecorateUtility, StoreMap, UseUtility, Utility } from "@core/types";

/**
 * Creates a utility function that enqueues a function to be executed on the next tick
 * @template E Element type
 * @param fn - Function to be executed
 * @returns Utility function
 */
export const createUtility: CreateUtility = <E extends Element>(fn: (el: E) => void): Utility<E> => {
  return (el: E) => {
    enqueue(() => fn(el));
    return el;
  };
};

/**
 * Combines multiple utility functions to create a new utility function
 * @param utils - Array of utility functions to combine
 * @returns Combined utility function
 */
export const use: UseUtility = <E extends Element>(...utils: Utility<E>[]): Utility<E> => {
  return (el: E) => utils.reduce((acc, fn) => fn(acc), el);
};

/**
 * Decorates an element by applying utility functions
 * @param el - Element to decorate
 * @param utils - Array of utility functions to apply
 * @returns Decorated element
 */
export const decorate: DecorateUtility = <E extends Element>(el: E, ...utils: Utility<E>[]): E => {
  return use(...utils)(el);
};
