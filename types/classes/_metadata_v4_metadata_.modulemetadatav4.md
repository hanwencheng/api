[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/v4/Metadata"](../modules/_metadata_v4_metadata_.md) › [ModuleMetadataV4](_metadata_v4_metadata_.modulemetadatav4.md)

# Class: ModuleMetadataV4 <**S, T, V, E**>

**`name`** ModuleMetadataV4

**`description`** 
The definition of a module in the system

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ModuleMetadataV4**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v4_metadata_.modulemetadatav4.md#constructor)

### Accessors

* [Type](_metadata_v4_metadata_.modulemetadatav4.md#type)
* [calls](_metadata_v4_metadata_.modulemetadatav4.md#calls)
* [encodedLength](_metadata_v4_metadata_.modulemetadatav4.md#encodedlength)
* [events](_metadata_v4_metadata_.modulemetadatav4.md#events)
* [hash](_metadata_v4_metadata_.modulemetadatav4.md#hash)
* [isEmpty](_metadata_v4_metadata_.modulemetadatav4.md#isempty)
* [name](_metadata_v4_metadata_.modulemetadatav4.md#name)
* [prefix](_metadata_v4_metadata_.modulemetadatav4.md#prefix)
* [storage](_metadata_v4_metadata_.modulemetadatav4.md#storage)

### Methods

* [eq](_metadata_v4_metadata_.modulemetadatav4.md#eq)
* [get](_metadata_v4_metadata_.modulemetadatav4.md#get)
* [getAtIndex](_metadata_v4_metadata_.modulemetadatav4.md#getatindex)
* [toArray](_metadata_v4_metadata_.modulemetadatav4.md#toarray)
* [toHex](_metadata_v4_metadata_.modulemetadatav4.md#tohex)
* [toJSON](_metadata_v4_metadata_.modulemetadatav4.md#tojson)
* [toRawType](_metadata_v4_metadata_.modulemetadatav4.md#torawtype)
* [toString](_metadata_v4_metadata_.modulemetadatav4.md#tostring)
* [toU8a](_metadata_v4_metadata_.modulemetadatav4.md#tou8a)
* [typesToMap](_metadata_v4_metadata_.modulemetadatav4.md#static-typestomap)
* [with](_metadata_v4_metadata_.modulemetadatav4.md#static-with)

## Constructors

###  constructor

\+ **new ModuleMetadataV4**(`value?`: any): *[ModuleMetadataV4](_metadata_v4_metadata_.modulemetadatav4.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v4/Metadata.ts:19](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/Metadata/v4/Metadata.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[ModuleMetadataV4](_metadata_v4_metadata_.modulemetadatav4.md)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  calls

• **get calls**(): *[Option](_codec_option_.option.md)‹[Vec](_codec_vec_.vec.md)‹[FunctionMetadataV4](../interfaces/_interfaces_metadata_types_.functionmetadatav4.md)››*

*Defined in [Metadata/v4/Metadata.ts:33](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/Metadata/v4/Metadata.ts#L33)*

**`description`** the module calls

**Returns:** *[Option](_codec_option_.option.md)‹[Vec](_codec_vec_.vec.md)‹[FunctionMetadataV4](../interfaces/_interfaces_metadata_types_.functionmetadatav4.md)››*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  events

• **get events**(): *[Option](_codec_option_.option.md)‹[Vec](_codec_vec_.vec.md)‹[EventMetadataV4](../interfaces/_interfaces_metadata_types_.eventmetadatav4.md)››*

*Defined in [Metadata/v4/Metadata.ts:40](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/Metadata/v4/Metadata.ts#L40)*

**`description`** the module events

**Returns:** *[Option](_codec_option_.option.md)‹[Vec](_codec_vec_.vec.md)‹[EventMetadataV4](../interfaces/_interfaces_metadata_types_.eventmetadatav4.md)››*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  name

• **get name**(): *[Text](_primitive_text_.text.md)*

*Defined in [Metadata/v4/Metadata.ts:47](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/Metadata/v4/Metadata.ts#L47)*

**`description`** the module name

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  prefix

• **get prefix**(): *[Text](_primitive_text_.text.md)*

*Defined in [Metadata/v4/Metadata.ts:54](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/Metadata/v4/Metadata.ts#L54)*

**`description`** the module prefix

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  storage

• **get storage**(): *[Option](_codec_option_.option.md)‹[Vec](_codec_vec_.vec.md)‹[StorageFunctionMetadata](_metadata_v4_storage_.storagefunctionmetadata.md)››*

*Defined in [Metadata/v4/Metadata.ts:61](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/Metadata/v4/Metadata.ts#L61)*

**`description`** the associated module storage

**Returns:** *[Option](_codec_option_.option.md)‹[Vec](_codec_vec_.vec.md)‹[StorageFunctionMetadata](_metadata_v4_storage_.storagefunctionmetadata.md)››*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L194)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L201)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/2875fdf2cf/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
