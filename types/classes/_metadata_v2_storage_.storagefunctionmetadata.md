[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/v2/Storage"](../modules/_metadata_v2_storage_.md) › [StorageFunctionMetadata](_metadata_v2_storage_.storagefunctionmetadata.md)

# Class: StorageFunctionMetadata <**S, T, V, E**>

**`name`** ModuleMetadata

**`description`** 
The definition of a storage function

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **StorageFunctionMetadata**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v2_storage_.storagefunctionmetadata.md#constructor)

### Accessors

* [Type](_metadata_v2_storage_.storagefunctionmetadata.md#type)
* [documentation](_metadata_v2_storage_.storagefunctionmetadata.md#documentation)
* [encodedLength](_metadata_v2_storage_.storagefunctionmetadata.md#encodedlength)
* [fallback](_metadata_v2_storage_.storagefunctionmetadata.md#fallback)
* [hash](_metadata_v2_storage_.storagefunctionmetadata.md#hash)
* [isEmpty](_metadata_v2_storage_.storagefunctionmetadata.md#isempty)
* [modifier](_metadata_v2_storage_.storagefunctionmetadata.md#modifier)
* [name](_metadata_v2_storage_.storagefunctionmetadata.md#name)
* [type](_metadata_v2_storage_.storagefunctionmetadata.md#type)

### Methods

* [eq](_metadata_v2_storage_.storagefunctionmetadata.md#eq)
* [get](_metadata_v2_storage_.storagefunctionmetadata.md#get)
* [getAtIndex](_metadata_v2_storage_.storagefunctionmetadata.md#getatindex)
* [toArray](_metadata_v2_storage_.storagefunctionmetadata.md#toarray)
* [toHex](_metadata_v2_storage_.storagefunctionmetadata.md#tohex)
* [toJSON](_metadata_v2_storage_.storagefunctionmetadata.md#tojson)
* [toRawType](_metadata_v2_storage_.storagefunctionmetadata.md#torawtype)
* [toString](_metadata_v2_storage_.storagefunctionmetadata.md#tostring)
* [toU8a](_metadata_v2_storage_.storagefunctionmetadata.md#tou8a)
* [typesToMap](_metadata_v2_storage_.storagefunctionmetadata.md#static-typestomap)
* [with](_metadata_v2_storage_.storagefunctionmetadata.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionMetadata**(`value?`: [StorageFunctionMetadataValue](../interfaces/_metadata_v2_storage_.storagefunctionmetadatavalue.md) | Uint8Array): *[StorageFunctionMetadata](_metadata_v2_storage_.storagefunctionmetadata.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v2/Storage.ts:85](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | [StorageFunctionMetadataValue](../interfaces/_metadata_v2_storage_.storagefunctionmetadatavalue.md) &#124; Uint8Array |

**Returns:** *[StorageFunctionMetadata](_metadata_v2_storage_.storagefunctionmetadata.md)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  documentation

• **get documentation**(): *[Vec](_codec_vec_.vec.md)‹[Text](_primitive_text_.text.md)›*

*Defined in [Metadata/v2/Storage.ts:99](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L99)*

**`description`** The [Text](_primitive_text_.text.md) documentation

**Returns:** *[Vec](_codec_vec_.vec.md)‹[Text](_primitive_text_.text.md)›*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  fallback

• **get fallback**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [Metadata/v2/Storage.ts:106](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L106)*

**`description`** The [Bytes](_primitive_bytes_.bytes.md) fallback default

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  modifier

• **get modifier**(): *[StorageFunctionModifierV2](../interfaces/_interfaces_metadata_types_.storagefunctionmodifierv2.md)*

*Defined in [Metadata/v2/Storage.ts:113](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L113)*

**`description`** The [StorageFunctionModifierV2](../interfaces/_interfaceregistry_.interfaceregistry.md#storagefunctionmodifierv2) for arguments

**Returns:** *[StorageFunctionModifierV2](../interfaces/_interfaces_metadata_types_.storagefunctionmodifierv2.md)*

___

###  name

• **get name**(): *[Text](_primitive_text_.text.md)*

*Defined in [Metadata/v2/Storage.ts:120](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L120)*

**`description`** The call name

**Returns:** *[Text](_primitive_text_.text.md)*

___

###  type

• **get type**(): *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

*Defined in [Metadata/v2/Storage.ts:127](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L127)*

**`description`** The [StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)

**Returns:** *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L186)*

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

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L194)*

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

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L201)*

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

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L263)*

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

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
