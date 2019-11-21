[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Metadata/v7/Storage"](../modules/_metadata_v7_storage_.md) › [StorageMetadata](_metadata_v7_storage_.storagemetadata.md)

# Class: StorageMetadata <**S, T, V, E**>

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* Struct

  ↳ **StorageMetadata**

## Implements

* Codec

## Index

### Constructors

* [constructor](_metadata_v7_storage_.storagemetadata.md#constructor)

### Properties

* [__@toStringTag](_metadata_v7_storage_.storagemetadata.md#__@tostringtag)
* [registry](_metadata_v7_storage_.storagemetadata.md#registry)
* [size](_metadata_v7_storage_.storagemetadata.md#size)

### Accessors

* [Type](_metadata_v7_storage_.storagemetadata.md#type)
* [encodedLength](_metadata_v7_storage_.storagemetadata.md#encodedlength)
* [hash](_metadata_v7_storage_.storagemetadata.md#hash)
* [isEmpty](_metadata_v7_storage_.storagemetadata.md#isempty)
* [items](_metadata_v7_storage_.storagemetadata.md#items)
* [prefix](_metadata_v7_storage_.storagemetadata.md#prefix)

### Methods

* [__@iterator](_metadata_v7_storage_.storagemetadata.md#__@iterator)
* [clear](_metadata_v7_storage_.storagemetadata.md#clear)
* [delete](_metadata_v7_storage_.storagemetadata.md#delete)
* [entries](_metadata_v7_storage_.storagemetadata.md#entries)
* [eq](_metadata_v7_storage_.storagemetadata.md#eq)
* [forEach](_metadata_v7_storage_.storagemetadata.md#foreach)
* [get](_metadata_v7_storage_.storagemetadata.md#get)
* [getAtIndex](_metadata_v7_storage_.storagemetadata.md#getatindex)
* [has](_metadata_v7_storage_.storagemetadata.md#has)
* [keys](_metadata_v7_storage_.storagemetadata.md#keys)
* [set](_metadata_v7_storage_.storagemetadata.md#set)
* [toArray](_metadata_v7_storage_.storagemetadata.md#toarray)
* [toHex](_metadata_v7_storage_.storagemetadata.md#tohex)
* [toJSON](_metadata_v7_storage_.storagemetadata.md#tojson)
* [toRawType](_metadata_v7_storage_.storagemetadata.md#torawtype)
* [toString](_metadata_v7_storage_.storagemetadata.md#tostring)
* [toU8a](_metadata_v7_storage_.storagemetadata.md#tou8a)
* [values](_metadata_v7_storage_.storagemetadata.md#values)
* [typesToMap](_metadata_v7_storage_.storagemetadata.md#static-typestomap)
* [with](_metadata_v7_storage_.storagemetadata.md#static-with)

## Constructors

###  constructor

\+ **new StorageMetadata**(`registry`: Registry, `value?`: any): *[StorageMetadata](_metadata_v7_storage_.storagemetadata.md)*

*Overrides void*

*Defined in [Metadata/v7/Storage.ts:19](https://github.com/polkadot-js/api/blob/011e24bd49/packages/metadata/src/Metadata/v7/Storage.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | any |

**Returns:** *[StorageMetadata](_metadata_v7_storage_.storagemetadata.md)*

## Properties

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

###  registry

• **registry**: *Registry*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L34)*

___

###  size

• **size**: *number*

*Inherited from void*

Defined in /home/runner/work/api/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *IHash*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *IHash*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  items

• **get items**(): *Vec‹StorageEntryMetadata›*

*Defined in [Metadata/v7/Storage.ts:31](https://github.com/polkadot-js/api/blob/011e24bd49/packages/metadata/src/Metadata/v7/Storage.ts#L31)*

**`description`** the storage entries

**Returns:** *Vec‹StorageEntryMetadata›*

___

###  prefix

• **get prefix**(): *Text*

*Defined in [Metadata/v7/Storage.ts:38](https://github.com/polkadot-js/api/blob/011e24bd49/packages/metadata/src/Metadata/v7/Storage.ts#L38)*

**`description`** the prefix for this module

**Returns:** *Text*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L189)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *AnyJsonObject | string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *AnyJsonObject | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from void*

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L266)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L238)*

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

*Defined in [/home/runner/work/api/api/packages/types/src/codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*
