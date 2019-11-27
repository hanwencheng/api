[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [SignerPayloadJSON](_types_.signerpayloadjson.md)

# Interface: SignerPayloadJSON

## Hierarchy

* **SignerPayloadJSON**

## Index

### Properties

* [address](_types_.signerpayloadjson.md#address)
* [blockHash](_types_.signerpayloadjson.md#blockhash)
* [blockNumber](_types_.signerpayloadjson.md#blocknumber)
* [era](_types_.signerpayloadjson.md#era)
* [genesisHash](_types_.signerpayloadjson.md#genesishash)
* [method](_types_.signerpayloadjson.md#method)
* [nonce](_types_.signerpayloadjson.md#nonce)
* [specVersion](_types_.signerpayloadjson.md#specversion)
* [tip](_types_.signerpayloadjson.md#tip)
* [version](_types_.signerpayloadjson.md#version)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types.ts:237](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L237)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [packages/types/src/types.ts:242](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L242)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [packages/types/src/types.ts:247](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L247)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [packages/types/src/types.ts:252](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L252)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [packages/types/src/types.ts:257](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L257)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [packages/types/src/types.ts:262](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L262)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [packages/types/src/types.ts:267](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L267)*

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Defined in [packages/types/src/types.ts:272](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L272)*

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Defined in [packages/types/src/types.ts:277](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L277)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types.ts:282](https://github.com/polkadot-js/api/blob/8ed2bda3a8/packages/types/src/types.ts#L282)*

**`description`** The version of the extrinsic we are dealing with
