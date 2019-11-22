[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/referendumInfo"](_democracy_referenduminfo_.md)

# External module: "democracy/referendumInfo"

## Index

### Functions

* [constructInfo](_democracy_referenduminfo_.md#constructinfo)
* [referendumInfo](_democracy_referenduminfo_.md#referenduminfo)

## Functions

###  constructInfo

▸ **constructInfo**(`api`: ApiInterfaceRx, `index`: BN | number, `optionInfo?`: Option‹ReferendumInfo›): *Option‹[ReferendumInfoExtended](../classes/_type_referenduminfoextended_.referenduminfoextended.md)›*

*Defined in [democracy/referendumInfo.ts:17](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/api-derive/src/democracy/referendumInfo.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |
`index` | BN &#124; number |
`optionInfo?` | Option‹ReferendumInfo› |

**Returns:** *Option‹[ReferendumInfoExtended](../classes/_type_referenduminfoextended_.referenduminfoextended.md)›*

___

###  referendumInfo

▸ **referendumInfo**(`api`: ApiInterfaceRx): *function*

*Defined in [democracy/referendumInfo.ts:31](https://github.com/polkadot-js/api/blob/8b1a7a8584/packages/api-derive/src/democracy/referendumInfo.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`index`: BN | number): *Observable‹Option‹[ReferendumInfoExtended](../classes/_type_referenduminfoextended_.referenduminfoextended.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`index` | BN &#124; number |
