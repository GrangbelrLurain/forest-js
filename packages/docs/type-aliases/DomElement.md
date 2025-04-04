[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / DomElement

# Type Alias: DomElement\<T\>

> **DomElement**\<`T`\> = `HTMLElementTagNameMap`\[`T`\]

Defined in: [types/dom.ts:24](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/dom.ts#L24)

Helper type to retrieve the actual DOM element type from a tag name.
This is useful when creating or manipulating elements dynamically.

## Type Parameters

### T

`T` *extends* [`ElementName`](ElementName.md)

The HTML element tag name.

## Example

```ts
const div = tree("div"); // <- "const div" is a DomElement
```
