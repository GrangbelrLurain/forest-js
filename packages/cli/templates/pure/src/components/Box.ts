import { dom } from "@dom/core/src";
import { DomNode } from "@dom/core/src/types";

const Box = ({ children }: { children: DomNode }) => {
  return dom("div", { children });
};

export default Box;
