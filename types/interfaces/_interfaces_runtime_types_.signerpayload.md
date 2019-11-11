[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [SignerPayload](_interfaces_runtime_types_.signerpayload.md)

# Interface: SignerPayload

GenericSignerPayload

## Hierarchy

  ↳ [SignerPayload](../classes/_primitive_extrinsic_signerpayload_.signerpayload.md)

  ↳ **SignerPayload**

## Implements

* [ISignerPayload](_types_.isignerpayload.md)

## Index

### Properties

* [address](_interfaces_runtime_types_.signerpayload.md#address)
* [blockHash](_interfaces_runtime_types_.signerpayload.md#blockhash)
* [blockNumber](_interfaces_runtime_types_.signerpayload.md#blocknumber)
* [encodedLength](_interfaces_runtime_types_.signerpayload.md#encodedlength)
* [era](_interfaces_runtime_types_.signerpayload.md#era)
* [genesisHash](_interfaces_runtime_types_.signerpayload.md#genesishash)
* [hash](_interfaces_runtime_types_.signerpayload.md#hash)
* [isEmpty](_interfaces_runtime_types_.signerpayload.md#isempty)
* [method](_interfaces_runtime_types_.signerpayload.md#method)
* [nonce](_interfaces_runtime_types_.signerpayload.md#nonce)
* [runtimeVersion](_interfaces_runtime_types_.signerpayload.md#runtimeversion)
* [tip](_interfaces_runtime_types_.signerpayload.md#tip)
* [version](_interfaces_runtime_types_.signerpayload.md#version)

### Methods

* [eq](_interfaces_runtime_types_.signerpayload.md#eq)
* [toHex](_interfaces_runtime_types_.signerpayload.md#tohex)
* [toJSON](_interfaces_runtime_types_.signerpayload.md#tojson)
* [toPayload](_interfaces_runtime_types_.signerpayload.md#topayload)
* [toRaw](_interfaces_runtime_types_.signerpayload.md#toraw)
* [toRawType](_interfaces_runtime_types_.signerpayload.md#torawtype)
* [toString](_interfaces_runtime_types_.signerpayload.md#tostring)
* [toU8a](_interfaces_runtime_types_.signerpayload.md#tou8a)

## Properties

###  address

• **address**: *[Address](_interfaces_runtime_types_.address.md)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[address](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#address)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:14](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L14)*

___

###  blockHash

• **blockHash**: *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[blockHash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:15](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L15)*

___

###  blockNumber

• **blockNumber**: *[BlockNumber](_interfaces_runtime_types_.blocknumber.md)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[blockNumber](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L16)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [Codec](_types_.codec.md).[encodedLength](_types_.codec.md#encodedlength)*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/types.ts#L77)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *[ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[era](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#era)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L17)*

___

###  genesisHash

• **genesisHash**: *[Hash](_interfaces_runtime_types_.hash.md)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[genesisHash](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L18)*

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Inherited from [Codec](_types_.codec.md).[hash](_types_.codec.md#hash)*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/types.ts#L82)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [Codec](_types_.codec.md).[isEmpty](_types_.codec.md#isempty)*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/types.ts#L87)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *[Call](_interfaces_runtime_types_.call.md)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[method](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#method)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L19)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹[Index](_interfaces_runtime_types_.index.md)›*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[nonce](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#nonce)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L20)*

___

###  runtimeVersion

• **runtimeVersion**: *[RuntimeVersion](_interfaces_rpc_types_.runtimeversion.md)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[runtimeVersion](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L21)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹[Balance](_interfaces_runtime_types_.balance.md)›*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[tip](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#tip)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L22)*

___

###  version

• **version**: *[u8](_interfaceregistry_.interfaceregistry.md#u8)*

*Inherited from [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md).[version](_primitive_extrinsic_signerpayload_.signerpayloadtype.md#version)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L23)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [Codec](_types_.codec.md).[eq](_types_.codec.md#eq)*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/types.ts#L92)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [Codec](_types_.codec.md).[toHex](_types_.codec.md#tohex)*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/types.ts#L97)*

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

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/types.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toPayload

▸ **toPayload**(): *[SignerPayloadJSON](_types_.signerpayloadjson.md)*

*Inherited from [SignerPayload](../classes/_primitive_extrinsic_signerpayload_.signerpayload.md).[toPayload](../classes/_primitive_extrinsic_signerpayload_.signerpayload.md#topayload)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:45](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L45)*

**`description`** Creates an representation of the structure as an ISignerPayload JSON

**Returns:** *[SignerPayloadJSON](_types_.signerpayloadjson.md)*

___

###  toRaw

▸ **toRaw**(): *[SignerPayloadRaw](_types_.signerpayloadraw.md)*

*Inherited from [SignerPayload](../classes/_primitive_extrinsic_signerpayload_.signerpayload.md).[toRaw](../classes/_primitive_extrinsic_signerpayload_.signerpayload.md#toraw)*

*Defined in [primitive/Extrinsic/SignerPayload.ts:65](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/primitive/Extrinsic/SignerPayload.ts#L65)*

**`description`** Creates a representation of the payload in raw Exrinsic form

**Returns:** *[SignerPayloadRaw](_types_.signerpayloadraw.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [Codec](_types_.codec.md).[toRawType](_types_.codec.md#torawtype)*

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/types.ts#L107)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Codec](_types_.codec.md).[toString](_types_.codec.md#tostring)*

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/types.ts#L112)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [Codec](_types_.codec.md).[toU8a](_types_.codec.md#tou8a)*

*Defined in [types.ts:118](https://github.com/polkadot-js/api/blob/f080d6ed1c/packages/types/src/types.ts#L118)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
