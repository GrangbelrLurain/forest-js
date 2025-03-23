import { createStore, dom, component, Store } from "@forest-js/core";

const sharedCount = createStore(0);

const Button = () => {
  const count = createStore(0);

  interface ButtonProps {
    count: Store<number>;
    sharedCount: Store<number>;
  }

  const RawButton = component<ButtonProps>(({ count, sharedCount }) => {
    const button = dom("button", {
      children: `Click me ${count.get()} ${sharedCount.get()}`,
      className:
        count.get() > 3
          ? "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
      onclick: () => {
        count.set(count.get() + 1);
        sharedCount.set(sharedCount.get() + 1);
      },
    });

    return button;
  });

  return RawButton({ count, sharedCount });
};

export default Button;
