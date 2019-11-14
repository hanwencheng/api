[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [MultiSignature](_interfaces_runtime_types_.multisignature.md)

# Interface: MultiSignature

Enum

## Hierarchy

  ↳ [Enum](../classes/_codec_enum_.enum.md)

  ↳ **MultiSignature**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.multisignature.md#constructor)

### Properties

* [asEcdsa](_interfaces_runtime_types_.multisignature.md#asecdsa)
* [asEd25519](_interfaces_runtime_types_.multisignature.md#ased25519)
* [asSr25519](_interfaces_runtime_types_.multisignature.md#assr25519)
* [isEcdsa](_interfaces_runtime_types_.multisignature.md#isecdsa)
* [isEd25519](_interfaces_runtime_types_.multisignature.md#ised25519)
* [isSr25519](_interfaces_runtime_types_.multisignature.md#issr25519)

### Accessors

* [encodedLength](_interfaces_runtime_types_.multisignature.md#encodedlength)
* [hash](_interfaces_runtime_types_.multisignature.md#hash)
* [index](_interfaces_runtime_types_.multisignature.md#index)
* [isEmpty](_interfaces_runtime_types_.multisignature.md#isempty)
* [isNone](_interfaces_runtime_types_.multisignature.md#isnone)
* [isNull](_interfaces_runtime_types_.multisignature.md#isnull)
* [type](_interfaces_runtime_types_.multisignature.md#type)
* [value](_interfaces_runtime_types_.multisignature.md#value)

### Methods

* [eq](_interfaces_runtime_types_.multisignature.md#eq)
* [toHex](_interfaces_runtime_types_.multisignature.md#tohex)
* [toJSON](_interfaces_runtime_types_.multisignature.md#tojson)
* [toNumber](_interfaces_runtime_types_.multisignature.md#tonumber)
* [toRawType](_interfaces_runtime_types_.multisignature.md#torawtype)
* [toString](_interfaces_runtime_types_.multisignature.md#tostring)
* [toU8a](_interfaces_runtime_types_.multisignature.md#tou8a)
* [with](_interfaces_runtime_types_.multisignature.md#static-with)

## Constructors

###  constructor

\+ **new MultiSignature**(`def`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](_types_.constructor.md)› | string[], `value?`: any, `index?`: undefined | number): *[MultiSignature](_interfaces_runtime_types_.multisignature.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[constructor](../classes/_codec_enum_.enum.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/Enum.ts:110](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |
`value?` | any |
`index?` | undefined &#124; number |

**Returns:** *[MultiSignature](_interfaces_runtime_types_.multisignature.md)*

## Properties

###  asEcdsa

• **asEcdsa**: *[EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md)*

*Defined in [interfaces/runtime/types.ts:149](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/interfaces/runtime/types.ts#L149)*

EcdsaSignature

___

###  asEd25519

• **asEd25519**: *[Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md)*

*Defined in [interfaces/runtime/types.ts:141](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/interfaces/runtime/types.ts#L141)*

Ed25519Signature

___

###  asSr25519

• **asSr25519**: *[Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)*

*Defined in [interfaces/runtime/types.ts:145](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/interfaces/runtime/types.ts#L145)*

Sr25519Signature

___

###  isEcdsa

• **isEcdsa**: *boolean*

*Defined in [interfaces/runtime/types.ts:147](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/interfaces/runtime/types.ts#L147)*

2:: Ecdsa(EcdsaSignature)

___

###  isEd25519

• **isEd25519**: *boolean*

*Defined in [interfaces/runtime/types.ts:139](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/interfaces/runtime/types.ts#L139)*

0:: Ed25519(Ed25519Signature)

___

###  isSr25519

• **isSr25519**: *boolean*

*Defined in [interfaces/runtime/types.ts:143](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/interfaces/runtime/types.ts#L143)*

1:: Sr25519(Sr25519Signature)

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[encodedLength](../classes/_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Base](../classes/_codec_base_.base.md).[hash](../classes/_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[index](../classes/_codec_enum_.enum.md#index)*

*Defined in [codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNone](../classes/_codec_enum_.enum.md#isnone)*

*Defined in [codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[isNull](../classes/_codec_enum_.enum.md#isnull)*

*Defined in [codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](../classes/_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[type](../classes/_codec_enum_.enum.md#type)*

*Defined in [codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[value](../classes/_codec_enum_.enum.md#value)*

*Defined in [codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[eq](../classes/_codec_enum_.enum.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L215)*

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

*Defined in [codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toJSON](../classes/_codec_enum_.enum.md#tojson)*

*Overrides [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L245)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toNumber](../classes/_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toRawType](../classes/_codec_enum_.enum.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toString](../classes/_codec_enum_.enum.md#tostring)*

*Overrides [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Enum](../classes/_codec_enum_.enum.md).[toU8a](../classes/_codec_enum_.enum.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L287)*

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

*Defined in [codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/be4b9a4133/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](_codec_enum_.enumconstructor.md)‹[Enum](../classes/_codec_enum_.enum.md)›*
