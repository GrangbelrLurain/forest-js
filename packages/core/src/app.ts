// core/createApp.ts
let appInitialized = false;

export function createApp(rootSelector: string, render: () => HTMLElement) {
  if (appInitialized) {
    console.error(
      "❌ createApp() was called multiple times. Only one app instance is supported."
    );
    return;
  }
  appInitialized = true;

  const root = document.querySelector(rootSelector);
  if (!root) throw new Error(`Root element "${rootSelector}" not found`);
  root.appendChild(render());
}
