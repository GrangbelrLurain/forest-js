import { createStore, dom } from "@dom/core/src";

const sharedCount = createStore(0);

const Button = () => {
  const count = createStore(0);

  const button = dom("button", {
    children: `Click me`,
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
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
      button.update({
        className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
      });
    }
  };

  sharedCount.subscribe(update);

  return button;
};

export default Button;
