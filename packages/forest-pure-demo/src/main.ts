import { createForest, decorate, tree, addChild } from "@forest-js/core";
import { route } from "./app/router";

import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/404";

const app = createForest("#app", () =>
  decorate(
    tree("div"),
    addChild([
      route({
        path: "/",
        component: (status) => {
          console.log(status);
          return status === "success" ? Home : null;
        },
      }),
      route({ path: "/about", component: (status) => (status === "success" ? About : null) }),
      route({ path: "/404", component: (status) => (status === "success" ? NotFound : null) }),
    ])
  )
);

export default app;
