import { tree } from "@forest-js/core/forest";
import { addStyle, use } from "@forest-js/core/utilities";

const Button = () => {
  const ButtonDef = use<HTMLButtonElement>(
    addStyle({
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#77ee69",
      color: "#01362d",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "4px 10px",
      borderRadius: "6px",
      border: "3px solid #01362d",
      cursor: "pointer",
    })
  );

  return ButtonDef(tree("button"));
};

export default Button;
