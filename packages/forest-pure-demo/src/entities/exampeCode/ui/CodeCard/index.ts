import { addEvent } from "@forest-js/core/dist/core";

import { addStyle } from "@forest-js/core/dist/core";

import { addChild, decorate, tree } from "@forest-js/core/dist/core";
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
