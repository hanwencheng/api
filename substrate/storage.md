## Storage

The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)
- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[grandpa](#grandpa)**

- **[imOnline](#imOnline)**

- **[indices](#indices)**

- **[nicks](#nicks)**

- **[offences](#offences)**

- **[randomnessCollectiveFlip](#randomnessCollectiveFlip)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalCommittee)**

- **[technicalMembership](#technicalMembership)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionPayment)**

- **[treasury](#treasury)**

- **[substrate](#substrate)**


___


## authorship

### author(): `Option<{"Plain":"AccountId"}>`
- **interface**: api.query.authorship.author
- **summary**: Author of current block.

### didSetUncles(): `{"Plain":"bool"}`
- **interface**: api.query.authorship.didSetUncles
- **summary**: Whether uncles were already set in this block.

### uncles(): `{"Plain":"Vec<UncleEntryItem>"}`
- **interface**: api.query.authorship.uncles
- **summary**: Uncles

___


## babe

### authorities(): `{"Plain":"Vec<(AuthorityId,BabeAuthorityWeight)>"}`
- **interface**: api.query.babe.authorities
- **summary**: Current epoch authorities.

### currentSlot(): `{"Plain":"u64"}`
- **interface**: api.query.babe.currentSlot
- **summary**: Current slot number.

### epochIndex(): `{"Plain":"u64"}`
- **interface**: api.query.babe.epochIndex
- **summary**: Current epoch index.

### genesisSlot(): `{"Plain":"u64"}`
- **interface**: api.query.babe.genesisSlot
- **summary**: The slot at which the first epoch actually started. This is 0 until the first block of the chain.

### initialized(): `Option<{"Plain":"MaybeVrf"}>`
- **interface**: api.query.babe.initialized
- **summary**: Temporary value (cleared at block finalization) which is `Some` if per-block initialization has already been called for current block.

### nextRandomness(): `{"Plain":"[u8;32]"}`
- **interface**: api.query.babe.nextRandomness
- **summary**: Next epoch randomness.

### randomness(): `{"Plain":"[u8;32]"}`
- **interface**: api.query.babe.randomness
- **summary**: The epoch randomness for the *current* epoch.  # Security  This MUST NOT be used for gambling, as it can be influenced by a malicious validator in the short term. It MAY be used in many cryptographic protocols, however, so long as one remembers that this (like everything else on-chain) it is public. For example, it can be used where a number is needed that cannot have been chosen by an adversary, for purposes such as public-coin zero-knowledge proofs.

### segmentIndex(): `{"Plain":"u32"}`
- **interface**: api.query.babe.segmentIndex
- **summary**: Randomness under construction.  We make a tradeoff between storage accesses and list length. We store the under-construction randomness in segments of up to `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.  Once a segment reaches this length, we begin the next one. We reset all segments and return to `0` at the beginning of every epoch.

### underConstruction(`u32`): `{"Map":{"hasher":"Blake2_256","key":"u32","value":"Vec<[u8;32]>","linked":false}}`
- **interface**: api.query.babe.underConstruction

___


## balances

### freeBalance(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"Balance","linked":false}}`
- **interface**: api.query.balances.freeBalance
- **summary**: The 'free' balance of a given account.  This is the only balance that matters in terms of most operations on tokens. It alone is used to determine the balance when in the contract execution environment. When this balance falls below the value of `ExistentialDeposit`, then the 'current account' is deleted: specifically `FreeBalance`. Further, the `OnFreeBalanceZero` callback is invoked, giving a chance to external modules to clean up data associated with the deleted account.  `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets collapsed to zero if it ever becomes less than `ExistentialDeposit`.

### locks(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"Vec<BalanceLock>","linked":false}}`
- **interface**: api.query.balances.locks
- **summary**: Any liquidity locks on some account balances.

### reservedBalance(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"Balance","linked":false}}`
- **interface**: api.query.balances.reservedBalance
- **summary**: The amount of the balance of a given account that is externally reserved; this can still get slashed, but gets slashed last of all.  This balance is a 'reserve' balance that other subsystems use in order to set aside tokens that are still 'owned' by the account holder, but which are suspendable.  When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account' is deleted: specifically, `ReservedBalance`.  `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets collapsed to zero if it ever becomes less than `ExistentialDeposit`.)

### totalIssuance(): `{"Plain":"Balance"}`
- **interface**: api.query.balances.totalIssuance
- **summary**: The total units issued in the system.

### vesting(`AccountId`): `Option<{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"VestingSchedule","linked":false}}>`
- **interface**: api.query.balances.vesting
- **summary**: Information regarding the vesting of a given account.

___


## contracts

### accountCounter(): `{"Plain":"u64"}`
- **interface**: api.query.contracts.accountCounter
- **summary**: The subtrie counter.

### codeStorage(`CodeHash`): `Option<{"Map":{"hasher":"Blake2_256","key":"CodeHash","value":"PrefabWasmModule","linked":false}}>`
- **interface**: api.query.contracts.codeStorage
- **summary**: A mapping between an original code hash and instrumented wasm code, ready for execution.

### contractInfoOf(`AccountId`): `Option<{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"ContractInfo","linked":false}}>`
- **interface**: api.query.contracts.contractInfoOf
- **summary**: The code associated with a given account.

### currentSchedule(): `{"Plain":"Schedule"}`
- **interface**: api.query.contracts.currentSchedule
- **summary**: Current cost schedule for contracts.

### gasPrice(): `{"Plain":"BalanceOf"}`
- **interface**: api.query.contracts.gasPrice
- **summary**: The price of one unit of gas.

### gasSpent(): `{"Plain":"Gas"}`
- **interface**: api.query.contracts.gasSpent
- **summary**: Gas spent so far in this block.

### pristineCode(`CodeHash`): `Option<{"Map":{"hasher":"Blake2_256","key":"CodeHash","value":"Bytes","linked":false}}>`
- **interface**: api.query.contracts.pristineCode
- **summary**: A mapping from an original code hash to the original code, untouched by instrumentation.

___


## council

### members(): `{"Plain":"Vec<AccountId>"}`
- **interface**: api.query.council.members
- **summary**: The current members of the collective. This is stored sorted (just by value).

### proposalCount(): `{"Plain":"u32"}`
- **interface**: api.query.council.proposalCount
- **summary**: Proposals so far.

### proposalOf(`Hash`): `Option<{"Map":{"hasher":"Blake2_256","key":"Hash","value":"Proposal","linked":false}}>`
- **interface**: api.query.council.proposalOf
- **summary**: Actual proposal for a given hash, if it's current.

### proposals(): `{"Plain":"Vec<Hash>"}`
- **interface**: api.query.council.proposals
- **summary**: The hashes of the active proposals.

### voting(`Hash`): `Option<{"Map":{"hasher":"Blake2_256","key":"Hash","value":"Votes","linked":false}}>`
- **interface**: api.query.council.voting
- **summary**: Votes on a given proposal, if it is ongoing.

___


## democracy

### blacklist(`Hash`): `Option<{"Map":{"hasher":"Blake2_256","key":"Hash","value":"(BlockNumber,Vec<AccountId>)","linked":false}}>`
- **interface**: api.query.democracy.blacklist
- **summary**: A record of who vetoed what. Maps proposal hash to a possible existent block number (until when it may not be resubmitted) and who vetoed it.

### cancellations(`Hash`): `{"Map":{"hasher":"Blake2_256","key":"Hash","value":"bool","linked":false}}`
- **interface**: api.query.democracy.cancellations
- **summary**: Record of all proposals that have been subject to emergency cancellation.

### delegations(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"(AccountId,Conviction)","linked":true}}`
- **interface**: api.query.democracy.delegations
- **summary**: Get the account (and lock periods) to which another account is delegating vote.

### depositOf(`PropIndex`): `Option<{"Map":{"hasher":"Blake2_256","key":"PropIndex","value":"(BalanceOf,Vec<AccountId>)","linked":false}}>`
- **interface**: api.query.democracy.depositOf
- **summary**: Those who have locked a deposit.

### dispatchQueue(`BlockNumber`): `{"Map":{"hasher":"Blake2_256","key":"BlockNumber","value":"Vec<Option<(Proposal,ReferendumIndex)>>","linked":false}}`
- **interface**: api.query.democracy.dispatchQueue
- **summary**: Queue of successful referenda to be dispatched.

### lastTabledWasExternal(): `{"Plain":"bool"}`
- **interface**: api.query.democracy.lastTabledWasExternal
- **summary**: True if the last referendum tabled was submitted externally. False if it was a public proposal.

### nextExternal(): `Option<{"Plain":"(Proposal,VoteThreshold)"}>`
- **interface**: api.query.democracy.nextExternal
- **summary**: The referendum to be tabled whenever it would be valid to table an external proposal. This happens when a referendum needs to be tabled and one of two conditions are met: - `LastTabledWasExternal` is `false`; or - `PublicProps` is empty.

### nextTally(): `{"Plain":"ReferendumIndex"}`
- **interface**: api.query.democracy.nextTally
- **summary**: The next referendum index that should be tallied.

### proxy(`AccountId`): `Option<{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"AccountId","linked":false}}>`
- **interface**: api.query.democracy.proxy
- **summary**: Who is able to vote for whom. Value is the fund-holding account, key is the vote-transaction-sending account.

### publicPropCount(): `{"Plain":"PropIndex"}`
- **interface**: api.query.democracy.publicPropCount
- **summary**: The number of (public) proposals that have been made so far.

### publicProps(): `{"Plain":"Vec<(PropIndex,Proposal,AccountId)>"}`
- **interface**: api.query.democracy.publicProps
- **summary**: The public proposals. Unsorted.

### referendumCount(): `{"Plain":"ReferendumIndex"}`
- **interface**: api.query.democracy.referendumCount
- **summary**: The next free referendum index, aka the number of referenda started so far.

### referendumInfoOf(`ReferendumIndex`): `Option<{"Map":{"hasher":"Blake2_256","key":"ReferendumIndex","value":"ReferendumInfo","linked":false}}>`
- **interface**: api.query.democracy.referendumInfoOf
- **summary**: Information concerning any given referendum.

### voteOf(`(ReferendumIndex,AccountId)`): `{"Map":{"hasher":"Blake2_256","key":"(ReferendumIndex,AccountId)","value":"Vote","linked":false}}`
- **interface**: api.query.democracy.voteOf
- **summary**: Get the vote in a given referendum of a particular voter. The result is meaningful only if `voters_for` includes the voter when called with the referendum (you'll get the default `Vote` value otherwise). If you don't want to check `voters_for`, then you can also check for simple existence with `VoteOf::exists` first.

### votersFor(`ReferendumIndex`): `{"Map":{"hasher":"Blake2_256","key":"ReferendumIndex","value":"Vec<AccountId>","linked":false}}`
- **interface**: api.query.democracy.votersFor
- **summary**: Get the voters for the current proposal.

___


## elections

### candidates(): `{"Plain":"Vec<AccountId>"}`
- **interface**: api.query.elections.candidates
- **summary**: The present candidate list. Sorted based on account id. A current member can never enter this vector and is always implicitly assumed to be a candidate.

### didMigrate(): `{"Plain":"bool"}`
- **interface**: api.query.elections.didMigrate
- **summary**: Has the storage format been updated? NOTE: Only use and set to false if you have used an early version of this module. Should be set to true otherwise.

### electionRounds(): `{"Plain":"u32"}`
- **interface**: api.query.elections.electionRounds
- **summary**: The total number of vote rounds that have happened, excluding the upcoming one.

### members(): `{"Plain":"Vec<(AccountId,BalanceOf)>"}`
- **interface**: api.query.elections.members
- **summary**: The current elected membership. Sorted based on account id.

### runnersUp(): `{"Plain":"Vec<(AccountId,BalanceOf)>"}`
- **interface**: api.query.elections.runnersUp
- **summary**: The current runners_up. Sorted based on low to high merit (worse to best runner).

### stakeOf(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"BalanceOf","linked":false}}`
- **interface**: api.query.elections.stakeOf
- **summary**: Locked stake of a voter.

### votesOf(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"Vec<AccountId>","linked":true}}`
- **interface**: api.query.elections.votesOf
- **summary**: Votes of a particular voter, with the round index of the votes.

___


## grandpa

### authorities(): `{"Plain":"AuthorityList"}`
- **interface**: api.query.grandpa.authorities
- **summary**: DEPRECATED  This used to store the current authority set, which has been migrated to the well-known GRANDPA_AUTHORITES_KEY unhashed key.

### currentSetId(): `{"Plain":"SetId"}`
- **interface**: api.query.grandpa.currentSetId
- **summary**: The number of changes (both in terms of keys and underlying economic responsibilities) in the "set" of Grandpa validators from genesis.

### nextForced(): `Option<{"Plain":"BlockNumber"}>`
- **interface**: api.query.grandpa.nextForced
- **summary**: next block number where we can force a change.

### pendingChange(): `Option<{"Plain":"StoredPendingChange"}>`
- **interface**: api.query.grandpa.pendingChange
- **summary**: Pending change: (signaled at, scheduled change).

### setIdSession(`SetId`): `Option<{"Map":{"hasher":"Blake2_256","key":"SetId","value":"SessionIndex","linked":false}}>`
- **interface**: api.query.grandpa.setIdSession
- **summary**: A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.

### stalled(): `Option<{"Plain":"(BlockNumber,BlockNumber)"}>`
- **interface**: api.query.grandpa.stalled
- **summary**: `true` if we are currently stalled.

### state(): `{"Plain":"StoredState"}`
- **interface**: api.query.grandpa.state
- **summary**: State of the current authority set.

___


## imOnline

### authoredBlocks(`SessionIndex, ValidatorId`): `u32`
- **interface**: api.query.imOnline.authoredBlocks
- **summary**: For each session index, we keep a mapping of `T::ValidatorId` to the number of blocks authored by the given authority.

### gossipAt(): `{"Plain":"BlockNumber"}`
- **interface**: api.query.imOnline.gossipAt
- **summary**: The block number when we should gossip.

### keys(): `{"Plain":"Vec<AuthorityId>"}`
- **interface**: api.query.imOnline.keys
- **summary**: The current set of keys that may issue a heartbeat.

### receivedHeartbeats(`SessionIndex, AuthIndex`): `Option<Bytes>`
- **interface**: api.query.imOnline.receivedHeartbeats
- **summary**: For each session index, we keep a mapping of `AuthIndex` to `offchain::OpaqueNetworkState`.

___


## indices

### enumSet(`AccountIndex`): `{"Map":{"hasher":"Blake2_256","key":"AccountIndex","value":"Vec<AccountId>","linked":false}}`
- **interface**: api.query.indices.enumSet
- **summary**: The enumeration sets.

### nextEnumSet(): `{"Plain":"AccountIndex"}`
- **interface**: api.query.indices.nextEnumSet
- **summary**: The next free enumeration set.

___


## nicks

### nameOf(`AccountId`): `Option<{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"(Bytes,BalanceOf)","linked":false}}>`
- **interface**: api.query.nicks.nameOf
- **summary**: The lookup table for names.

___


## offences

### concurrentReportsIndex(`Kind, OpaqueTimeSlot`): `Vec<ReportIdOf>`
- **interface**: api.query.offences.concurrentReportsIndex
- **summary**: A vector of reports of the same kind that happened at the same time slot.

### reports(`ReportIdOf`): `Option<{"Map":{"hasher":"Blake2_256","key":"ReportIdOf","value":"OffenceDetails","linked":false}}>`
- **interface**: api.query.offences.reports
- **summary**: The primary structure that holds all offence records keyed by report identifiers.

### reportsByKindIndex(`Kind`): `{"Map":{"hasher":"Blake2_256","key":"Kind","value":"Bytes","linked":false}}`
- **interface**: api.query.offences.reportsByKindIndex
- **summary**: Enumerates all reports of a kind along with the time they happened.  All reports are sorted by the time of offence.  Note that the actual type of this mapping is `Vec<u8>`, this is because values of different types are not supported at the moment so we are doing the manual serialization.

___


## randomnessCollectiveFlip

### randomMaterial(): `{"Plain":"Vec<Hash>"}`
- **interface**: api.query.randomnessCollectiveFlip.randomMaterial
- **summary**: Series of block headers from the last 81 blocks that acts as random seed material. This is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of the oldest hash.

___


## session

### currentIndex(): `{"Plain":"SessionIndex"}`
- **interface**: api.query.session.currentIndex
- **summary**: Current index of the session.

### disabledValidators(): `{"Plain":"Vec<u32>"}`
- **interface**: api.query.session.disabledValidators
- **summary**: Indices of disabled validators.  The set is cleared when `on_session_ending` returns a new set of identities.

### keyOwner(`Bytes, (KeyTypeId,Bytes)`): `Option<ValidatorId>`
- **interface**: api.query.session.keyOwner
- **summary**: The owner of a key. The second key is the `KeyTypeId` + the encoded key.  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of the trie. Having all data in the same branch should prevent slowing down other queries.

### nextKeys(`Bytes, ValidatorId`): `Option<Keys>`
- **interface**: api.query.session.nextKeys
- **summary**: The next session keys for a validator.  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of the trie. Having all data in the same branch should prevent slowing down other queries.

### queuedChanged(): `{"Plain":"bool"}`
- **interface**: api.query.session.queuedChanged
- **summary**: True if the underlying economic identities or weighting behind the validators has changed in the queued validator set.

### queuedKeys(): `{"Plain":"Vec<(ValidatorId,Keys)>"}`
- **interface**: api.query.session.queuedKeys
- **summary**: The queued keys for the next session. When the next session begins, these keys will be used to determine the validator's session keys.

### validators(): `{"Plain":"Vec<ValidatorId>"}`
- **interface**: api.query.session.validators
- **summary**: The current set of validators.

___


## staking

### bonded(`AccountId`): `Option<{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"AccountId","linked":false}}>`
- **interface**: api.query.staking.bonded
- **summary**: Map from all locked "stash" accounts to the controller account.

### bondedEras(): `{"Plain":"Vec<(EraIndex,SessionIndex)>"}`
- **interface**: api.query.staking.bondedEras
- **summary**: A mapping from still-bonded eras to the first session index of that era.

### canceledSlashPayout(): `{"Plain":"BalanceOf"}`
- **interface**: api.query.staking.canceledSlashPayout
- **summary**: The amount of currency given to reporters of a slash event which was canceled by extraordinary circumstances (e.g. governance).

### currentElected(): `{"Plain":"Vec<AccountId>"}`
- **interface**: api.query.staking.currentElected
- **summary**: The currently elected validator set keyed by stash account ID.

### currentEra(): `{"Plain":"EraIndex"}`
- **interface**: api.query.staking.currentEra
- **summary**: The current era index.

### currentEraPointsEarned(): `{"Plain":"EraPoints"}`
- **interface**: api.query.staking.currentEraPointsEarned
- **summary**: Rewards for the current era. Using indices of current elected set.

### currentEraStart(): `{"Plain":"MomentOf"}`
- **interface**: api.query.staking.currentEraStart
- **summary**: The start of the current era.

### currentEraStartSessionIndex(): `{"Plain":"SessionIndex"}`
- **interface**: api.query.staking.currentEraStartSessionIndex
- **summary**: The session index at which the current era started.

### earliestUnappliedSlash(): `Option<{"Plain":"EraIndex"}>`
- **interface**: api.query.staking.earliestUnappliedSlash
- **summary**: The earliest era for which we have a pending, unapplied slash.

### forceEra(): `{"Plain":"Forcing"}`
- **interface**: api.query.staking.forceEra
- **summary**: True if the next session change will be a new era regardless of index.

### invulnerables(): `{"Plain":"Vec<AccountId>"}`
- **interface**: api.query.staking.invulnerables
- **summary**: Any validators that may never be slashed or forcibly kicked. It's a Vec since they're easy to initialize and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets.

### ledger(`AccountId`): `Option<{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"StakingLedger","linked":false}}>`
- **interface**: api.query.staking.ledger
- **summary**: Map from all (unlocked) "controller" accounts to the info regarding the staking.

### minimumValidatorCount(): `{"Plain":"u32"}`
- **interface**: api.query.staking.minimumValidatorCount
- **summary**: Minimum number of staking participants before emergency conditions are imposed.

### nominators(`AccountId`): `Option<{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"Nominations","linked":true}}>`
- **interface**: api.query.staking.nominators
- **summary**: The map from nominator stash key to the set of stash keys of all validators to nominate.  NOTE: is private so that we can ensure upgraded before all typical accesses. Direct storage APIs can still bypass this protection.

### nominatorSlashInEra(`EraIndex, AccountId`): `Option<BalanceOf>`
- **interface**: api.query.staking.nominatorSlashInEra
- **summary**: All slashing events on nominators, mapped by era to the highest slash value of the era.

### payee(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"RewardDestination","linked":false}}`
- **interface**: api.query.staking.payee
- **summary**: Where the reward payment should be made. Keyed by stash.

### slashingSpans(`AccountId`): `Option<{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"SlashingSpans","linked":false}}>`
- **interface**: api.query.staking.slashingSpans
- **summary**: Slashing spans for stash accounts.

### slashRewardFraction(): `{"Plain":"Perbill"}`
- **interface**: api.query.staking.slashRewardFraction
- **summary**: The percentage of the slash that is distributed to reporters.  The rest of the slashed value is handled by the `Slash`.

### slotStake(): `{"Plain":"BalanceOf"}`
- **interface**: api.query.staking.slotStake
- **summary**: The amount of balance actively at stake for each validator slot, currently.  This is used to derive rewards and punishments.

### spanSlash(`(AccountId,SpanIndex)`): `{"Map":{"hasher":"Blake2_256","key":"(AccountId,SpanIndex)","value":"SpanRecord","linked":false}}`
- **interface**: api.query.staking.spanSlash
- **summary**: Records information about the maximum slash of a stash within a slashing span, as well as how much reward has been paid out.

### stakers(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"Exposure","linked":false}}`
- **interface**: api.query.staking.stakers
- **summary**: Nominators for a particular account that is in action right now. You can't iterate through validators here, but you can find them in the Session module.  This is keyed by the stash account.

### storageVersion(): `{"Plain":"u32"}`
- **interface**: api.query.staking.storageVersion
- **summary**: The version of storage for upgrade.

### unappliedSlashes(`EraIndex`): `{"Map":{"hasher":"Blake2_256","key":"EraIndex","value":"Vec<UnappliedSlash>","linked":false}}`
- **interface**: api.query.staking.unappliedSlashes
- **summary**: All unapplied slashes that are queued for later.

### validatorCount(): `{"Plain":"u32"}`
- **interface**: api.query.staking.validatorCount
- **summary**: The ideal number of staking participants.

### validators(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"ValidatorPrefs","linked":true}}`
- **interface**: api.query.staking.validators
- **summary**: The map from (wannabe) validator stash key to the preferences of that validator.

### validatorSlashInEra(`EraIndex, AccountId`): `Option<(Perbill,BalanceOf)>`
- **interface**: api.query.staking.validatorSlashInEra
- **summary**: All slashing events on validators, mapped by era to the highest slash proportion and slash value of the era.

___


## sudo

### key(): `{"Plain":"AccountId"}`
- **interface**: api.query.sudo.key
- **summary**: The `AccountId` of the sudo key.

___


## system

### accountNonce(`AccountId`): `{"Map":{"hasher":"Blake2_256","key":"AccountId","value":"Index","linked":false}}`
- **interface**: api.query.system.accountNonce
- **summary**: Extrinsics nonce for accounts.

### allExtrinsicsLen(): `Option<{"Plain":"u32"}>`
- **interface**: api.query.system.allExtrinsicsLen
- **summary**: Total length (in bytes) for all extrinsics put together, for the current block.

### allExtrinsicsWeight(): `Option<{"Plain":"Weight"}>`
- **interface**: api.query.system.allExtrinsicsWeight
- **summary**: Total weight for all extrinsics put together, for the current block.

### blockHash(`BlockNumber`): `{"Map":{"hasher":"Blake2_256","key":"BlockNumber","value":"Hash","linked":false}}`
- **interface**: api.query.system.blockHash
- **summary**: Map of block numbers to block hashes.

### digest(): `{"Plain":"DigestOf"}`
- **interface**: api.query.system.digest
- **summary**: Digest of the current block, also part of the block header.

### eventCount(): `{"Plain":"EventIndex"}`
- **interface**: api.query.system.eventCount
- **summary**: The number of events in the `Events<T>` list.

### events(): `{"Plain":"Vec<EventRecord>"}`
- **interface**: api.query.system.events
- **summary**: Events deposited for the current block.

### eventTopics(`Null, Hash`): `Vec<(BlockNumber,EventIndex)>`
- **interface**: api.query.system.eventTopics
- **summary**: Mapping between a topic (represented by T::Hash) and a vector of indexes of events in the `<Events<T>>` list.  The first key serves no purpose. This field is declared as double_map just for convenience of using `remove_prefix`.  All topic vectors have deterministic storage locations depending on the topic. This allows light-clients to leverage the changes trie storage tracking mechanism and in case of changes fetch the list of events of interest.  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just the `EventIndex` then in case if the topic has the same contents on the next block no notification will be triggered thus the event might be lost.

### extrinsicCount(): `Option<{"Plain":"u32"}>`
- **interface**: api.query.system.extrinsicCount
- **summary**: Total extrinsics count for the current block.

### extrinsicData(`u32`): `{"Map":{"hasher":"Blake2_256","key":"u32","value":"Bytes","linked":false}}`
- **interface**: api.query.system.extrinsicData
- **summary**: Extrinsics data for the current block (maps an extrinsic's index to its data).

### extrinsicsRoot(): `{"Plain":"Hash"}`
- **interface**: api.query.system.extrinsicsRoot
- **summary**: Extrinsics root of the current block, also part of the block header.

### number(): `{"Plain":"BlockNumber"}`
- **interface**: api.query.system.number
- **summary**: The current block number being processed. Set by `execute_block`.

### parentHash(): `{"Plain":"Hash"}`
- **interface**: api.query.system.parentHash
- **summary**: Hash of the previous block.

___


## technicalCommittee

### members(): `{"Plain":"Vec<AccountId>"}`
- **interface**: api.query.technicalCommittee.members
- **summary**: The current members of the collective. This is stored sorted (just by value).

### proposalCount(): `{"Plain":"u32"}`
- **interface**: api.query.technicalCommittee.proposalCount
- **summary**: Proposals so far.

### proposalOf(`Hash`): `Option<{"Map":{"hasher":"Blake2_256","key":"Hash","value":"Proposal","linked":false}}>`
- **interface**: api.query.technicalCommittee.proposalOf
- **summary**: Actual proposal for a given hash, if it's current.

### proposals(): `{"Plain":"Vec<Hash>"}`
- **interface**: api.query.technicalCommittee.proposals
- **summary**: The hashes of the active proposals.

### voting(`Hash`): `Option<{"Map":{"hasher":"Blake2_256","key":"Hash","value":"Votes","linked":false}}>`
- **interface**: api.query.technicalCommittee.voting
- **summary**: Votes on a given proposal, if it is ongoing.

___


## technicalMembership

### members(): `{"Plain":"Vec<AccountId>"}`
- **interface**: api.query.technicalMembership.members
- **summary**: The current membership, stored as an ordered Vec.

___


## timestamp

### didUpdate(): `{"Plain":"bool"}`
- **interface**: api.query.timestamp.didUpdate
- **summary**: Did the timestamp get updated in this block?

### now(): `{"Plain":"Moment"}`
- **interface**: api.query.timestamp.now
- **summary**: Current time for the current block.

___


## transactionPayment

### nextFeeMultiplier(): `{"Plain":"Multiplier"}`
- **interface**: api.query.transactionPayment.nextFeeMultiplier

___


## treasury

### approvals(): `{"Plain":"Vec<ProposalIndex>"}`
- **interface**: api.query.treasury.approvals
- **summary**: Proposal indices that have been approved but not yet awarded.

### proposalCount(): `{"Plain":"ProposalIndex"}`
- **interface**: api.query.treasury.proposalCount
- **summary**: Number of proposals that have been made.

### proposals(`ProposalIndex`): `Option<{"Map":{"hasher":"Blake2_256","key":"ProposalIndex","value":"TreasuryProposal","linked":false}}>`
- **interface**: api.query.treasury.proposals
- **summary**: Proposals that have been made.

---

### substrate

_These are keys that are always available to the runtime implementation_

▸ **changesTrieConfig**(): `u32`
- **summary**: Changes trie configuration is stored under this key.

▸ **childStorageKeyPrefix**(): `u32`
- **summary**: Prefix of child storage keys.

▸ **code**(): `Bytes`
- **summary**: Wasm code of the runtime.

▸ **extrinsicIndex**(): `u32`
- **summary**: Current extrinsic index (u32) is stored under this key.

▸ **heapPages**(): `u64`
- **summary**: Number of wasm linear memory pages required for execution of the runtime.

---
