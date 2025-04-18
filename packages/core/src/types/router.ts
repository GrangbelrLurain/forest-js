/**
 * Represents the possible states of a route.
 * Used to indicate the current status of the router or route.
 *
 * @description
 * - "idle": Router is initializing or in an idle state.
 * - "loading": Route is currently loading.
 * - "notFound": Requested route was not found.
 * - "success": Route loaded successfully.
 *
 * @example
 * ```ts
 * const { routerStore } = createRouter();
 *
 * const app = createForest("#app", () => addChild({ routerStore }, ({ routerStore }) =>
 *   routerStore.status === "loading" ? LoadingComponent() : MainComponent()
 * )(tree("div")));
 * ```
 */
export type RouteStatus = "idle" | "loading" | "notFound" | "success";

/**
 * Properties of the current route.
 * Represents the state and metadata associated with a specific route.
 *
 * @template T - Type of state data associated with the route.
 * @property {string} path - The current path of the router.
 * @property {T} state - The state data associated with the current route.
 * @property {RouteStatus} status - The current status of the route.
 *
 * @example
 * ```ts
 * const { routerStore } = createRouter();
 *
 * const app = createForest("#app", () => addChild({ routerStore }, ({ routerStore }) => {
 *   const { path, state, status } = routerStore; // <- "routerStore" is a RouterProps
 *   if (status === "loading") {
 *     return LoadingComponent();
 *   } else if (path === "/") {
 *     return HomeComponent();
 *   } else if (path === "/about") {
 *     return AboutComponent();
 *   }
 *   return NotFoundComponent();
 * })(tree("div")));
 * ```
 */
export type RouterProps<T = any> = {
  /** Current path */
  path: string;
  /** State data associated with the current route */
  state: T;
  /** Current status of the route */
  status: RouteStatus;
};
