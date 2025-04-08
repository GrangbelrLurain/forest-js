import { addChild, decorate, addStyle, addAttribute } from "@forest-js/core/utilities";
import { tree } from "@forest-js/core/forest";
import CodeCard from "../../entities/exampeCode/ui/CodeCard";

const Home = decorate(
  tree("div"),
  addStyle({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  addChild([
    decorate(tree("head"), addChild([decorate(tree("title"), addChild(["Forest.js"])), decorate(tree("link"), addAttribute({ rel: "icon", href: "logo.svg" }))])),
    decorate(
      tree("div"),
      addStyle({
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
      }),
      addChild([CodeCard()])
    ),
  ])
);

export default Home;
