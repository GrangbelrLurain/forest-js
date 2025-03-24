export type ElementName = keyof HTMLElementTagNameMap;

export type DomElement<T extends ElementName> = HTMLElementTagNameMap[T];

export type DomAttribute<T extends ElementName> = Partial<HTMLElementTagNameMap[T]>;

export type DomNode = DomNode[] | HTMLElement[] | HTMLElement | string[] | number[] | string | number;

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

export type ComponentProps<P extends Record<string, any>> = {
  [K in keyof P]: P[K] extends Store<infer V> ? Store<V> : P[K];
};

export type Component<P extends ComponentProps<P>> = (props: ComponentProps<P>) => HTMLElement;
