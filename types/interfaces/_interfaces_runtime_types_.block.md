[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [Block](_interfaces_runtime_types_.block.md)

# Interface: Block <**S, T, V, E**>

GenericBlock

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Block](../classes/_primitive_generic_block_.block.md)

  ↳ **Block**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.block.md#constructor)

### Properties

* [registry](_interfaces_runtime_types_.block.md#registry)

### Accessors

* [Type](_interfaces_runtime_types_.block.md#type)
* [contentHash](_interfaces_runtime_types_.block.md#contenthash)
* [encodedLength](_interfaces_runtime_types_.block.md#encodedlength)
* [extrinsics](_interfaces_runtime_types_.block.md#extrinsics)
* [hash](_interfaces_runtime_types_.block.md#hash)
* [header](_interfaces_runtime_types_.block.md#header)
* [isEmpty](_interfaces_runtime_types_.block.md#isempty)

### Methods

* [eq](_interfaces_runtime_types_.block.md#eq)
* [get](_interfaces_runtime_types_.block.md#get)
* [getAtIndex](_interfaces_runtime_types_.block.md#getatindex)
* [toArray](_interfaces_runtime_types_.block.md#toarray)
* [toHex](_interfaces_runtime_types_.block.md#tohex)
* [toJSON](_interfaces_runtime_types_.block.md#tojson)
* [toRawType](_interfaces_runtime_types_.block.md#torawtype)
* [toString](_interfaces_runtime_types_.block.md#tostring)
* [toU8a](_interfaces_runtime_types_.block.md#tou8a)
* [typesToMap](_interfaces_runtime_types_.block.md#static-typestomap)
* [with](_interfaces_runtime_types_.block.md#static-with)

## Constructors

###  constructor

\+ **new Block**(`registry`: [Registry](_types_.registry.md), `value?`: [BlockValue](_primitive_generic_block_.blockvalue.md) | Uint8Array): *[Block](_interfaces_runtime_types_.block.md)*

*Inherited from [Block](../classes/_primitive_generic_block_.block.md).[constructor](../classes/_primitive_generic_block_.block.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Generic/Block.ts:33](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/primitive/Generic/Block.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`value?` | [BlockValue](_primitive_generic_block_.blockvalue.md) &#124; Uint8Array |

**Returns:** *[Block](_interfaces_runtime_types_.block.md)*

## Properties

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  contentHash

• **get contentHash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [Block](../classes/_primitive_generic_block_.block.md).[contentHash](../classes/_primitive_generic_block_.block.md#contenthash)*

*Defined in [primitive/Generic/Block.ts:44](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/primitive/Generic/Block.ts#L44)*

**`description`** Encodes a content [Hash](_interfaces_runtime_types_.hash.md) for the block

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  extrinsics

• **get extrinsics**(): *[Vec](../classes/_codec_vec_.vec.md)‹[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)›*

*Inherited from [Block](../classes/_primitive_generic_block_.block.md).[extrinsics](../classes/_primitive_generic_block_.block.md#extrinsics)*

*Defined in [primitive/Generic/Block.ts:51](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/primitive/Generic/Block.ts#L51)*

**`description`** The [Extrinsic](_interfaces_runtime_types_.extrinsic.md) contained in the block

**Returns:** *[Vec](../classes/_codec_vec_.vec.md)‹[Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)›*

___

###  hash

• **get hash**(): *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [Block](../classes/_primitive_generic_block_.block.md).[hash](../classes/_primitive_generic_block_.block.md#hash)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [primitive/Generic/Block.ts:58](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/primitive/Generic/Block.ts#L58)*

**`description`** Block/header [Hash](_interfaces_runtime_types_.hash.md)

**Returns:** *[Hash](_interfaces_runtime_types_.hash.md)*

___

###  header

• **get header**(): *[Header](_interfaces_runtime_types_.header.md)*

*Inherited from [Block](../classes/_primitive_generic_block_.block.md).[header](../classes/_primitive_generic_block_.block.md#header)*

*Defined in [primitive/Generic/Block.ts:65](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/primitive/Generic/Block.ts#L65)*

**`description`** The [Header](_interfaces_runtime_types_.header.md) of the block

**Returns:** *[Header](_interfaces_runtime_types_.header.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](_types_.registry.md), `Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/26b6a59725/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
