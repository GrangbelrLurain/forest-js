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
- 🧱 Tiny reactive `store()` built-in
- 🌐 SSR-friendly (with flexibility)
- 🧰 Framework-free & zero dependency

---

## 🚀 Getting Started

```bash
npx create-forest my-app
cd my-app
pnpm install
pnpm dev
