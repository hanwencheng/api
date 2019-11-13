[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/authorship/types"](../modules/_interfaces_authorship_types_.md) › [InclusionHeight](_interfaces_authorship_types_.inclusionheight.md)

# Interface: InclusionHeight

BlockNumber

## Hierarchy

  ↳ [BlockNumber](_interfaces_runtime_types_.blocknumber.md)

  ↳ **InclusionHeight**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_authorship_types_.inclusionheight.md#constructor)

### Methods

* [toHex](_interfaces_authorship_types_.inclusionheight.md#tohex)
* [toRawType](_interfaces_authorship_types_.inclusionheight.md#torawtype)
* [toU8a](_interfaces_authorship_types_.inclusionheight.md#tou8a)

## Constructors

###  constructor

\+ **new InclusionHeight**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[InclusionHeight](_interfaces_authorship_types_.inclusionheight.md)*

*Inherited from [U32](../classes/_primitive_u32_.u32.md).[constructor](../classes/_primitive_u32_.u32.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[InclusionHeight](_interfaces_authorship_types_.inclusionheight.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/UInt.ts#L37)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toRawType](../classes/_codec_uint_.uint.md#torawtype)*

*Overrides void*

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
