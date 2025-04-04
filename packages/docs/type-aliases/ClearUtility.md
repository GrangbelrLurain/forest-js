[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / ClearUtility

# Type Alias: ClearUtility()

> **ClearUtility** = \<`S`\>(`store`, `shouldClear`) => [`Utility`](Utility.md)\<`HTMLElement`\>

Defined in: [types/utilities.ts:116](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L116)

Clears store bindings when a specific condition is met.

## Type Parameters

### S

`S` *extends* [`StoreMap`](StoreMap.md)

StoreMap type.

## Parameters

### store

`S`

The store to clear.

### shouldClear

(`values`) => `boolean`

Condition to trigger clearing.

## Returns

[`Utility`](Utility.md)\<`HTMLElement`\>

A utility for handling store cleanup.

## Example

```ts
const clearStore = addClear(myStore, (values) => values.name === "John")(MyElement);
```
