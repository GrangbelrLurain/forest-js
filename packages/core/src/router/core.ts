import { createStore } from "@core/store";
import { RouterProps, CreateRouterOptions } from "@core/types";

let isRouterInitialized = false;

export const createRouter = (options: CreateRouterOptions = {}) => {
  if (!options.isMultiInstance) {
    if (isRouterInitialized) {
      throw new Error(
        "Router already initialized\nIf you want to create multiple instances, use the isMultiInstance option."
      );
    }
    isRouterInitialized = true;
  }

  const routerStore = createStore<RouterProps<any> | null>(null);

  // 초기 라우팅 상태 설정 추가
  routerStore.set({
    path: window.location.pathname,
    state: window.history.state,
    status: "idle",
  });

  const handlePopState = (event: PopStateEvent) => {
    const path = window.location.pathname;
    const state = event.state;
    routerStore.set({ path, state, status: "loading" });
  };

  window.addEventListener("popstate", handlePopState);

  return {
    router: {
      push: (path: string, state?: any) => {
        window.history.pushState(state, "", path);
        routerStore.set({ path, state, status: "loading" });
      },
      back: () => {
        window.history.back();
      },
      replace: (path: string, state: any) => {
        window.history.replaceState(state, "", path);
        routerStore.set({ path, state, status: "loading" });
      },
      subscribe: <T = any>(callback: (props: RouterProps<T>) => void) => {
        return routerStore.subscribe(() => {
          const newState = routerStore.get();
          if (newState) {
            callback(newState);
          }
        });
      },
      unsubscribe: (unsubscribeFn: () => void) => {
        unsubscribeFn();
      },
      get: () => routerStore.get(),
    },
    routerStore,
    destroyRouter: () => {
      window.removeEventListener("popstate", handlePopState);
      routerStore.set(null);
      isRouterInitialized = false;
    },
  };
};
