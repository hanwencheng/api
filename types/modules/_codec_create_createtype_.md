[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/create/createType"](_codec_create_createtype_.md)

# External module: "codec/create/createType"

## Index

### Functions

* [createType](_codec_create_createtype_.md#createtype)
* [createTypeUnsafe](_codec_create_createtype_.md#createtypeunsafe)

## Functions

###  createType

▸ **createType**<**K**>(`registry`: [Registry](../interfaces/_types_.registry.md), `type`: K, ...`params`: any[]): *InterfaceRegistry[K]*

*Defined in [codec/create/createType.ts:74](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/create/createType.ts#L74)*

Create an instance of a `type` with a given `params`.

**Type parameters:**

▪ **K**: *[InterfaceTypes](_types_.md#interfacetypes)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`type` | K | A recognizable string representing the type to create an instance from |
`...params` | any[] | The value to instantiate the type with  |

**Returns:** *InterfaceRegistry[K]*

___

###  createTypeUnsafe

▸ **createTypeUnsafe**<**T**, **K**>(`registry`: [Registry](../interfaces/_types_.registry.md), `type`: K, `params`: any[], `isPedantic?`: undefined | false | true): *[FromReg](_codec_create_types_.md#fromreg)‹T, K›*

*Defined in [codec/create/createType.ts:60](https://github.com/polkadot-js/api/blob/011e24bd49/packages/types/src/codec/create/createType.ts#L60)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_types_.registry.md) | - |
`type` | K | - |
`params` | any[] |  [] |
`isPedantic?` | undefined &#124; false &#124; true | - |

**Returns:** *[FromReg](_codec_create_types_.md#fromreg)‹T, K›*
