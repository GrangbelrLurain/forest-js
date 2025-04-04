[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / UtilityProps

# Type Alias: UtilityProps\<R, S\>

> **UtilityProps**\<`R`, `S`\> = [`DirectProps`](DirectProps.md)\<`R`\> \| \[`S`, (`values`) => `R`\]

Defined in: [types/utilities.ts:57](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L57)

Union type for props that can be either direct or store-derived.
Combines both direct and reactive prop types.

## Type Parameters

### R

`R`

The result type.

### S

`S` *extends* [`StoreMap`](StoreMap.md) = [`StoreMap`](StoreMap.md)

StoreMap type.

## Example

```ts
const myStore = createStore({ value: "Hello" });
const utilityProps: UtilityProps<string, typeof myStore> = [{ myStore }, ({ myStore }) => myStore.value];
const utilityProps: UtilityProps<string> = ["Hello"];
```
