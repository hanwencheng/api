[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["interfaces/runtime/types"](../modules/_interfaces_runtime_types_.md) › [AccountIndex](_interfaces_runtime_types_.accountindex.md)

# Interface: AccountIndex

GenericAccountIndex

## Hierarchy

  ↳ [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md)

  ↳ **AccountIndex**

## Implements

* [Codec](_types_.codec.md)

## Index

### Constructors

* [constructor](_interfaces_runtime_types_.accountindex.md#constructor)

### Methods

* [toHex](_interfaces_runtime_types_.accountindex.md#tohex)
* [toRawType](_interfaces_runtime_types_.accountindex.md#torawtype)
* [toU8a](_interfaces_runtime_types_.accountindex.md#tou8a)
* [calcLength](_interfaces_runtime_types_.accountindex.md#static-calclength)
* [decodeAccountIndex](_interfaces_runtime_types_.accountindex.md#static-decodeaccountindex)
* [readLength](_interfaces_runtime_types_.accountindex.md#static-readlength)
* [writeLength](_interfaces_runtime_types_.accountindex.md#static-writelength)

## Constructors

###  constructor

\+ **new AccountIndex**(`value`: [AnyNumber](../modules/_types_.md#anynumber)): *[AccountIndex](_interfaces_runtime_types_.accountindex.md)*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[constructor](../classes/_primitive_generic_accountindex_.accountindex.md#constructor)*

*Overrides [U32](../classes/_primitive_u32_.u32.md).[constructor](../classes/_primitive_u32_.u32.md#constructor)*

*Defined in [primitive/Generic/AccountIndex.ts:30](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/primitive/Generic/AccountIndex.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |  new BN(0) |

**Returns:** *[AccountIndex](_interfaces_runtime_types_.accountindex.md)*

## Methods

###  toHex

▸ **toHex**(`isLe`: boolean): *string*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toHex](../classes/_codec_uint_.uint.md#tohex)*

*Overrides void*

*Defined in [codec/UInt.ts:37](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/UInt.ts#L37)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`isLe` | boolean | false |

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[toRawType](../classes/_primitive_generic_accountindex_.accountindex.md#torawtype)*

*Overrides [UInt](../classes/_codec_uint_.uint.md).[toRawType](../classes/_codec_uint_.uint.md#torawtype)*

*Defined in [primitive/Generic/AccountIndex.ts:118](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/primitive/Generic/AccountIndex.ts#L118)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Inherited from [UInt](../classes/_codec_uint_.uint.md).[toU8a](../classes/_codec_uint_.uint.md#tou8a)*

*Overrides void*

*Defined in [codec/UInt.ts:63](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/codec/UInt.ts#L63)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` calcLength

▸ **calcLength**(`_value`: BN | number): *number*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[calcLength](../classes/_primitive_generic_accountindex_.accountindex.md#static-calclength)*

*Defined in [primitive/Generic/AccountIndex.ts:49](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/primitive/Generic/AccountIndex.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`_value` | BN &#124; number |

**Returns:** *number*

___

### `Static` decodeAccountIndex

▸ **decodeAccountIndex**(`value`: [AnyNumber](../modules/_types_.md#anynumber)): *BN | Uint8Array | number | string*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[decodeAccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md#static-decodeaccountindex)*

*Defined in [primitive/Generic/AccountIndex.ts:37](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/primitive/Generic/AccountIndex.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** *BN | Uint8Array | number | string*

___

### `Static` readLength

▸ **readLength**(`input`: Uint8Array): *[number, number]*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[readLength](../classes/_primitive_generic_accountindex_.accountindex.md#static-readlength)*

*Defined in [primitive/Generic/AccountIndex.ts:63](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/primitive/Generic/AccountIndex.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | Uint8Array |

**Returns:** *[number, number]*

___

### `Static` writeLength

▸ **writeLength**(`input`: Uint8Array): *Uint8Array*

*Inherited from [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md).[writeLength](../classes/_primitive_generic_accountindex_.accountindex.md#static-writelength)*

*Defined in [primitive/Generic/AccountIndex.ts:77](https://github.com/polkadot-js/api/blob/b8d4bc5c6a/packages/types/src/primitive/Generic/AccountIndex.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | Uint8Array |

**Returns:** *Uint8Array*