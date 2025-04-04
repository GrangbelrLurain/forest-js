[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / Utility

# Type Alias: Utility()\<E\>

> **Utility**\<`E`\> = (`el`) => `E`

Defined in: [types/utilities.ts:17](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L17)

A utility function that takes an element, applies transformations, and returns the modified element.
Typically used to enhance or manipulate the DOM element in a declarative way.

## Type Parameters

### E

`E` *extends* `Element`

The type of element the utility operates on.

## Parameters

### el

`E`

## Returns

`E`

## Example

```ts
const addClass: Utility<HTMLDivElement> = (el) => {
  el.classList.add("highlight");
  return el;
};
```
