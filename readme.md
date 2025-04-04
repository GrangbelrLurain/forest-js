<a name="readmemd"></a>

**Forest.js Core Documentation v1.2.0**

---

# Forest.js Core Documentation v1.2.0

## Type Aliases

- [ElementName](#type-aliaseselementnamemd)
- [DomElement](#type-aliasesdomelementmd)
- [TreeNode](#type-aliasestreenodemd)
- [ElementMeta](#type-aliaseselementmetamd)
- [CreateRouterOptions](#type-aliasescreaterouteroptionsmd)
- [RouteStatus](#type-aliasesroutestatusmd)
- [RouterProps](#type-aliasesrouterpropsmd)
- [Store](#type-aliasesstoremd)
- [StoreMap](#type-aliasesstoremapmd)
- [StoreValues](#type-aliasesstorevaluesmd)
- [Utility](#type-aliasesutilitymd)
- [StoreProps](#type-aliasesstorepropsmd)
- [DirectProps](#type-aliasesdirectpropsmd)
- [UtilityProps](#type-aliasesutilitypropsmd)
- [CreateUtility](#type-aliasescreateutilitymd)
- [UseUtility](#type-aliasesuseutilitymd)
- [DecorateUtility](#type-aliasesdecorateutilitymd)
- [ClearUtility](#type-aliasesclearutilitymd)
- [AttributeUtility](#type-aliasesattributeutilitymd)
- [EventUtility](#type-aliaseseventutilitymd)
- [StyleUtility](#type-aliasesstyleutilitymd)
- [Triggers](#type-aliasestriggersmd)
- [TriggerUtility](#type-aliasestriggerutilitymd)
- [GetTrigger](#type-aliasesgettriggermd)
- [Child](#type-aliaseschildmd)
- [ChildUtility](#type-aliaseschildutilitymd)

## Variables

- [addAttribute](#variablesaddattributemd)
- [addChild](#variablesaddchildmd)
- [createUtility](#variablescreateutilitymd)
- [use](#variablesusemd)
- [decorate](#variablesdecoratemd)
- [addEvent](#variablesaddeventmd)
- [addStyle](#variablesaddstylemd)
- [addTrigger](#variablesaddtriggermd)

## Functions

- [createForest](#functionscreateforestmd)
- [tree](#functionstreemd)
- [createRouter](#functionscreateroutermd)
- [createStore](#functionscreatestoremd)
- [getTrigger](#functionsgettriggermd)

<a name="functionscreateforestmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / createForest

# Function: createForest()

> **createForest**(`rootSelector`, `render`): `void`

Defined in: [dom/app.ts:3](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/dom/app.ts#L3)

## Parameters

### rootSelector

`string`

### render

() => `HTMLElement`

## Returns

`void`

<a name="functionscreateroutermd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / createRouter

# Function: createRouter()

> **createRouter**(`options`): `object`

Defined in: [router/core.ts:6](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/router/core.ts#L6)

## Parameters

### options

[`CreateRouterOptions`](#type-aliasescreaterouteroptionsmd) = `{}`

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

> **get**: () => `null` \| [`RouterProps`](#type-aliasesrouterpropsmd)\<`any`\>

##### Returns

`null` \| [`RouterProps`](#type-aliasesrouterpropsmd)\<`any`\>

### routerStore

> **routerStore**: [`Store`](#type-aliasesstoremd)\<`null` \| [`RouterProps`](#type-aliasesrouterpropsmd)\<`any`\>\>

### destroyRouter()

> **destroyRouter**: () => `void`

#### Returns

`void`

<a name="functionscreatestoremd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / createStore

# Function: createStore()

> **createStore**\<`T`\>(`initial`): [`Store`](#type-aliasesstoremd)\<`T`\>

Defined in: [store/core.ts:3](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/store/core.ts#L3)

## Type Parameters

### T

`T`

## Parameters

### initial

`T`

## Returns

[`Store`](#type-aliasesstoremd)\<`T`\>

<a name="functionsgettriggermd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / getTrigger

# Function: getTrigger()

> **getTrigger**\<`T`, `E`\>(`el`): `Readonly`\<`T`\>

Defined in: [utilities/trigger.ts:32](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/utilities/trigger.ts#L32)

## Type Parameters

### T

`T` _extends_ [`Triggers`](#type-aliasestriggersmd)

### E

`E` _extends_ `HTMLElement`

## Parameters

### el

`E`

## Returns

`Readonly`\<`T`\>

<a name="functionstreemd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / tree

# Function: tree()

> **tree**\<`T`\>(`tag`): [`DomElement`](#type-aliasesdomelementmd)\<`T`\>

Defined in: [dom/core.ts:11](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/dom/core.ts#L11)

## Type Parameters

### T

`T` _extends_ keyof `HTMLElementTagNameMap`

## Parameters

### tag

`T`

## Returns

[`DomElement`](#type-aliasesdomelementmd)\<`T`\>

<a name="type-aliasesattributeutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / AttributeUtility

# Type Alias: AttributeUtility()

> **AttributeUtility** = \<`E`, `R`, `S`\>(...`args`) => [`Utility`](#type-aliasesutilitymd)\<`E`\>

Defined in: [types/utilities.ts:133](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L133)

## Type Parameters

### E

`E` _extends_ `Element`

Element type.

### R

`R` _extends_ `Partial`\<`E`\>

Object with attributes to add.

### S

`S` _extends_ [`StoreMap`](#type-aliasesstoremapmd) = [`StoreMap`](#type-aliasesstoremapmd)

StoreMap type when used reactively.

## Parameters

### args

...[`UtilityProps`](#type-aliasesutilitypropsmd)\<`R`, `S`\>

## Returns

[`Utility`](#type-aliasesutilitymd)\<`E`\>

## Kind

Experimental Utility
Adds attributes to an element.
Supports reactive attributes when using stores.

## Example

```ts
const addTitle = addAttribute<HTMLDivElement, { title: string }>({ title: "Hello" })(MyElement);
```

<a name="type-aliaseschildmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / Child

# Type Alias: Child

> **Child** = [`TreeNode`](#type-aliasestreenodemd) \| [`TreeNode`](#type-aliasestreenodemd)[]

Defined in: [types/utilities.ts:210](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L210)

Type representing a child or children that can be added to an element

<a name="type-aliaseschildutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / ChildUtility

# Type Alias: ChildUtility()

> **ChildUtility** = \<`E`, `R`, `S`\>(...`args`) => (`el`) => `E`

Defined in: [types/utilities.ts:218](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L218)

Utility for adding children to an element

## Type Parameters

### E

`E` _extends_ `HTMLElement`

Element type

### R

`R` _extends_ [`Child`](#type-aliaseschildmd) \| `Promise`\<[`Child`](#type-aliaseschildmd)\> \| `Promise`\<\{ `default`: [`Child`](#type-aliaseschildmd); \}\>

Child content to add (can be promise or dynamic import)

### S

`S` _extends_ [`StoreMap`](#type-aliasesstoremapmd) = [`StoreMap`](#type-aliasesstoremapmd)

StoreMap type when used reactively

## Parameters

### args

...[`UtilityProps`](#type-aliasesutilitypropsmd)\<`R`, `S`\>

## Returns

> (`el`): `E`

### Parameters

#### el

`E`

### Returns

`E`

<a name="type-aliasesclearutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / ClearUtility

# Type Alias: ClearUtility()

> **ClearUtility** = \<`S`\>(`store`, `shouldClear`) => [`Utility`](#type-aliasesutilitymd)\<`HTMLElement`\>

Defined in: [types/utilities.ts:116](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L116)

Clears store bindings when a specific condition is met.

## Type Parameters

### S

`S` _extends_ [`StoreMap`](#type-aliasesstoremapmd)

StoreMap type.

## Parameters

### store

`S`

The store to clear.

### shouldClear

(`values`) => `boolean`

Condition to trigger clearing.

## Returns

[`Utility`](#type-aliasesutilitymd)\<`HTMLElement`\>

A utility for handling store cleanup.

## Example

```ts
const clearStore = addClear(myStore, (values) => values.name === "John")(MyElement);
```

<a name="type-aliasescreaterouteroptionsmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / CreateRouterOptions

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

<a name="type-aliasescreateutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / CreateUtility

# Type Alias: CreateUtility()

> **CreateUtility** = \<`E`\>(`fn`) => [`Utility`](#type-aliasesutilitymd)\<`E`\>

Defined in: [types/utilities.ts:74](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L74)

Creates a utility function that enqueues a function to be executed on the next tick.
Useful for batching updates to avoid layout thrashing.

## Type Parameters

### E

`E` _extends_ `Element`

Element type.

## Parameters

### fn

(`el`) => `void`

The function to be executed.

## Returns

[`Utility`](#type-aliasesutilitymd)\<`E`\>

A utility function that processes the element.

## Example

```ts
const delayedUpdate = createUtility<HTMLDivElement>((el) => {
  el.style.color = "blue";
  return el;
});
```

<a name="type-aliasesdecorateutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / DecorateUtility

# Type Alias: DecorateUtility()

> **DecorateUtility** = \<`E`\>(`el`, ...`utils`) => `E`

Defined in: [types/utilities.ts:102](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L102)

Directly applies multiple utility functions to an element.
Similar to UseUtility but applies immediately.

## Type Parameters

### E

`E` _extends_ `Element`

Element type.

## Parameters

### el

`E`

### utils

...[`Utility`](#type-aliasesutilitymd)\<`E`\>[]

## Returns

`E`

## Example

```ts
decorate(MyElement, addAttribute({ "data-active": true }));
```

<a name="type-aliasesdirectpropsmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / DirectProps

# Type Alias: DirectProps\<R\>

> **DirectProps**\<`R`\> = \[`R`\] \| \[`Promise`\<`R`\>\]

Defined in: [types/utilities.ts:42](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L42)

Type for direct (non-reactive) props.
Used when the props are static or pre-determined.

## Type Parameters

### R

`R`

The result type.

## Example

```ts
const directProps: DirectProps<number> = [42];
```

<a name="type-aliasesdomelementmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / DomElement

# Type Alias: DomElement\<T\>

> **DomElement**\<`T`\> = `HTMLElementTagNameMap`\[`T`\]

Defined in: [types/dom.ts:24](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/dom.ts#L24)

Helper type to retrieve the actual DOM element type from a tag name.
This is useful when creating or manipulating elements dynamically.

## Type Parameters

### T

`T` _extends_ [`ElementName`](#type-aliaseselementnamemd)

The HTML element tag name.

## Example

```ts
const div = tree("div"); // <- "const div" is a DomElement
```

<a name="type-aliaseselementmetamd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / ElementMeta

# Type Alias: ElementMeta

> **ElementMeta** = `object`

Defined in: [types/dom.ts:63](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/dom.ts#L63)

Metadata associated with DOM elements.
Used internally by Forest.js to maintain element states and bindings.

## Example

```ts
const elementMeta: ElementMeta = ensureMeta(el); // <- "elementMeta" is a ElementMeta

elementMeta.listeners = {
  click: () => console.log("Clicked!"),
};

elementMeta.mounted = true;

elementMeta.triggers = new Set(["customTrigger"]);

elementMeta.storeBindings = new Set([() => console.log("Cleanup store")]);
```

## Properties

### listeners?

> `optional` **listeners**: `Record`\<`string`, `EventListener`\>

Defined in: [types/dom.ts:65](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/dom.ts#L65)

Event listeners attached to the element.

---

### triggers?

> `optional` **triggers**: [`Triggers`](#type-aliasestriggersmd)

Defined in: [types/dom.ts:67](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/dom.ts#L67)

Custom triggers for element-specific actions.

---

### mounted?

> `optional` **mounted**: `boolean`

Defined in: [types/dom.ts:69](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/dom.ts#L69)

Indicates whether the element is currently mounted in the DOM.

---

### storeBindings?

> `optional` **storeBindings**: `Set`\<() => `void`\>

Defined in: [types/dom.ts:71](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/dom.ts#L71)

A set of functions to clean up store bindings.

<a name="type-aliaseselementnamemd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / ElementName

# Type Alias: ElementName

> **ElementName** = keyof `HTMLElementTagNameMap`

Defined in: [types/dom.ts:12](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/dom.ts#L12)

Represents valid HTML element names.
Utilized to dynamically create or manipulate HTML elements.

## Example

```ts
const div = tree("div"); // <- "div" is a valid HTML element name
```

<a name="type-aliaseseventutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / EventUtility

# Type Alias: EventUtility()

> **EventUtility** = \<`E`, `K`\>(`type`, `handler`, `options`?) => [`Utility`](#type-aliasesutilitymd)\<`E`\>

Defined in: [types/utilities.ts:146](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L146)

Attaches event listeners to an element.
Allows specifying event types and handlers.

## Type Parameters

### E

`E` _extends_ `Element`

Element type.

### K

`K` _extends_ keyof `HTMLElementEventMap`

Event key.

## Parameters

### type

`K`

### handler

(`e`) => `void`

### options?

`AddEventListenerOptions`

## Returns

[`Utility`](#type-aliasesutilitymd)\<`E`\>

## Example

```ts
const onClick = addEvent("click", (e) => console.log(e.currentTarget))(MyElement);
```

<a name="type-aliasesgettriggermd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / GetTrigger

# Type Alias: GetTrigger()

> **GetTrigger** = \<`T`, `E`\>(`el`) => `Readonly`\<`T`\>

Defined in: [types/utilities.ts:205](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L205)

Utility for getting triggers from an element for use outside of component

## Type Parameters

### T

`T` _extends_ [`Triggers`](#type-aliasestriggersmd)

Trigger object type

### E

`E` _extends_ `HTMLElement`

Element type (defaults to HTMLElement)

## Parameters

### el

`E`

## Returns

`Readonly`\<`T`\>

## Example

```ts
const triggers = getTriggers(MyElement);
triggers.customTrigger();
```

<a name="type-aliasesroutestatusmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / RouteStatus

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

const app = createForest("#app", () => addChild({ routerStore }, ({ routerStore }) => (routerStore.status === "loading" ? LoadingComponent() : MainComponent()))(tree("div")));
```

<a name="type-aliasesrouterpropsmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / RouterProps

# Type Alias: RouterProps\<T\>

> **RouterProps**\<`T`\> = `object`

Defined in: [types/router.ts:75](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/router.ts#L75)

Properties of the current route.
Represents the state and metadata associated with a specific route.

## Example

```ts
const { routerStore } = createRouter();

const app = createForest("#app", () =>
  addChild({ routerStore }, ({ routerStore }) => {
    const { path, state, status } = routerStore; // <- "routerStore" is a RouterProps
    if (status === "loading") {
      return LoadingComponent();
    } else if (path === "/") {
      return HomeComponent();
    } else if (path === "/about") {
      return AboutComponent();
    }
    return NotFoundComponent();
  })(tree("div"))
);
```

## Type Parameters

### T

`T` = `any`

Type of state data associated with the route.

## Properties

### path

> **path**: `string`

Defined in: [types/router.ts:77](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/router.ts#L77)

The current path of the router.

---

### state

> **state**: `T`

Defined in: [types/router.ts:79](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/router.ts#L79)

The state data associated with the current route.

---

### status

> **status**: [`RouteStatus`](#type-aliasesroutestatusmd)

Defined in: [types/router.ts:81](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/router.ts#L81)

The current status of the route.

<a name="type-aliasesstoremd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / Store

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

---

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

---

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

---

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

---

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

<a name="type-aliasesstoremapmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / StoreMap

# Type Alias: StoreMap\<T\>

> **StoreMap**\<`T`\> = `{ [K in keyof T]: Store<T[K]> }`

Defined in: [types/store.ts:64](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/store.ts#L64)

Map of named stores.
Allows organizing multiple stores under a single object.

## Type Parameters

### T

`T` = `any`

Optional type for the store values

## Example

```ts
const firstStore = createStore({ value: "Hello" });
const secondStore = createStore({ value: "World" });
const storeMap: StoreMap<{ first: string; second: string }> = {
  first: firstStore,
  second: secondStore,
};
```

<a name="type-aliasesstorepropsmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / StoreProps

# Type Alias: StoreProps\<R, S\>

> **StoreProps**\<`R`, `S`\> = \[`S`, (`values`) => `R`\]

Defined in: [types/utilities.ts:30](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L30)

Type for reactive props derived from stores.
Allows dynamically mapping store values to specific properties.

## Type Parameters

### R

`R`

The result type.

### S

`S` _extends_ [`StoreMap`](#type-aliasesstoremapmd) = [`StoreMap`](#type-aliasesstoremapmd)

StoreMap type.

## Example

```ts
const reactiveProps: StoreProps<string, MyStoreMap> = [{ myStore }, ({ myStore }) => myStore.values];
```

<a name="type-aliasesstorevaluesmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / StoreValues

# Type Alias: StoreValues\<S\>

> **StoreValues**\<`S`\> = `{ [K in keyof S]: S[K] extends Store<infer T> ? T : never }`

Defined in: [types/store.ts:80](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/store.ts#L80)

Helper type to extract values from a StoreMap.
Transforms a map of stores into a map of their inner values.

## Type Parameters

### S

`S` _extends_ [`StoreMap`](#type-aliasesstoremapmd)\<`any`\>

StoreMap to extract values from

## Example

```ts
const myStore = createStore({ value: "Hello" });
const myStoreMap: StoreMap<{ myStore: string }> = { myStore };
const myValues: StoreValues<typeof myStoreMap> = { myStore: "Hello" };
```

<a name="type-aliasesstyleutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / StyleUtility

# Type Alias: StyleUtility()

> **StyleUtility** = \<`R`, `S`, `E`\>(...`args`) => [`Utility`](#type-aliasesutilitymd)\<`E`\>

Defined in: [types/utilities.ts:166](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L166)

Applies CSS styles to an element.
Supports reactive styles when using stores.

## Type Parameters

### R

`R` _extends_ `Partial`\<`CSSStyleDeclaration`\>

Style properties to apply.

### S

`S` _extends_ [`StoreMap`](#type-aliasesstoremapmd) = [`StoreMap`](#type-aliasesstoremapmd)

StoreMap type when used reactively.

### E

`E` _extends_ `HTMLElement` = `HTMLElement`

Element type (defaults to HTMLElement).

## Parameters

### args

...[`UtilityProps`](#type-aliasesutilitypropsmd)\<`R`, `S`\>

## Returns

[`Utility`](#type-aliasesutilitymd)\<`E`\>

## Example

```ts
const setColor = addStyle<HTMLDivElement, { color: string }>({ color: "red" })(MyElement);
```

<a name="type-aliasestreenodemd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / TreeNode

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

<a name="type-aliasestriggerutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / TriggerUtility

# Type Alias: TriggerUtility()

> **TriggerUtility** = \<`R`, `S`, `E`\>(...`args`) => [`Utility`](#type-aliasesutilitymd)\<`E`\>

Defined in: [types/utilities.ts:193](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L193)

Utility for adding triggers to an element

## Type Parameters

### R

`R` _extends_ [`Triggers`](#type-aliasestriggersmd)

Trigger object to add

### S

`S` _extends_ [`StoreMap`](#type-aliasesstoremapmd) = [`StoreMap`](#type-aliasesstoremapmd)

StoreMap type when used reactively

### E

`E` _extends_ `HTMLElement` = `HTMLElement`

Element type (defaults to HTMLElement)

## Parameters

### args

...[`UtilityProps`](#type-aliasesutilitypropsmd)\<`R`, `S`\>

## Returns

[`Utility`](#type-aliasesutilitymd)\<`E`\>

## Example

```ts
addTrigger({ customTrigger: () => console.log("Custom trigger") })(MyElement);
const triggers = getTriggers(MyElement);
triggers.customTrigger();
```

<a name="type-aliasestriggersmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / Triggers

# Type Alias: Triggers

> **Triggers** = `{ [K in string]: (args: never[]) => void }`

Defined in: [types/utilities.ts:177](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L177)

Object containing named trigger functions
For use in the TriggerUtility with ElementMeta.triggers

## Example

```ts
const triggers = getTriggers(MyElement);
triggers.customTrigger();
```

<a name="type-aliasesuseutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / UseUtility

# Type Alias: UseUtility()

> **UseUtility** = \<`E`\>(...`utils`) => [`Utility`](#type-aliasesutilitymd)\<`E`\>

Defined in: [types/utilities.ts:90](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L90)

Combines multiple utility functions into a single utility.
Sequentially applies each utility to the element.

## Type Parameters

### E

`E` _extends_ `Element`

Element type.

## Parameters

### utils

...[`Utility`](#type-aliasesutilitymd)\<`E`\>[]

## Returns

[`Utility`](#type-aliasesutilitymd)\<`E`\>

## Example

```ts
const combinedUtility = use<HTMLDivElement>(addAttribute({ "data-active": true }));

combinedUtility(MyElement);
```

<a name="type-aliasesutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / Utility

# Type Alias: Utility()\<E\>

> **Utility**\<`E`\> = (`el`) => `E`

Defined in: [types/utilities.ts:17](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L17)

A utility function that takes an element, applies transformations, and returns the modified element.
Typically used to enhance or manipulate the DOM element in a declarative way.

## Type Parameters

### E

`E` _extends_ `Element`

The type of element the utility operates on.

## Parameters

### el

`E`

## Returns

`E`

## Example

```ts
const addClass: Utility<HTMLDivElement> = (el) => {
  el.classList.add("highlight");
  return el;
};
```

<a name="type-aliasesutilitypropsmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / UtilityProps

# Type Alias: UtilityProps\<R, S\>

> **UtilityProps**\<`R`, `S`\> = [`DirectProps`](#type-aliasesdirectpropsmd)\<`R`\> \| \[`S`, (`values`) => `R`\]

Defined in: [types/utilities.ts:57](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/types/utilities.ts#L57)

Union type for props that can be either direct or store-derived.
Combines both direct and reactive prop types.

## Type Parameters

### R

`R`

The result type.

### S

`S` _extends_ [`StoreMap`](#type-aliasesstoremapmd) = [`StoreMap`](#type-aliasesstoremapmd)

StoreMap type.

## Example

```ts
const myStore = createStore({ value: "Hello" });
const utilityProps: UtilityProps<string, typeof myStore> = [{ myStore }, ({ myStore }) => myStore.value];
const utilityProps: UtilityProps<string> = ["Hello"];
```

<a name="variablesaddattributemd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / addAttribute

# Variable: addAttribute

> `const` **addAttribute**: [`AttributeUtility`](#type-aliasesattributeutilitymd)

Defined in: [utilities/attribute.ts:9](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/utilities/attribute.ts#L9)

<a name="variablesaddchildmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / addChild

# Variable: addChild

> `const` **addChild**: [`ChildUtility`](#type-aliaseschildutilitymd)

Defined in: [utilities/child.ts:47](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/utilities/child.ts#L47)

<a name="variablesaddeventmd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / addEvent

# Variable: addEvent

> `const` **addEvent**: [`EventUtility`](#type-aliaseseventutilitymd)

Defined in: [utilities/event.ts:5](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/utilities/event.ts#L5)

<a name="variablesaddstylemd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / addStyle

# Variable: addStyle

> `const` **addStyle**: [`StyleUtility`](#type-aliasesstyleutilitymd)

Defined in: [utilities/style.ts:4](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/utilities/style.ts#L4)

<a name="variablesaddtriggermd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / addTrigger

# Variable: addTrigger

> `const` **addTrigger**: [`TriggerUtility`](#type-aliasestriggerutilitymd)

Defined in: [utilities/trigger.ts:5](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/utilities/trigger.ts#L5)

<a name="variablescreateutilitymd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / createUtility

# Variable: createUtility

> `const` **createUtility**: [`CreateUtility`](#type-aliasescreateutilitymd)

Defined in: [utilities/core.ts:10](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/utilities/core.ts#L10)

Creates a utility function that enqueues a function to be executed on the next tick

## Template

Element type

## Param

Function to be executed

## Returns

Utility function

<a name="variablesdecoratemd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / decorate

# Variable: decorate

> `const` **decorate**: [`DecorateUtility`](#type-aliasesdecorateutilitymd)

Defined in: [utilities/core.ts:32](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/utilities/core.ts#L32)

Decorates an element by applying utility functions

## Param

Element to decorate

## Param

Array of utility functions to apply

## Returns

Decorated element

<a name="variablesusemd"></a>

[**Forest.js Core Documentation v1.2.0**](#readmemd)

---

[Forest.js Core Documentation](#readmemd) / use

# Variable: use

> `const` **use**: [`UseUtility`](#type-aliasesuseutilitymd)

Defined in: [utilities/core.ts:22](https://github.com/GrangbelrLurain/forest-js/blob/bdde5e53b4a2b124cb391dbc48a1becdc370cd3d/packages/core/src/utilities/core.ts#L22)

Combines multiple utility functions to create a new utility function

## Param

Array of utility functions to combine

## Returns

Combined utility function
