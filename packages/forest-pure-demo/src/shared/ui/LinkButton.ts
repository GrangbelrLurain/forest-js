import { addChild, addEvent, addStyle, createStore, TreeNode } from "@forest-js/core/dist/core";

import { decorate } from "@forest-js/core/dist/core";

import { tree } from "@forest-js/core/dist/core";
import { router } from "../lib/router";

const LinkButton = ({ href, children }: { href: string; children: TreeNode }) => {
  const isHover = createStore(false);
  return decorate(
    tree("a"),
    addStyle({
      color: "white",
      borderRadius: "20px",
      cursor: "pointer",
      pointerEvents: "auto",
    }),
    addEvent("click", () => {
      router.push(href, {});
    }),
    addEvent("mouseenter", () => {
      isHover.update(() => true);
    }),
    addEvent("mouseleave", () => {
      isHover.update(() => false);
    }),
    addStyle({ isHover }, ({ isHover }) => {
      return {
        color: isHover ? "#77ee69" : "white",
      };
    }),
    addChild(children)
  );
};

export default LinkButton;
