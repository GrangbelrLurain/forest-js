import { tree, decorate, addStyle } from "@forest-js/core";

const Card = () => {
  const CardDef = tree("div");

  decorate(
    CardDef,
    addStyle({
      position: "relative",
      width: "max-content",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      fontFamily: "monospace",
      fontSize: "14px",
      lineHeight: "1.6",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      overflow: "hidden",
    })
  );

  return CardDef;
};

export default Card;
