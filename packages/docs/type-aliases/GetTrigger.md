[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / GetTrigger

# Type Alias: GetTrigger()

> **GetTrigger** = \<`T`, `E`\>(`el`) => `Readonly`\<`T`\>

Defined in: [types/utilities.ts:205](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L205)

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
