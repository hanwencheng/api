[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ImmortalEra](_interfaces_runtime_types_.immortalera.md)

# Interface: ImmortalEra

GenericImmortalEra

## Hierarchy

  ↳ [ImmortalEra](../classes/_primitive_extrinsic_extrinsicera_.immortalera.md)

  ↳ **ImmortalEra**

## Implements

* [Codec](_types_.codec.md)

## Indexable

* \[ **index**: *number*\]: number

GenericImmortalEra

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.immortalera.md#constructor)

### Accessors

* [encodedLength](_interfaces_runtime_types_.immortalera.md#encodedlength)
* [hash](_interfaces_runtime_types_.immortalera.md#hash)
* [isEmpty](_interfaces_runtime_types_.immortalera.md#isempty)
* [length](_interfaces_runtime_types_.immortalera.md#length)

### Methods

* [bitLength](_interfaces_runtime_types_.immortalera.md#bitlength)
* [eq](_interfaces_runtime_types_.immortalera.md#eq)
* [subarray](_interfaces_runtime_types_.immortalera.md#subarray)
* [toHex](_interfaces_runtime_types_.immortalera.md#tohex)
* [toJSON](_interfaces_runtime_types_.immortalera.md#tojson)
* [toRawType](_interfaces_runtime_types_.immortalera.md#torawtype)
* [toString](_interfaces_runtime_types_.immortalera.md#tostring)
* [toU8a](_interfaces_runtime_types_.immortalera.md#tou8a)

## Constructors

###  constructor

\+ **new ImmortalEra**(`value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[ImmortalEra](_interfaces_runtime_types_.immortalera.md)*

*Inherited from [ImmortalEra](../classes/_primitive_extrinsic_extrinsicera_.immortalera.md).[constructor](../classes/_primitive_extrinsic_extrinsicera_.immortalera.md#constructor)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[constructor](../classes/_codec_u8a_.u8a.md#constructor)*

*Defined in [primitive/Extrinsic/ExtrinsicEra.ts:36](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/primitive/Extrinsic/ExtrinsicEra.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[ImmortalEra](_interfaces_runtime_types_.immortalera.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[encodedLength](../classes/_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:37](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L37)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[hash](../classes/_codec_u8a_.u8a.md#hash)*

*Defined in [codec/U8a.ts:44](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L44)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[isEmpty](../classes/_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L51)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[length](../classes/_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [codec/U8a.ts:58](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L58)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[bitLength](../classes/_codec_u8a_.u8a.md#bitlength)*

*Defined in [codec/U8a.ts:66](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L66)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[eq](../classes/_codec_u8a_.u8a.md#eq)*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L73)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *Uint8Array*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[subarray](../classes/_codec_u8a_.u8a.md#subarray)*

*Overrides void*

*Defined in [codec/U8a.ts:87](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L87)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *Uint8Array*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toHex](../classes/_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:94](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L94)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toJSON](../classes/_codec_u8a_.u8a.md#tojson)*

*Defined in [codec/U8a.ts:101](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L101)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toRawType](../classes/_codec_u8a_.u8a.md#torawtype)*

*Defined in [codec/U8a.ts:108](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L108)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toString](../classes/_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [codec/U8a.ts:115](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L115)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toU8a](../classes/_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:124](https://github.com/polkadot-js/api/blob/921e329d18/packages/types/src/codec/U8a.ts#L124)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
