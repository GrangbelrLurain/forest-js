[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / StoreProps

# Type Alias: StoreProps\<R, S\>

> **StoreProps**\<`R`, `S`\> = \[`S`, (`values`) => `R`\]

Defined in: [types/utilities.ts:30](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L30)

Type for reactive props derived from stores.
Allows dynamically mapping store values to specific properties.

## Type Parameters

### R

`R`

The result type.

### S

`S` *extends* [`StoreMap`](StoreMap.md) = [`StoreMap`](StoreMap.md)

StoreMap type.

## Example

```ts
const reactiveProps: StoreProps<string, MyStoreMap> = [{ myStore }, ({ myStore }) => myStore.values];
```
