[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [IExtrinsic](_types_.iextrinsic.md)

# Interface: IExtrinsic

## Hierarchy

* IExtrinsicSignable‹[IExtrinsic](_types_.iextrinsic.md)›

* ExtrinsicSignatureBase

  ↳ [IMethod](_types_.imethod.md)

  ↳ **IExtrinsic**

## Implemented by

* [Extrinsic](_interfaces_runtime_types_.extrinsic.md)
* [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)

## Index

### Properties

* [args](_types_.iextrinsic.md#args)
* [argsDef](_types_.iextrinsic.md#argsdef)
* [callIndex](_types_.iextrinsic.md#callindex)
* [data](_types_.iextrinsic.md#data)
* [encodedLength](_types_.iextrinsic.md#encodedlength)
* [era](_types_.iextrinsic.md#era)
* [hasOrigin](_types_.iextrinsic.md#hasorigin)
* [hash](_types_.iextrinsic.md#hash)
* [isEmpty](_types_.iextrinsic.md#isempty)
* [isSigned](_types_.iextrinsic.md#issigned)
* [length](_types_.iextrinsic.md#length)
* [meta](_types_.iextrinsic.md#meta)
* [method](_types_.iextrinsic.md#method)
* [nonce](_types_.iextrinsic.md#nonce)
* [registry](_types_.iextrinsic.md#registry)
* [signature](_types_.iextrinsic.md#signature)
* [signer](_types_.iextrinsic.md#signer)
* [tip](_types_.iextrinsic.md#tip)
* [type](_types_.iextrinsic.md#type)
* [version](_types_.iextrinsic.md#version)

### Methods

* [addSignature](_types_.iextrinsic.md#addsignature)
* [eq](_types_.iextrinsic.md#eq)
* [sign](_types_.iextrinsic.md#sign)
* [toHex](_types_.iextrinsic.md#tohex)
* [toJSON](_types_.iextrinsic.md#tojson)
* [toRawType](_types_.iextrinsic.md#torawtype)
* [toString](_types_.iextrinsic.md#tostring)
* [toU8a](_types_.iextrinsic.md#tou8a)

## Properties

###  args

• **args**: *[Codec](_types_.codec.md)[]*

*Inherited from [IMethod](_types_.imethod.md).[args](_types_.imethod.md#args)*

*Defined in [packages/types/src/types.ts:172](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L172)*

___

###  argsDef

• **argsDef**: *[ArgsDef](../modules/_types_.md#argsdef)*

*Inherited from [IMethod](_types_.imethod.md).[argsDef](_types_.imethod.md#argsdef)*

*Defined in [packages/types/src/types.ts:173](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L173)*

___

###  callIndex

• **callIndex**: *Uint8Array*

*Inherited from [IMethod](_types_.imethod.md).[callIndex](_types_.imethod.md#callindex)*

*Defined in [packages/types/src/types.ts:174](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L174)*

___

###  data

• **data**: *Uint8Array*

*Inherited from [IMethod](_types_.imethod.md).[data](_types_.imethod.md#data)*

*Defined in [packages/types/src/types.ts:175](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L175)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [packages/types/src/types.ts:79](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L79)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_.iextrinsicera.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:183](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L183)*

___

###  hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_types_.imethod.md).[hasOrigin](_types_.imethod.md#hasorigin)*

*Defined in [packages/types/src/types.ts:177](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L177)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [IMethod](_types_.imethod.md).[hash](_types_.imethod.md#hash)*

*Overrides [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [packages/types/src/types.ts:176](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L176)*

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [packages/types/src/types.ts:89](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L89)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [packages/types/src/types.ts:182](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L182)*

___

###  length

• **length**: *number*

*Defined in [packages/types/src/types.ts:227](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L227)*

___

###  meta

• **meta**: *[FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)*

*Inherited from [IMethod](_types_.imethod.md).[meta](_types_.imethod.md#meta)*

*Defined in [packages/types/src/types.ts:178](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L178)*

___

###  method

• **method**: *[Call](../classes/_primitive_generic_call_.call.md)*

*Defined in [packages/types/src/types.ts:228](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L228)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from void*

*Defined in [packages/types/src/types.ts:184](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L184)*

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Codec](_types_.codec.md).[registry](_types_.codec.md#registry)*

*Defined in [packages/types/src/types.ts:94](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L94)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *[EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md) | [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md) | [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:185](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L185)*

___

###  signer

• **signer**: *[Address](../classes/_primitive_generic_address_.address.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:186](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L186)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from void*

*Defined in [packages/types/src/types.ts:187](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L187)*

___

###  type

• **type**: *number*

*Defined in [packages/types/src/types.ts:229](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L229)*

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types.ts:230](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L230)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_generic_address_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) | Uint8Array | string): *[IExtrinsic](_types_.iextrinsic.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:214](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_generic_address_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_.extrinsicpayloadvalue.md) &#124; Uint8Array &#124; string |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [packages/types/src/types.ts:99](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L99)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsic](_types_.iextrinsic.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:215](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_types_.iextrinsic.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [packages/types/src/types.ts:104](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L104)*

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

*Defined in [packages/types/src/types.ts:109](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L109)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [packages/types/src/types.ts:114](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L114)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [packages/types/src/types.ts:119](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L119)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [packages/types/src/types.ts:125](https://github.com/polkadot-js/api/blob/906732bcdc/packages/types/src/types.ts#L125)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
