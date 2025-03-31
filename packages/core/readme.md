# 🌲 forest-js

A tiny, real DOM-based UI engine written in pure JavaScript — minimal, fast, and framework-free.

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
import { dom, createStore, update } from "@forest-js/core";

const count = createStore(0);

const button = dom("button", {
  children: `Click me ${count.get()}`,
  onclick: () => count.update((n) => n + 1),
});

count.subscribe(() => {
  update(button, {
    children: `Click me ${count.get()}`,
  });
});

document.body.appendChild(button);
```

---

## 🌳 Core API

### `createForest()`

Initializes the application by rendering the root element.

```ts
createForest("#app", () => dom("div", { children: "Hello, Forest!" }));
```

### `tree()`

Creates a single DOM element without attributes.

```ts
const div = tree("div");
document.body.appendChild(div);
```

### `createStore()`

Creates a reactive store for state management.

```ts
const counter = createStore(0);
counter.subscribe(() => console.log(counter.get()));
counter.set(5);
```

### Utility Patterns

Forest.js encourages the use of utility functions instead of traditional components.

#### `createUtility()`

Creates a higher-order function for applying behaviors to elements.

```ts
const addColor = createUtility((el) => {
  el.style.color = "red";
  return el;
});

const redText = addColor(dom("p", { children: "This is red text" }));
document.body.appendChild(redText);
```

#### `addStyle()`

Applies inline CSS styles.

```ts
const styledDiv = addStyle({ backgroundColor: "lightblue" })(dom("div"));
document.body.appendChild(styledDiv);
```

#### `addAttribute()`

Sets element attributes.

```ts
const link = addAttribute({ href: "https://forest-js.dev" })(dom("a", { children: "Forest.js" }));
document.body.appendChild(link);
```

#### `addEvent()`

Attaches event listeners.

```ts
const button = addEvent("click", () => alert("Clicked!"))(dom("button", { children: "Click me" }));
document.body.appendChild(button);
```

#### `addChild()`

Appends children to an element.

```ts
const container = addChild([dom("p", { children: "Child 1" }), dom("p", { children: "Child 2" })])(dom("div"));
document.body.appendChild(container);
```

#### `addTrigger()`

Defines custom triggers for reactive actions.

```ts
const trigger = addTrigger({ showAlert: () => alert("Triggered!") })(dom("button", { children: "Trigger" }));
getTrigger(trigger).showAlert();
```

#### `addClear()`

Clears bindings when certain conditions are met.

```ts
addClear(counter, (value) => value > 10)(dom("div"));
```

---

## 📁 Template Project

Default template is based on **pure JavaScript**, using Vite:

```
src/
├── main.ts
├── App.ts
└── components/
    └── Button.ts
```

---

## 📦 Publishing

| CLI Tool             | Command                                 |
| -------------------- | --------------------------------------- |
| Publish CLI package  | `pnpm --filter @forest-js/cli publish`  |
| Publish Core package | `pnpm --filter @forest-js/core publish` |
| Release Installer    | `npm publish` from `create-forest`      |

---

## 📖 Philosophy

> forest-js is not a framework —  
> it’s a small set of rules to control the real DOM in a structured way.

- Declarative thinking without hiding the DOM
- Tiny enough to debug by reading the source
- Encourages learning and composable UI patterns

---

## 📄 License

MIT © [lurain grangbelr](https://github.com/lurainGrangbelr)
