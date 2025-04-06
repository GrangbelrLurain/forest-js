import {
  addAttribute,
  addChild,
  addStyle,
  decorate,
  tree,
} from "@forest-js/core";
import LinkButton from "../../../../shared/ui/LinkButton";
const Header = () => {
  console.log("Header is not Rerender only once");
  return decorate(
    tree("header"),
    addStyle({
      position: "fixed",
      pointerEvents: "none",
      top: "0",
      left: "0",
      width: "100vw",
      zIndex: "100",
      display: "flex",
      boxSizing: "border-box",
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
      decorate(
        tree("div"),
        addStyle({
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }),
        addChild([
          LinkButton({ href: "/", children: "Home" }),
          LinkButton({ href: "/about", children: "About" }),
        ])
      ),
    ])
  );
};

export default Header;
