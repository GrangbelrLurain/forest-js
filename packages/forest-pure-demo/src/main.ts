import {
  addAttribute,
  createForest,
  createStore,
  tree,
  decorate,
  addStyle,
  addChild,
  addEvent,
} from "@forest-js/core";
import CodeCard from "./components/CodeCard";

const globalStyle = tree("style");

decorate(
  globalStyle,
  addChild([
    `
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
    html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
    #app {
      width: 100%;
      height: 100%;
    }
  `,
  ])
);

document.head.appendChild(globalStyle);

const sectionRotate = createStore({ x: 0, y: 0 });

const BackgroundImage = tree("div");
decorate(
  BackgroundImage,
  addStyle({ sectionRotate }, ({ sectionRotate }) => ({
    width: "100%",
    height: "100%",
    backgroundImage: "url(./forest_background_web_4k.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-10",
    transform: `rotateY(${sectionRotate.x}deg) rotateX(${
      sectionRotate.y
    }deg) scale(${
      1.25 * (1 + (Math.abs(sectionRotate.x) + Math.abs(sectionRotate.y)) / 100)
    })`,
    filter: `blur(${
      (Math.abs(sectionRotate.x) + Math.abs(sectionRotate.y)) / 10
    }px)`,
    transition: "transform 0.1s ease-out",
  }))
);

const App = tree("section");

decorate(
  App,
  addEvent("mousemove", (e) => {
    sectionRotate.update(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      return {
        x: (e.clientX - width / 2) / 150,
        y: -(e.clientY - height / 2) / 150,
      };
    });
  }),
  addStyle({
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    perspective: "2000px",
    perspectiveOrigin: "center",
    transformStyle: "preserve-3d",
    transformBox: "fill-box",
  }),
  addChild([
    BackgroundImage,
    decorate(
      tree("header"),
      addStyle({
        display: "flex",
        justifyContent: "space-between",
        padding: "40px",
        alignItems: "center",
      }),
      addChild([
        decorate(
          tree("div"),
          addStyle({
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }),
          addChild([
            decorate(
              tree("img"),
              addAttribute({
                src: "logo.svg",
              }),
              addStyle({
                width: "60px",
                height: "60px",
                borderRadius: "10px",
              })
            ),
            decorate(
              tree("h1"),
              addChild("Forest.js".toUpperCase()),
              addStyle({
                margin: "0",
                textAlign: "left",
                color: "white",
                fontSize: "40px",
                lineHeight: "30px",
              })
            ),
          ])
        ),
      ])
    ),
    decorate(
      tree("div"),
      addStyle({
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }),
      addChild([CodeCard()])
    ),
  ])
);

createForest("#app", () => App);
