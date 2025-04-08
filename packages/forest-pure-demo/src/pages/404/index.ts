import { addChild, decorate, addStyle } from "@forest-js/core/utilities";
import { tree } from "@forest-js/core/forest";

const Text = ({ text, fontSize }: { text: string; fontSize: string }) => {
  return decorate(
    tree("p"),
    addStyle({
      fontSize: fontSize,
      padding: "0px",
      margin: "0px",
      fontWeight: "900",
      color: "#282828",
    }),
    addChild(text)
  );
};

const NotFound = decorate(
  tree("main"),
  addStyle({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  addChild([Text({ text: "404", fontSize: "80px" }), Text({ text: "Not Found Page🙄", fontSize: "20px" })])
);

export default NotFound;
