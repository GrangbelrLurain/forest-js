[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / StoreMap

# Type Alias: StoreMap\<T\>

> **StoreMap**\<`T`\> = `{ [K in keyof T]: Store<T[K]> }`

Defined in: [types/store.ts:64](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/store.ts#L64)

Map of named stores.
Allows organizing multiple stores under a single object.

## Type Parameters

### T

`T` = `any`

Optional type for the store values

## Example

```ts
const firstStore = createStore({ value: "Hello" });
const secondStore = createStore({ value: "World" });
const storeMap: StoreMap<{ first: string, second: string }> = {
  first: firstStore,
  second: secondStore
};
```
