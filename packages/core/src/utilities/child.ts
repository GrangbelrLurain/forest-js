import {
  Child,
  ChildUtility,
  StoreMap,
  TreeNode,
  UtilityProps,
} from "@core/types";
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

const processPromiseResult = <R extends Child>(result: R | { default: R }) => {
  if (result && typeof result === "object" && "default" in result) {
    return result.default;
  }
  return result as R;
};

export const addChild: ChildUtility = <
  E extends HTMLElement,
  R extends Child | Promise<Child> | Promise<{ default: Child }>,
  S extends StoreMap = StoreMap
>(
  ...args: UtilityProps<R, S>
) => {
  return (el: E) => {
    if (args.length === 2 && typeof args[1] === "function") {
      const [stores, mapper] = args as [S, (values: S) => R | Promise<R>];
      const placeholder = document.createTextNode(""); // 로딩 중 placeholder
      el.appendChild(placeholder);

      const apply = async () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();

        try {
          const result = mapper(values as S);

          const processedResult =
            result instanceof Promise
              ? processPromiseResult(await result)
              : (result as Child);

          const children = flatten(processedResult);

          if (placeholder.parentNode === el) {
            // placeholder 대체
            el.insertBefore(children[0], placeholder);
            el.removeChild(placeholder);
            children.slice(1).forEach((child) => el.appendChild(child));
          } else {
            // 이미 요소가 존재하면 업데이트
            const oldChildren = Array.from(el.childNodes);
            if (!isSameNode(oldChildren, children)) {
              el.replaceChildren(...children);
            }
          }
        } catch (error) {
          console.error("Error loading dynamic component:", error);
        }
      };

      apply();

      // 스토어 구독
      const unsubs = Object.values(stores).map((store) =>
        store.subscribe(() => enqueue(apply))
      );

      const meta = ensureMeta(el);
      meta.storeBindings ??= new Set();
      unsubs.forEach((unsub) => meta.storeBindings!.add(unsub));
    } else {
      const [children] = args as [R];

      if (children instanceof Promise) {
        const placeholder = document.createTextNode("");
        el.appendChild(placeholder);

        children
          .then(async (result) => {
            const processedResult = processPromiseResult(result);
            const nodes = flatten(processedResult);

            if (placeholder.parentNode === el) {
              el.insertBefore(nodes[0], placeholder);
              el.removeChild(placeholder);
              nodes.slice(1).forEach((node) => el.appendChild(node));
            }
          })
          .catch((error) => {
            console.error("Error loading dynamic children:", error);
          });
      } else {
        // 일반 동기 처리 (기존 코드)
        flatten(children).forEach((child) => el.appendChild(child));
      }
    }

    return el;
  };
};
