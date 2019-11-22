[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md)

# Interface: WeightMultiplier

Fixed64

## Hierarchy

  ↳ [I64Fixed](../classes/_primitive_i64fixed_.i64fixed.md)

  ↳ **WeightMultiplier**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.weightmultiplier.md#constructor)

### Methods

* [toHex](_interfaces_runtime_types_.weightmultiplier.md#tohex)
* [toRawType](_interfaces_runtime_types_.weightmultiplier.md#torawtype)
* [toU8a](_interfaces_runtime_types_.weightmultiplier.md#tou8a)

## Constructors

###  constructor

\+ **new WeightMultiplier**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyNumber](../modules/_types_.md#anynumber)): *[WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md)*

*Inherited from [I64](../classes/_primitive_i64_.i64.md).[constructor](../classes/_primitive_i64_.i64.md#constructor)*

*Overrides [Int](../classes/_codec_int_.int.md).[constructor](../classes/_codec_int_.int.md#constructor)*

*Defined in [primitive/I64.ts:14](https://github.com/polkadot-js/api/blob/e12f2f67c6/packages/types/src/primitive/I64.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *[WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [Int](../classes/_codec_int_.int.md).[toHex](../classes/_codec_int_.int.md#tohex)*

*Overrides void*

*Defined in [codec/Int.ts:29](https://github.com/polkadot-js/api/blob/e12f2f67c6/packages/types/src/codec/Int.ts#L29)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Int](../classes/_codec_int_.int.md).[toRawType](../classes/_codec_int_.int.md#torawtype)*

*Overrides void*

*Defined in [codec/Int.ts:40](https://github.com/polkadot-js/api/blob/e12f2f67c6/packages/types/src/codec/Int.ts#L40)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Int](../classes/_codec_int_.int.md).[toU8a](../classes/_codec_int_.int.md#tou8a)*

*Overrides void*

*Defined in [codec/Int.ts:49](https://github.com/polkadot-js/api/blob/e12f2f67c6/packages/types/src/codec/Int.ts#L49)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
