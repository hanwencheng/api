[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [IExtrinsicSignature](_types_.iextrinsicsignature.md)

# Interface: IExtrinsicSignature

## Hierarchy

* ExtrinsicSignatureBase

* [Codec](_types_.codec.md)

  ↳ **IExtrinsicSignature**

## Implemented by

* [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)
* [ExtrinsicSignatureV4](../classes/_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

## Index

### Properties

* [encodedLength](_types_.iextrinsicsignature.md#encodedlength)
* [era](_types_.iextrinsicsignature.md#era)
* [hash](_types_.iextrinsicsignature.md#hash)
* [isEmpty](_types_.iextrinsicsignature.md#isempty)
* [isSigned](_types_.iextrinsicsignature.md#issigned)
* [nonce](_types_.iextrinsicsignature.md#nonce)
* [registry](_types_.iextrinsicsignature.md#registry)
* [signature](_types_.iextrinsicsignature.md#signature)
* [signer](_types_.iextrinsicsignature.md#signer)
* [tip](_types_.iextrinsicsignature.md#tip)

### Methods

* [addSignature](_types_.iextrinsicsignature.md#addsignature)
* [eq](_types_.iextrinsicsignature.md#eq)
* [sign](_types_.iextrinsicsignature.md#sign)
* [toHex](_types_.iextrinsicsignature.md#tohex)
* [toJSON](_types_.iextrinsicsignature.md#tojson)
* [toRawType](_types_.iextrinsicsignature.md#torawtype)
* [toString](_types_.iextrinsicsignature.md#tostring)
* [toU8a](_types_.iextrinsicsignature.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [packages/types/src/types.ts:79](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L79)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[IExtrinsicEra](_types_.iextrinsicera.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:183](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L183)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [packages/types/src/types.ts:84](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L84)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [packages/types/src/types.ts:89](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L89)*

**`description`** Checks if the value is an empty value

___

###  isSigned

• **isSigned**: *boolean*

*Inherited from void*

*Defined in [packages/types/src/types.ts:182](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L182)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from void*

*Defined in [packages/types/src/types.ts:184](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L184)*

___

###  registry

• **registry**: *[Registry](_types_.registry.md)*

*Inherited from [Codec](_types_.codec.md).[registry](_types_.codec.md#registry)*

*Defined in [packages/types/src/types.ts:94](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L94)*

**`description`** The registry associated with this object

___

###  signature

• **signature**: *[EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md) | [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md) | [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:185](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L185)*

___

###  signer

• **signer**: *[Address](../classes/_primitive_generic_address_.address.md)*

*Inherited from void*

*Defined in [packages/types/src/types.ts:186](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L186)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from void*

*Defined in [packages/types/src/types.ts:187](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L187)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: [Address](../classes/_primitive_generic_address_.address.md) | Uint8Array | string, `signature`: Uint8Array | string, `payload`: Uint8Array | string): *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types.ts:202](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L202)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | [Address](../classes/_primitive_generic_address_.address.md) &#124; Uint8Array &#124; string |
`signature` | Uint8Array &#124; string |
`payload` | Uint8Array &#124; string |

**Returns:** *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [packages/types/src/types.ts:99](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L99)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`method`: [Call](../classes/_primitive_generic_call_.call.md), `account`: [IKeyringPair](_types_.ikeyringpair.md), `options`: [SignatureOptions](_types_.signatureoptions.md)): *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

*Defined in [packages/types/src/types.ts:203](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Call](../classes/_primitive_generic_call_.call.md) |
`account` | [IKeyringPair](_types_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_.signatureoptions.md) |

**Returns:** *[IExtrinsicSignature](_types_.iextrinsicsignature.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [packages/types/src/types.ts:104](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L104)*

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

*Defined in [packages/types/src/types.ts:109](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L109)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [packages/types/src/types.ts:114](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L114)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [packages/types/src/types.ts:119](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L119)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_.md#bareopts)): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [packages/types/src/types.ts:125](https://github.com/polkadot-js/api/blob/89700f98c5/packages/types/src/types.ts#L125)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
