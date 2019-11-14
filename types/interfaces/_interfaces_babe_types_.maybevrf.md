[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/babe/types"](../modules/_interfaces_babe_types_.md) › [MaybeVrf](_interfaces_babe_types_.maybevrf.md)

# Interface: MaybeVrf

Option<VrfData>

## Hierarchy

  ↳ [Option](../classes/_codec_option_.option.md)‹[VrfData](_interfaces_babe_types_.vrfdata.md)›

  ↳ **MaybeVrf**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_babe_types_.maybevrf.md#constructor)

### Accessors

* [encodedLength](_interfaces_babe_types_.maybevrf.md#encodedlength)
* [hash](_interfaces_babe_types_.maybevrf.md#hash)
* [isEmpty](_interfaces_babe_types_.maybevrf.md#isempty)
* [isNone](_interfaces_babe_types_.maybevrf.md#isnone)
* [isSome](_interfaces_babe_types_.maybevrf.md#issome)
* [value](_interfaces_babe_types_.maybevrf.md#value)

### Methods

* [eq](_interfaces_babe_types_.maybevrf.md#eq)
* [toHex](_interfaces_babe_types_.maybevrf.md#tohex)
* [toJSON](_interfaces_babe_types_.maybevrf.md#tojson)
* [toRawType](_interfaces_babe_types_.maybevrf.md#torawtype)
* [toString](_interfaces_babe_types_.maybevrf.md#tostring)
* [toU8a](_interfaces_babe_types_.maybevrf.md#tou8a)
* [unwrap](_interfaces_babe_types_.maybevrf.md#unwrap)
* [unwrapOr](_interfaces_babe_types_.maybevrf.md#unwrapor)
* [decodeOption](_interfaces_babe_types_.maybevrf.md#static-decodeoption)
* [with](_interfaces_babe_types_.maybevrf.md#static-with)

## Constructors

###  constructor

\+ **new MaybeVrf**(`Type`: [Constructor](_types_.constructor.md) | [InterfaceTypes](../modules/_types_.md#interfacetypes), `value?`: any): *[MaybeVrf](_interfaces_babe_types_.maybevrf.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[constructor](../classes/_codec_option_.option.md#constructor)*

*Overrides [Base](../classes/_codec_base_.base.md).[constructor](../classes/_codec_base_.base.md#constructor)*

*Defined in [codec/Option.ts:22](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md) &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |
`value?` | any |

**Returns:** *[MaybeVrf](_interfaces_babe_types_.maybevrf.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Option](../classes/_codec_option_.option.md).[encodedLength](../classes/_codec_option_.option.md#encodedlength)*

*Overrides [Base](../classes/_codec_base_.base.md).[encodedLength](../classes/_codec_base_.base.md#encodedlength)*

*Defined in [codec/Option.ts:66](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L66)*

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

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[isEmpty](../classes/_codec_option_.option.md#isempty)*

*Overrides [Base](../classes/_codec_base_.base.md).[isEmpty](../classes/_codec_base_.base.md#isempty)*

*Defined in [codec/Option.ts:74](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L74)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[isNone](../classes/_codec_option_.option.md#isnone)*

*Defined in [codec/Option.ts:81](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L81)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isSome

• **get isSome**(): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[isSome](../classes/_codec_option_.option.md#issome)*

*Defined in [codec/Option.ts:88](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L88)*

**`description`** Checks if the Option has a value

**Returns:** *boolean*

___

###  value

• **get value**(): *[Codec](_types_.codec.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[value](../classes/_codec_option_.option.md#value)*

*Defined in [codec/Option.ts:95](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L95)*

**`description`** The actual value for the Option

**Returns:** *[Codec](_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Option](../classes/_codec_option_.option.md).[eq](../classes/_codec_option_.option.md#eq)*

*Overrides [Base](../classes/_codec_base_.base.md).[eq](../classes/_codec_base_.base.md#eq)*

*Defined in [codec/Option.ts:102](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L102)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Option](../classes/_codec_option_.option.md).[toHex](../classes/_codec_option_.option.md#tohex)*

*Overrides [Base](../classes/_codec_base_.base.md).[toHex](../classes/_codec_base_.base.md#tohex)*

*Defined in [codec/Option.ts:113](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L113)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Base](../classes/_codec_base_.base.md).[toJSON](../classes/_codec_base_.base.md#tojson)*

*Defined in [codec/Base.ts:60](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Base.ts#L60)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(`isBare?`: undefined | false | true): *string*

*Inherited from [Option](../classes/_codec_option_.option.md).[toRawType](../classes/_codec_option_.option.md#torawtype)*

*Overrides [Base](../classes/_codec_base_.base.md).[toRawType](../classes/_codec_base_.base.md#torawtype)*

*Defined in [codec/Option.ts:124](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L124)*

**`description`** Returns the base runtime type name for this instance

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Base](../classes/_codec_base_.base.md).[toString](../classes/_codec_base_.base.md#tostring)*

*Defined in [codec/Base.ts:67](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Base.ts#L67)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Option](../classes/_codec_option_.option.md).[toU8a](../classes/_codec_option_.option.md#tou8a)*

*Overrides [Base](../classes/_codec_base_.base.md).[toU8a](../classes/_codec_base_.base.md#tou8a)*

*Defined in [codec/Option.ts:136](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L136)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  unwrap

▸ **unwrap**(): *[VrfData](_interfaces_babe_types_.vrfdata.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[unwrap](../classes/_codec_option_.option.md#unwrap)*

*Defined in [codec/Option.ts:154](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L154)*

**`description`** Returns the value that the Option represents (if available), throws if null

**Returns:** *[VrfData](_interfaces_babe_types_.vrfdata.md)*

___

###  unwrapOr

▸ **unwrapOr**<**O**>(`defaultValue`: O): *[VrfData](_interfaces_babe_types_.vrfdata.md) | O*

*Inherited from [Option](../classes/_codec_option_.option.md).[unwrapOr](../classes/_codec_option_.option.md#unwrapor)*

*Defined in [codec/Option.ts:166](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L166)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

**Type parameters:**

▪ **O**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | O | The value to return if the option isNone  |

**Returns:** *[VrfData](_interfaces_babe_types_.vrfdata.md) | O*

___

### `Static` decodeOption

▸ **decodeOption**(`Type`: [Constructor](_types_.constructor.md), `value?`: any): *[Codec](_types_.codec.md)*

*Inherited from [Option](../classes/_codec_option_.option.md).[decodeOption](../classes/_codec_option_.option.md#static-decodeoption)*

*Defined in [codec/Option.ts:32](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md) |
`value?` | any |

**Returns:** *[Codec](_types_.codec.md)*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](_types_.constructor.md) | [InterfaceTypes](../modules/_types_.md#interfacetypes)): *[Constructor](_types_.constructor.md)‹[Option](../classes/_codec_option_.option.md)‹O››*

*Inherited from [Option](../classes/_codec_option_.option.md).[with](../classes/_codec_option_.option.md#static-with)*

*Defined in [codec/Option.ts:55](https://github.com/polkadot-js/api/blob/c44cb1858e/packages/types/src/codec/Option.ts#L55)*

**Type parameters:**

▪ **O**: *[Codec](_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](_types_.constructor.md) &#124; [InterfaceTypes](../modules/_types_.md#interfacetypes) |

**Returns:** *[Constructor](_types_.constructor.md)‹[Option](../classes/_codec_option_.option.md)‹O››*
