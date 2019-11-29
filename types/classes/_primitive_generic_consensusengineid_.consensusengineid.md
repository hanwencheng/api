[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Generic/ConsensusEngineId"](../modules/_primitive_generic_consensusengineid_.md) › [ConsensusEngineId](_primitive_generic_consensusengineid_.consensusengineid.md)

# Class: ConsensusEngineId

**`name`** ConsensusEngineId

**`description`** 
A 4-byte identifier (actually a [u8; 4]) identifying the engine, e.g. for Aura it would be [b'a', b'u', b'r', b'a']

## Hierarchy

  ↳ [U32](_primitive_u32_.u32.md)

  ↳ **ConsensusEngineId**

  ↳ [ConsensusEngineId](../interfaces/_interfaces_runtime_types_.consensusengineid.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_generic_consensusengineid_.consensusengineid.md#constructor)

### Accessors

* [isAura](_primitive_generic_consensusengineid_.consensusengineid.md#isaura)
* [isBabe](_primitive_generic_consensusengineid_.consensusengineid.md#isbabe)
* [isGrandpa](_primitive_generic_consensusengineid_.consensusengineid.md#isgrandpa)

### Methods

* [extractAuthor](_primitive_generic_consensusengineid_.consensusengineid.md#extractauthor)
* [toHex](_primitive_generic_consensusengineid_.consensusengineid.md#tohex)
* [toRawType](_primitive_generic_consensusengineid_.consensusengineid.md#torawtype)
* [toString](_primitive_generic_consensusengineid_.consensusengineid.md#tostring)
* [toU8a](_primitive_generic_consensusengineid_.consensusengineid.md#tou8a)
* [idToString](_primitive_generic_consensusengineid_.consensusengineid.md#static-idtostring)
* [stringToId](_primitive_generic_consensusengineid_.consensusengineid.md#static-stringtoid)
* [with](_primitive_generic_consensusengineid_.consensusengineid.md#static-with)

## Constructors

###  constructor

\+ **new ConsensusEngineId**(`registry`: [Registry](../interfaces/_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[ConsensusEngineId](_primitive_generic_consensusengineid_.consensusengineid.md)*

*Inherited from [U32](_primitive_u32_.u32.md).[constructor](_primitive_u32_.u32.md#constructor)*

*Overrides [UInt](_codec_uint_.uint.md).[constructor](_codec_uint_.uint.md#constructor)*

*Defined in [packages/types/src/primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[ConsensusEngineId](_primitive_generic_consensusengineid_.consensusengineid.md)*

## Accessors

###  isAura

• **get isAura**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:43](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L43)*

**`description`** `true` if the engine matches aura

**Returns:** *boolean*

___

###  isBabe

• **get isBabe**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:50](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L50)*

**`description`** `true` is the engine matches babe

**Returns:** *boolean*

___

###  isGrandpa

• **get isGrandpa**(): *boolean*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:57](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L57)*

**`description`** `true` is the engine matches grandpa

**Returns:** *boolean*

## Methods

###  extractAuthor

▸ **extractAuthor**(`bytes`: [Bytes](_primitive_bytes_.bytes.md), `sessionValidators`: [AccountId](../interfaces/_interfaces_runtime_types_.accountid.md)[]): *[AccountId](../interfaces/_interfaces_runtime_types_.accountid.md) | undefined*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:80](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L80)*

**`description`** From the input bytes, decode into an author

**Parameters:**

Name | Type |
------ | ------ |
`bytes` | [Bytes](_primitive_bytes_.bytes.md) |
`sessionValidators` | [AccountId](../interfaces/_interfaces_runtime_types_.accountid.md)[] |

**Returns:** *[AccountId](../interfaces/_interfaces_runtime_types_.accountid.md) | undefined*

___

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:38](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/codec/UInt.ts#L38)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [UInt](_codec_uint_.uint.md).[toRawType](_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:50](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/codec/UInt.ts#L50)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:93](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L93)*

**`description`** Override the default toString to return a 4-byte string

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:64](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/codec/UInt.ts#L64)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` idToString

▸ **idToString**(`input`: number | BN): *string*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:26](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | number &#124; BN |

**Returns:** *string*

___

### `Static` stringToId

▸ **stringToId**(`input`: string): *number*

*Defined in [packages/types/src/primitive/Generic/ConsensusEngineId.ts:33](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/primitive/Generic/ConsensusEngineId.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *number*

___

### `Static` with

▸ **with**(`bitLength?`: [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength)): *[Constructor](../interfaces/_types_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*

*Inherited from [UInt](_codec_uint_.uint.md).[with](_codec_uint_.uint.md#static-with)*

*Defined in [packages/types/src/codec/UInt.ts:27](https://github.com/polkadot-js/api/blob/e2e8e3fedd/packages/types/src/codec/UInt.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength?` | [UIntBitLength](../modules/_codec_abstractint_.md#uintbitlength) |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[UInt](_codec_uint_.uint.md)›*
