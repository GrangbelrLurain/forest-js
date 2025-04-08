import { createStore } from "@core/store";
import { RouterProps } from "@core/types";

let isRouterInitialized = false;

/**
 * @function createRouter
 * @description Create a router instance
 * @param options - Router options
 * @returns Router instance
 * @example
 * ```ts
 * const { router, routerStore } = createRouter({ isMultiInstance: true });
 * ```
 */
export const createRouter = (
  options: {
    /**
     * When true, allows creating multiple router instances.
     * Defaults to false.
     *
     * @type {boolean}
     * @default false
     * @example
     * ```ts
     * const options: CreateRouterOptions = { isMultiInstance: true };
     * ```
     */
    isMultiInstance?: boolean;
  } = {}
) => {
  if (!options.isMultiInstance) {
    if (isRouterInitialized) {
      throw new Error("Router already initialized\nIf you want to create multiple instances, use the isMultiInstance option.");
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
    /**
     * @description Router instance
     * @returns Router instance
     * @example
     * ```ts
     * const { router } = createRouter();
     * ```
     */
    router: {
      /**
       * @description Push a new route
       * @param path - Path to push
       * @param state - State to push
       * @example
       * ```ts
       * const { router } = createRouter();
       * router.push("/", { name: "John" });
       * ```
       */
      push: (path: string, state?: any) => {
        window.history.pushState(state, "", path);
        routerStore.set({ path, state, status: "loading" });
      },
      /**
       * @description Go back to the previous route
       * @example
       * ```ts
       * const { router } = createRouter();
       * router.back();
       * ```
       */
      back: () => {
        window.history.back();
      },
      /**
       * @description Replace the current route
       * @param path - Path to replace
       * @param state - State to replace
       * @example
       * ```ts
       * const { router } = createRouter();
       * router.replace("/", { name: "John" });
       * ```
       */
      replace: (path: string, state: any) => {
        window.history.replaceState(state, "", path);
        routerStore.set({ path, state, status: "loading" });
      },
      /**
       * @description Subscribe to router changes
       * @param callback - Callback function
       * @returns Unsubscribe function
       * @example
       * ```ts
       * const { router } = createRouter();
       * router.subscribe((props) => {
       *   console.log(props);
       * });
       * ```
       */
      subscribe: <T = any>(callback: (props: RouterProps<T>) => void) => {
        return routerStore.subscribe(() => {
          const newState = routerStore.get();
          if (newState) {
            callback(newState);
          }
        });
      },
      /**
       * @description Unsubscribe from router changes
       * @param unsubscribeFn - Unsubscribe function
       * @example
       * ```ts
       * const { router } = createRouter();
       * const unsubscribe = router.subscribe((props) => {
       *   console.log(props);
       * });
       * unsubscribe();
       * ```
       */
      unsubscribe: (unsubscribeFn: () => void) => {
        unsubscribeFn();
      },
      /**
       * @description Get the current router state
       * @returns Current router state
       * @example
       * ```ts
       * const { router } = createRouter();
       * const state = router.get()
       * ```
       */
      get: () => routerStore.get(),
    },
    /**
     * @description Router store
     * @returns Router store
     * @example
     * ```ts
     * const { routerStore } = createRouter();
     * ```
     */
    routerStore,
    /**
     * @description Destroy the router instance
     * @example
     * ```ts
     * const { router } = createRouter();
     * router.destroy();
     * ```
     */
    destroyRouter: () => {
      window.removeEventListener("popstate", handlePopState);
      routerStore.set(null);
      isRouterInitialized = false;
    },
  };
};
