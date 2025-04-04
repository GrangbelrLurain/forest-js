[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / RouterProps

# Type Alias: RouterProps\<T\>

> **RouterProps**\<`T`\> = `object`

Defined in: [types/router.ts:75](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/router.ts#L75)

Properties of the current route.
Represents the state and metadata associated with a specific route.

## Example

```ts
const { routerStore } = createRouter();

const app = createForest("#app", () => addChild({ routerStore }, ({ routerStore }) => {
  const { path, state, status } = routerStore; // <- "routerStore" is a RouterProps
  if (status === "loading") {
    return LoadingComponent();
  } else if (path === "/") {
    return HomeComponent();
  } else if (path === "/about") {
    return AboutComponent();
  }
  return NotFoundComponent();
})(tree("div")));
```

## Type Parameters

### T

`T` = `any`

Type of state data associated with the route.

## Properties

### path

> **path**: `string`

Defined in: [types/router.ts:77](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/router.ts#L77)

The current path of the router.

***

### state

> **state**: `T`

Defined in: [types/router.ts:79](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/router.ts#L79)

The state data associated with the current route.

***

### status

> **status**: [`RouteStatus`](RouteStatus.md)

Defined in: [types/router.ts:81](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/router.ts#L81)

The current status of the route.
