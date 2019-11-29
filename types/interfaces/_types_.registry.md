[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Registry](_types_.registry.md)

# Interface: Registry

## Hierarchy

* **Registry**

## Implemented by

* [TypeRegistry](../classes/_codec_create_registry_.typeregistry.md)

## Index

### Methods

* [findMetaCall](_types_.registry.md#findmetacall)
* [findMetaEvent](_types_.registry.md#findmetaevent)
* [get](_types_.registry.md#get)
* [getOrThrow](_types_.registry.md#getorthrow)
* [hasClass](_types_.registry.md#hasclass)
* [hasDef](_types_.registry.md#hasdef)
* [hasType](_types_.registry.md#hastype)
* [register](_types_.registry.md#register)
* [setMetadata](_types_.registry.md#setmetadata)

## Methods

###  findMetaCall

▸ **findMetaCall**(`callIndex`: Uint8Array): *[CallFunction](_types_.callfunction.md)*

*Defined in [packages/types/src/types.ts:355](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L355)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | Uint8Array |

**Returns:** *[CallFunction](_types_.callfunction.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: Uint8Array): *[Constructor](_types_.constructor.md)‹any›*

*Defined in [packages/types/src/types.ts:359](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L359)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | Uint8Array |

**Returns:** *[Constructor](_types_.constructor.md)‹any›*

___

###  get

▸ **get**<**T**>(`name`: string): *[Constructor](_types_.constructor.md)‹T› | undefined*

*Defined in [packages/types/src/types.ts:361](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L361)*

**Type parameters:**

▪ **T**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](_types_.constructor.md)‹T› | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](_types_.constructor.md)‹T›*

*Defined in [packages/types/src/types.ts:362](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L362)*

**Type parameters:**

▪ **T**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](_types_.constructor.md)‹T›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Defined in [packages/types/src/types.ts:363](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L363)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Defined in [packages/types/src/types.ts:364](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L364)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Defined in [packages/types/src/types.ts:365](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L365)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes)): *void*

*Defined in [packages/types/src/types.ts:366](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L366)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](_types_.constructor.md) &#124; [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](_types_.constructor.md)): *void*

*Defined in [packages/types/src/types.ts:367](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L367)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](_types_.constructor.md) |

**Returns:** *void*

▸ **register**(`arg1`: string | [Constructor](_types_.constructor.md) | [RegistryTypes](../modules/_types_.md#registrytypes), `arg2?`: [Constructor](_types_.constructor.md)): *void*

*Defined in [packages/types/src/types.ts:368](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L368)*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | string &#124; [Constructor](_types_.constructor.md) &#124; [RegistryTypes](../modules/_types_.md#registrytypes) |
`arg2?` | [Constructor](_types_.constructor.md) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](_types_.registrymetadata.md)): *void*

*Defined in [packages/types/src/types.ts:369](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L369)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](_types_.registrymetadata.md) |

**Returns:** *void*
