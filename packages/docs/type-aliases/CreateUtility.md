[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / CreateUtility

# Type Alias: CreateUtility()

> **CreateUtility** = \<`E`\>(`fn`) => [`Utility`](Utility.md)\<`E`\>

Defined in: [types/utilities.ts:74](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L74)

Creates a utility function that enqueues a function to be executed on the next tick.
Useful for batching updates to avoid layout thrashing.

## Type Parameters

### E

`E` *extends* `Element`

Element type.

## Parameters

### fn

(`el`) => `void`

The function to be executed.

## Returns

[`Utility`](Utility.md)\<`E`\>

A utility function that processes the element.

## Example

```ts
const delayedUpdate = createUtility<HTMLDivElement>((el) => {
  el.style.color = "blue";
  return el;
});
```
