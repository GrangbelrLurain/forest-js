export type ElementName = keyof HTMLElementTagNameMap;

export type DomElement<T extends ElementName> = HTMLElementTagNameMap[T] & {
  update: (state: DomProps<T>) => void;
};

export type DomAttribute<T extends ElementName> = Partial<HTMLElementTagNameMap[T]>;

export type DomNode<T extends ElementName = any> = DomElement<T>[] | DomElement<T> | string[] | string;

export type DomProps<T extends ElementName> = Partial<Omit<DomAttribute<T>, "children" | "style">> & {
  children?: DomNode;
  style?: Partial<CSSStyleDeclaration>;
};

export type Store<T> = {
  get: () => T;
  set: (next: T) => void;
  update: (fn: (prev: T) => T) => void;
  subscribe: (fn: () => void) => () => void;
};
