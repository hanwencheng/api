[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [StorageEntryTypeV7](_interfaces_metadata_types_.storageentrytypev7.md)

# Interface: StorageEntryTypeV7

StorageEntryTypeV6

## Hierarchy

  ↳ [StorageEntryTypeV6](_interfaces_metadata_types_.storageentrytypev6.md)

  ↳ **StorageEntryTypeV7**

  ↳ [StorageEntryTypeV8](_interfaces_metadata_types_.storageentrytypev8.md)

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.storageentrytypev7.md#constructor)

### Properties

* [asDoubleMap](_interfaces_metadata_types_.storageentrytypev7.md#asdoublemap)
* [asMap](_interfaces_metadata_types_.storageentrytypev7.md#asmap)
* [asPlain](_interfaces_metadata_types_.storageentrytypev7.md#asplain)
* [isDoubleMap](_interfaces_metadata_types_.storageentrytypev7.md#isdoublemap)
* [isMap](_interfaces_metadata_types_.storageentrytypev7.md#ismap)
* [isPlain](_interfaces_metadata_types_.storageentrytypev7.md#isplain)
* [registry](_interfaces_metadata_types_.storageentrytypev7.md#registry)

### Accessors

* [encodedLength](_interfaces_metadata_types_.storageentrytypev7.md#encodedlength)
* [hash](_interfaces_metadata_types_.storageentrytypev7.md#hash)
* [index](_interfaces_metadata_types_.storageentrytypev7.md#index)
* [isEmpty](_interfaces_metadata_types_.storageentrytypev7.md#isempty)
* [isNone](_interfaces_metadata_types_.storageentrytypev7.md#isnone)
* [isNull](_interfaces_metadata_types_.storageentrytypev7.md#isnull)
* [type](_interfaces_metadata_types_.storageentrytypev7.md#type)
* [value](_interfaces_metadata_types_.storageentrytypev7.md#value)

### Methods

* [eq](_interfaces_metadata_types_.storageentrytypev7.md#eq)
* [toHex](_interfaces_metadata_types_.storageentrytypev7.md#tohex)
* [toJSON](_interfaces_metadata_types_.storageentrytypev7.md#tojson)
* [toNumber](_interfaces_metadata_types_.storageentrytypev7.md#tonumber)
* [toRawType](_interfaces_metadata_types_.storageentrytypev7.md#torawtype)
* [toString](_interfaces_metadata_types_.storageentrytypev7.md#tostring)
* [toU8a](_interfaces_metadata_types_.storageentrytypev7.md#tou8a)
* [with](_interfaces_metadata_types_.storageentrytypev7.md#static-with)

## Constructors

###  constructor

\+ **new StorageEntryTypeV7**(`registry`: [Registry](_types_.registry.md), `def`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[], `value?`: any, `index?`: undefined | number): *[StorageEntryTypeV7](_interfaces_metadata_types_.storageentrytypev7.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Defined in [codec/Enum.ts:110](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`def` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |
`value?` | any |
`index?` | undefined &#124; number |

**Returns:** *[StorageEntryTypeV7](_interfaces_metadata_types_.storageentrytypev7.md)*

## Properties

###  asDoubleMap

• **asDoubleMap**: *[DoubleMapTypeV5](_interfaces_metadata_types_.doublemaptypev5.md)*

*Inherited from [StorageFunctionTypeV5](_interfaces_metadata_types_.storagefunctiontypev5.md).[asDoubleMap](_interfaces_metadata_types_.storagefunctiontypev5.md#asdoublemap)*

*Defined in [interfaces/metadata/types.ts:720](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/interfaces/metadata/types.ts#L720)*

DoubleMapTypeV5

___

###  asMap

• **asMap**: *[MapTypeV5](_interfaces_metadata_types_.maptypev5.md)*

*Inherited from [StorageFunctionTypeV5](_interfaces_metadata_types_.storagefunctiontypev5.md).[asMap](_interfaces_metadata_types_.storagefunctiontypev5.md#asmap)*

*Defined in [interfaces/metadata/types.ts:716](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/interfaces/metadata/types.ts#L716)*

MapTypeV5

___

###  asPlain

• **asPlain**: *[PlainTypeV5](_interfaces_metadata_types_.plaintypev5.md)*

*Inherited from [StorageFunctionTypeV5](_interfaces_metadata_types_.storagefunctiontypev5.md).[asPlain](_interfaces_metadata_types_.storagefunctiontypev5.md#asplain)*

*Defined in [interfaces/metadata/types.ts:712](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/interfaces/metadata/types.ts#L712)*

PlainTypeV5

___

###  isDoubleMap

• **isDoubleMap**: *boolean*

*Inherited from [StorageFunctionTypeV5](_interfaces_metadata_types_.storagefunctiontypev5.md).[isDoubleMap](_interfaces_metadata_types_.storagefunctiontypev5.md#isdoublemap)*

*Defined in [interfaces/metadata/types.ts:718](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/interfaces/metadata/types.ts#L718)*

2:: DoubleMap(DoubleMapTypeV5)

___

###  isMap

• **isMap**: *boolean*

*Inherited from [StorageFunctionTypeV5](_interfaces_metadata_types_.storagefunctiontypev5.md).[isMap](_interfaces_metadata_types_.storagefunctiontypev5.md#ismap)*

*Defined in [interfaces/metadata/types.ts:714](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/interfaces/metadata/types.ts#L714)*

1:: Map(MapTypeV5)

___

###  isPlain

• **isPlain**: *boolean*

*Inherited from [StorageFunctionTypeV5](_interfaces_metadata_types_.storagefunctiontypev5.md).[isPlain](_interfaces_metadata_types_.storagefunctiontypev5.md#isplain)*

*Defined in [interfaces/metadata/types.ts:710](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/interfaces/metadata/types.ts#L710)*

0:: Plain(PlainTypeV5)

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[registry](../classes/_codec_base_.base.md#registry)*

*Defined in [codec/Base.ts:16](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Base.ts#L16)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:35](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Base.ts#L35)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:42](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Base.ts#L42)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L215)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toHex](../classes/_codec_enum_.enum.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L287)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[]): *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[with](../classes/_codec_enum_.enum.md#static-with)*

*Defined in [codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*
