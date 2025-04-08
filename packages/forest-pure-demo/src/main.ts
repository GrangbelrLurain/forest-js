import { createForest, tree } from "@forest-js/core/forest";
import { decorate, addChild, addStyle, addEvent } from "@forest-js/core/utilities";
import { routerStore } from "./shared/lib/router";
import "./app/global.css";
import Header from "./entities/layout/ui/Header.ts/index.ts";
import BackgroundImage from "./entities/layout/ui/BackgroundImage/index.ts";
import { createStore } from "@forest-js/core/store";

const main = decorate(
  tree("main"),
  addStyle({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })
);

const sectionRotate = createStore({ x: 0, y: 0 });

createForest((body) => {
  return decorate(
    body,
    addChild([
      Header(),
      decorate(
        tree("div"),
        addStyle({
          width: "100vw",
          padding: "50px",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          perspective: "2000px",
          perspectiveOrigin: "center",
          transformStyle: "preserve-3d",
          transformBox: "fill-box",
          boxSizing: "border-box",
        }),
        addChild([
          BackgroundImage({ sectionRotate }),
          decorate(
            main,
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
          ),
        ]),
        addEvent("mousemove", (e) => {
          sectionRotate.update(() => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            return {
              x: (e.clientX - width / 2) / 150,
              y: -(e.clientY - height / 2) / 150,
            };
          });
        })
      ),
    ])
  );
});
