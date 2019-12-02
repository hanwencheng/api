[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/referendumInfo"](_democracy_referenduminfo_.md)

# External module: "democracy/referendumInfo"

## Index

### Functions

* [referendumInfo](_democracy_referenduminfo_.md#referenduminfo)
* [retrieveInfo](_democracy_referenduminfo_.md#retrieveinfo)

## Functions

###  referendumInfo

▸ **referendumInfo**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumInfo.ts:52](https://github.com/polkadot-js/api/blob/906732bcdc/packages/api-derive/src/democracy/referendumInfo.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`index`: BN | number): *Observable‹[DerivedReferendum](../interfaces/_types_.derivedreferendum.md) | null›*

**Parameters:**

Name | Type |
------ | ------ |
`index` | BN &#124; number |

___

###  retrieveInfo

▸ **retrieveInfo**(`api`: ApiInterfaceRx, `index`: BN | number, `info`: Option‹ReferendumInfo›): *Observable‹[DerivedReferendum](../interfaces/_types_.derivedreferendum.md) | null›*

*Defined in [packages/api-derive/src/democracy/referendumInfo.ts:40](https://github.com/polkadot-js/api/blob/906732bcdc/packages/api-derive/src/democracy/referendumInfo.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |
`index` | BN &#124; number |
`info` | Option‹ReferendumInfo› |

**Returns:** *Observable‹[DerivedReferendum](../interfaces/_types_.derivedreferendum.md) | null›*
