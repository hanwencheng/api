[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/types"](../modules/_metadata_types_.md) › [MetadataInterface](_metadata_types_.metadatainterface.md)

# Interface: MetadataInterface <**Modules**>

## Type parameters

▪ **Modules**: *Codec*

## Hierarchy

* Codec

  ↳ **MetadataInterface**

## Index

### Properties

* [encodedLength](_metadata_types_.metadatainterface.md#encodedlength)
* [hash](_metadata_types_.metadatainterface.md#hash)
* [isEmpty](_metadata_types_.metadatainterface.md#isempty)
* [modules](_metadata_types_.metadatainterface.md#modules)
* [registry](_metadata_types_.metadatainterface.md#registry)

### Methods

* [eq](_metadata_types_.metadatainterface.md#eq)
* [toHex](_metadata_types_.metadatainterface.md#tohex)
* [toJSON](_metadata_types_.metadatainterface.md#tojson)
* [toRawType](_metadata_types_.metadatainterface.md#torawtype)
* [toString](_metadata_types_.metadatainterface.md#tostring)
* [toU8a](_metadata_types_.metadatainterface.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:77](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L77)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:82](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L82)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:87](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L87)*

**`description`** Checks if the value is an empty value

___

###  modules

• **modules**: *Vec‹Modules›*

*Defined in [Metadata/types.ts:9](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/metadata/src/Metadata/types.ts#L9)*

___

###  registry

• **registry**: *Registry*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:92](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L92)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:97](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L97)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:102](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L102)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:107](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L107)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:112](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L112)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:117](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L117)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/types.ts:123](https://github.com/polkadot-js/api/blob/2338ecc2d7/packages/types/src/types.ts#L123)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
