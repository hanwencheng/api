[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/grandpa/types"](../modules/_interfaces_grandpa_types_.md) › [SetId](_interfaces_grandpa_types_.setid.md)

# Interface: SetId

u64

## Hierarchy

  ↳ [U64](../classes/_primitive_u64_.u64.md)

  ↳ **SetId**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_grandpa_types_.setid.md#constructor)

### Methods

* [toHex](_interfaces_grandpa_types_.setid.md#tohex)
* [toRawType](_interfaces_grandpa_types_.setid.md#torawtype)
* [toU8a](_interfaces_grandpa_types_.setid.md#tou8a)

## Constructors

###  constructor

\+ **new SetId**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[SetId](_interfaces_grandpa_types_.setid.md)*

*Inherited from [U64](../classes/_primitive_u64_.u64.md).[constructor](../classes/_primitive_u64_.u64.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U64.ts:14](https://github.com/polkadot-js/api/blob/16e0ea9315/packages/types/src/primitive/U64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[SetId](_interfaces_grandpa_types_.setid.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/16e0ea9315/packages/types/src/codec/UInt.ts#L37)*

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

*Defined in [codec/UInt.ts:49](https://github.com/polkadot-js/api/blob/16e0ea9315/packages/types/src/codec/UInt.ts#L49)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/16e0ea9315/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
