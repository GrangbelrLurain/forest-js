[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / CreateRouterOptions

# Type Alias: CreateRouterOptions

> **CreateRouterOptions** = `object`

Defined in: [types/router.ts:13](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/router.ts#L13)

Options for creating a router.
This type defines the configuration options used when creating a router instance.

## Example

```ts
const { router, routerStore } = createRouter({ isMultiInstance: true }); // <- "{ isMultiInstance: true }" is a CreateRouterOptions
```

## Properties

### isMultiInstance?

> `optional` **isMultiInstance**: `boolean`

Defined in: [types/router.ts:25](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/router.ts#L25)

Specifies whether multiple router instances can be created.
   If true, allows multiple independent routers to coexist.
   If false, a single global router is used.
