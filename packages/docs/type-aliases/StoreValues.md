[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / StoreValues

# Type Alias: StoreValues\<S\>

> **StoreValues**\<`S`\> = `{ [K in keyof S]: S[K] extends Store<infer T> ? T : never }`

Defined in: [types/store.ts:80](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/store.ts#L80)

Helper type to extract values from a StoreMap.
Transforms a map of stores into a map of their inner values.

## Type Parameters

### S

`S` *extends* [`StoreMap`](StoreMap.md)\<`any`\>

StoreMap to extract values from

## Example

```ts
const myStore = createStore({ value: "Hello" });
const myStoreMap: StoreMap<{ myStore: string }> = { myStore };
const myValues: StoreValues<typeof myStoreMap> = { myStore: "Hello" };
```
