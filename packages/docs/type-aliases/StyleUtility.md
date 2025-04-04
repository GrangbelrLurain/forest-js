[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / StyleUtility

# Type Alias: StyleUtility()

> **StyleUtility** = \<`R`, `S`, `E`\>(...`args`) => [`Utility`](Utility.md)\<`E`\>

Defined in: [types/utilities.ts:166](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L166)

Applies CSS styles to an element.
Supports reactive styles when using stores.

## Type Parameters

### R

`R` *extends* `Partial`\<`CSSStyleDeclaration`\>

Style properties to apply.

### S

`S` *extends* [`StoreMap`](StoreMap.md) = [`StoreMap`](StoreMap.md)

StoreMap type when used reactively.

### E

`E` *extends* `HTMLElement` = `HTMLElement`

Element type (defaults to HTMLElement).

## Parameters

### args

...[`UtilityProps`](UtilityProps.md)\<`R`, `S`\>

## Returns

[`Utility`](Utility.md)\<`E`\>

## Example

```ts
const setColor = addStyle<HTMLDivElement, { color: string }>(
  { color: "red" }
)(MyElement);
```
