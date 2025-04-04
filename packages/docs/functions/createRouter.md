[**Forest.js Core Documentation v1.2.0**](../README.md)

***

[Forest.js Core Documentation](../README.md) / createRouter

# Function: createRouter()

> **createRouter**(`options`): `object`

Defined in: [router/core.ts:6](https://github.com/GrangbelrLurain/forest-js/blob/3b9f0f1236af55b74c90cc45f6935444ec94c11b/packages/core/src/router/core.ts#L6)

## Parameters

### options

[`CreateRouterOptions`](../type-aliases/CreateRouterOptions.md) = `{}`

## Returns

`object`

### router

> **router**: `object`

#### router.push()

> **push**: (`path`, `state`) => `void`

##### Parameters

###### path

`string`

###### state

`any`

##### Returns

`void`

#### router.back()

> **back**: () => `void`

##### Returns

`void`

#### router.replace()

> **replace**: (`path`, `state`) => `void`

##### Parameters

###### path

`string`

###### state

`any`

##### Returns

`void`

#### router.subscribe()

> **subscribe**: \<`T`\>(`callback`) => () => `void`

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### callback

(`props`) => `void`

##### Returns

> (): `void`

###### Returns

`void`

#### router.unsubscribe()

> **unsubscribe**: (`unsubscribeFn`) => `void`

##### Parameters

###### unsubscribeFn

() => `void`

##### Returns

`void`

#### router.get()

> **get**: () => `null` \| [`RouterProps`](../type-aliases/RouterProps.md)\<`any`\>

##### Returns

`null` \| [`RouterProps`](../type-aliases/RouterProps.md)\<`any`\>

### routerStore

> **routerStore**: [`Store`](../type-aliases/Store.md)\<`null` \| [`RouterProps`](../type-aliases/RouterProps.md)\<`any`\>\>

### destroyRouter()

> **destroyRouter**: () => `void`

#### Returns

`void`
