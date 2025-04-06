import { addEvent, createStore, decorate, addChild } from "@forest-js/core";
import Button from "../../../../shared/ui/Button";

const CountButton = () => {
  const count = createStore(0);

  const CountButtonDef = Button();

  return decorate(
    CountButtonDef,
    addChild({ count }, ({ count }) => count),
    addEvent("click", () => count.update((n) => n + 1))
  );
};

export default CountButton;
