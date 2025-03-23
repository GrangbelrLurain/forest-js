import { createStore, dom } from "@dom/core/src";

const sharedCount = createStore(0);

const Button = () => {
  const count = createStore(0);

  const button = dom("button", {
    children: `Click me`,
    onclick: () => {
      count.update((prev) => prev + 1);
      sharedCount.update((prev) => prev + 1);
    },
  });

  const update = () => {
    const value = count.get();

    button.update({ children: `Click me ${value} ${sharedCount.get()}` });
    if (value > 3) {
      button.update({ style: { color: "red" } });
    } else if (value > 0) {
      button.update({ style: { backgroundColor: "blue" } });
    }
  };

  sharedCount.subscribe(update);

  return button;
};

export default Button;
