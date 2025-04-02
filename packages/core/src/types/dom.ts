import { Triggers } from "@core/types/utilities";

export type ElementName = keyof HTMLElementTagNameMap;

export type DomElement<T extends ElementName> = HTMLElementTagNameMap[T];

export type TreeNode = Node | string | number | null | undefined;

export type ElementMeta = {
  listeners?: Record<string, EventListener>;
  triggers?: Triggers;
  mounted?: boolean;
  storeBindings?: Set<() => void>;
};
