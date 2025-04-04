[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / GetTrigger

# Type Alias: GetTrigger()

> **GetTrigger** = \<`T`, `E`\>(`el`) => `Readonly`\<`T`\>

Defined in: [types/utilities.ts:205](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L205)

Utility for getting triggers from an element for use outside of component

## Type Parameters

### T

`T` *extends* [`Triggers`](Triggers.md)

Trigger object type

### E

`E` *extends* `HTMLElement`

Element type (defaults to HTMLElement)

## Parameters

### el

`E`

## Returns

`Readonly`\<`T`\>

## Example

```ts
const triggers = getTriggers(MyElement);
triggers.customTrigger();
```
