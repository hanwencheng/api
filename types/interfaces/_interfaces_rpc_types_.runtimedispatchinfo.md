[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/rpc/types"](../modules/_interfaces_rpc_types_.md) › [RuntimeDispatchInfo](_interfaces_rpc_types_.runtimedispatchinfo.md)

# Interface: RuntimeDispatchInfo <**S, T, V, E**>

Struct

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](../classes/_codec_struct_.struct.md)

  ↳ **RuntimeDispatchInfo**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_rpc_types_.runtimedispatchinfo.md#constructor)

### Properties

* [class](_interfaces_rpc_types_.runtimedispatchinfo.md#class)
* [partialFee](_interfaces_rpc_types_.runtimedispatchinfo.md#partialfee)
* [registry](_interfaces_rpc_types_.runtimedispatchinfo.md#registry)
* [weight](_interfaces_rpc_types_.runtimedispatchinfo.md#weight)

### Accessors

* [Type](_interfaces_rpc_types_.runtimedispatchinfo.md#type)
* [encodedLength](_interfaces_rpc_types_.runtimedispatchinfo.md#encodedlength)
* [hash](_interfaces_rpc_types_.runtimedispatchinfo.md#hash)
* [isEmpty](_interfaces_rpc_types_.runtimedispatchinfo.md#isempty)

### Methods

* [eq](_interfaces_rpc_types_.runtimedispatchinfo.md#eq)
* [get](_interfaces_rpc_types_.runtimedispatchinfo.md#get)
* [getAtIndex](_interfaces_rpc_types_.runtimedispatchinfo.md#getatindex)
* [toArray](_interfaces_rpc_types_.runtimedispatchinfo.md#toarray)
* [toHex](_interfaces_rpc_types_.runtimedispatchinfo.md#tohex)
* [toJSON](_interfaces_rpc_types_.runtimedispatchinfo.md#tojson)
* [toRawType](_interfaces_rpc_types_.runtimedispatchinfo.md#torawtype)
* [toString](_interfaces_rpc_types_.runtimedispatchinfo.md#tostring)
* [toU8a](_interfaces_rpc_types_.runtimedispatchinfo.md#tou8a)
* [typesToMap](_interfaces_rpc_types_.runtimedispatchinfo.md#static-typestomap)
* [with](_interfaces_rpc_types_.runtimedispatchinfo.md#static-with)

## Constructors

###  constructor

\+ **new RuntimeDispatchInfo**(`registry`: [Registry](_types_.registry.md), `Types`: S, `value`: V | Map‹any, any› | any[] | string, `jsonMap`: Map‹keyof S, string›): *[RuntimeDispatchInfo](_interfaces_rpc_types_.runtimedispatchinfo.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:38](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](_types_.registry.md) | - |
`Types` | S | - |
`value` | V &#124; Map‹any, any› &#124; any[] &#124; string |  {} as unknown as V |
`jsonMap` | Map‹keyof S, string› |  new Map() |

**Returns:** *[RuntimeDispatchInfo](_interfaces_rpc_types_.runtimedispatchinfo.md)*

## Properties

###  class

• **class**: *[DispatchClass](_interfaces_runtime_types_.dispatchclass.md)*

*Defined in [interfaces/rpc/types.ts:107](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/interfaces/rpc/types.ts#L107)*

DispatchClass

___

###  partialFee

• **partialFee**: *[Balance](_interfaces_runtime_types_.balance.md)*

*Defined in [interfaces/rpc/types.ts:109](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/interfaces/rpc/types.ts#L109)*

Balance

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[registry](../classes/_codec_struct_.struct.md#registry)*

*Defined in [codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L34)*

___

###  weight

• **weight**: *[Weight](_interfaces_runtime_types_.weight.md)*

*Defined in [interfaces/rpc/types.ts:105](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/interfaces/rpc/types.ts#L105)*

Weight

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L171)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L189)*

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

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L197)*

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

*Defined in [codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L204)*

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

*Defined in [codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L266)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](_types_.registry.md), `Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](_types_.registry.md) |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/ed4af1d04b/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
