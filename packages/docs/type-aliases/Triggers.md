[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / Triggers

# Type Alias: Triggers

> **Triggers** = `{ [K in string]: (args: never[]) => void }`

Defined in: [types/utilities.ts:177](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L177)

Object containing named trigger functions
For use in the TriggerUtility with ElementMeta.triggers

## Example

```ts
const triggers = getTriggers(MyElement);
triggers.customTrigger();
```
