import { ForestAppProps } from "@core/types/dom";

let appInitialized = false;

export function createForest<T extends HTMLElement>(...props: ForestAppProps<T>) {
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
    return root;
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
    return html;
  }

  return null;
}
