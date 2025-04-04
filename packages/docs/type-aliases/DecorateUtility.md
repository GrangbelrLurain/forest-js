[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / DecorateUtility

# Type Alias: DecorateUtility()

> **DecorateUtility** = \<`E`\>(`el`, ...`utils`) => `E`

Defined in: [types/utilities.ts:102](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L102)

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
