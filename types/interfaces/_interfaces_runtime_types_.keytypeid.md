[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [KeyTypeId](_interfaces_runtime_types_.keytypeid.md)

# Interface: KeyTypeId

u32

## Hierarchy

  ↳ [U32](../classes/_primitive_u32_.u32.md)

  ↳ **KeyTypeId**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.keytypeid.md#constructor)

### Methods

* [toHex](_interfaces_runtime_types_.keytypeid.md#tohex)
* [toRawType](_interfaces_runtime_types_.keytypeid.md#torawtype)
* [toU8a](_interfaces_runtime_types_.keytypeid.md#tou8a)

## Constructors

###  constructor

\+ **new KeyTypeId**(`value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[KeyTypeId](_interfaces_runtime_types_.keytypeid.md)*

*Inherited from [U32](../classes/_primitive_u32_.u32.md).[constructor](../classes/_primitive_u32_.u32.md#constructor)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[constructor](../classes/_codec_uint_.uint.md#constructor)*

*Defined in [primitive/U32.ts:14](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/primitive/U32.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[KeyTypeId](_interfaces_runtime_types_.keytypeid.md)*

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
