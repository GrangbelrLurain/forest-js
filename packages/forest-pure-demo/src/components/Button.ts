import { component, createStore, dom, Store } from "@forest-js/core";

const sharedCount = createStore(0);

const Button = () => {
  const count = createStore(0);

  interface ButtonProps {
    count: Store<number>;
    sharedCount: Store<number>;
  }

  const RawButton = component<ButtonProps>(({ count, sharedCount }) => {
    const button = dom("button", {
      children: `click me ${count.get()} ${sharedCount.get()}`,
      style: {
        color: count.get() > 3 ? "red" : "white",
        backgroundColor: count.get() > 0 ? "blue" : "white",
      },
      onclick: () => {
        count.update((prev) => prev + 1);
        sharedCount.update((prev) => prev + 1);
      },
    });

    return button;
  });

  return RawButton({ count, sharedCount });
};

export default Button;
