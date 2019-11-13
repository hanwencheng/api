[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["Abi"](../modules/_abi_.md) › [ContractAbi](_abi_.contractabi.md)

# Class: ContractAbi

## Hierarchy

  ↳ [ContractRegistry](_contractregistry_.contractregistry.md)

  ↳ **ContractAbi**

## Implements

* [InterfaceAbi](../interfaces/_types_.interfaceabi.md)

## Index

### Constructors

* [constructor](_abi_.contractabi.md#constructor)

### Properties

* [abi](_abi_.contractabi.md#abi)
* [constructors](_abi_.contractabi.md#constructors)
* [messages](_abi_.contractabi.md#messages)
* [typeDefs](_abi_.contractabi.md#typedefs)

### Methods

* [convertAbi](_abi_.contractabi.md#convertabi)
* [convertArgs](_abi_.contractabi.md#convertargs)
* [convertConstructors](_abi_.contractabi.md#convertconstructors)
* [convertContract](_abi_.contractabi.md#convertcontract)
* [convertEvent](_abi_.contractabi.md#convertevent)
* [convertMessage](_abi_.contractabi.md#convertmessage)
* [convertStorage](_abi_.contractabi.md#convertstorage)
* [convertStorageLayout](_abi_.contractabi.md#convertstoragelayout)
* [convertStorageRange](_abi_.contractabi.md#convertstoragerange)
* [convertStorageStruct](_abi_.contractabi.md#convertstoragestruct)
* [convertType](_abi_.contractabi.md#converttype)
* [createMessage](_abi_.contractabi.md#createmessage)
* [hasTypeDefAt](_abi_.contractabi.md#hastypedefat)
* [setTypeDefAtIndex](_abi_.contractabi.md#settypedefatindex)
* [stringsAt](_abi_.contractabi.md#stringsat)
* [typeAt](_abi_.contractabi.md#typeat)
* [typeDefAt](_abi_.contractabi.md#typedefat)
* [typeDefForOption](_abi_.contractabi.md#typedefforoption)
* [typeDefForResult](_abi_.contractabi.md#typedefforresult)
* [typeDefForStruct](_abi_.contractabi.md#typedefforstruct)
* [typeDefFromMetaType](_abi_.contractabi.md#typedeffrommetatype)
* [typeDefFromMetaTypeAt](_abi_.contractabi.md#typedeffrommetatypeat)
* [typesAt](_abi_.contractabi.md#typesat)
* [validateAbi](_abi_.contractabi.md#validateabi)
* [validateArgs](_abi_.contractabi.md#validateargs)
* [validateConstructors](_abi_.contractabi.md#validateconstructors)
* [validateMessages](_abi_.contractabi.md#validatemessages)

## Constructors

###  constructor

\+ **new ContractAbi**(`abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md)): *[ContractAbi](_abi_.contractabi.md)*

*Overrides [MetaRegistry](_metaregistry_.metaregistry.md).[constructor](_metaregistry_.metaregistry.md#constructor)*

*Defined in [Abi.ts:15](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/Abi.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) |

**Returns:** *[ContractAbi](_abi_.contractabi.md)*

## Properties

###  abi

• **abi**: *[ContractABI](../interfaces/_types_.contractabi.md)*

*Implementation of [InterfaceAbi](../interfaces/_types_.interfaceabi.md).[abi](../interfaces/_types_.interfaceabi.md#abi)*

*Defined in [Abi.ts:11](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/Abi.ts#L11)*

___

###  constructors

• **constructors**: *[AbiConstructors](../modules/_types_.md#abiconstructors)*

*Implementation of [InterfaceAbi](../interfaces/_types_.interfaceabi.md).[constructors](../interfaces/_types_.interfaceabi.md#constructors)*

*Defined in [Abi.ts:13](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/Abi.ts#L13)*

___

###  messages

• **messages**: *[AbiMessages](../modules/_types_.md#abimessages)*

*Implementation of [InterfaceAbi](../interfaces/_types_.interfaceabi.md).[messages](../interfaces/_types_.interfaceabi.md#messages)*

*Defined in [Abi.ts:15](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/Abi.ts#L15)*

___

###  typeDefs

• **typeDefs**: *TypeDef[]* =  []

*Inherited from void*

*Defined in [MetaRegistry.ts:41](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L41)*

## Methods

###  convertAbi

▸ **convertAbi**(`__namedParameters`: object): *[ContractABI](../interfaces/_types_.contractabi.md)*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertAbi](_contractregistry_.contractregistry.md#convertabi)*

*Defined in [ContractRegistry.ts:140](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABI](../interfaces/_types_.contractabi.md)*

___

###  convertArgs

▸ **convertArgs**(`args`: [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[]): *any[]*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertArgs](_contractregistry_.contractregistry.md#convertargs)*

*Defined in [ContractRegistry.ts:147](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[] |

**Returns:** *any[]*

___

###  convertConstructors

▸ **convertConstructors**(`constructors`: [ContractABIMessagePre](../interfaces/_types_.contractabimessagepre.md)[]): *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)[]*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertConstructors](_contractregistry_.contractregistry.md#convertconstructors)*

*Defined in [ContractRegistry.ts:168](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`constructors` | [ContractABIMessagePre](../interfaces/_types_.contractabimessagepre.md)[] |

**Returns:** *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)[]*

___

###  convertContract

▸ **convertContract**(`__namedParameters`: object): *[ContractABIContract](../interfaces/_types_.contractabicontract.md)*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertContract](_contractregistry_.contractregistry.md#convertcontract)*

*Defined in [ContractRegistry.ts:156](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIContract](../interfaces/_types_.contractabicontract.md)*

___

###  convertEvent

▸ **convertEvent**(`__namedParameters`: object): *[ContractABIEvent](../interfaces/_types_.contractabievent.md)*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertEvent](_contractregistry_.contractregistry.md#convertevent)*

*Defined in [ContractRegistry.ts:185](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIEvent](../interfaces/_types_.contractabievent.md)*

___

###  convertMessage

▸ **convertMessage**(`__namedParameters`: object): *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertMessage](_contractregistry_.contractregistry.md#convertmessage)*

*Defined in [ContractRegistry.ts:176](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L176)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIMessage](../interfaces/_types_.contractabimessage.md)*

___

###  convertStorage

▸ **convertStorage**(`storage`: [ContractABIStoragePre](../modules/_types_.md#contractabistoragepre)): *[ContractABIStorage](../modules/_types_.md#contractabistorage)*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertStorage](_contractregistry_.contractregistry.md#convertstorage)*

*Defined in [ContractRegistry.ts:191](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | [ContractABIStoragePre](../modules/_types_.md#contractabistoragepre) |

**Returns:** *[ContractABIStorage](../modules/_types_.md#contractabistorage)*

___

###  convertStorageLayout

▸ **convertStorageLayout**(`storageLayout`: [ContractABIStorageLayoutPre](../modules/_types_.md#contractabistoragelayoutpre)): *[ContractABIStorageLayout](../modules/_types_.md#contractabistoragelayout)*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertStorageLayout](_contractregistry_.contractregistry.md#convertstoragelayout)*

*Defined in [ContractRegistry.ts:195](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L195)*

**Parameters:**

Name | Type |
------ | ------ |
`storageLayout` | [ContractABIStorageLayoutPre](../modules/_types_.md#contractabistoragelayoutpre) |

**Returns:** *[ContractABIStorageLayout](../modules/_types_.md#contractabistoragelayout)*

___

###  convertStorageRange

▸ **convertStorageRange**(`__namedParameters`: object): *[ContractABIRange](../interfaces/_types_.contractabirange.md)*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertStorageRange](_contractregistry_.contractregistry.md#convertstoragerange)*

*Defined in [ContractRegistry.ts:213](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIRange](../interfaces/_types_.contractabirange.md)*

___

###  convertStorageStruct

▸ **convertStorageStruct**(`__namedParameters`: object): *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertStorageStruct](_contractregistry_.contractregistry.md#convertstoragestruct)*

*Defined in [ContractRegistry.ts:203](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[ContractABIStorageStruct](../interfaces/_types_.contractabistoragestruct.md)*

___

###  convertType

▸ **convertType**(`__namedParameters`: object): *TypeDef*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[convertType](_contractregistry_.contractregistry.md#converttype)*

*Defined in [ContractRegistry.ts:151](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *TypeDef*

___

###  createMessage

▸ **createMessage**(`name`: string, `message`: Partial‹[ContractABIMessage](../interfaces/_types_.contractabimessage.md)› & [ContractABIMessageBase](../interfaces/_types_.contractabimessagebase.md)): *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[createMessage](_contractregistry_.contractregistry.md#createmessage)*

*Defined in [ContractRegistry.ts:108](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`message` | Partial‹[ContractABIMessage](../interfaces/_types_.contractabimessage.md)› & [ContractABIMessageBase](../interfaces/_types_.contractabimessagebase.md) |

**Returns:** *[ContractABIFn](../interfaces/_types_.contractabifn.md)*

___

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Inherited from void*

*Defined in [MetaRegistry.ts:92](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[setTypeDefAtIndex](_metaregistry_.metaregistry.md#settypedefatindex)*

*Defined in [MetaRegistry.ts:112](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from void*

*Defined in [MetaRegistry.ts:80](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from void*

*Defined in [MetaRegistry.ts:84](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from void*

*Defined in [MetaRegistry.ts:96](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L96)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› |  {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForOption](_metaregistry_.metaregistry.md#typedefforoption)*

*Defined in [MetaRegistry.ts:297](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L297)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex?`: TypeIndex): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForResult](_metaregistry_.metaregistry.md#typedefforresult)*

*Defined in [MetaRegistry.ts:306](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L306)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | MetaTypeIdCustom |
`typeIndex?` | TypeIndex |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefForStruct](_metaregistry_.metaregistry.md#typedefforstruct)*

*Defined in [MetaRegistry.ts:315](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L315)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefFromMetaType](_metaregistry_.metaregistry.md#typedeffrommetatype)*

*Defined in [MetaRegistry.ts:172](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** *TypeDef*

___

###  typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_metaregistry_.metaregistry.md).[typeDefFromMetaTypeAt](_metaregistry_.metaregistry.md#typedeffrommetatypeat)*

*Defined in [MetaRegistry.ts:181](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from void*

*Defined in [MetaRegistry.ts:88](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/MetaRegistry.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*

___

###  validateAbi

▸ **validateAbi**(`abi`: [ContractABIPre](../interfaces/_types_.contractabipre.md)): *void*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[validateAbi](_contractregistry_.contractregistry.md#validateabi)*

*Defined in [ContractRegistry.ts:95](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | [ContractABIPre](../interfaces/_types_.contractabipre.md) |

**Returns:** *void*

___

###  validateArgs

▸ **validateArgs**(`name`: string, `args`: [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[]): *void*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[validateArgs](_contractregistry_.contractregistry.md#validateargs)*

*Defined in [ContractRegistry.ts:56](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | [ContractABIArgBasePre](../interfaces/_types_.contractabiargbasepre.md)[] |

**Returns:** *void*

___

###  validateConstructors

▸ **validateConstructors**(`__namedParameters`: object): *void*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[validateConstructors](_contractregistry_.contractregistry.md#validateconstructors)*

*Defined in [ContractRegistry.ts:68](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*

___

###  validateMessages

▸ **validateMessages**(`__namedParameters`: object): *void*

*Inherited from [ContractRegistry](_contractregistry_.contractregistry.md).[validateMessages](_contractregistry_.contractregistry.md#validatemessages)*

*Defined in [ContractRegistry.ts:78](https://github.com/polkadot-js/api/blob/921e329d18/packages/api-contract/src/ContractRegistry.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*
