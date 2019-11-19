[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [ExtrinsicV1](_interfaces_runtime_types_.extrinsicv1.md)

# Interface: ExtrinsicV1 <**S, T, V, E**>

GenericExtrinsicV1

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)

  ↳ **ExtrinsicV1**

## Implements

* [Codec](_types_.codec.md)
* [IExtrinsicImpl](_types_.iextrinsicimpl.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.extrinsicv1.md#constructor)

### Accessors

* [Type](_interfaces_runtime_types_.extrinsicv1.md#type)
* [encodedLength](_interfaces_runtime_types_.extrinsicv1.md#encodedlength)
* [hash](_interfaces_runtime_types_.extrinsicv1.md#hash)
* [isEmpty](_interfaces_runtime_types_.extrinsicv1.md#isempty)
* [method](_interfaces_runtime_types_.extrinsicv1.md#method)
* [signature](_interfaces_runtime_types_.extrinsicv1.md#signature)
* [version](_interfaces_runtime_types_.extrinsicv1.md#version)

### Methods

* [addSignature](_interfaces_runtime_types_.extrinsicv1.md#addsignature)
* [eq](_interfaces_runtime_types_.extrinsicv1.md#eq)
* [get](_interfaces_runtime_types_.extrinsicv1.md#get)
* [getAtIndex](_interfaces_runtime_types_.extrinsicv1.md#getatindex)
* [sign](_interfaces_runtime_types_.extrinsicv1.md#sign)
* [toArray](_interfaces_runtime_types_.extrinsicv1.md#toarray)
* [toHex](_interfaces_runtime_types_.extrinsicv1.md#tohex)
* [toJSON](_interfaces_runtime_types_.extrinsicv1.md#tojson)
* [toRawType](_interfaces_runtime_types_.extrinsicv1.md#torawtype)
* [toString](_interfaces_runtime_types_.extrinsicv1.md#tostring)
* [toU8a](_interfaces_runtime_types_.extrinsicv1.md#tou8a)
* [decodeExtrinsic](_interfaces_runtime_types_.extrinsicv1.md#static-decodeextrinsic)
* [typesToMap](_interfaces_runtime_types_.extrinsicv1.md#static-typestomap)
* [with](_interfaces_runtime_types_.extrinsicv1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV1**(`value?`: Uint8Array | [ExtrinsicValueV1](_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md), `__namedParameters`: object): *[ExtrinsicV1](_interfaces_runtime_types_.extrinsicv1.md)*

*Inherited from [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md).[constructor](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#constructor)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[constructor](../classes/_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:27](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | Uint8Array &#124; [ExtrinsicValueV1](_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md) | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicV1](_interfaces_runtime_types_.extrinsicv1.md)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[Type](../classes/_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L155)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md).[encodedLength](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#encodedlength)*

*Overrides [Struct](../classes/_codec_struct_.struct.md).[encodedLength](../classes/_codec_struct_.struct.md#encodedlength)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:57](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L57)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](_types_.ihash.md)*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[hash](../classes/_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L179)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[isEmpty](../classes/_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L140)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Call](_interfaces_runtime_types_.call.md)*

*Inherited from [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md).[method](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#method)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:64](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L64)*

**`description`** The [Call](_interfaces_runtime_types_.call.md) this extrinsic wraps

**Returns:** *[Call](_interfaces_runtime_types_.call.md)*

___

###  signature

• **get signature**(): *[ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)*

*Inherited from [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md).[signature](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#signature)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:71](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L71)*

**`description`** The [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)

**Returns:** *[ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)*

___

###  version

• **get version**(): *number*

*Inherited from [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md).[version](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#version)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:78](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L78)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Inherited from [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md).[addSignature](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#addsignature)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:85](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L85)*

**`description`** Add an [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[eq](../classes/_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L186)*

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

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L194)*

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

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L201)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](_types_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

*Inherited from [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md).[sign](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#sign)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:94](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L94)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)*

___

###  toArray

▸ **toArray**(): *[Codec](_types_.codec.md)[]*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toArray](../classes/_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L208)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toHex](../classes/_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:215](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L215)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](_types_.anyjsonobject.md) | string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toJSON](../classes/_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:222](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L222)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toRawType](../classes/_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:246](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L246)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toString](../classes/_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:255](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L255)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[toU8a](../classes/_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:263](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L263)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsic

▸ **decodeExtrinsic**(`value?`: Uint8Array | [ExtrinsicValueV1](_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md), `isSigned`: boolean): *[ExtrinsicValueV1](_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md)*

*Inherited from [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md).[decodeExtrinsic](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md#static-decodeextrinsic)*

*Defined in [primitive/Extrinsic/v1/Extrinsic.ts:35](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/primitive/Extrinsic/v1/Extrinsic.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | Uint8Array &#124; [ExtrinsicValueV1](_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md) | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicValueV1](_primitive_extrinsic_v1_extrinsic_.extrinsicvaluev1.md)*

___

### `Static` typesToMap

▸ **typesToMap**(`Types`: Record‹string, [Constructor](_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[typesToMap](../classes/_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:235](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [Constructor](_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](../classes/_codec_struct_.struct.md).[with](../classes/_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/1c6a2582f3/packages/types/src/codec/Struct.ts#L117)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](_types_.constructor.md)‹[Struct](../classes/_codec_struct_.struct.md)‹S››*
