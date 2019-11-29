[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Decorated/types"](../modules/_decorated_types_.md) › [ConstantCodec](_decorated_types_.constantcodec.md)

# Interface: ConstantCodec

## Hierarchy

* Codec

  ↳ **ConstantCodec**

## Index

### Properties

* [encodedLength](_decorated_types_.constantcodec.md#encodedlength)
* [hash](_decorated_types_.constantcodec.md#hash)
* [isEmpty](_decorated_types_.constantcodec.md#isempty)
* [meta](_decorated_types_.constantcodec.md#meta)
* [registry](_decorated_types_.constantcodec.md#registry)

### Methods

* [eq](_decorated_types_.constantcodec.md#eq)
* [toHex](_decorated_types_.constantcodec.md#tohex)
* [toJSON](_decorated_types_.constantcodec.md#tojson)
* [toRawType](_decorated_types_.constantcodec.md#torawtype)
* [toString](_decorated_types_.constantcodec.md#tostring)
* [toU8a](_decorated_types_.constantcodec.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from void*

*Defined in [packages/types/src/types.ts:79](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L79)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *IHash*

*Inherited from void*

*Defined in [packages/types/src/types.ts:84](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L84)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from void*

*Defined in [packages/types/src/types.ts:89](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L89)*

**`description`** Checks if the value is an empty value

___

###  meta

• **meta**: *ModuleConstantMetadataLatest*

*Defined in [packages/metadata/src/Decorated/types.ts:10](https://github.com/polkadot-js/api/blob/89700f98c5/packages/metadata/src/Decorated/types.ts#L10)*

___

###  registry

• **registry**: *Registry*

*Inherited from void*

*Defined in [packages/types/src/types.ts:94](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L94)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [packages/types/src/types.ts:99](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L99)*

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

*Defined in [packages/types/src/types.ts:104](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L104)*

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

*Defined in [packages/types/src/types.ts:109](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L109)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [packages/types/src/types.ts:114](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L114)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [packages/types/src/types.ts:119](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L119)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from void*

*Defined in [packages/types/src/types.ts:125](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L125)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
