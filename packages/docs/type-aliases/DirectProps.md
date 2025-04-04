[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / DirectProps

# Type Alias: DirectProps\<R\>

> **DirectProps**\<`R`\> = \[`R`\] \| \[`Promise`\<`R`\>\]

Defined in: [types/utilities.ts:42](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L42)

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
