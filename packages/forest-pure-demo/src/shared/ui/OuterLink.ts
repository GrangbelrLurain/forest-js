import { addChild } from "@forest-js/core/utilities";

import { decorate } from "@forest-js/core/utilities";

import { tree } from "@forest-js/core/forest";

import { TreeNode } from "@forest-js/core/types";

import { addAttribute } from "@forest-js/core/utilities";

const OuterLink = ({ href, children }: { href: string; children: TreeNode }) => {
  return decorate(tree("a"), addAttribute({ href }), addChild(children));
};

export default OuterLink;
