import { TreeNode } from "@core/types/dom";

/**
 * @description create router options
 * @interface CreateRouterOptions
 * @property {boolean} isMultiInstance - is multi instance (if true, you can create multiple instances)
 * @default false
 * @readonly
 */
export interface CreateRouterOptions {
  isMultiInstance?: boolean;
}

/**
 * @description router status
 * @enum {idle}
 * @description router is initalizing
 * @readonly
 * @enum {loading}
 * @description route is loading
 * @readonly
 * @enum {notFound}
 * @description route is not found
 * @readonly
 * @enum {success}
 * @description route is successed
 * @readonly
 */
export type RouteStatus = "idle" | "loading" | "notFound" | "success";

export type RouterProps<T = any> = {
  path: string;
  state: T;
};

export type Route = {
  path: string;
  component: (status: RouteStatus) => TreeNode;
};
