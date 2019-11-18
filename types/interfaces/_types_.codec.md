[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Codec](_types_.codec.md)

# Interface: Codec

**`name`** Codec

**`description`** 
The base Codec interface. All types implement the interface provided here. Additionally
implementors can add their own specific interfaces and helpres with getters and functions.
The Codec Base is however required for operating as an encoding/decoding layer

## Hierarchy

* **Codec**

  ↳ [EcdsaSignature](_interfaces_runtime_types_.ecdsasignature.md)

  ↳ [LockIdentifier](_interfaces_runtime_types_.lockidentifier.md)

  ↳ [VrfData](_interfaces_babe_types_.vrfdata.md)

  ↳ [VrfProof](_interfaces_babe_types_.vrfproof.md)

  ↳ [ContractStorageKey](_interfaces_contracts_types_.contractstoragekey.md)

  ↳ [Kind](_interfaces_offences_types_.kind.md)

  ↳ [EventId](_interfaces_system_types_.eventid.md)

  ↳ [ApiId](_interfaces_rpc_types_.apiid.md)

  ↳ [SignerPayloadType](_primitive_extrinsic_signerpayload_.signerpayloadtype.md)

  ↳ [CompactEncodable](_codec_compact_.compactencodable.md)

  ↳ [IMethod](_types_.imethod.md)

  ↳ [IExtrinsicSignature](_types_.iextrinsicsignature.md)

  ↳ [IExtrinsicEra](_types_.iextrinsicera.md)

  ↳ [IExtrinsicImpl](_types_.iextrinsicimpl.md)

## Implemented by

* [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md)
* [AccountId](../classes/_primitive_generic_accountid_.accountid.md)
* [AccountId](_interfaces_runtime_types_.accountid.md)
* [AccountIdOf](_interfaces_runtime_types_.accountidof.md)
* [AccountIndex](../classes/_primitive_generic_accountindex_.accountindex.md)
* [AccountIndex](_interfaces_runtime_types_.accountindex.md)
* [AccountInfo](_interfaces_deprecated_types_.accountinfo.md)
* [Address](../classes/_primitive_generic_address_.address.md)
* [Address](_interfaces_runtime_types_.address.md)
* [AliveContractInfo](_interfaces_contracts_types_.alivecontractinfo.md)
* [Amount](_interfaces_deprecated_types_.amount.md)
* [ApprovalFlag](_interfaces_elections_types_.approvalflag.md)
* [AssetId](_interfaces_runtime_types_.assetid.md)
* [AssetOf](_interfaces_deprecated_types_.assetof.md)
* [AssetOptions](_interfaces_genericasset_types_.assetoptions.md)
* [AttestedCandidate](_interfaces_parachains_types_.attestedcandidate.md)
* [AuctionIndex](_interfaces_parachains_types_.auctionindex.md)
* [AuthIndex](_interfaces_imonline_types_.authindex.md)
* [AuthorityId](_interfaces_consensus_types_.authorityid.md)
* [AuthorityIndex](_interfaces_grandpa_types_.authorityindex.md)
* [AuthorityList](_interfaces_grandpa_types_.authoritylist.md)
* [AuthoritySignature](_interfaces_imonline_types_.authoritysignature.md)
* [AuthorityWeight](_interfaces_grandpa_types_.authorityweight.md)
* [BTreeMap](../classes/_codec_btreemap_.btreemap.md)
* [BabeAuthorityWeight](_interfaces_babe_types_.babeauthorityweight.md)
* [BabeBlockWeight](_interfaces_babe_types_.babeblockweight.md)
* [BabeWeight](_interfaces_babe_types_.babeweight.md)
* [Balance](_interfaces_runtime_types_.balance.md)
* [BalanceLock](_interfaces_balances_types_.balancelock.md)
* [BalanceOf](_interfaces_runtime_types_.balanceof.md)
* [Base](../classes/_codec_base_.base.md)
* [Bidder](_interfaces_parachains_types_.bidder.md)
* [Block](_interfaces_runtime_types_.block.md)
* [Block](../classes/_primitive_generic_block_.block.md)
* [BlockAttestations](_interfaces_attestations_types_.blockattestations.md)
* [BlockNumber](_interfaces_runtime_types_.blocknumber.md)
* [Bool](../classes/_primitive_bool_.bool.md)
* [Bytes](../classes/_primitive_bytes_.bytes.md)
* [Call](_interfaces_runtime_types_.call.md)
* [Call](../classes/_primitive_generic_call_.call.md)
* [CallIndex](../classes/_primitive_generic_call_.callindex.md)
* [CallMetadataV0](_interfaces_metadata_types_.callmetadatav0.md)
* [CandidateReceipt](_interfaces_parachains_types_.candidatereceipt.md)
* [ChainProperties](_interfaces_rpc_types_.chainproperties.md)
* [CodeHash](_interfaces_contracts_types_.codehash.md)
* [CodecDate](../classes/_codec_date_.codecdate.md)
* [CodecSet](../classes/_codec_set_.codecset.md)
* [CollatorId](_interfaces_parachains_types_.collatorid.md)
* [CollatorSignature](_interfaces_parachains_types_.collatorsignature.md)
* [Compact](../classes/_codec_compact_.compact.md)
* [ConsensusEngineId](_interfaces_runtime_types_.consensusengineid.md)
* [ConsensusEngineId](../classes/_primitive_generic_consensusengineid_.consensusengineid.md)
* [ContractCallRequest](_interfaces_contracts_types_.contractcallrequest.md)
* [ContractExecResult](_interfaces_contracts_types_.contractexecresult.md)
* [ContractExecResultSuccess](_interfaces_contracts_types_.contractexecresultsuccess.md)
* [ContractInfo](_interfaces_contracts_types_.contractinfo.md)
* [Conviction](_interfaces_democracy_types_.conviction.md)
* [Data](../classes/_primitive_data_.data.md)
* [Digest](_interfaces_runtime_types_.digest.md)
* [Digest](../classes/_primitive_generic_digest_.digest.md)
* [DigestItem](_interfaces_runtime_types_.digestitem.md)
* [DigestItem](../classes/_primitive_generic_digest_.digestitem.md)
* [DigestOf](_interfaces_system_types_.digestof.md)
* [DispatchClass](_interfaces_runtime_types_.dispatchclass.md)
* [DispatchError](_interfaces_system_types_.dispatcherror.md)
* [DispatchResult](_interfaces_utility_types_.dispatchresult.md)
* [DispatchResultOf](_interfaces_utility_types_.dispatchresultof.md)
* [DoubleMapTypeV3](_interfaces_metadata_types_.doublemaptypev3.md)
* [DoubleMapTypeV4](_interfaces_metadata_types_.doublemaptypev4.md)
* [DoubleMapTypeV5](_interfaces_metadata_types_.doublemaptypev5.md)
* [DoubleMapTypeV6](_interfaces_metadata_types_.doublemaptypev6.md)
* [DoubleMapTypeV7](_interfaces_metadata_types_.doublemaptypev7.md)
* [DoubleMapTypeV8](_interfaces_metadata_types_.doublemaptypev8.md)
* [Ed25519Signature](_interfaces_runtime_types_.ed25519signature.md)
* [Enum](../classes/_codec_enum_.enum.md)
* [EraIndex](_interfaces_staking_types_.eraindex.md)
* [EraPoints](_interfaces_staking_types_.erapoints.md)
* [EraRewards](_interfaces_staking_types_.erarewards.md)
* [ErrorMetadataV8](_interfaces_metadata_types_.errormetadatav8.md)
* [EthereumAddress](_interfaces_claims_types_.ethereumaddress.md)
* [Event](_interfaces_system_types_.event.md)
* [Event](../classes/_primitive_generic_event_.event.md)
* [EventData](../classes/_primitive_generic_event_.eventdata.md)
* [EventIndex](_interfaces_system_types_.eventindex.md)
* [EventMetadataLatest](_interfaces_metadata_types_.eventmetadatalatest.md)
* [EventMetadataV0](_interfaces_metadata_types_.eventmetadatav0.md)
* [EventMetadataV1](_interfaces_metadata_types_.eventmetadatav1.md)
* [EventMetadataV2](_interfaces_metadata_types_.eventmetadatav2.md)
* [EventMetadataV3](_interfaces_metadata_types_.eventmetadatav3.md)
* [EventMetadataV4](_interfaces_metadata_types_.eventmetadatav4.md)
* [EventMetadataV5](_interfaces_metadata_types_.eventmetadatav5.md)
* [EventMetadataV6](_interfaces_metadata_types_.eventmetadatav6.md)
* [EventMetadataV7](_interfaces_metadata_types_.eventmetadatav7.md)
* [EventMetadataV8](_interfaces_metadata_types_.eventmetadatav8.md)
* [EventRecord](_interfaces_system_types_.eventrecord.md)
* [EventRecord0to76](_interfaces_system_types_.eventrecord0to76.md)
* [Exposure](_interfaces_staking_types_.exposure.md)
* [Extrinsic](_interfaces_runtime_types_.extrinsic.md)
* [Extrinsic](../classes/_primitive_extrinsic_extrinsic_.extrinsic.md)
* [ExtrinsicEra](_interfaces_runtime_types_.extrinsicera.md)
* [ExtrinsicEra](../classes/_primitive_extrinsic_extrinsicera_.extrinsicera.md)
* [ExtrinsicOrHash](_interfaces_rpc_types_.extrinsicorhash.md)
* [ExtrinsicPayload](_interfaces_runtime_types_.extrinsicpayload.md)
* [ExtrinsicPayload](../classes/_primitive_extrinsic_extrinsicpayload_.extrinsicpayload.md)
* [ExtrinsicPayloadUnknown](_interfaces_runtime_types_.extrinsicpayloadunknown.md)
* [ExtrinsicPayloadUnknown](../classes/_primitive_extrinsic_extrinsicpayloadunknown_.extrinsicpayloadunknown.md)
* [ExtrinsicPayloadV1](_interfaces_runtime_types_.extrinsicpayloadv1.md)
* [ExtrinsicPayloadV1](../classes/_primitive_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)
* [ExtrinsicPayloadV2](_interfaces_runtime_types_.extrinsicpayloadv2.md)
* [ExtrinsicPayloadV2](../classes/_primitive_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)
* [ExtrinsicPayloadV3](_interfaces_runtime_types_.extrinsicpayloadv3.md)
* [ExtrinsicPayloadV3](../classes/_primitive_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)
* [ExtrinsicPayloadV4](_interfaces_runtime_types_.extrinsicpayloadv4.md)
* [ExtrinsicPayloadV4](../classes/_primitive_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)
* [ExtrinsicSignatureV1](../classes/_primitive_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_primitive_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicSignatureV3](../classes/_primitive_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)
* [ExtrinsicSignatureV4](../classes/_primitive_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)
* [ExtrinsicStatus](_interfaces_rpc_types_.extrinsicstatus.md)
* [ExtrinsicUnknown](_interfaces_runtime_types_.extrinsicunknown.md)
* [ExtrinsicUnknown](../classes/_primitive_extrinsic_extrinsicunknown_.extrinsicunknown.md)
* [ExtrinsicV1](_interfaces_runtime_types_.extrinsicv1.md)
* [ExtrinsicV1](../classes/_primitive_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](_interfaces_runtime_types_.extrinsicv2.md)
* [ExtrinsicV2](../classes/_primitive_extrinsic_v2_extrinsic_.extrinsicv2.md)
* [ExtrinsicV3](_interfaces_runtime_types_.extrinsicv3.md)
* [ExtrinsicV3](../classes/_primitive_extrinsic_v3_extrinsic_.extrinsicv3.md)
* [ExtrinsicV4](_interfaces_runtime_types_.extrinsicv4.md)
* [ExtrinsicV4](../classes/_primitive_extrinsic_v4_extrinsic_.extrinsicv4.md)
* [Forcing](_interfaces_staking_types_.forcing.md)
* [FullIdentification](_interfaces_session_types_.fullidentification.md)
* [FunctionArgumentMetadataLatest](_interfaces_metadata_types_.functionargumentmetadatalatest.md)
* [FunctionArgumentMetadataV0](_interfaces_metadata_types_.functionargumentmetadatav0.md)
* [FunctionArgumentMetadataV1](_interfaces_metadata_types_.functionargumentmetadatav1.md)
* [FunctionArgumentMetadataV2](_interfaces_metadata_types_.functionargumentmetadatav2.md)
* [FunctionArgumentMetadataV3](_interfaces_metadata_types_.functionargumentmetadatav3.md)
* [FunctionArgumentMetadataV4](_interfaces_metadata_types_.functionargumentmetadatav4.md)
* [FunctionArgumentMetadataV5](_interfaces_metadata_types_.functionargumentmetadatav5.md)
* [FunctionArgumentMetadataV6](_interfaces_metadata_types_.functionargumentmetadatav6.md)
* [FunctionArgumentMetadataV7](_interfaces_metadata_types_.functionargumentmetadatav7.md)
* [FunctionArgumentMetadataV8](_interfaces_metadata_types_.functionargumentmetadatav8.md)
* [FunctionMetadataLatest](_interfaces_metadata_types_.functionmetadatalatest.md)
* [FunctionMetadataV0](_interfaces_metadata_types_.functionmetadatav0.md)
* [FunctionMetadataV1](_interfaces_metadata_types_.functionmetadatav1.md)
* [FunctionMetadataV2](_interfaces_metadata_types_.functionmetadatav2.md)
* [FunctionMetadataV3](_interfaces_metadata_types_.functionmetadatav3.md)
* [FunctionMetadataV4](_interfaces_metadata_types_.functionmetadatav4.md)
* [FunctionMetadataV5](_interfaces_metadata_types_.functionmetadatav5.md)
* [FunctionMetadataV6](_interfaces_metadata_types_.functionmetadatav6.md)
* [FunctionMetadataV7](_interfaces_metadata_types_.functionmetadatav7.md)
* [FunctionMetadataV8](_interfaces_metadata_types_.functionmetadatav8.md)
* [Gas](_interfaces_contracts_types_.gas.md)
* [H160](../classes/_primitive_h160_.h160.md)
* [H256](../classes/_primitive_h256_.h256.md)
* [H512](../classes/_primitive_h512_.h512.md)
* [Hash](_interfaces_runtime_types_.hash.md)
* [HeadData](_interfaces_parachains_types_.headdata.md)
* [Header](_interfaces_runtime_types_.header.md)
* [Health](_interfaces_rpc_types_.health.md)
* [Heartbeat](_interfaces_imonline_types_.heartbeat.md)
* [I128](../classes/_primitive_i128_.i128.md)
* [I16](../classes/_primitive_i16_.i16.md)
* [I256](../classes/_primitive_i256_.i256.md)
* [I32](../classes/_primitive_i32_.i32.md)
* [I64](../classes/_primitive_i64_.i64.md)
* [I64Fixed](../classes/_primitive_i64fixed_.i64fixed.md)
* [I8](../classes/_primitive_i8_.i8.md)
* [IHash](_types_.ihash.md)
* [ImmortalEra](_interfaces_runtime_types_.immortalera.md)
* [ImmortalEra](../classes/_primitive_extrinsic_extrinsicera_.immortalera.md)
* [IncludedBlocks](_interfaces_attestations_types_.includedblocks.md)
* [InclusionHeight](_interfaces_authorship_types_.inclusionheight.md)
* [IncomingParachain](_interfaces_parachains_types_.incomingparachain.md)
* [IncomingParachainDeploy](_interfaces_parachains_types_.incomingparachaindeploy.md)
* [IncomingParachainFixed](_interfaces_parachains_types_.incomingparachainfixed.md)
* [Index](_interfaces_runtime_types_.index.md)
* [IndividualExposure](_interfaces_staking_types_.individualexposure.md)
* [InherentOfflineReport](_interfaces_deprecated_types_.inherentofflinereport.md)
* [Int](../classes/_codec_int_.int.md)
* [Justification](_interfaces_runtime_types_.justification.md)
* [Key](_interfaces_system_types_.key.md)
* [KeyTypeId](_interfaces_runtime_types_.keytypeid.md)
* [LeasePeriod](_interfaces_parachains_types_.leaseperiod.md)
* [LeasePeriodOf](_interfaces_parachains_types_.leaseperiodof.md)
* [Linkage](../classes/_codec_linkage_.linkage.md)
* [LinkageResult](../classes/_codec_linkage_.linkageresult.md)
* [LockPeriods](_interfaces_deprecated_types_.lockperiods.md)
* [MapTypeV0](_interfaces_metadata_types_.maptypev0.md)
* [MapTypeV2](_interfaces_metadata_types_.maptypev2.md)
* [MapTypeV3](_interfaces_metadata_types_.maptypev3.md)
* [MapTypeV4](_interfaces_metadata_types_.maptypev4.md)
* [MapTypeV5](_interfaces_metadata_types_.maptypev5.md)
* [MapTypeV6](_interfaces_metadata_types_.maptypev6.md)
* [MapTypeV7](_interfaces_metadata_types_.maptypev7.md)
* [MapTypeV8](_interfaces_metadata_types_.maptypev8.md)
* [MaybeVrf](_interfaces_babe_types_.maybevrf.md)
* [MemberCount](_interfaces_collective_types_.membercount.md)
* [MetadataV0](_interfaces_metadata_types_.metadatav0.md)
* [MetadataV1](_interfaces_metadata_types_.metadatav1.md)
* [ModuleConstantMetadataLatest](_interfaces_metadata_types_.moduleconstantmetadatalatest.md)
* [ModuleConstantMetadataV6](_interfaces_metadata_types_.moduleconstantmetadatav6.md)
* [ModuleConstantMetadataV7](_interfaces_metadata_types_.moduleconstantmetadatav7.md)
* [ModuleConstantMetadataV8](_interfaces_metadata_types_.moduleconstantmetadatav8.md)
* [ModuleMetadataV0](_interfaces_metadata_types_.modulemetadatav0.md)
* [ModuleMetadataV1](_interfaces_metadata_types_.modulemetadatav1.md)
* [Moment](_interfaces_runtime_types_.moment.md)
* [MomentOf](_interfaces_staking_types_.momentof.md)
* [MoreAttestations](_interfaces_attestations_types_.moreattestations.md)
* [MortalEra](_interfaces_runtime_types_.mortalera.md)
* [MortalEra](../classes/_primitive_extrinsic_extrinsicera_.mortalera.md)
* [MultiSignature](_interfaces_runtime_types_.multisignature.md)
* [Multiplier](_interfaces_txpayment_types_.multiplier.md)
* [NetworkState](_interfaces_rpc_types_.networkstate.md)
* [NewAccountOutcome](_interfaces_deprecated_types_.newaccountoutcome.md)
* [NewBidder](_interfaces_parachains_types_.newbidder.md)
* [Null](../classes/_primitive_null_.null.md)
* [OffenceDetails](_interfaces_offences_types_.offencedetails.md)
* [OpaqueKey](_interfaces_deprecated_types_.opaquekey.md)
* [OpaqueMultiaddr](_interfaces_imonline_types_.opaquemultiaddr.md)
* [OpaqueNetworkState](_interfaces_imonline_types_.opaquenetworkstate.md)
* [OpaquePeerId](_interfaces_imonline_types_.opaquepeerid.md)
* [OpaqueTimeSlot](_interfaces_offences_types_.opaquetimeslot.md)
* [Option](../classes/_codec_option_.option.md)
* [Origin](_interfaces_runtime_types_.origin.md)
* [Origin](../classes/_primitive_generic_origin_.origin.md)
* [OuterDispatchCallV0](_interfaces_metadata_types_.outerdispatchcallv0.md)
* [OuterDispatchMetadataV0](_interfaces_metadata_types_.outerdispatchmetadatav0.md)
* [OuterEventEventMetadataEventsV0](_interfaces_metadata_types_.outereventeventmetadataeventsv0.md)
* [OuterEventMetadataV0](_interfaces_metadata_types_.outereventmetadatav0.md)
* [Owner](_interfaces_genericasset_types_.owner.md)
* [ParaId](_interfaces_parachains_types_.paraid.md)
* [ParaIdOf](_interfaces_parachains_types_.paraidof.md)
* [ParaInfo](_interfaces_parachains_types_.parainfo.md)
* [ParaScheduling](_interfaces_parachains_types_.parascheduling.md)
* [ParachainDispatchOrigin](_interfaces_parachains_types_.parachaindispatchorigin.md)
* [PeerInfo](_interfaces_rpc_types_.peerinfo.md)
* [PendingPause](_interfaces_grandpa_types_.pendingpause.md)
* [PendingResume](_interfaces_grandpa_types_.pendingresume.md)
* [Perbill](_interfaces_runtime_types_.perbill.md)
* [Permill](_interfaces_runtime_types_.permill.md)
* [PermissionLatest](_interfaces_genericasset_types_.permissionlatest.md)
* [PermissionVersions](_interfaces_genericasset_types_.permissionversions.md)
* [PermissionsV1](_interfaces_genericasset_types_.permissionsv1.md)
* [Phantom](_interfaces_runtime_types_.phantom.md)
* [PhantomData](_interfaces_runtime_types_.phantomdata.md)
* [Phase](_interfaces_system_types_.phase.md)
* [PlainTypeLatest](_interfaces_metadata_types_.plaintypelatest.md)
* [PlainTypeV0](_interfaces_metadata_types_.plaintypev0.md)
* [PlainTypeV2](_interfaces_metadata_types_.plaintypev2.md)
* [PlainTypeV3](_interfaces_metadata_types_.plaintypev3.md)
* [PlainTypeV4](_interfaces_metadata_types_.plaintypev4.md)
* [PlainTypeV5](_interfaces_metadata_types_.plaintypev5.md)
* [PlainTypeV6](_interfaces_metadata_types_.plaintypev6.md)
* [PlainTypeV7](_interfaces_metadata_types_.plaintypev7.md)
* [PlainTypeV8](_interfaces_metadata_types_.plaintypev8.md)
* [Points](_interfaces_staking_types_.points.md)
* [PrefabWasmModule](_interfaces_contracts_types_.prefabwasmmodule.md)
* [PrefabWasmModuleReserved](_interfaces_contracts_types_.prefabwasmmodulereserved.md)
* [PropIndex](_interfaces_democracy_types_.propindex.md)
* [Proposal](_interfaces_democracy_types_.proposal.md)
* [ProposalIndex](_interfaces_collective_types_.proposalindex.md)
* [RawAuraPreDigest](_interfaces_aura_types_.rawaurapredigest.md)
* [RawBabePreDigest](_interfaces_babe_types_.rawbabepredigest.md)
* [RawBabePreDigest0to159](_interfaces_babe_types_.rawbabepredigest0to159.md)
* [RawBabePreDigestCompat](_interfaces_babe_types_.rawbabepredigestcompat.md)
* [RawBabePreDigestPrimary](_interfaces_babe_types_.rawbabepredigestprimary.md)
* [RawBabePreDigestPrimary0to159](_interfaces_babe_types_.rawbabepredigestprimary0to159.md)
* [RawBabePreDigestSecondary](_interfaces_babe_types_.rawbabepredigestsecondary.md)
* [RawBabePreDigestSecondary0to159](_interfaces_babe_types_.rawbabepredigestsecondary0to159.md)
* [ReferendumIndex](_interfaces_democracy_types_.referendumindex.md)
* [ReferendumInfo](_interfaces_democracy_types_.referenduminfo.md)
* [ReportIdOf](_interfaces_offences_types_.reportidof.md)
* [Reporter](_interfaces_offences_types_.reporter.md)
* [Result](../classes/_codec_result_.result.md)
* [Retriable](_interfaces_parachains_types_.retriable.md)
* [RewardDestination](_interfaces_staking_types_.rewarddestination.md)
* [RpcMethods](_interfaces_rpc_types_.rpcmethods.md)
* [RuntimeDispatchInfo](_interfaces_rpc_types_.runtimedispatchinfo.md)
* [RuntimeModuleMetadataV0](_interfaces_metadata_types_.runtimemodulemetadatav0.md)
* [RuntimeVersion](_interfaces_rpc_types_.runtimeversion.md)
* [Schedule](_interfaces_contracts_types_.schedule.md)
* [SeedOf](_interfaces_contracts_types_.seedof.md)
* [SessionIndex](_interfaces_session_types_.sessionindex.md)
* [SessionKey](_interfaces_deprecated_types_.sessionkey.md)
* [SetId](_interfaces_grandpa_types_.setid.md)
* [SetIndex](_interfaces_elections_types_.setindex.md)
* [Signature](_interfaces_runtime_types_.signature.md)
* [SignedBlock](_interfaces_runtime_types_.signedblock.md)
* [SlashJournalEntry](_interfaces_staking_types_.slashjournalentry.md)
* [SlotNumber](_interfaces_babe_types_.slotnumber.md)
* [SlotRange](_interfaces_parachains_types_.slotrange.md)
* [Sr25519Signature](_interfaces_runtime_types_.sr25519signature.md)
* [StakingLedger](_interfaces_staking_types_.stakingledger.md)
* [StorageChangeSet](_interfaces_rpc_types_.storagechangeset.md)
* [StorageData](../classes/_primitive_storagedata_.storagedata.md)
* [StorageEntryModifierLatest](_interfaces_metadata_types_.storageentrymodifierlatest.md)
* [StorageEntryModifierV6](_interfaces_metadata_types_.storageentrymodifierv6.md)
* [StorageEntryModifierV7](_interfaces_metadata_types_.storageentrymodifierv7.md)
* [StorageEntryModifierV8](_interfaces_metadata_types_.storageentrymodifierv8.md)
* [StorageFunctionMetadataV0](_interfaces_metadata_types_.storagefunctionmetadatav0.md)
* [StorageFunctionMetadataV1](_interfaces_metadata_types_.storagefunctionmetadatav1.md)
* [StorageFunctionModifierV0](_interfaces_metadata_types_.storagefunctionmodifierv0.md)
* [StorageFunctionModifierV1](_interfaces_metadata_types_.storagefunctionmodifierv1.md)
* [StorageFunctionModifierV2](_interfaces_metadata_types_.storagefunctionmodifierv2.md)
* [StorageFunctionModifierV3](_interfaces_metadata_types_.storagefunctionmodifierv3.md)
* [StorageFunctionModifierV4](_interfaces_metadata_types_.storagefunctionmodifierv4.md)
* [StorageFunctionModifierV5](_interfaces_metadata_types_.storagefunctionmodifierv5.md)
* [StorageFunctionTypeV0](_interfaces_metadata_types_.storagefunctiontypev0.md)
* [StorageFunctionTypeV1](_interfaces_metadata_types_.storagefunctiontypev1.md)
* [StorageHasher](../classes/_primitive_storagehasher_.storagehasher.md)
* [StorageKey](../classes/_primitive_storagekey_.storagekey.md)
* [StorageMetadataV0](_interfaces_metadata_types_.storagemetadatav0.md)
* [StoredPendingChange](_interfaces_grandpa_types_.storedpendingchange.md)
* [StoredState](_interfaces_grandpa_types_.storedstate.md)
* [Struct](../classes/_codec_struct_.struct.md)
* [StructAny](../classes/_codec_structany_.structany.md)
* [SubId](_interfaces_parachains_types_.subid.md)
* [Text](../classes/_primitive_text_.text.md)
* [TombstoneContractInfo](_interfaces_contracts_types_.tombstonecontractinfo.md)
* [TreasuryProposal](_interfaces_treasury_types_.treasuryproposal.md)
* [TrieId](_interfaces_contracts_types_.trieid.md)
* [Tuple](../classes/_codec_tuple_.tuple.md)
* [Type](../classes/_primitive_type_.type.md)
* [U128](../classes/_primitive_u128_.u128.md)
* [U16](../classes/_primitive_u16_.u16.md)
* [U256](../classes/_primitive_u256_.u256.md)
* [U32](../classes/_primitive_u32_.u32.md)
* [U64](../classes/_primitive_u64_.u64.md)
* [U8](../classes/_primitive_u8_.u8.md)
* [U8a](../classes/_codec_u8a_.u8a.md)
* [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)
* [UInt](../classes/_codec_uint_.uint.md)
* [USize](../classes/_primitive_usize_.usize.md)
* [UncleEntryItem](_interfaces_authorship_types_.uncleentryitem.md)
* [Unconstructable](../classes/_primitive_unconstructable_.unconstructable.md)
* [UnlockChunk](_interfaces_staking_types_.unlockchunk.md)
* [UpwardMessage](_interfaces_parachains_types_.upwardmessage.md)
* [ValidatorId](_interfaces_runtime_types_.validatorid.md)
* [ValidatorIndex](_interfaces_parachains_types_.validatorindex.md)
* [ValidatorPrefs](_interfaces_staking_types_.validatorprefs.md)
* [ValidatorPrefs0to145](_interfaces_staking_types_.validatorprefs0to145.md)
* [ValidityAttestation](_interfaces_parachains_types_.validityattestation.md)
* [Vec](../classes/_codec_vec_.vec.md)
* [VecAny](../classes/_codec_vecany_.vecany.md)
* [VecFixed](../classes/_codec_vecfixed_.vecfixed.md)
* [VestingSchedule](_interfaces_balances_types_.vestingschedule.md)
* [Vote](_interfaces_elections_types_.vote.md)
* [Vote](../classes/_primitive_generic_vote_.vote.md)
* [VoteIndex](_interfaces_elections_types_.voteindex.md)
* [VoteThreshold](_interfaces_elections_types_.votethreshold.md)
* [VoterInfo](_interfaces_elections_types_.voterinfo.md)
* [Votes](_interfaces_collective_types_.votes.md)
* [Weight](_interfaces_runtime_types_.weight.md)
* [WeightMultiplier](_interfaces_runtime_types_.weightmultiplier.md)
* [WinningData](_interfaces_parachains_types_.winningdata.md)
* [WithdrawReasons](_interfaces_balances_types_.withdrawreasons.md)

## Index

### Properties

* [encodedLength](_types_.codec.md#encodedlength)
* [hash](_types_.codec.md#hash)
* [isEmpty](_types_.codec.md#isempty)

### Methods

* [eq](_types_.codec.md#eq)
* [toHex](_types_.codec.md#tohex)
* [toJSON](_types_.codec.md#tojson)
* [toRawType](_types_.codec.md#torawtype)
* [toString](_types_.codec.md#tostring)
* [toU8a](_types_.codec.md#tou8a)

## Properties

###  encodedLength

• **encodedLength**: *number*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/types.ts#L77)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  hash

• **hash**: *[IHash](_types_.ihash.md)*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/types.ts#L82)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Defined in [types.ts:87](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/types.ts#L87)*

**`description`** Checks if the value is an empty value

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Defined in [types.ts:92](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/types.ts#L92)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Defined in [types.ts:97](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/types.ts#L97)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/types.ts#L102)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/types.ts#L107)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/types.ts#L112)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *Uint8Array*

*Defined in [types.ts:118](https://github.com/polkadot-js/api/blob/75220eb54f/packages/types/src/types.ts#L118)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*
