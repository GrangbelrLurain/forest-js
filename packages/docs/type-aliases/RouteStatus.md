[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / RouteStatus

# Type Alias: RouteStatus

> **RouteStatus** = `"idle"` \| `"loading"` \| `"notFound"` \| `"success"`

Defined in: [types/router.ts:47](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/types/router.ts#L47)

Represents the possible states of a route.
Used to indicate the current status of the router or route.

## Description

- "idle": Router is initializing or in an idle state.
- "loading": Route is currently loading.
- "notFound": Requested route was not found.
- "success": Route loaded successfully.

## Example

```ts
const { routerStore } = createRouter();

const app = createForest("#app", () => addChild({ routerStore }, ({ routerStore }) =>
  routerStore.status === "loading" ? LoadingComponent() : MainComponent()
)(tree("div")));
```
