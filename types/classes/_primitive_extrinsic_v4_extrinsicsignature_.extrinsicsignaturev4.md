[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/Extrinsic/v4/ExtrinsicSignature"](../modules/_primitive_extrinsic_v4_extrinsicsignature_.md) › [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

# Class: ExtrinsicSignatureV4 <**S, T, V, E**>

**`name`** ExtrinsicSignatureV4

**`description`** 
A container for the [Signature](../interfaces/_interfaces_runtime_types_.signature.md) associated with a specific [Extrinsic](../interfaces/_interfaces_runtime_types_.extrinsic.md)

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicSignatureV4**

## Implements

* [Codec](../interfaces/_types_.codec.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)

## Index

### Constructors

* [constructor](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#constructor)

### Properties

* [registry](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#registry)

### Accessors

* [Type](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#type)
* [encodedLength](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#encodedlength)
* [era](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#era)
* [hash](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#hash)
* [isEmpty](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#isempty)
* [isSigned](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#issigned)
* [multiSignature](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#multisignature)
* [nonce](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#nonce)
* [signature](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#signature)
* [signer](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#signer)
* [tip](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tip)

### Methods

* [addSignature](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#addsignature)
* [eq](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#eq)
* [get](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#get)
* [getAtIndex](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#getatindex)
* [sign](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#sign)
* [toArray](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#toarray)
* [toHex](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tohex)
* [toJSON](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tojson)
* [toRawType](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#torawtype)
* [toString](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tostring)
* [toU8a](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#tou8a)
* [decodeExtrinsicSignature](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#static-decodeextrinsicsignature)
* [typesToMap](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#static-typestomap)
* [with](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicSignatureV4**(`registry`: [Registry](../interfaces/_types_.registry.md), `value`: [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) | Uint8Array | undefined, `__namedParameters`: object): *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:20](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`value` | [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) &#124; Uint8Array &#124; undefined | - |
`__namedParameters` | object |  {} |

**Returns:** *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_.registry.md)*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md).[registry](../interfaces/_types_.iextrinsicsignature.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [codec/Struct.ts:34](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L34)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L158)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:46](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L46)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:62](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L62)*

**`description`** The [ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** *[ExtrinsicEra](../interfaces/_interfaces_runtime_types_.extrinsicera.md)*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [codec/Struct.ts:182](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L182)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:143](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L143)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:55](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L55)*

**`description`** `true` if the signature is valid

**Returns:** *boolean*

___

###  multiSignature

• **get multiSignature**(): *[MultiSignature](../interfaces/_interfaces_runtime_types_.multisignature.md)*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:83](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L83)*

**`description`** The raw [MultiSignature](../interfaces/_interfaces_runtime_types_.multisignature.md)

**Returns:** *[MultiSignature](../interfaces/_interfaces_runtime_types_.multisignature.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:69](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L69)*

**`description`** The [Index](../interfaces/_interfaces_runtime_types_.index.md) for the signature

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Index](../interfaces/_interfaces_runtime_types_.index.md)›*

___

###  signature

• **get signature**(): *[EcdsaSignature](../interfaces/_interfaces_runtime_types_.ecdsasignature.md) | [Ed25519Signature](../interfaces/_interfaces_runtime_types_.ed25519signature.md) | [Sr25519Signature](../interfaces/_interfaces_runtime_types_.sr25519signature.md)*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:76](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L76)*

**`description`** The actual [EcdsaSignature](../interfaces/_interfaces_runtime_types_.ecdsasignature.md), [Ed25519Signature](../interfaces/_interfaces_runtime_types_.ed25519signature.md) or [Sr25519Signature](../interfaces/_interfaces_runtime_types_.sr25519signature.md)

**Returns:** *[EcdsaSignature](../interfaces/_interfaces_runtime_types_.ecdsasignature.md) | [Ed25519Signature](../interfaces/_interfaces_runtime_types_.ed25519signature.md) | [Sr25519Signature](../interfaces/_interfaces_runtime_types_.sr25519signature.md)*

___

###  signer

• **get signer**(): *[Address](../interfaces/_interfaces_runtime_types_.address.md)*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:90](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L90)*

**`description`** The [Address](../interfaces/_interfaces_runtime_types_.address.md) that signed

**Returns:** *[Address](../interfaces/_interfaces_runtime_types_.address.md)*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:97](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L97)*

**`description`** The [Balance](../interfaces/_interfaces_runtime_types_.balance.md) tip

**Returns:** *[Compact](_codec_compact_.compact.md)‹[Balance](../interfaces/_interfaces_runtime_types_.balance.md)›*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../interfaces/_interfaces_runtime_types_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:114](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L114)*

**`description`** Adds a raw signature

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../interfaces/_interfaces_runtime_types_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:189](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L189)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L197)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L204)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  sign

▸ **sign**(`method`: [Call](../interfaces/_interfaces_runtime_types_.call.md), `account`: [IKeyringPair](../interfaces/_types_.ikeyringpair.md), `__namedParameters`: object): *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:125](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L125)*

**`description`** Generate a payload and applies the signature from a keypair

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Call](../interfaces/_interfaces_runtime_types_.call.md) |
`account` | [IKeyringPair](../interfaces/_types_.ikeyringpair.md) |
`__namedParameters` | object |

**Returns:** *[IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L211)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L249)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:258](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L258)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:145](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L145)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(`value`: [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) | Uint8Array | undefined, `isSigned`: boolean): *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) | Uint8Array*

*Defined in [primitive/Extrinsic/v4/ExtrinsicSignature.ts:31](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/primitive/Extrinsic/v4/ExtrinsicSignature.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) &#124; Uint8Array &#124; undefined | - |
`isSigned` | boolean | false |

**Returns:** *[ExtrinsicSignatureV4](_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md) | Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:120](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/types/src/codec/Struct.ts#L120)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*
