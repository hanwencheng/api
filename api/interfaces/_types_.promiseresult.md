[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [PromiseResult](_types_.promiseresult.md)

# Interface: PromiseResult <**F**>

## Type parameters

▪ **F**: *AnyFunction*

## Hierarchy

* **PromiseResult**

## Callable

▸ (...`args`: Parameters‹F›): *Promise‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››*

*Defined in [types.ts:69](https://github.com/polkadot-js/api/blob/921e329d18/packages/api/src/types.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››*

▸ (...`args`: Push‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F››››): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:70](https://github.com/polkadot-js/api/blob/921e329d18/packages/api/src/types.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Push‹Parameters‹F›, Callback‹[ObsInnerType](../modules/_types_.md#obsinnertype)‹ReturnType‹F›››› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

▸ <**T**>(...`args`: Parameters‹F›): *Promise‹T›*

*Defined in [types.ts:71](https://github.com/polkadot-js/api/blob/921e329d18/packages/api/src/types.ts#L71)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹F› |

**Returns:** *Promise‹T›*

▸ <**T**>(...`args`: Push‹Parameters‹F›, Callback‹T››): *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*

*Defined in [types.ts:72](https://github.com/polkadot-js/api/blob/921e329d18/packages/api/src/types.ts#L72)*

**Type parameters:**

▪ **T**: *Codec | Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Push‹Parameters‹F›, Callback‹T›› |

**Returns:** *[UnsubscribePromise](../modules/_types_.md#unsubscribepromise)*
