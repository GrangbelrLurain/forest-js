import { addStyle, decorate, Store, tree } from "@forest-js/core";

const BackgroundImage = ({
  sectionRotate,
}: {
  sectionRotate: Store<{ x: number; y: number }>;
}) =>
  decorate(
    tree("div"),
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
        1.25 *
        (1 + (Math.abs(sectionRotate.x) + Math.abs(sectionRotate.y)) / 100)
      })`,
      filter: `blur(${
        (Math.abs(sectionRotate.x) + Math.abs(sectionRotate.y)) / 10
      }px)`,
      transition: "transform 0.1s ease-out",
    }))
  );

export default BackgroundImage;
