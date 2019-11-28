[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)
* [AnyJsonObject](../interfaces/_types_.anyjsonobject.md)
* [CallFunction](../interfaces/_types_.callfunction.md)
* [Codec](../interfaces/_types_.codec.md)
* [Constructor](../interfaces/_types_.constructor.md)
* [ExtrinsicPayloadValue](../interfaces/_types_.extrinsicpayloadvalue.md)
* [IExtrinsic](../interfaces/_types_.iextrinsic.md)
* [IExtrinsicEra](../interfaces/_types_.iextrinsicera.md)
* [IExtrinsicImpl](../interfaces/_types_.iextrinsicimpl.md)
* [IExtrinsicSignature](../interfaces/_types_.iextrinsicsignature.md)
* [IHash](../interfaces/_types_.ihash.md)
* [IKeyringPair](../interfaces/_types_.ikeyringpair.md)
* [IMethod](../interfaces/_types_.imethod.md)
* [ISignerPayload](../interfaces/_types_.isignerpayload.md)
* [Registry](../interfaces/_types_.registry.md)
* [RegistryMetadata](../interfaces/_types_.registrymetadata.md)
* [RegistryMetadataCall](../interfaces/_types_.registrymetadatacall.md)
* [RegistryMetadataCalls](../interfaces/_types_.registrymetadatacalls.md)
* [RegistryMetadataEvent](../interfaces/_types_.registrymetadataevent.md)
* [RegistryMetadataEvents](../interfaces/_types_.registrymetadataevents.md)
* [RegistryMetadataLatest](../interfaces/_types_.registrymetadatalatest.md)
* [RegistryMetadataModule](../interfaces/_types_.registrymetadatamodule.md)
* [RuntimeVersionInterface](../interfaces/_types_.runtimeversioninterface.md)
* [SignatureOptions](../interfaces/_types_.signatureoptions.md)
* [SignerPayloadJSON](../interfaces/_types_.signerpayloadjson.md)
* [SignerPayloadRaw](../interfaces/_types_.signerpayloadraw.md)
* [SignerPayloadRawBase](../interfaces/_types_.signerpayloadrawbase.md)

### Type aliases

* [AnyFunction](_types_.md#anyfunction)
* [AnyJson](_types_.md#anyjson)
* [AnyNumber](_types_.md#anynumber)
* [AnyString](_types_.md#anystring)
* [AnyU8a](_types_.md#anyu8a)
* [ArgsDef](_types_.md#argsdef)
* [BareOpts](_types_.md#bareopts)
* [Callback](_types_.md#callback)
* [Calls](_types_.md#calls)
* [CodecArg](_types_.md#codecarg)
* [CodecTo](_types_.md#codecto)
* [ConstructorDef](_types_.md#constructordef)
* [ITuple](_types_.md#ituple)
* [InterfaceTypes](_types_.md#interfacetypes)
* [ModulesWithCalls](_types_.md#moduleswithcalls)
* [RegistryTypes](_types_.md#registrytypes)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [packages/types/src/types.ts:54](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L54)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | [AnyJsonObject](../interfaces/_types_.anyjsonobject.md) | [AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Defined in [packages/types/src/types.ts:66](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L66)*

___

###  AnyNumber

Ƭ **AnyNumber**: *BN | Uint8Array | number | string*

*Defined in [packages/types/src/types.ts:56](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L56)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [packages/types/src/types.ts:58](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L58)*

___

###  AnyU8a

Ƭ **AnyU8a**: *Uint8Array | number[] | string*

*Defined in [packages/types/src/types.ts:60](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L60)*

___

###  ArgsDef

Ƭ **ArgsDef**: *Record‹string, [Constructor](../interfaces/_types_.constructor.md)›*

*Defined in [packages/types/src/types.ts:163](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L163)*

___

###  BareOpts

Ƭ **BareOpts**: *boolean | Record‹string, boolean›*

*Defined in [packages/types/src/types.ts:19](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L19)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [packages/types/src/types.ts:47](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L47)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

___

###  Calls

Ƭ **Calls**: *Record‹string, [CallFunction](../interfaces/_types_.callfunction.md)›*

*Defined in [packages/types/src/types.ts:32](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L32)*

___

###  CodecArg

Ƭ **CodecArg**: *[Codec](../interfaces/_types_.codec.md) | BN | boolean | string | Uint8Array | boolean | number | string | undefined | CodecArgArray | CodecArgObject*

*Defined in [packages/types/src/types.ts:45](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L45)*

___

###  CodecTo

Ƭ **CodecTo**: *"toHex" | "toJSON" | "toString" | "toU8a"*

*Defined in [packages/types/src/types.ts:131](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L131)*

___

###  ConstructorDef

Ƭ **ConstructorDef**: *Record‹string, [Constructor](../interfaces/_types_.constructor.md)‹T››*

*Defined in [packages/types/src/types.ts:138](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L138)*

___

###  ITuple

Ƭ **ITuple**: *Sub & [Codec](../interfaces/_types_.codec.md)*

*Defined in [packages/types/src/types.ts:168](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L168)*

___

###  InterfaceTypes

Ƭ **InterfaceTypes**: *keyof InterfaceRegistry*

*Defined in [packages/types/src/types.ts:21](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L21)*

___

###  ModulesWithCalls

Ƭ **ModulesWithCalls**: *Record‹string, [Calls](_types_.md#calls)›*

*Defined in [packages/types/src/types.ts:34](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L34)*

___

###  RegistryTypes

Ƭ **RegistryTypes**: *Record‹string, [Constructor](../interfaces/_types_.constructor.md) | string | Record‹string, string› | object | object›*

*Defined in [packages/types/src/types.ts:140](https://github.com/polkadot-js/api/blob/eade586044/packages/types/src/types.ts#L140)*
