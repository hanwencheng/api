[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["base/util"](../modules/_base_util_.md) › [BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md)

# Class: BaseWithTxAndRpcCall <**ApiType**>

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

  ↳ [BaseWithTx](_base_util_.basewithtx.md)‹ApiType›

  ↳ **BaseWithTxAndRpcCall**

  ↳ [Contract](_base_contract_.contract.md)

## Implements

* [ContractBase](../interfaces/_types_.contractbase.md)‹ApiType›

## Index

### Constructors

* [constructor](_base_util_.basewithtxandrpccall.md#constructor)

### Properties

* [abi](_base_util_.basewithtxandrpccall.md#abi)
* [api](_base_util_.basewithtxandrpccall.md#api)
* [decorateMethod](_base_util_.basewithtxandrpccall.md#decoratemethod)

### Accessors

* [messages](_base_util_.basewithtxandrpccall.md#messages)

### Methods

* [getMessage](_base_util_.basewithtxandrpccall.md#getmessage)

## Constructors

###  constructor

\+ **new BaseWithTxAndRpcCall**(`api`: [ApiObject](../modules/_types_.md#apiobject)‹ApiType›, `abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md) | Abi, `decorateMethod`: DecorateMethod‹ApiType›): *[BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md)*

*Overrides [BaseWithTx](_base_util_.basewithtx.md).[constructor](_base_util_.basewithtx.md#constructor)*

*Defined in [base/util.ts:67](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-contract/src/base/util.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | [ApiObject](../modules/_types_.md#apiobject)‹ApiType› |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |

**Returns:** *[BaseWithTxAndRpcCall](_base_util_.basewithtxandrpccall.md)*

## Properties

###  abi

• **abi**: *Abi*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[abi](../interfaces/_types_.contractbase.md#abi)*

*Inherited from [Base](_base_util_.base.md).[abi](_base_util_.base.md#abi)*

*Defined in [base/util.ts:13](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-contract/src/base/util.ts#L13)*

___

###  api

• **api**: *[ApiObject](../modules/_types_.md#apiobject)‹ApiType›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[api](../interfaces/_types_.contractbase.md#api)*

*Inherited from [Base](_base_util_.base.md).[api](_base_util_.base.md#api)*

*Defined in [base/util.ts:15](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-contract/src/base/util.ts#L15)*

___

###  decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Implementation of [ContractBase](../interfaces/_types_.contractbase.md).[decorateMethod](../interfaces/_types_.contractbase.md#decoratemethod)*

*Inherited from [Base](_base_util_.base.md).[decorateMethod](_base_util_.base.md#decoratemethod)*

*Defined in [base/util.ts:17](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-contract/src/base/util.ts#L17)*

## Accessors

###  messages

• **get messages**(): *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

*Inherited from [Base](_base_util_.base.md).[messages](_base_util_.base.md#messages)*

*Defined in [base/util.ts:27](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-contract/src/base/util.ts#L27)*

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)[]*

## Methods

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *[ContractMessage](../interfaces/_types_.contractmessage.md)*

*Inherited from [Base](_base_util_.base.md).[getMessage](_base_util_.base.md#getmessage)*

*Defined in [base/util.ts:38](https://github.com/polkadot-js/api/blob/a70af20eba/packages/api-contract/src/base/util.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *[ContractMessage](../interfaces/_types_.contractmessage.md)*
