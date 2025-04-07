# 🌲 forest-js

A tiny, real DOM-based UI engine written in pure JavaScript — minimal, fast, and framework-free.

---

## 🌐 Official Links

| Type              | Link                                                                      |
| ----------------- | ------------------------------------------------------------------------- |
| GitHub Repository | [GrangbelrLurain/forest-js](https://github.com/GrangbelrLurain/forest-js) |
| Documentation     | [Forest.js Docs](https://grangbelrlurain.github.io/forest-js/)            |

---

## 📦 Packages

| Package                                                            | Description                                   |
| ------------------------------------------------------------------ | --------------------------------------------- |
| [`@forest-js/core`](https://www.npmjs.com/package/@forest-js/core) | Core DOM engine (no virtual DOM)              |
| [`@forest-js/cli`](https://www.npmjs.com/package/@forest-js/cli)   | Internal CLI logic for scaffolding apps       |
| [`create-forest`](https://www.npmjs.com/package/create-forest)     | Lightweight installer for templates via `npx` |

---

## ✨ Features

- ✅ Real DOM (no VDOM diffing)
- ⚡ Ultra-lightweight (~7kB bundled)
- 🔁 Explicit `update()` per element
- 🧠 Fully JavaScript-based, no JSX, no Babel
- 🛡 Tiny reactive `store()` built-in
- 🌐 SSR-friendly (with flexibility)
- 🧰 Framework-free & zero dependency

---

## 🚀 Getting Started

```bash
npx create-forest my-app
cd my-app
pnpm install
pnpm dev
```

---

## 🧩 Core Example

```ts
import { createStore, addEvent, decorate, tree, addChild } from "@forest-js/core";

const CountButton = () => {
  const count = createStore(0);

  const ButtonRef = tree("button");

  return decorate(
    ButtonRef,
    addChild({ count }, ({ count }) => count),
    addEvent("click", () => count.update((n) => n + 1))
  );
};

export default CountButton;
```

---

## 🌳 Core API

### `createForest()`

Initializes the application by rendering the root element.

```ts
createForest("#app", () => dom("div", { children: "Hello, Forest!" })); // start in target element
```

or

```ts
createForest(() => dom("div", { children: "Hello, Forest!" })); // replace all html
```

### `tree()`

Creates a single DOM element without attributes.

```ts
const div = tree("div"); // create div element example
```

### `createStore()`

Creates a reactive store for state management.

```ts
const counter = createStore(0);
counter.subscribe(() => console.log(counter.get())); // action when counter change
counter.set((last) => last + 5); // count change
```

---

## 📁 Template Project

Default template is based on **pure JavaScript**, using Vite. The project structure follows the Feature-Sliced Design (FSD) architecture methodology:

[Feature-Sliced Design Official Documentation](https://feature-sliced.github.io/documentation/)

```
src/
├── main.ts                      # Application Entry Point
├── app/
│   └── global.css
├── entities/
│   ├── exampeCode/
│   │   └── ui/
│   │       ├── CodeCard/
│   │       │   └── index.ts
│   │       └── CountButton/
│   │           └── index.ts
│   └── layout/
│       └── ui/
│           ├── BackgroundImage/
│           │   └── index.ts
│           └── Header.ts/
│               └── index.ts
├── pages/
│   ├── 404/
│   │   └── index.ts
│   ├── about/
│   │   └── index.ts
│   └── home/
│       └── index.ts
└── shared/
    ├── constant/
    │   ├── index.ts
    │   └── text-contents.ts
    ├── lib/
    │   └── router/
    │       └── index.ts
    └── ui/
        ├── Button.ts
        ├── Card.ts
        ├── LinkButton.ts
        └── OuterLink.ts
```

---

## 📖 Philosophy

> forest-js is not a framework —  
> it's a small set of rules to control the real DOM in a structured way.

- Declarative thinking without hiding the DOM
- Tiny enough to debug by reading the source
- Encourages learning and composable UI patterns

---

## 📄 License

MIT © [lurain grangbelr](https://github.com/lurainGrangbelr)
