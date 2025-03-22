# DOM Engine

A tiny, declarative-by-design, functionally-inspired DOM engine — built with real DOM, not virtual DOM.

## Features

- **Zero dependencies**
- **No virtual DOM** — direct `document.createElement()`
- **Fully controlled via `dom()` and `createStore()`**
- **Component = Function**
- **Explicit updates** via `el.update()`
- **Reactive store** with subscription
- **Perfect for small, fast, framework-less apps**

---

## Philosophy

> "Everything should be explicit, predictable, and manageable — without magic."

- Small enough to read the whole source
- No compiler, no magic, no hooks, no classes
- Pure JS + clean architecture + full control

---

## Getting Started

### Install (in monorepo with pnpm)

```bash
pnpm install
```

To install TailwindCSS into a demo package:
```bash
pnpm --filter @your-workspace/demo-app add -D tailwindcss @tailwindcss/vite
```

---

## Core Concepts

### `dom(tag, props)`
Creates a real DOM element.
```ts
const el = dom("button", {
  children: "Click me",
  onclick: () => alert("clicked"),
});
```

### `createStore(initial)`
Reactive state container.
```ts
const count = createStore(0);
count.update(n => n + 1);
count.subscribe(() => el.update());
```

---

## Example

```ts
const count = createStore(0);

const Button = () => {
  const button = dom("button", {
    children: () => `Clicked ${count.get()}`,
    onclick: () => count.update(n => n + 1),
  });

  count.subscribe(() => button.update());
  return button;
};

document.body.appendChild(Button());
```

---

## Philosophy (again)

- No reactivity system — just subscriptions
- No virtual DOM — just real elements
- No framework — just functions
- No abstraction — just clarity

> Build your UI the way JavaScript intended.

---

## License
MIT

