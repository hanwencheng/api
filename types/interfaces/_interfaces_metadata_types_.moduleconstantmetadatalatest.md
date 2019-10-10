[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [ModuleConstantMetadataLatest](_interfaces_metadata_types_.moduleconstantmetadatalatest.md)

# Interface: ModuleConstantMetadataLatest <**S, T, V, E**>

ModuleConstantMetadataV8

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [ModuleConstantMetadataV8](_interfaces_metadata_types_.moduleconstantmetadatav8.md)

  ↳ **ModuleConstantMetadataLatest**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#constructor)

### Properties

* [documentation](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#documentation)
* [name](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#name)
* [type](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#type)
* [value](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#value)

### Accessors

* [Type](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#type)
* [encodedLength](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#encodedlength)
* [hash](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#hash)
* [isEmpty](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#isempty)

### Methods

* [eq](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#eq)
* [get](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#get)
* [getAtIndex](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#getatindex)
* [toArray](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#toarray)
* [toHex](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#tohex)
* [toJSON](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#tojson)
* [toRawType](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#torawtype)
* [toString](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#tostring)
* [toU8a](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#tou8a)
* [typesToMap](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#static-typestomap)
* [with](_interfaces_metadata_types_.moduleconstantmetadatalatest.md#static-with)

## Constructors

###  constructor

\+ **new ModuleConstantMetadataLatest**(`Types`: S, `value`: V | Map‹any, any› | any[] | string, `jsonMap`: Map‹keyof S, string›): *[ModuleConstantMetadataLatest](_interfaces_metadata_types_.moduleconstantmetadatalatest.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:36](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | S | - |
`value` | V &#124; Map‹any, any› &#124; any[] &#124; string |  {} as unknown as V |
`jsonMap` | Map‹keyof S, string› |  new Map() |

**Returns:** *[ModuleConstantMetadataLatest](_interfaces_metadata_types_.moduleconstantmetadatalatest.md)*

## Properties

###  documentation

• **documentation**: *[Vec](../classes/_codec_vec_.vec.md)‹[Text](../classes/_primitive_text_.text.md)›*

*Inherited from [ModuleConstantMetadataV6](_interfaces_metadata_types_.moduleconstantmetadatav6.md).[documentation](_interfaces_metadata_types_.moduleconstantmetadatav6.md#documentation)*

*Defined in [interfaces/metadata/types.ts:264](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/interfaces/metadata/types.ts#L264)*

Vec<Text>

___

###  name

• **name**: *[Text](../classes/_primitive_text_.text.md)*

*Inherited from [ModuleConstantMetadataV6](_interfaces_metadata_types_.moduleconstantmetadatav6.md).[name](_interfaces_metadata_types_.moduleconstantmetadatav6.md#name)*

*Defined in [interfaces/metadata/types.ts:258](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/interfaces/metadata/types.ts#L258)*

Text

___

###  type

• **type**: *[Type](../classes/_primitive_type_.type.md)*

*Inherited from [ModuleConstantMetadataV6](_interfaces_metadata_types_.moduleconstantmetadatav6.md).[type](_interfaces_metadata_types_.moduleconstantmetadatav6.md#type)*

*Defined in [interfaces/metadata/types.ts:260](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/interfaces/metadata/types.ts#L260)*

Type

___

###  value

• **value**: *[Bytes](../classes/_primitive_bytes_.bytes.md)*

*Inherited from [ModuleConstantMetadataV6](_interfaces_metadata_types_.moduleconstantmetadatav6.md).[value](_interfaces_metadata_types_.moduleconstantmetadatav6.md#value)*

*Defined in [interfaces/metadata/types.ts:262](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/interfaces/metadata/types.ts#L262)*

Bytes

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L186)*

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

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L194)*

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

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L201)*

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

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*