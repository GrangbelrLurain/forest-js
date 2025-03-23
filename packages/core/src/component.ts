import { Store, Component, DomNode, ComponentProps } from "./types";

export function component<P extends ComponentProps<P>>(render: Component<P>) {
  return (props: P): DomNode => {
    let el = render(props);

    const update = () => {
      const next = render(props);
      el.replaceWith(next);
      el = next;
    };

    // Store만 구독
    for (const key in props) {
      const value = props[key];
      if (isStore(value)) {
        value.subscribe(update);
      }
    }

    return el;
  };
}

function isStore<T = any>(value: any): value is Store<T> {
  return (
    value &&
    typeof value.get === "function" &&
    typeof value.subscribe === "function" &&
    typeof value.set === "function" &&
    typeof value.update === "function"
  );
}
