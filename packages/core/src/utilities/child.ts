import { Child, StoreMap, TreeNode, UtilityProps } from "@core/types";
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

// head 요소 핸들링을 위한 함수 수정
const handleHeadElement = (child: Node): boolean => {
  if (!(child instanceof Element)) return false;

  // 개별 head 내부 요소 처리 (기존 로직과 동일)
  if (child.tagName === "TITLE") {
    const existing = document.head.querySelector("title");
    if (existing) {
      document.head.replaceChild(child, existing);
    } else {
      document.head.appendChild(child);
    }
    return true;
  } else if (child.tagName === "META") {
    const name = child.getAttribute("name");
    const property = child.getAttribute("property");
    const httpEquiv = child.getAttribute("http-equiv");

    let selector = "";
    if (name) selector = `meta[name="${name}"]`;
    else if (property) selector = `meta[property="${property}"]`;
    else if (httpEquiv) selector = `meta[http-equiv="${httpEquiv}"]`;

    if (selector) {
      const existing = document.head.querySelector(selector);
      if (existing) {
        document.head.replaceChild(child, existing);
        return true;
      }
    }
    // 일치하는 메타 태그가 없으면 추가
    document.head.appendChild(child);
    return true;
  } else if (child.tagName === "LINK") {
    const rel = child.getAttribute("rel");
    const href = child.getAttribute("href");

    if (rel && href) {
      const selector = `link[rel="${rel}"][href="${href}"]`;
      const existing = document.head.querySelector(selector);
      if (existing) {
        document.head.replaceChild(child, existing);
        return true;
      }
    }
    // 일치하는 링크 태그가 없으면 추가
    document.head.appendChild(child);
    return true;
  } else if (child.tagName === "STYLE" || child.tagName === "SCRIPT") {
    const id = child.getAttribute("id");
    if (id) {
      const selector = `${child.tagName.toLowerCase()}#${id}`;
      const existing = document.head.querySelector(selector);
      if (existing) {
        document.head.replaceChild(child, existing);
        return true;
      }
    } else if (child.tagName === "SCRIPT") {
      const src = child.getAttribute("src");
      if (src) {
        const selector = `script[src="${src}"]`;
        const existing = document.head.querySelector(selector);
        if (existing) {
          document.head.replaceChild(child, existing);
          return true;
        }
      }
    }
    // 일치하는 태그가 없으면 추가
    document.head.appendChild(child);
    return true;
  }

  // 다른 모든 head 요소는 그냥 추가
  document.head.appendChild(child);
  return true;
};

// 노드 처리 로직 개선
const appendNodes = (el: HTMLElement, nodes: Node[], placeholder?: Node) => {
  // head 요소 특별 처리
  if (el.tagName === "HEAD" || el === document.head) {
    nodes.forEach((child) => handleHeadElement(child));
    if (placeholder && placeholder.parentNode === el) {
      el.removeChild(placeholder);
    }
  } else {
    if (placeholder && placeholder.parentNode === el) {
      // placeholder 대체 로직 유지
      el.insertBefore(nodes[0], placeholder);
      el.removeChild(placeholder);
      nodes.slice(1).forEach((node) => el.appendChild(node));
    } else {
      // 일반 요소 처리 로직 개선
      const oldChildren = Array.from(el.childNodes);
      if (oldChildren.length > 0 && !isSameNode(oldChildren, nodes)) {
        el.replaceChildren(...nodes);
      } else if (oldChildren.length === 0) {
        nodes.filter((node) => !(node instanceof HTMLHeadElement)).forEach((node) => el.appendChild(node));
      }
    }
  }
};

/**
 * @function addChild
 * @description Utility for adding children to an element
 * @template E Element type
 * @template R Child content to add (can be promise or dynamic import)
 * @template S StoreMap type when used reactively
 * @param args - Child content or store and mapper function
 * @returns Utility function for adding children
 * @example
 * ```ts
 * addChild("Hello")(MyElement);
 * // if you want to add head in your app, you can do this:
 * addChild([...someHead's children])(tree("head"));
 * ```
 */
export const addChild = <E extends HTMLElement, R extends Child | Promise<Child> | Promise<{ default: Child }>, S extends StoreMap = StoreMap>(...args: UtilityProps<R, S>) => {
  return (el: E): E => {
    if (args.length === 2 && typeof args[1] === "function") {
      const [stores, mapper] = args as [S, (values: S) => R | Promise<R>];
      const placeholder = document.createTextNode(""); // 로딩 중 placeholder
      el.appendChild(placeholder);

      const apply = async () => {
        const values: Record<string, any> = {};
        for (const key in stores) values[key] = stores[key].get();

        try {
          const result = mapper(values as S);

          const processedResult = result instanceof Promise ? processPromiseResult(await result) : (result as Child);

          const children = flatten(processedResult);
          appendNodes(el, children, placeholder);
        } catch (error) {
          console.error("Error loading dynamic component:", error);
        }
      };

      apply();

      // 스토어 구독
      const unsubs = Object.values(stores).map((store) => store.subscribe(() => enqueue(apply)));

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
            appendNodes(el, nodes, placeholder);
          })
          .catch((error) => {
            console.error("Error loading dynamic children:", error);
          });
      } else {
        // 일반 동기 처리
        const nodes = flatten(children);
        appendNodes(el, nodes);
      }
    }

    return el;
  };
};
