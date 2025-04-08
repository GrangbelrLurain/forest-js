import { ForestAppProps } from "@core/types/dom";

let appInitialized = false;

/**
 * @function createForest
 * @description Create a Forest app
 * @param props - Forest app props
 * @template T - Type of the root element
 * @param {T} props - The DOM element to be decorated.
 * @returns {T} The decorated DOM element.
 * @example
 * ```ts
 * const { routerStore } = createRouter();
 *
 * const app = createForest((body) => addChild({ routerStore }, ({ routerStore }) => {
 *   if (routerStore?.path === "/") {
 *     return import("./pages/home");
 *   }
 *   if (routerStore?.path === "/about") {
 *     return import("./pages/about");
 *   }
 *   if (routerStore?.path === "/404") {
 *     return import("./pages/404");
 *   }
 *   return import("./pages/404");
 * })(body));
 * ```
 */
export function createForest<T extends HTMLElement>(...props: ForestAppProps<T>): T | HTMLHtmlElement | null {
  if (appInitialized) {
    console.error("❌ createApp() was called multiple times. Only one app instance is supported.");
    return null;
  }
  appInitialized = true;

  const [first, second] = props;

  if (typeof second !== "undefined" && typeof first !== "function") {
    const root = typeof first === "string" ? document.querySelector(first) : first;
    if (!root) throw new Error(`Root element "${first}" not found`);

    const main = second(root as T);
    root.appendChild(main);
    return root as T;
  }
  if (typeof first === "function") {
    const html = document.documentElement;
    const head = document.head || document.createElement("head");
    const body = document.body || document.createElement("body");

    first(body as HTMLBodyElement);
    if (!document.head) {
      html.appendChild(head);
    }
    if (!document.body) {
      html.appendChild(body);
    }
    return html as HTMLHtmlElement;
  }

  return null;
}
