[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/v2/Storage"](../modules/_metadata_v2_storage_.md) › [StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)

# Class: StorageFunctionType

## Hierarchy

  ↳ [Enum](_codec_enum_.enum.md)

  ↳ **StorageFunctionType**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_metadata_v2_storage_.storagefunctiontype.md#constructor)

### Accessors

* [asMap](_metadata_v2_storage_.storagefunctiontype.md#asmap)
* [asType](_metadata_v2_storage_.storagefunctiontype.md#astype)
* [encodedLength](_metadata_v2_storage_.storagefunctiontype.md#encodedlength)
* [hash](_metadata_v2_storage_.storagefunctiontype.md#hash)
* [index](_metadata_v2_storage_.storagefunctiontype.md#index)
* [isEmpty](_metadata_v2_storage_.storagefunctiontype.md#isempty)
* [isMap](_metadata_v2_storage_.storagefunctiontype.md#ismap)
* [isNone](_metadata_v2_storage_.storagefunctiontype.md#isnone)
* [isNull](_metadata_v2_storage_.storagefunctiontype.md#isnull)
* [isPlainType](_metadata_v2_storage_.storagefunctiontype.md#isplaintype)
* [type](_metadata_v2_storage_.storagefunctiontype.md#type)
* [value](_metadata_v2_storage_.storagefunctiontype.md#value)

### Methods

* [eq](_metadata_v2_storage_.storagefunctiontype.md#eq)
* [toHex](_metadata_v2_storage_.storagefunctiontype.md#tohex)
* [toJSON](_metadata_v2_storage_.storagefunctiontype.md#tojson)
* [toNumber](_metadata_v2_storage_.storagefunctiontype.md#tonumber)
* [toRawType](_metadata_v2_storage_.storagefunctiontype.md#torawtype)
* [toString](_metadata_v2_storage_.storagefunctiontype.md#tostring)
* [toU8a](_metadata_v2_storage_.storagefunctiontype.md#tou8a)
* [with](_metadata_v2_storage_.storagefunctiontype.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionType**(`value?`: any, `index?`: undefined | number): *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [Metadata/v2/Storage.ts:16](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |
`index?` | undefined &#124; number |

**Returns:** *[StorageFunctionType](_metadata_v2_storage_.storagefunctiontype.md)*

## Accessors

###  asMap

• **get asMap**(): *[MapTypeV2](../interfaces/_interfaces_metadata_types_.maptypev2.md)*

*Defined in [Metadata/v2/Storage.ts:27](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L27)*

**`description`** The value as a mapped value

**Returns:** *[MapTypeV2](../interfaces/_interfaces_metadata_types_.maptypev2.md)*

___

###  asType

• **get asType**(): *[PlainTypeV2](../interfaces/_interfaces_metadata_types_.plaintypev2.md)*

*Defined in [Metadata/v2/Storage.ts:36](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L36)*

**`description`** The value as a [Type](_codec_struct_.struct.md#type) value

**Returns:** *[PlainTypeV2](../interfaces/_interfaces_metadata_types_.plaintypev2.md)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[index](_codec_enum_.enum.md#index)*

*Defined in [codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isMap

• **get isMap**(): *boolean*

*Defined in [Metadata/v2/Storage.ts:45](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L45)*

**`description`** `true` if the storage entry is a map

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNone](_codec_enum_.enum.md#isnone)*

*Defined in [codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNull](_codec_enum_.enum.md#isnull)*

*Defined in [codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isPlainType

• **get isPlainType**(): *boolean*

*Defined in [Metadata/v2/Storage.ts:52](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L52)*

**`description`** `true` if the storage entry is a plain type

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[type](_codec_enum_.enum.md#type)*

*Defined in [codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[value](_codec_enum_.enum.md#value)*

*Defined in [codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L215)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toHex](_codec_enum_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toJSON](_codec_enum_.enum.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toRawType](_codec_enum_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Defined in [Metadata/v2/Storage.ts:59](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/Metadata/v2/Storage.ts#L59)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L287)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](../interfaces/_types_.constructor.md)› | string[]): *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*

*Inherited from [Enum](_codec_enum_.enum.md).[with](_codec_enum_.enum.md#static-with)*

*Defined in [codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](../interfaces/_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*
