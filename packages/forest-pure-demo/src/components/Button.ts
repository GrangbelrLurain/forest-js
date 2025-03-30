import {
  createStore,
  addEvent,
  addStyle,
  tree,
  addChild,
  use,
} from "@forest-js/core";

const CountButton = () => {
  const count = createStore(0);

  const ButtonDef = use(
    addChild({ count }, ({ count }) => count),
    addStyle({
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#77ee69",
      color: "#01362d",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "4px 10px",
      borderRadius: "6px",
      border: "3px solid #01362d",
      cursor: "pointer",
    }),
    addEvent("click", () => count.update((n) => n + 1))
  );

  return ButtonDef(tree("button"));
};

export default CountButton;
