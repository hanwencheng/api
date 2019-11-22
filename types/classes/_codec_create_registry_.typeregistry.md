[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/registry"](../modules/_codec_create_registry_.md) › [TypeRegistry](_codec_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* [Registry](../interfaces/_types_.registry.md)

## Index

### Constructors

* [constructor](_codec_create_registry_.typeregistry.md#constructor)

### Methods

* [findMetaCall](_codec_create_registry_.typeregistry.md#findmetacall)
* [findMetaEvent](_codec_create_registry_.typeregistry.md#findmetaevent)
* [get](_codec_create_registry_.typeregistry.md#get)
* [getDefinition](_codec_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_codec_create_registry_.typeregistry.md#getorthrow)
* [hasClass](_codec_create_registry_.typeregistry.md#hasclass)
* [hasDef](_codec_create_registry_.typeregistry.md#hasdef)
* [hasType](_codec_create_registry_.typeregistry.md#hastype)
* [register](_codec_create_registry_.typeregistry.md#register)
* [setMetadata](_codec_create_registry_.typeregistry.md#setmetadata)

## Constructors

###  constructor

\+ **new TypeRegistry**(): *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

*Defined in [codec/create/registry.ts:28](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L28)*

**Returns:** *[TypeRegistry](_codec_create_registry_.typeregistry.md)*

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: Uint8Array): *[CallFunction](../interfaces/_types_.callfunction.md)*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:46](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | Uint8Array |

**Returns:** *[CallFunction](../interfaces/_types_.callfunction.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: Uint8Array): *[Constructor](../interfaces/_types_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:52](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | Uint8Array |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[EventData](_primitive_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string): *[Constructor](../interfaces/_types_.constructor.md)‹T› | undefined*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:60](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L60)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹T› | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Defined in [codec/create/registry.ts:83](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:87](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L87)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹T›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:97](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:101](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:105](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:109](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_.constructor.md) &#124; [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_.constructor.md)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:112](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_.constructor.md) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](../interfaces/_types_.registrymetadata.md)): *void*

*Implementation of [Registry](../interfaces/_types_.registry.md)*

*Defined in [codec/create/registry.ts:149](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/codec/create/registry.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_types_.registrymetadata.md) |

**Returns:** *void*
