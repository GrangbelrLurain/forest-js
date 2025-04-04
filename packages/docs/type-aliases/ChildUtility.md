[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / ChildUtility

# Type Alias: ChildUtility()

> **ChildUtility** = \<`E`, `R`, `S`\>(...`args`) => (`el`) => `E`

Defined in: [types/utilities.ts:218](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L218)

Utility for adding children to an element

## Type Parameters

### E

`E` *extends* `HTMLElement`

Element type

### R

`R` *extends* [`Child`](Child.md) \| `Promise`\<[`Child`](Child.md)\> \| `Promise`\<\{ `default`: [`Child`](Child.md); \}\>

Child content to add (can be promise or dynamic import)

### S

`S` *extends* [`StoreMap`](StoreMap.md) = [`StoreMap`](StoreMap.md)

StoreMap type when used reactively

## Parameters

### args

...[`UtilityProps`](UtilityProps.md)\<`R`, `S`\>

## Returns

> (`el`): `E`

### Parameters

#### el

`E`

### Returns

`E`
