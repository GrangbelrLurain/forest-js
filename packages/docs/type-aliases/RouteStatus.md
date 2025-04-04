[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / RouteStatus

# Type Alias: RouteStatus

> **RouteStatus** = `"idle"` \| `"loading"` \| `"notFound"` \| `"success"`

Defined in: [types/router.ts:47](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/router.ts#L47)

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
