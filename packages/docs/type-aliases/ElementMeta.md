[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / ElementMeta

# Type Alias: ElementMeta

> **ElementMeta** = `object`

Defined in: [types/dom.ts:63](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/dom.ts#L63)

Metadata associated with DOM elements.
Used internally by Forest.js to maintain element states and bindings.

## Example

```ts
const elementMeta: ElementMeta = ensureMeta(el) // <- "elementMeta" is a ElementMeta

elementMeta.listeners = {
  click: () => console.log("Clicked!"),
};

elementMeta.mounted = true;

elementMeta.triggers = new Set(["customTrigger"]);

elementMeta.storeBindings = new Set([() => console.log("Cleanup store")]);
```

## Properties

### listeners?

> `optional` **listeners**: `Record`\<`string`, `EventListener`\>

Defined in: [types/dom.ts:65](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/dom.ts#L65)

Event listeners attached to the element.

***

### triggers?

> `optional` **triggers**: [`Triggers`](Triggers.md)

Defined in: [types/dom.ts:67](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/dom.ts#L67)

Custom triggers for element-specific actions.

***

### mounted?

> `optional` **mounted**: `boolean`

Defined in: [types/dom.ts:69](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/dom.ts#L69)

Indicates whether the element is currently mounted in the DOM.

***

### storeBindings?

> `optional` **storeBindings**: `Set`\<() => `void`\>

Defined in: [types/dom.ts:71](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/dom.ts#L71)

A set of functions to clean up store bindings.
