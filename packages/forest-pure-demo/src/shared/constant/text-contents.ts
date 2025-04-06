export const TEXT_CONTENTS = {
  SAMPLE_CODE: `import {
  createStore,
  addEvent,
  decorate,
  tree,
  addChild,
} from "@forest-js/core";


const CountButton = () => {
  const count = createStore(0);

  const ButtonRef = tree("button");

  return decorate(
    ButtonRef,
    addChild({ count }, ({ count }) => count),
    addEvent("click", () => count.update((n) => n + 1))
  );
}

export default CountButton;
`,
};
