import { enqueue } from "@core/dom";
import { Utility } from "@core/types";

export function createUtility<E extends Element>(fn: (el: E) => void): Utility<E> {
  return (el: E) => {
    enqueue(() => fn(el));
    return el;
  };
}

/**
 * Combines multiple utility functions to create a new utility function
 * @param utils - Array of utility functions to combine
 * @returns Combined utility function
 */
export function use<E extends Element>(...utils: Utility<E>[]): Utility<E> {
  return (el: E) => utils.reduce((acc, fn) => fn(acc), el);
}

/**
 * Decorates an element by applying utility functions
 * @param el - Element to decorate
 * @param utils - Array of utility functions to apply
 * @returns Decorated element
 */
export function decorate<E extends Element>(el: E, ...utils: Utility<E>[]): E {
  return use(...utils)(el);
}
