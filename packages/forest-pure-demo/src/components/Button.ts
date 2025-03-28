import { dom, createStore, update } from "@forest-js/core";

const count = createStore(0);

const Button = dom("button", {
  children: count.get(),
  style: {
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
  },
  onclick: () => count.update((n) => n + 1),
});

count.subscribe(() => {
  update(Button, {
    children: count.get(),
  });
});

export default Button;
