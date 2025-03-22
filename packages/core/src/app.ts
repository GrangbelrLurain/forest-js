// core/createApp.ts
export function createApp(rootSelector: string, render: () => HTMLElement) {
  const root = document.querySelector(rootSelector);
  if (!root) throw new Error(`Root element "${rootSelector}" not found`);
  root.appendChild(render());
}
