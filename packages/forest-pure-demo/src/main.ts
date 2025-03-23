import { createApp, dom } from "@forest-js/core";
import Button from "./components/Button";

createApp("#app", () => {
  return dom("div", {
    children: [
      Button(),
      Button(),
      Button(),
      Button(),
      Button(),
      Button(),
      dom("article", {
        children: dom("div", {
          children: dom("a", {
            children: "hello world",
            href: "https://www.google.com",
          }),
        }),
      }),
    ],
  });
});
