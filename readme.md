# 🌲 forest-js

A tiny, real DOM-based UI engine written in pure JavaScript — minimal, fast, and framework-free.

---

## 📦 Packages

| Package                | Description                       |
|------------------------|-----------------------------------|
| [`@forest-js/core`](https://www.npmjs.com/package/@forest-js/core)         | Core DOM engine (no virtual DOM) |
| [`@forest-js/cli`](https://www.npmjs.com/package/@forest-js/cli)           | Internal CLI logic for scaffolding apps |
| [`create-forest`](https://www.npmjs.com/package/create-forest)             | Lightweight installer for templates via `npx` |

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
  onclick: () => count.update(n => n + 1),
});

count.subscribe(() => {
  update(button, {
    children: `Click me ${count.get()}`,
  });
});

document.body.appendChild(button);
```

---

## 🧱 Component Utility (`component()`)

The `component()` utility allows you to create reactive components that automatically re-render when a `Store` in their props updates.

### ✅ How it works
- Accepts a render function that receives resolved (primitive) props.
- Accepts both normal values and `Store<T>`s.
- Automatically `subscribe()`s to each store in props.
- Replaces the element when store values change.

### 🔧 Example
```ts
import { component, dom, createStore, Store } from "@forest-js/core";

interface ButtonProps {
  count: Store<number>;
}

const Button = component<ButtonProps>(({ count }) => {
  return dom("button", {
    children: `Count: ${count}`,
    onclick: () => count.update((n) => n + 1),
  });
});

const counter = createStore(0);
document.body.appendChild(Button({ count: counter }));
```

This encourages a declarative + reactive style without a virtual DOM.

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

| CLI Tool             | Command                          |
|----------------------|----------------------------------|
| Publish CLI package  | `pnpm --filter @forest-js/cli publish` |
| Publish Core package | `pnpm --filter @forest-js/core publish` |
| Release Installer    | `npm publish` from `create-forest` |

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
