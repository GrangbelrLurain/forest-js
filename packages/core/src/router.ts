import { createStore } from "./store";
import { RouterProps } from "./types";
import { createUtility } from "./utilities";

export const routerStore = createStore<RouterProps<any> | null>(null);

export const createRouter = () => {
  const handlePopState = (event: PopStateEvent) => {
    const path = window.location.pathname;
    const state = event.state;
    routerStore.set({ path, state });
  };

  window.addEventListener("popstate", handlePopState);
};

export const router = () => {
  return {
    // 경로 변경 (push)
    push: (path: string, state: any) => {
      window.history.pushState(state, "", path);
      routerStore.set({ path, state });
    },

    // 뒤로 가기
    back: () => {
      window.history.back();
    },

    // 경로 교체 (replace)
    replace: (path: string, state: any) => {
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
  };
};

export const addRoute =
  (path: string) =>
  <P extends Record<string, any>>(render: (isRoute: boolean) => P) =>
    createUtility((el: HTMLElement) => {
      routerStore.subscribe(() => {
        if (routerStore.get()?.path === path) {
          Object.assign(el, render(true));
        } else {
          Object.assign(el, render(false));
        }
      });
      return el;
    });
