[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/offences/types"](../modules/_interfaces_offences_types_.md) › [Offender](_interfaces_offences_types_.offender.md)

# Interface: Offender

IdentificationTuple

## Hierarchy

  ↳ [IdentificationTuple](_interfaces_session_types_.identificationtuple.md)

  ↳ **Offender**

## Index

### Properties

* [encodedLength](_interfaces_offences_types_.offender.md#encodedlength)
* [hash](_interfaces_offences_types_.offender.md#hash)
* [isEmpty](_interfaces_offences_types_.offender.md#isempty)
* [registry](_interfaces_offences_types_.offender.md#registry)

### Methods

* [eq](_interfaces_offences_types_.offender.md#eq)
* [toHex](_interfaces_offences_types_.offender.md#tohex)
* [toJSON](_interfaces_offences_types_.offender.md#tojson)
* [toRawType](_interfaces_offences_types_.offender.md#torawtype)
* [toString](_interfaces_offences_types_.offender.md#tostring)
* [toU8a](_interfaces_offences_types_.offender.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L77)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L82)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L87)*

**`description`** Checks if the value is an empty value

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Codec](_types_.codec.md).[registry](_types_.codec.md#registry)*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L92)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L97)*

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

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L102)*

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

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L107)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L112)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:117](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:123](https://github.com/polkadot-js/api/blob/3b758a0d64/packages/types/src/types.ts#L123)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
