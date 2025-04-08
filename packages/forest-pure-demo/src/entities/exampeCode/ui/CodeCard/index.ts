import { addChild, decorate, addEvent, addStyle } from "@forest-js/core/utilities";
import { tree } from "@forest-js/core/forest";

import CONSTANTS from "../../../../shared/constant";
import Card from "../../../../shared/ui/Card";
import CountButton from "../CountButton";

const CodeCard = () => {
  return decorate(
    Card(),
    addChild([
      decorate(
        tree("pre"),
        addStyle({
          margin: "0",
          whiteSpace: "pre-wrap",
          userSelect: "text",
        }),
        addChild([CONSTANTS.TEXT_CONTENTS.SAMPLE_CODE])
      ),
      CountButton(),
      decorate(
        tree("button"),
        addChild("📋"),
        addEvent("click", () => {
          navigator.clipboard.writeText(CONSTANTS.TEXT_CONTENTS.SAMPLE_CODE);
          alert("Copied!");
        }),
        addStyle({
          position: "absolute",
          bottom: "10px",
          right: "10px",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
        })
      ),
    ])
  );
};

export default CodeCard;
