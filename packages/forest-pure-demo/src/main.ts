import { createForest, decorate, tree, addChild } from "@forest-js/core";
import { routerStore } from "./app/router";

const app = createForest("#app", () =>
  decorate(
    tree("div"),
    addChild({ routerStore }, ({ routerStore }) => {
      if (routerStore?.path === "/") {
        return import("./pages/home");
      }
      if (routerStore?.path === "/about") {
        return import("./pages/about");
      }
      if (routerStore?.path === "/404") {
        return import("./pages/404");
      }
      return import("./pages/404");
    })
  )
);

export default app;
