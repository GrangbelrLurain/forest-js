[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / AttributeUtility

# Type Alias: AttributeUtility()

> **AttributeUtility** = \<`E`, `R`, `S`\>(...`args`) => [`Utility`](Utility.md)\<`E`\>

Defined in: [types/utilities.ts:133](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L133)

## Type Parameters

### E

`E` *extends* `Element`

Element type.

### R

`R` *extends* `Partial`\<`E`\>

Object with attributes to add.

### S

`S` *extends* [`StoreMap`](StoreMap.md) = [`StoreMap`](StoreMap.md)

StoreMap type when used reactively.

## Parameters

### args

...[`UtilityProps`](UtilityProps.md)\<`R`, `S`\>

## Returns

[`Utility`](Utility.md)\<`E`\>

## Kind

Experimental Utility
Adds attributes to an element.
Supports reactive attributes when using stores.

## Example

```ts
const addTitle = addAttribute<HTMLDivElement, { title: string }>(
  { title: "Hello" }
)(MyElement);
```
