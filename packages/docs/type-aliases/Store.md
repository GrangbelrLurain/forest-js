[**Forest.js Core Documentation v1.1.3**](../README.md)

***

[Forest.js Core Documentation](../README.md) / Store

# Type Alias: Store\<T\>

> **Store**\<`T`\> = `object`

Defined in: [types/store.ts:14](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/store.ts#L14)

Reactive store for state management.
Stores a value and provides reactive updates.
Used for managing dynamic data within Forest.js.

## Example

```ts
const myStore = createStore({ value: "Hello" });
myStore.set({ value: "World" });
myStore.subscribe(() => console.log(myStore.get()));
```

## Type Parameters

### T

`T`

Type of value stored in the store

## Properties

### get()

> **get**: () => `T`

Defined in: [types/store.ts:19](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/store.ts#L19)

Get the current value from the store.

#### Returns

`T`

The current store value.

***

### set()

> **set**: (`value`) => `void`

Defined in: [types/store.ts:24](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/store.ts#L24)

Set a new value in the store and notify subscribers.

#### Parameters

##### value

`T`

The new value to store.

#### Returns

`void`

***

### update()

> **update**: (`fn`) => `void`

Defined in: [types/store.ts:29](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/store.ts#L29)

Update the store value using a function and notify subscribers.

#### Parameters

##### fn

(`prev`) => `T`

A function that takes the previous value and returns the new value.

#### Returns

`void`

***

### subscribe()

> **subscribe**: (`fn`) => () => `void`

Defined in: [types/store.ts:40](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/store.ts#L40)

Subscribe to store changes.

#### Parameters

##### fn

() => `void`

The callback function to execute on updates.

#### Returns

A function to unsubscribe from changes.

> (): `void`

##### Returns

`void`

#### Example

```ts
const unsubscribe = myStore.subscribe(() => console.log("Updated!"));
unsubscribe(); // To stop listening
```

***

### unsubscribe()

> **unsubscribe**: (`fn`) => `void`

Defined in: [types/store.ts:46](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/store.ts#L46)

Unsubscribe a previously registered callback.
Typically called using the function returned from `subscribe()`.

#### Parameters

##### fn

() => `void`

The function that was initially registered.

#### Returns

`void`
