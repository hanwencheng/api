[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/contracts/types"](../modules/_interfaces_contracts_types_.md) › [AliveContractInfo](_interfaces_contracts_types_.alivecontractinfo.md)

# Interface: AliveContractInfo <**S, T, V, E**>

Struct

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](../classes/_codec_struct_.struct.md)

  ↳ **AliveContractInfo**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_contracts_types_.alivecontractinfo.md#constructor)

### Properties

* [codeHash](_interfaces_contracts_types_.alivecontractinfo.md#codehash)
* [deductBlock](_interfaces_contracts_types_.alivecontractinfo.md#deductblock)
* [lastWrite](_interfaces_contracts_types_.alivecontractinfo.md#lastwrite)
* [rentAllowance](_interfaces_contracts_types_.alivecontractinfo.md#rentallowance)
* [storageSize](_interfaces_contracts_types_.alivecontractinfo.md#storagesize)
* [trieId](_interfaces_contracts_types_.alivecontractinfo.md#trieid)

### Accessors

* [Type](_interfaces_contracts_types_.alivecontractinfo.md#type)
* [encodedLength](_interfaces_contracts_types_.alivecontractinfo.md#encodedlength)
* [hash](_interfaces_contracts_types_.alivecontractinfo.md#hash)
* [isEmpty](_interfaces_contracts_types_.alivecontractinfo.md#isempty)

### Methods

* [eq](_interfaces_contracts_types_.alivecontractinfo.md#eq)
* [get](_interfaces_contracts_types_.alivecontractinfo.md#get)
* [getAtIndex](_interfaces_contracts_types_.alivecontractinfo.md#getatindex)
* [toArray](_interfaces_contracts_types_.alivecontractinfo.md#toarray)
* [toHex](_interfaces_contracts_types_.alivecontractinfo.md#tohex)
* [toJSON](_interfaces_contracts_types_.alivecontractinfo.md#tojson)
* [toRawType](_interfaces_contracts_types_.alivecontractinfo.md#torawtype)
* [toString](_interfaces_contracts_types_.alivecontractinfo.md#tostring)
* [toU8a](_interfaces_contracts_types_.alivecontractinfo.md#tou8a)
* [typesToMap](_interfaces_contracts_types_.alivecontractinfo.md#static-typestomap)
* [with](_interfaces_contracts_types_.alivecontractinfo.md#static-with)

## Constructors

###  constructor

\+ **new AliveContractInfo**(`Types`: S, `value`: V | Map‹any, any› | any[] | string, `jsonMap`: Map‹keyof S, string›): *[AliveContractInfo](_interfaces_contracts_types_.alivecontractinfo.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:36](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Types` | S | - |
`value` | V &#124; Map‹any, any› &#124; any[] &#124; string |  {} as unknown as V |
`jsonMap` | Map‹keyof S, string› |  new Map() |

**Returns:** *[AliveContractInfo](_interfaces_contracts_types_.alivecontractinfo.md)*

## Properties

###  codeHash

• **codeHash**: *[CodeHash](_interfaces_contracts_types_.codehash.md)*

*Defined in [interfaces/contracts/types.ts:16](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/interfaces/contracts/types.ts#L16)*

CodeHash

___

###  deductBlock

• **deductBlock**: *[BlockNumber](_interfaces_runtime_types_.blocknumber.md)*

*Defined in [interfaces/contracts/types.ts:20](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/interfaces/contracts/types.ts#L20)*

BlockNumber

___

###  lastWrite

• **lastWrite**: *[Option](../classes/_codec_option_.option.md)‹[BlockNumber](_interfaces_runtime_types_.blocknumber.md)›*

*Defined in [interfaces/contracts/types.ts:22](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/interfaces/contracts/types.ts#L22)*

Option<BlockNumber>

___

###  rentAllowance

• **rentAllowance**: *[Balance](_interfaces_runtime_types_.balance.md)*

*Defined in [interfaces/contracts/types.ts:18](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/interfaces/contracts/types.ts#L18)*

Balance

___

###  storageSize

• **storageSize**: *[u32](_interfaceregistry_.interfaceregistry.md#u32)*

*Defined in [interfaces/contracts/types.ts:14](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/interfaces/contracts/types.ts#L14)*

u32

___

###  trieId

• **trieId**: *[TrieId](_interfaces_contracts_types_.trieid.md)*

*Defined in [interfaces/contracts/types.ts:12](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/interfaces/contracts/types.ts#L12)*

TrieId

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L168)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L186)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](_types_.codec.md) | undefined*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[get](../classes/_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L194)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](_types_.codec.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[getAtIndex](../classes/_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L201)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/a31921b88e/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
