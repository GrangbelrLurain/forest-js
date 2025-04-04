[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / StoreProps

# Type Alias: StoreProps\<R, S\>

> **StoreProps**\<`R`, `S`\> = \[`S`, (`values`) => `R`\]

Defined in: [types/utilities.ts:30](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L30)

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
