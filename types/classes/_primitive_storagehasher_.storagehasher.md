[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["primitive/StorageHasher"](../modules/_primitive_storagehasher_.md) › [StorageHasher](_primitive_storagehasher_.storagehasher.md)

# Class: StorageHasher

## Hierarchy

  ↳ [Enum](_codec_enum_.enum.md)

  ↳ **StorageHasher**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Index

### Constructors

* [constructor](_primitive_storagehasher_.storagehasher.md#constructor)

### Accessors

* [encodedLength](_primitive_storagehasher_.storagehasher.md#encodedlength)
* [hash](_primitive_storagehasher_.storagehasher.md#hash)
* [index](_primitive_storagehasher_.storagehasher.md#index)
* [isBlake2128](_primitive_storagehasher_.storagehasher.md#isblake2128)
* [isBlake2256](_primitive_storagehasher_.storagehasher.md#isblake2256)
* [isEmpty](_primitive_storagehasher_.storagehasher.md#isempty)
* [isNone](_primitive_storagehasher_.storagehasher.md#isnone)
* [isNull](_primitive_storagehasher_.storagehasher.md#isnull)
* [isTwox128](_primitive_storagehasher_.storagehasher.md#istwox128)
* [isTwox256](_primitive_storagehasher_.storagehasher.md#istwox256)
* [isTwox64Concat](_primitive_storagehasher_.storagehasher.md#istwox64concat)
* [type](_primitive_storagehasher_.storagehasher.md#type)
* [value](_primitive_storagehasher_.storagehasher.md#value)

### Methods

* [eq](_primitive_storagehasher_.storagehasher.md#eq)
* [toHex](_primitive_storagehasher_.storagehasher.md#tohex)
* [toJSON](_primitive_storagehasher_.storagehasher.md#tojson)
* [toNumber](_primitive_storagehasher_.storagehasher.md#tonumber)
* [toRawType](_primitive_storagehasher_.storagehasher.md#torawtype)
* [toString](_primitive_storagehasher_.storagehasher.md#tostring)
* [toU8a](_primitive_storagehasher_.storagehasher.md#tou8a)
* [with](_primitive_storagehasher_.storagehasher.md#static-with)

## Constructors

###  constructor

\+ **new StorageHasher**(`value?`: any): *[StorageHasher](_primitive_storagehasher_.storagehasher.md)*

*Overrides [Enum](_codec_enum_.enum.md).[constructor](_codec_enum_.enum.md#constructor)*

*Defined in [primitive/StorageHasher.ts:7](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/primitive/StorageHasher.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[StorageHasher](_primitive_storagehasher_.storagehasher.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[encodedLength](_codec_enum_.enum.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:173](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L173)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *[IHash](../interfaces/_types_.ihash.md)*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [codec/Base.ts:32](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Base.ts#L32)*

**`description`** returns a hash of the contents

**Returns:** *[IHash](../interfaces/_types_.ihash.md)*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[index](_codec_enum_.enum.md#index)*

*Defined in [codec/Enum.ts:180](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L180)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBlake2128

• **get isBlake2128**(): *boolean*

*Defined in [primitive/StorageHasher.ts:21](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/primitive/StorageHasher.ts#L21)*

**`description`** Is the enum Blake2_128?

**Returns:** *boolean*

___

###  isBlake2256

• **get isBlake2256**(): *boolean*

*Defined in [primitive/StorageHasher.ts:28](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/primitive/StorageHasher.ts#L28)*

**`description`** Is the enum Blake2_256?

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [codec/Base.ts:39](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Base.ts#L39)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNone](_codec_enum_.enum.md#isnone)*

*Defined in [codec/Enum.ts:187](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L187)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enum_.enum.md).[isNull](_codec_enum_.enum.md#isnull)*

*Defined in [codec/Enum.ts:194](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L194)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isTwox128

• **get isTwox128**(): *boolean*

*Defined in [primitive/StorageHasher.ts:35](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/primitive/StorageHasher.ts#L35)*

**`description`** Is the enum Twox128?

**Returns:** *boolean*

___

###  isTwox256

• **get isTwox256**(): *boolean*

*Defined in [primitive/StorageHasher.ts:42](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/primitive/StorageHasher.ts#L42)*

**`description`** Is the enum Twox256?

**Returns:** *boolean*

___

###  isTwox64Concat

• **get isTwox64Concat**(): *boolean*

*Defined in [primitive/StorageHasher.ts:49](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/primitive/StorageHasher.ts#L49)*

**`description`** Is the enum isTwox64Concat?

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[type](_codec_enum_.enum.md#type)*

*Defined in [codec/Enum.ts:201](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L201)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[value](_codec_enum_.enum.md#value)*

*Defined in [codec/Enum.ts:208](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L208)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[eq](_codec_enum_.enum.md#eq)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [codec/Enum.ts:215](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L215)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enum_.enum.md).[toHex](_codec_enum_.enum.md#tohex)*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L238)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enum_.enum.md).[toJSON](_codec_enum_.enum.md#tojson)*

*Defined in [primitive/StorageHasher.ts:53](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/primitive/StorageHasher.ts#L53)*

**Returns:** *string*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enum_.enum.md).[toNumber](_codec_enum_.enum.md#tonumber)*

*Defined in [codec/Enum.ts:254](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L254)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toRawType](_codec_enum_.enum.md#torawtype)*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [codec/Enum.ts:270](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L270)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toString](_codec_enum_.enum.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Enum.ts:277](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L277)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enum_.enum.md).[toU8a](_codec_enum_.enum.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:287](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L287)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` with

▸ **with**(`Types`: Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) | [Constructor](../interfaces/_types_.constructor.md)› | string[]): *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*

*Inherited from [Enum](_codec_enum_.enum.md).[with](_codec_enum_.enum.md#static-with)*

*Defined in [codec/Enum.ts:137](https://github.com/polkadot-js/api/blob/d6239cbe56/packages/types/src/codec/Enum.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, [InterfaceTypes](../modules/_types_.md#interfacetypes) &#124; [Constructor](../interfaces/_types_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](../interfaces/_codec_enum_.enumconstructor.md)‹[Enum](_codec_enum_.enum.md)›*
