import { Triggers } from "@core/types/utilities";

/**
 * Represents valid HTML element names.
 * Utilized to dynamically create or manipulate HTML elements.
 *
 * @example
 * ```ts
 * const div = tree("div"); // <- "div" is a valid HTML element name
 * ```
 */
export type ElementName = keyof HTMLElementTagNameMap;

/**
 * Helper type to retrieve the actual DOM element type from a tag name.
 * This is useful when creating or manipulating elements dynamically.
 *
 * @template T - The HTML element tag name.
 * @example
 * ```ts
 * const div = tree("div"); // <- "const div" is a DomElement
 * ```
 */
export type DomElement<T extends ElementName> = HTMLElementTagNameMap[T];

/**
 * Represents a node that can be part of the DOM tree.
 * This includes actual DOM nodes, primitive types like strings and numbers,
 * or even nullable types like null or undefined.
 *
 * @example
 * ```ts
 * const node1: TreeNode = tree("span"); // <- "node1" is a TreeNode
 * const node2: TreeNode = "Text content"; // <- "node2" is a TreeNode
 * const node3: TreeNode = null; // <- "node3" is a TreeNode
 * ```
 */
export type TreeNode = Node | string | number | null | undefined;

/**
 * Metadata associated with DOM elements.
 * Used internally by Forest.js to maintain element states and bindings.
 *
 * @property {Record<string, EventListener>} [listeners] - Event listeners attached to the element.
 * @property {Triggers} [triggers] - Custom triggers for element-specific actions.
 * @property {boolean} [mounted] - Indicates whether the element is currently mounted in the DOM.
 * @property {Set<() => void>} [storeBindings] - A set of functions to clean up store bindings.
 * @example
 * ```ts
 * const elementMeta: ElementMeta = ensureMeta(el) // <- "elementMeta" is a ElementMeta
 *
 * elementMeta.listeners = {
 *   click: () => console.log("Clicked!"),
 * };
 *
 * elementMeta.mounted = true;
 *
 * elementMeta.triggers = new Set(["customTrigger"]);
 *
 * elementMeta.storeBindings = new Set([() => console.log("Cleanup store")]);
 * ```
 */
export type ElementMeta = {
  /** Event listeners attached to the element */
  listeners?: Record<string, EventListener>;
  /** Custom triggers for element-specific actions */
  triggers?: Triggers;
  /** Flag indicating if the element is mounted in the DOM */
  mounted?: boolean;
  /** Set of store binding cleanup functions */
  storeBindings?: Set<() => void>;
};
