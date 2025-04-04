[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / EventUtility

# Type Alias: EventUtility()

> **EventUtility** = \<`E`, `K`\>(`type`, `handler`, `options`?) => [`Utility`](Utility.md)\<`E`\>

Defined in: [types/utilities.ts:146](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/utilities.ts#L146)

Attaches event listeners to an element.
Allows specifying event types and handlers.

## Type Parameters

### E

`E` *extends* `Element`

Element type.

### K

`K` *extends* keyof `HTMLElementEventMap`

Event key.

## Parameters

### type

`K`

### handler

(`e`) => `void`

### options?

`AddEventListenerOptions`

## Returns

[`Utility`](Utility.md)\<`E`\>

## Example

```ts
const onClick = addEvent("click", (e) => console.log(e.currentTarget))(MyElement);
```
