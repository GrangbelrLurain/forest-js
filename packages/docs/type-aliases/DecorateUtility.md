[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / DecorateUtility

# Type Alias: DecorateUtility()

> **DecorateUtility** = \<`E`\>(`el`, ...`utils`) => `E`

Defined in: [types/utilities.ts:102](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L102)

Directly applies multiple utility functions to an element.
Similar to UseUtility but applies immediately.

## Type Parameters

### E

`E` *extends* `Element`

Element type.

## Parameters

### el

`E`

### utils

...[`Utility`](Utility.md)\<`E`\>[]

## Returns

`E`

## Example

```ts
decorate(MyElement, addAttribute({ "data-active": true }));
```
