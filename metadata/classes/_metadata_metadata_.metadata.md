[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/Metadata"](../modules/_metadata_metadata_.md) › [Metadata](_metadata_metadata_.metadata.md)

# Class: Metadata <**S, T, V, E**>

**`name`** Metadata

**`description`** 
The versioned runtime metadata as a decoded structure

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)

  ↳ **Metadata**

## Implements

* Codec

## Index

### Constructors

* [constructor](_metadata_metadata_.metadata.md#constructor)

### Properties

* [__@toStringTag](_metadata_metadata_.metadata.md#__@tostringtag)
* [registry](_metadata_metadata_.metadata.md#registry)
* [size](_metadata_metadata_.metadata.md#size)

### Accessors

* [Type](_metadata_metadata_.metadata.md#type)
* [asCallsOnly](_metadata_metadata_.metadata.md#ascallsonly)
* [asLatest](_metadata_metadata_.metadata.md#aslatest)
* [asV0](_metadata_metadata_.metadata.md#asv0)
* [asV1](_metadata_metadata_.metadata.md#asv1)
* [asV2](_metadata_metadata_.metadata.md#asv2)
* [asV3](_metadata_metadata_.metadata.md#asv3)
* [asV4](_metadata_metadata_.metadata.md#asv4)
* [asV5](_metadata_metadata_.metadata.md#asv5)
* [asV6](_metadata_metadata_.metadata.md#asv6)
* [asV7](_metadata_metadata_.metadata.md#asv7)
* [asV8](_metadata_metadata_.metadata.md#asv8)
* [encodedLength](_metadata_metadata_.metadata.md#encodedlength)
* [hash](_metadata_metadata_.metadata.md#hash)
* [isEmpty](_metadata_metadata_.metadata.md#isempty)
* [magicNumber](_metadata_metadata_.metadata.md#magicnumber)
* [version](_metadata_metadata_.metadata.md#version)

### Methods

* [__@iterator](_metadata_metadata_.metadata.md#__@iterator)
* [clear](_metadata_metadata_.metadata.md#clear)
* [delete](_metadata_metadata_.metadata.md#delete)
* [entries](_metadata_metadata_.metadata.md#entries)
* [eq](_metadata_metadata_.metadata.md#eq)
* [forEach](_metadata_metadata_.metadata.md#foreach)
* [get](_metadata_metadata_.metadata.md#get)
* [getAtIndex](_metadata_metadata_.metadata.md#getatindex)
* [getUniqTypes](_metadata_metadata_.metadata.md#getuniqtypes)
* [has](_metadata_metadata_.metadata.md#has)
* [keys](_metadata_metadata_.metadata.md#keys)
* [set](_metadata_metadata_.metadata.md#set)
* [toArray](_metadata_metadata_.metadata.md#toarray)
* [toHex](_metadata_metadata_.metadata.md#tohex)
* [toJSON](_metadata_metadata_.metadata.md#tojson)
* [toRawType](_metadata_metadata_.metadata.md#torawtype)
* [toString](_metadata_metadata_.metadata.md#tostring)
* [toU8a](_metadata_metadata_.metadata.md#tou8a)
* [values](_metadata_metadata_.metadata.md#values)
* [typesToMap](_metadata_metadata_.metadata.md#static-typestomap)
* [with](_metadata_metadata_.metadata.md#static-with)

## Constructors

###  constructor

\+ **new Metadata**(`registry`: Registry, `value?`: Uint8Array | string): *[Metadata](_metadata_metadata_.metadata.md)*

*Overrides [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[constructor](_metadata_metadataversioned_.metadataversioned.md#constructor)*

*Defined in [Metadata/Metadata.ts:17](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/Metadata.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | Uint8Array &#124; string |

**Returns:** *[Metadata](_metadata_metadata_.metadata.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  registry

• **registry**: *Registry*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L34)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  asCallsOnly

• **get asCallsOnly**(): *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asCallsOnly](_metadata_metadataversioned_.metadataversioned.md#ascallsonly)*

*Defined in [Metadata/MetadataVersioned.ts:236](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L236)*

**`description`** Returns the wrapped metadata as a limited calls-only (latest) version

**Returns:** *[MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)*

___

###  asLatest

• **get asLatest**(): *MetadataLatest*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asLatest](_metadata_metadataversioned_.metadataversioned.md#aslatest)*

*Defined in [Metadata/MetadataVersioned.ts:311](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L311)*

**`description`** Returns the wrapped values as a latest version object

**Returns:** *MetadataLatest*

___

###  asV0

• **get asV0**(): *MetadataV0*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV0](_metadata_metadataversioned_.metadataversioned.md#asv0)*

*Defined in [Metadata/MetadataVersioned.ts:246](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L246)*

**`description`** Returns the wrapped metadata as a V0 object

**Returns:** *MetadataV0*

___

###  asV1

• **get asV1**(): *MetadataV1*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV1](_metadata_metadataversioned_.metadataversioned.md#asv1)*

*Defined in [Metadata/MetadataVersioned.ts:255](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L255)*

**`description`** Returns the wrapped values as a V1 object

**Returns:** *MetadataV1*

___

###  asV2

• **get asV2**(): *MetadataV2*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV2](_metadata_metadataversioned_.metadataversioned.md#asv2)*

*Defined in [Metadata/MetadataVersioned.ts:262](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L262)*

**`description`** Returns the wrapped values as a V2 object

**Returns:** *MetadataV2*

___

###  asV3

• **get asV3**(): *MetadataV3*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV3](_metadata_metadataversioned_.metadataversioned.md#asv3)*

*Defined in [Metadata/MetadataVersioned.ts:269](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L269)*

**`description`** Returns the wrapped values as a V3 object

**Returns:** *MetadataV3*

___

###  asV4

• **get asV4**(): *MetadataV4*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV4](_metadata_metadataversioned_.metadataversioned.md#asv4)*

*Defined in [Metadata/MetadataVersioned.ts:276](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L276)*

**`description`** Returns the wrapped values as a V4 object

**Returns:** *MetadataV4*

___

###  asV5

• **get asV5**(): *MetadataV5*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV5](_metadata_metadataversioned_.metadataversioned.md#asv5)*

*Defined in [Metadata/MetadataVersioned.ts:283](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L283)*

**`description`** Returns the wrapped values as a V5 object

**Returns:** *MetadataV5*

___

###  asV6

• **get asV6**(): *MetadataV6*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV6](_metadata_metadataversioned_.metadataversioned.md#asv6)*

*Defined in [Metadata/MetadataVersioned.ts:290](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L290)*

**`description`** Returns the wrapped values as a V6 object

**Returns:** *MetadataV6*

___

###  asV7

• **get asV7**(): *MetadataV7*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV7](_metadata_metadataversioned_.metadataversioned.md#asv7)*

*Defined in [Metadata/MetadataVersioned.ts:297](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L297)*

**`description`** Returns the wrapped values as a V7 object

**Returns:** *MetadataV7*

___

###  asV8

• **get asV8**(): *MetadataV8*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[asV8](_metadata_metadataversioned_.metadataversioned.md#asv8)*

*Defined in [Metadata/MetadataVersioned.ts:304](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L304)*

**`description`** Returns the wrapped values as a V8 object

**Returns:** *MetadataV8*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  magicNumber

• **get magicNumber**(): *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[magicNumber](_metadata_metadataversioned_.metadataversioned.md#magicnumber)*

*Defined in [Metadata/MetadataVersioned.ts:318](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L318)*

**`description`** 

**Returns:** *[MagicNumber](_metadata_magicnumber_.magicnumber.md)*

___

###  version

• **get version**(): *number*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[version](_metadata_metadataversioned_.metadataversioned.md#version)*

*Defined in [Metadata/MetadataVersioned.ts:332](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L332)*

**`description`** the metadata version this structure represents

**Returns:** *number*

## Methods

###  __@iterator

▸ **__@iterator**(): *IterableIterator‹[keyof S, Codec]›*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[keyof S, Codec]›*

___

###  clear

▸ **clear**(): *void*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[keyof S, Codec]›*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[keyof S, Codec]›*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: Codec, `key`: keyof S, `map`: Map‹keyof S, Codec›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`key` | keyof S |
`map` | Map‹keyof S, Codec› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from void*

*Overrides void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  getUniqTypes

▸ **getUniqTypes**(`throwError`: boolean): *string[]*

*Inherited from [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md).[getUniqTypes](_metadata_metadataversioned_.metadataversioned.md#getuniqtypes)*

*Defined in [Metadata/MetadataVersioned.ts:336](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/metadata/src/Metadata/MetadataVersioned.ts#L336)*

**Parameters:**

Name | Type |
------ | ------ |
`throwError` | boolean |

**Returns:** *string[]*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹keyof S›*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹keyof S›*

___

###  set

▸ **set**(`key`: keyof S, `value`: Codec): *this*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | Codec |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

###  values

▸ **values**(): *IterableIterator‹Codec›*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹Codec›*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/7f39c573ce/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
