[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / Triggers

# Type Alias: Triggers

> **Triggers** = `{ [K in string]: (args: never[]) => void }`

Defined in: [types/utilities.ts:177](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L177)

Object containing named trigger functions
For use in the TriggerUtility with ElementMeta.triggers

## Example

```ts
const triggers = getTriggers(MyElement);
triggers.customTrigger();
```
