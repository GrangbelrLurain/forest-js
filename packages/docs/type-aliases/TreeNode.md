[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / TreeNode

# Type Alias: TreeNode

> **TreeNode** = `Node` \| `string` \| `number` \| `null` \| `undefined`

Defined in: [types/dom.ts:38](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/dom.ts#L38)

Represents a node that can be part of the DOM tree.
This includes actual DOM nodes, primitive types like strings and numbers,
or even nullable types like null or undefined.

## Example

```ts
const node1: TreeNode = tree("span"); // <- "node1" is a TreeNode
const node2: TreeNode = "Text content"; // <- "node2" is a TreeNode
const node3: TreeNode = null; // <- "node3" is a TreeNode
```
