import { createStore } from "@core/store";
import { RouterProps, CreateRouterOptions, RouteStatus, Route } from "@core/types";

let isRouterInitialized = false;

export const createRouter = (options: CreateRouterOptions = {}) => {
  if (!options.isMultiInstance) {
    if (isRouterInitialized) {
      throw new Error("Router already initialized\nIf you want to create multiple instances, use the isMultiInstance option.");
    }
    isRouterInitialized = true;
  }

  const routerStore = createStore<RouterProps<any> | null>(null);

  let status: RouteStatus = "idle";

  const handlePopState = (event: PopStateEvent) => {
    const path = window.location.pathname;
    const state = event.state;
    routerStore.set({ path, state });
  };

  window.addEventListener("popstate", handlePopState);

  return {
    router: {
      // 경로 변경 (push)
      push: (path: string, state: any) => {
        status = "loading";
        window.history.pushState(state, "", path);
        routerStore.set({ path, state });
      },

      // 뒤로 가기
      back: () => {
        status = "loading";
        window.history.back();
      },

      // 경로 교체 (replace)
      replace: (path: string, state: any) => {
        status = "loading";
        window.history.replaceState(state, "", path);
        routerStore.set({ path, state });
      },

      // 경로 변경 구독
      subscribe: <T = any>(callback: (props: RouterProps<T>) => void) => {
        return routerStore.subscribe(() => {
          const newState = routerStore.get();
          if (newState) {
            callback(newState);
          }
        });
      },

      // 경로 변경 구독 해제
      unsubscribe: (unsubscribeFn: () => void) => {
        unsubscribeFn();
      },

      // 현재 경로 가져오기
      get: () => routerStore.get(),
    },
    route: (props: Route) => {
      const { path, component } = props;
      let element = component(status);
      routerStore.subscribe(() => {
        if (routerStore.get()?.path === path) {
          element = component(status);
          status = "success";
        }
      });
      return element;
    },
  };
};
