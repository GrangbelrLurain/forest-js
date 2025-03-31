import { Route, RouterConfig } from "./types";

let currentPath = "/";
const listeners = new Set<() => void>();

function matchRoute(routes: Route[], path: string): Route | null {
  return routes.find((route) => new RegExp(`^${route.path}$`).test(path)) || null;
}

export function createRouter({ routes, notFound }: RouterConfig) {
  const navigate = (path: string) => {
    if (path !== currentPath) {
      currentPath = path;
      window.history.pushState({}, "", path);
      listeners.forEach((fn) => fn());
    }
  };

  const getCurrentComponent = (): HTMLElement => {
    const matchedRoute = matchRoute(routes, currentPath);
    if (matchedRoute) return matchedRoute.component();
    return notFound ? notFound() : document.createElement("div");
  };

  const onRouteChange = (callback: () => void) => {
    listeners.add(callback);
    return () => listeners.delete(callback);
  };

  window.addEventListener("popstate", () => {
    currentPath = window.location.pathname;
    listeners.forEach((fn) => fn());
  });

  return { navigate, getCurrentComponent, onRouteChange };
}

export function useRoute(router: ReturnType<typeof createRouter>) {
  const root = document.createElement("div");
  const update = () => {
    const component = router.getCurrentComponent();
    root.replaceChildren(component);
  };
  router.onRouteChange(update);
  update();
  return root;
}
