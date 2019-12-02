[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/session/types"](../modules/_interfaces_session_types_.md) › [SessionKeys3](_interfaces_session_types_.sessionkeys3.md)

# Interface: SessionKeys3

ITuple<[AccountId, AccountId, AccountId]>

## Hierarchy

* [[AccountId](_interfaces_runtime_types_.accountid.md)‹›, [AccountId](_interfaces_runtime_types_.accountid.md)‹›, [AccountId](_interfaces_runtime_types_.accountid.md)‹›] & [Codec](_types_.codec.md)

  ↳ **SessionKeys3**

## Index

### Properties

* [encodedLength](_interfaces_session_types_.sessionkeys3.md#encodedlength)
* [hash](_interfaces_session_types_.sessionkeys3.md#hash)
* [isEmpty](_interfaces_session_types_.sessionkeys3.md#isempty)
* [registry](_interfaces_session_types_.sessionkeys3.md#registry)

### Methods

* [eq](_interfaces_session_types_.sessionkeys3.md#eq)
* [toHex](_interfaces_session_types_.sessionkeys3.md#tohex)
* [toJSON](_interfaces_session_types_.sessionkeys3.md#tojson)
* [toRawType](_interfaces_session_types_.sessionkeys3.md#torawtype)
* [toString](_interfaces_session_types_.sessionkeys3.md#tostring)
* [toU8a](_interfaces_session_types_.sessionkeys3.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [packages/types/src/types.ts:79](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L79)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [packages/types/src/types.ts:84](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L84)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [packages/types/src/types.ts:89](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L89)*

**`description`** Checks if the value is an empty value

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Codec](_types_.codec.md).[registry](_types_.codec.md#registry)*

*Defined in [packages/types/src/types.ts:94](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L94)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [packages/types/src/types.ts:99](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L99)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [packages/types/src/types.ts:104](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L104)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Inherited from [Codec](_types_.codec.md).[toJSON](_types_.codec.md#tojson)*

*Defined in [packages/types/src/types.ts:109](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L109)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [packages/types/src/types.ts:114](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L114)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [packages/types/src/types.ts:119](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L119)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [packages/types/src/types.ts:125](https://github.com/polkadot-js/api/blob/a695d2a5b5/packages/types/src/types.ts#L125)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
