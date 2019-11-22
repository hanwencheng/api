[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [ModuleMetadataLatest](_interfaces_metadata_types_.modulemetadatalatest.md)

# Interface: ModuleMetadataLatest <**S, T, V, E**>

ModuleMetadataV8

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [ModuleMetadataV8](_interfaces_metadata_types_.modulemetadatav8.md)

  ↳ **ModuleMetadataLatest**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.modulemetadatalatest.md#constructor)

### Properties

* [calls](_interfaces_metadata_types_.modulemetadatalatest.md#calls)
* [constants](_interfaces_metadata_types_.modulemetadatalatest.md#constants)
* [errors](_interfaces_metadata_types_.modulemetadatalatest.md#errors)
* [events](_interfaces_metadata_types_.modulemetadatalatest.md#events)
* [name](_interfaces_metadata_types_.modulemetadatalatest.md#name)
* [registry](_interfaces_metadata_types_.modulemetadatalatest.md#registry)
* [storage](_interfaces_metadata_types_.modulemetadatalatest.md#storage)

### Accessors

* [Type](_interfaces_metadata_types_.modulemetadatalatest.md#type)
* [encodedLength](_interfaces_metadata_types_.modulemetadatalatest.md#encodedlength)
* [hash](_interfaces_metadata_types_.modulemetadatalatest.md#hash)
* [isEmpty](_interfaces_metadata_types_.modulemetadatalatest.md#isempty)

### Methods

* [eq](_interfaces_metadata_types_.modulemetadatalatest.md#eq)
* [get](_interfaces_metadata_types_.modulemetadatalatest.md#get)
* [getAtIndex](_interfaces_metadata_types_.modulemetadatalatest.md#getatindex)
* [toArray](_interfaces_metadata_types_.modulemetadatalatest.md#toarray)
* [toHex](_interfaces_metadata_types_.modulemetadatalatest.md#tohex)
* [toJSON](_interfaces_metadata_types_.modulemetadatalatest.md#tojson)
* [toRawType](_interfaces_metadata_types_.modulemetadatalatest.md#torawtype)
* [toString](_interfaces_metadata_types_.modulemetadatalatest.md#tostring)
* [toU8a](_interfaces_metadata_types_.modulemetadatalatest.md#tou8a)
* [typesToMap](_interfaces_metadata_types_.modulemetadatalatest.md#static-typestomap)
* [with](_interfaces_metadata_types_.modulemetadatalatest.md#static-with)

## Constructors

###  constructor

\+ **new ModuleMetadataLatest**(`registry`: [Registry](_types_.registry.md), `Types`: S, `value`: V | Map‹any, any› | any[] | string, `jsonMap`: Map‹keyof S, string›): *[ModuleMetadataLatest](_interfaces_metadata_types_.modulemetadatalatest.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:38](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`Types` | S | - |
`value` | V &#124; Map‹any, any› &#124; any[] &#124; string |  {} as unknown as V |
`jsonMap` | Map‹keyof S, string› |  new Map() |

**Returns:** *[ModuleMetadataLatest](_interfaces_metadata_types_.modulemetadatalatest.md)*

## Properties

###  calls

• **calls**: *[Option](../classes/_codec_option_.option.md)‹[Vec](../classes/_codec_vec_.vec.md)‹[FunctionMetadataV8](_interfaces_metadata_types_.functionmetadatav8.md)››*

*Inherited from [ModuleMetadataV8](_interfaces_metadata_types_.modulemetadatav8.md).[calls](_interfaces_metadata_types_.modulemetadatav8.md#calls)*

*Defined in [interfaces/metadata/types.ts:436](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/interfaces/metadata/types.ts#L436)*

Option<Vec<FunctionMetadataV8>>

___

###  constants

• **constants**: *[Vec](../classes/_codec_vec_.vec.md)‹[ModuleConstantMetadataV8](_interfaces_metadata_types_.moduleconstantmetadatav8.md)›*

*Inherited from [ModuleMetadataV8](_interfaces_metadata_types_.modulemetadatav8.md).[constants](_interfaces_metadata_types_.modulemetadatav8.md#constants)*

*Defined in [interfaces/metadata/types.ts:440](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/interfaces/metadata/types.ts#L440)*

Vec<ModuleConstantMetadataV8>

___

###  errors

• **errors**: *[Vec](../classes/_codec_vec_.vec.md)‹[ErrorMetadataV8](_interfaces_metadata_types_.errormetadatav8.md)›*

*Inherited from [ModuleMetadataV8](_interfaces_metadata_types_.modulemetadatav8.md).[errors](_interfaces_metadata_types_.modulemetadatav8.md#errors)*

*Defined in [interfaces/metadata/types.ts:442](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/interfaces/metadata/types.ts#L442)*

Vec<ErrorMetadataV8>

___

###  events

• **events**: *[Option](../classes/_codec_option_.option.md)‹[Vec](../classes/_codec_vec_.vec.md)‹[EventMetadataV8](_interfaces_metadata_types_.eventmetadatav8.md)››*

*Inherited from [ModuleMetadataV8](_interfaces_metadata_types_.modulemetadatav8.md).[events](_interfaces_metadata_types_.modulemetadatav8.md#events)*

*Defined in [interfaces/metadata/types.ts:438](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/interfaces/metadata/types.ts#L438)*

Option<Vec<EventMetadataV8>>

___

###  name

• **name**: *[Text](../classes/_primitive_text_.text.md)*

*Inherited from [ModuleMetadataV8](_interfaces_metadata_types_.modulemetadatav8.md).[name](_interfaces_metadata_types_.modulemetadatav8.md#name)*

*Defined in [interfaces/metadata/types.ts:432](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/interfaces/metadata/types.ts#L432)*

Text

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L34)*

___

###  storage

• **storage**: *[Option](../classes/_codec_option_.option.md)‹[StorageMetadataV8](_interfaces_metadata_types_.storagemetadatav8.md)›*

*Inherited from [ModuleMetadataV8](_interfaces_metadata_types_.modulemetadatav8.md).[storage](_interfaces_metadata_types_.modulemetadatav8.md#storage)*

*Defined in [interfaces/metadata/types.ts:434](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/interfaces/metadata/types.ts#L434)*

Option<StorageMetadataV8>

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L189)*

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

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L204)*

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

*Defined in [codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L266)*

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

*Defined in [codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L238)*

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

*Defined in [codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
