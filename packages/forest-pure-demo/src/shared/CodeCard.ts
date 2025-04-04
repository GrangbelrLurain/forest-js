import { tree, decorate, addStyle, addChild, addEvent } from "@forest-js/core";
import CountButton from "./Button";

const CodeCard = () => {
  const Card = tree("div");

  decorate(
    Card,
    addStyle({
      position: "relative",
      width: "max-content",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      fontFamily: "monospace",
      fontSize: "14px",
      lineHeight: "1.6",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      overflow: "hidden",
    }),
    addChild([
      decorate(
        tree("pre"),
        addStyle({
          margin: "0",
          whiteSpace: "pre-wrap",
          userSelect: "text",
        }),
        addChild([
          `import {
  createStore,
  addEvent,
  decorate,
  tree,
  addChild,
} from "@forest-js/core";

const count = createStore(0);

const Button = tree("button");

decorate(
  Button,
  addChild({ count }, ({ count }) => count),
  addEvent("click", () => count.update((n) => n + 1))
);

export default Button;
`,
        ])
      ),
      CountButton(),
      decorate(
        tree("button"),
        addChild("📋"),
        addEvent("click", () => {
          navigator.clipboard.writeText(
            `import {
  createStore,
  addEvent,
  decorate,
  tree,
  addChild,
} from "@forest-js/core";

const count = createStore(0);

const Button = tree("button");

decorate(
  Button,
  addChild({ count }, ({ count }) => count),
  addEvent("click", () => count.update((n) => n + 1))
);

export default Button;
`
          );
          alert("Copied!");
        }),
        addStyle({
          position: "absolute",
          bottom: "10px",
          right: "10px",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
        })
      ),
    ])
  );

  return Card;
};

export default CodeCard;
