import { dom, DomNode } from "@forest-js/core";

const Box = ({ children }: { children: DomNode }) => {
  return dom("div", { children });
};

export default Box;
