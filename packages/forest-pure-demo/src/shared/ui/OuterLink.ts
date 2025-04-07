import { addChild } from "@forest-js/core/dist/core";

import { decorate, tree } from "@forest-js/core/dist/core";

import { TreeNode } from "@forest-js/core/dist/core";

import { addAttribute } from "@forest-js/core/dist/core";

const OuterLink = ({ href, children }: { href: string; children: TreeNode }) => {
  return decorate(tree("a"), addAttribute({ href }), addChild(children));
};

export default OuterLink;
