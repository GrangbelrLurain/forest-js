import { ChildUtility, StoreMap, TreeNode, UtilityProps } from "@core/types";
import { enqueue, ensureMeta } from "@core/dom";

const toNode = (node: TreeNode): Node => {
  if (typeof node === "string" || typeof node === "number") {
    return document.createTextNode(String(node));
  }
  if (node === null || node === undefined) {
    return document.createTextNode("");
  }
  return node;
};

const flatten = (nodes: TreeNode | TreeNode[]): Node[] => {
  console.log(nodes);
  if (Array.isArray(nodes)) {
    return Array.from(nodes).flatMap((node) => {
      if (Array.isArray(node)) return flatten(node);
      if (node instanceof Node) return node;
      return toNode(node);
    });
  }
  return [toNode(nodes)];
};

const isSameNode = (a: Node[], b: Node[]) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
export const addChild: ChildUtility = <E extends HTMLElement, R extends TreeNode | TreeNode[], S extends StoreMap = StoreMap>(...args: UtilityProps<R, S>) => {
  return (el: E) => {
    if (args.length === 2 && typeof args[1] === "function") {
      const [stores, mapper] = args as [S, (values: S) => R];
      const apply = () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();

        const newChildren = flatten(mapper(values as S));

        if (el.childNodes.length === 0) {
          newChildren.forEach((child) => el.appendChild(child));
        } else if (!isSameNode(Array.from(el.childNodes), newChildren)) {
          el.replaceChildren(...newChildren);
        }
      };

      apply();

      const unsubs = Object.values(stores).map((store) => store.subscribe(() => enqueue(apply)));

      const meta = ensureMeta(el);
      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else {
      const [children] = args as [R];
      flatten(children).forEach((child) => el.appendChild(child));
    }

    return el;
  };
};
