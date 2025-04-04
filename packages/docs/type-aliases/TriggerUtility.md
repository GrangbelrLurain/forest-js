[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / TriggerUtility

# Type Alias: TriggerUtility()

> **TriggerUtility** = \<`R`, `S`, `E`\>(...`args`) => [`Utility`](Utility.md)\<`E`\>

Defined in: [types/utilities.ts:193](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L193)

Utility for adding triggers to an element

## Type Parameters

### R

`R` *extends* [`Triggers`](Triggers.md)

Trigger object to add

### S

`S` *extends* [`StoreMap`](StoreMap.md) = [`StoreMap`](StoreMap.md)

StoreMap type when used reactively

### E

`E` *extends* `HTMLElement` = `HTMLElement`

Element type (defaults to HTMLElement)

## Parameters

### args

...[`UtilityProps`](UtilityProps.md)\<`R`, `S`\>

## Returns

[`Utility`](Utility.md)\<`E`\>

## Example

```ts
addTrigger({ customTrigger: () => console.log("Custom trigger") })(MyElement);
const triggers = getTriggers(MyElement);
triggers.customTrigger();
```
