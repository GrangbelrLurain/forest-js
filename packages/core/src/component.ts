import { Store, Component, DomNode, ComponentProps } from "./types";

export function component<P extends ComponentProps<P>>(render: Component<P>): (props: P) => HTMLElement {
  return (props: P): HTMLElement => {
    let el = render(props);

    const update = () => {
      const next = render(props);
      el.replaceWith(next);
      el = next;
    };

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
  return value && typeof value.get === "function" && typeof value.subscribe === "function" && typeof value.set === "function" && typeof value.update === "function";
}
