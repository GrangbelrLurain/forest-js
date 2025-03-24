import { createApp, createStore, dom, update } from "@forest-js/core";
import Button from "./components/Button";

document.head.appendChild(
  dom("style", {
    children: `
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
  })
);

const sectionRotate = createStore({ x: 0, y: 0 });

const BackgroundImage = dom("div", {
  style: {
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
    transform: "scale(1.25)",
    transition: "transform 0.1s ease-in-out",
  },
});

sectionRotate.subscribe(() => {
  update(BackgroundImage, {
    style: {
      transform: `rotateY(${sectionRotate.get().x}deg) rotateX(${
        sectionRotate.get().y
      }deg) scale(${
        1.25 *
        (1 +
          (Math.abs(sectionRotate.get().x) + Math.abs(sectionRotate.get().y)) /
            100)
      })`,
      filter: `blur(${
        (Math.abs(sectionRotate.get().x) + Math.abs(sectionRotate.get().y)) / 10
      }px)`,
      transition: "transform 0.1s ease-out",
    },
  });
});

const CodeCard = dom("div", {
  style: {
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
  },
  children: [
    dom("pre", {
      style: {
        margin: "0",
        whiteSpace: "pre-wrap",
        userSelect: "text",
      },
      children: `import { dom, createStore, update } from "@forest-js/core";

const count = createStore(0);

const Button = dom("button", {
  children: count.get(),
  onclick: () => count.update((n) => n + 1),
});

count.subscribe(() => {
  update(Button, {
    children: count.get(),
  });
});

export default Button`,
    }),

    // 작은 badge (숫자)
    Button,

    // 복사 버튼 (아이콘은 텍스트로 대체 가능)
    dom("button", {
      innerText: "📋",
      onclick: () => {
        navigator.clipboard.writeText(
          `import { create } from 'zustand'\n\nconst useStore = create()((set) => ({\n  count: 1,\n  inc: () => set((state) => ({ count: state.count + 1 }))\n}))`
        );
        alert("Copied!");
      },
      style: {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        backgroundColor: "transparent",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "18px",
      },
    }),
  ],
});

createApp("#app", () => {
  return dom("section", {
    onmousemove: (e) => {
      sectionRotate.update(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        return {
          x: (e.clientX - width / 2) / 150,
          y: -(e.clientY - height / 2) / 150,
        };
      });
    },
    style: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      perspective: "2000px",
      perspectiveOrigin: "center",
      transformStyle: "preserve-3d",
      transformBox: "fill-box",
    },
    children: [
      BackgroundImage,
      dom("header", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
          alignItems: "center",
        },
        children: [
          dom("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "20px",
            },
            children: [
              dom("img", {
                src: "logo.svg",
                style: {
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                },
              }),
              dom("h1", {
                children: "Forest.js".toUpperCase(),
                style: {
                  margin: "0",
                  textAlign: "left",
                  color: "white",
                  fontSize: "40px",
                  lineHeight: "30px",
                },
              }),
            ],
          }),
        ],
      }),
      dom("div", {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        children: [CodeCard],
      }),
    ],
  });
});
