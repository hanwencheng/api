[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/system/types"](../modules/_interfaces_system_types_.md) › [Key](_interfaces_system_types_.key.md)

# Interface: Key

Bytes

## Hierarchy

  ↳ [Bytes](../classes/_primitive_bytes_.bytes.md)

  ↳ **Key**

## Implements

* [Codec](_types_.codec.md)

## Indexable

* \[ **index**: *number*\]: number

Bytes

## Index

### Constructors

* [constructor](_interfaces_system_types_.key.md#constructor)

### Properties

* [registry](_interfaces_system_types_.key.md#registry)

### Accessors

* [encodedLength](_interfaces_system_types_.key.md#encodedlength)
* [hash](_interfaces_system_types_.key.md#hash)
* [isEmpty](_interfaces_system_types_.key.md#isempty)
* [length](_interfaces_system_types_.key.md#length)

### Methods

* [bitLength](_interfaces_system_types_.key.md#bitlength)
* [eq](_interfaces_system_types_.key.md#eq)
* [subarray](_interfaces_system_types_.key.md#subarray)
* [toHex](_interfaces_system_types_.key.md#tohex)
* [toJSON](_interfaces_system_types_.key.md#tojson)
* [toRawType](_interfaces_system_types_.key.md#torawtype)
* [toString](_interfaces_system_types_.key.md#tostring)
* [toU8a](_interfaces_system_types_.key.md#tou8a)

## Constructors

###  constructor

\+ **new Key**(`registry`: [Registry](_types_.registry.md), `value?`: [AnyU8a](../modules/_types_.md#anyu8a)): *[Key](_interfaces_system_types_.key.md)*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[constructor](../classes/_primitive_bytes_.bytes.md#constructor)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[constructor](../classes/_codec_u8a_.u8a.md#constructor)*

*Defined in [packages/types/src/primitive/Bytes.ts:19](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/primitive/Bytes.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** *[Key](_interfaces_system_types_.key.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[registry](../classes/_codec_u8a_.u8a.md#registry)*

*Defined in [packages/types/src/codec/U8a.ts:20](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L20)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[encodedLength](../classes/_primitive_bytes_.bytes.md#encodedlength)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[encodedLength](../classes/_codec_u8a_.u8a.md#encodedlength)*

*Defined in [packages/types/src/primitive/Bytes.ts:53](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/primitive/Bytes.ts#L53)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[hash](../classes/_codec_u8a_.u8a.md#hash)*

*Defined in [packages/types/src/codec/U8a.ts:46](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[isEmpty](../classes/_codec_u8a_.u8a.md#isempty)*

*Defined in [packages/types/src/codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L53)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[length](../classes/_codec_u8a_.u8a.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:60](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L60)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[bitLength](../classes/_codec_u8a_.u8a.md#bitlength)*

*Defined in [packages/types/src/codec/U8a.ts:68](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L68)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[eq](../classes/_codec_u8a_.u8a.md#eq)*

*Defined in [packages/types/src/codec/U8a.ts:75](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L75)*

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

*Defined in [packages/types/src/codec/U8a.ts:89](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L89)*

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

*Defined in [packages/types/src/codec/U8a.ts:96](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L96)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toJSON](../classes/_codec_u8a_.u8a.md#tojson)*

*Defined in [packages/types/src/codec/U8a.ts:103](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L103)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[toRawType](../classes/_primitive_bytes_.bytes.md#torawtype)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[toRawType](../classes/_codec_u8a_.u8a.md#torawtype)*

*Defined in [packages/types/src/primitive/Bytes.ts:60](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/primitive/Bytes.ts#L60)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [U8a](../classes/_codec_u8a_.u8a.md).[toString](../classes/_codec_u8a_.u8a.md#tostring)*

*Overrides void*

*Defined in [packages/types/src/codec/U8a.ts:117](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/codec/U8a.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Bytes](../classes/_primitive_bytes_.bytes.md).[toU8a](../classes/_primitive_bytes_.bytes.md#tou8a)*

*Overrides [U8a](../classes/_codec_u8a_.u8a.md).[toU8a](../classes/_codec_u8a_.u8a.md#tou8a)*

*Defined in [packages/types/src/primitive/Bytes.ts:68](https://github.com/polkadot-js/api/blob/aaff64404a/packages/types/src/primitive/Bytes.ts#L68)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
