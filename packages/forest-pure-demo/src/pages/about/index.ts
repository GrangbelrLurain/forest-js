import {
  tree,
  decorate,
  addChild,
  addStyle,
  addAttribute,
} from "@forest-js/core";
import OuterLink from "../../shared/ui/OuterLink";

const About = decorate(
  tree("main"),
  addStyle({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  }),
  addChild([
    decorate(
      tree("div"),
      addChild([
        decorate(tree("img"), addAttribute({ src: "logo.svg" })),
        decorate(
          tree("p"),
          addChild("Forest.js"),
          addStyle({ fontSize: "20px", margin: "0px" })
        ),
      ])
    ),
    decorate(
      tree("div"),
      addStyle({
        display: "flex",
        gap: "2px",
        flexDirection: "column",
        alignItems: "center",
      }),
      addChild([
        OuterLink({
          href: "https://github.com/GrangbelrLurain/forest-js",
          children: "Github",
        }),
        OuterLink({
          href: "https://github.com/GrangbelrLurain/forest-js/tree/main/packages/docs",
          children: "Docs",
        }),
      ])
    ),
  ])
);

export default About;
