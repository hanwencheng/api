[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/metadata/types"](../modules/_interfaces_metadata_types_.md) › [StorageFunctionModifierV1](_interfaces_metadata_types_.storagefunctionmodifierv1.md)

# Interface: StorageFunctionModifierV1

StorageFunctionModifierV0

## Hierarchy

  ↳ [StorageFunctionModifierV0](_interfaces_metadata_types_.storagefunctionmodifierv0.md)

  ↳ **StorageFunctionModifierV1**

  ↳ [StorageFunctionModifierV2](_interfaces_metadata_types_.storagefunctionmodifierv2.md)

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_metadata_types_.storagefunctionmodifierv1.md#constructor)

### Properties

* [isDefault](_interfaces_metadata_types_.storagefunctionmodifierv1.md#isdefault)
* [isOptional](_interfaces_metadata_types_.storagefunctionmodifierv1.md#isoptional)
* [isRequired](_interfaces_metadata_types_.storagefunctionmodifierv1.md#isrequired)

### Accessors

* [encodedLength](_interfaces_metadata_types_.storagefunctionmodifierv1.md#encodedlength)
* [hash](_interfaces_metadata_types_.storagefunctionmodifierv1.md#hash)
* [index](_interfaces_metadata_types_.storagefunctionmodifierv1.md#index)
* [isEmpty](_interfaces_metadata_types_.storagefunctionmodifierv1.md#isempty)
* [isNone](_interfaces_metadata_types_.storagefunctionmodifierv1.md#isnone)
* [isNull](_interfaces_metadata_types_.storagefunctionmodifierv1.md#isnull)
* [type](_interfaces_metadata_types_.storagefunctionmodifierv1.md#type)
* [value](_interfaces_metadata_types_.storagefunctionmodifierv1.md#value)

### Methods

* [eq](_interfaces_metadata_types_.storagefunctionmodifierv1.md#eq)
* [toHex](_interfaces_metadata_types_.storagefunctionmodifierv1.md#tohex)
* [toJSON](_interfaces_metadata_types_.storagefunctionmodifierv1.md#tojson)
* [toNumber](_interfaces_metadata_types_.storagefunctionmodifierv1.md#tonumber)
* [toRawType](_interfaces_metadata_types_.storagefunctionmodifierv1.md#torawtype)
* [toString](_interfaces_metadata_types_.storagefunctionmodifierv1.md#tostring)
* [toU8a](_interfaces_metadata_types_.storagefunctionmodifierv1.md#tou8a)
* [with](_interfaces_metadata_types_.storagefunctionmodifierv1.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionModifierV1**(`def`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[], `value?`: any, `index?`: undefined | number): *[StorageFunctionModifierV1](_interfaces_metadata_types_.storagefunctionmodifierv1.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/Enum.ts:110](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |
`value?` | any |
`index?` | undefined &#124; number |

**Returns:** *[StorageFunctionModifierV1](_interfaces_metadata_types_.storagefunctionmodifierv1.md)*

## Properties

###  isDefault

• **isDefault**: *boolean*

*Inherited from [StorageFunctionModifierV0](_interfaces_metadata_types_.storagefunctionmodifierv0.md).[isDefault](_interfaces_metadata_types_.storagefunctionmodifierv0.md#isdefault)*

*Defined in [interfaces/metadata/types.ts:398](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/interfaces/metadata/types.ts#L398)*

1:: Default

___

###  isOptional

• **isOptional**: *boolean*

*Inherited from [StorageFunctionModifierV0](_interfaces_metadata_types_.storagefunctionmodifierv0.md).[isOptional](_interfaces_metadata_types_.storagefunctionmodifierv0.md#isoptional)*

*Defined in [interfaces/metadata/types.ts:396](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/interfaces/metadata/types.ts#L396)*

0:: Optional

___

###  isRequired

• **isRequired**: *boolean*

*Inherited from [StorageFunctionModifierV0](_interfaces_metadata_types_.storagefunctionmodifierv0.md).[isRequired](_interfaces_metadata_types_.storagefunctionmodifierv0.md#isrequired)*

*Defined in [interfaces/metadata/types.ts:400](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/interfaces/metadata/types.ts#L400)*

2:: Required

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L215)*

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

*Defined in [codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L287)*

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

*Defined in [codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*
