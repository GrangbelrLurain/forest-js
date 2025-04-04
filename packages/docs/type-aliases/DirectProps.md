[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / DirectProps

# Type Alias: DirectProps\<R\>

> **DirectProps**\<`R`\> = \[`R`\] \| \[`Promise`\<`R`\>\]

Defined in: [types/utilities.ts:42](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L42)

Type for direct (non-reactive) props.
Used when the props are static or pre-determined.

## Type Parameters

### R

`R`

The result type.

## Example

```ts
const directProps: DirectProps<number> = [42];
```
