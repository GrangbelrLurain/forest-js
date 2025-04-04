[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / UseUtility

# Type Alias: UseUtility()

> **UseUtility** = \<`E`\>(...`utils`) => [`Utility`](Utility.md)\<`E`\>

Defined in: [types/utilities.ts:90](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L90)

Combines multiple utility functions into a single utility.
Sequentially applies each utility to the element.

## Type Parameters

### E

`E` *extends* `Element`

Element type.

## Parameters

### utils

...[`Utility`](Utility.md)\<`E`\>[]

## Returns

[`Utility`](Utility.md)\<`E`\>

## Example

```ts
const combinedUtility = use<HTMLDivElement>(
  addAttribute({ "data-active": true })
);

combinedUtility(MyElement);
```
