import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    askStorage: viewFun("0xfc41116e", "askStorage()", {}, p.address),
    delegatorMigrated: viewFun("0xfd574c94", "delegatorMigrated(uint72,address)", {"_0": p.uint72, "_1": p.address}, p.bool),
    delegatorsMigrationInitiated: viewFun("0xb1eae38a", "delegatorsMigrationInitiated()", {}, p.bool),
    epochStorageV6: viewFun("0xa728edb6", "epochStorageV6()", {}, p.address),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initializeNewContracts: fun("0x567ee064", "initializeNewContracts()", {}, ),
    initializeOldContracts: fun("0xd48705da", "initializeOldContracts()", {}, ),
    initiateDelegatorsMigration: fun("0xaf9ac2dd", "initiateDelegatorsMigration()", {}, ),
    migrateDelegatorData: fun("0x9ba2e245", "migrateDelegatorData(uint72)", {"identityId": p.uint72}, ),
    migrateGlobalData: fun("0x23f9d7ae", "migrateGlobalData(uint96)", {"stake": p.uint96}, ),
    migrateNodeData: fun("0x10e87ce2", "migrateNodeData(uint72)", {"identityId": p.uint72}, ),
    migratedNodes: viewFun("0xc5343dba", "migratedNodes()", {}, p.uint72),
    migratedStake: viewFun("0xfa0910e7", "migratedStake()", {}, p.uint96),
    migratedStakes: viewFun("0xe7cf42e0", "migratedStakes(uint72)", {"_0": p.uint72}, p.uint96),
    newIdentityStorage: viewFun("0x3243be18", "newIdentityStorage()", {}, p.address),
    newParametersStorage: viewFun("0xbad50f25", "newParametersStorage()", {}, p.address),
    newProfileStorage: viewFun("0xacd0e508", "newProfileStorage()", {}, p.address),
    newShardingTable: viewFun("0x38271d52", "newShardingTable()", {}, p.address),
    newStakingStorage: viewFun("0x05b29854", "newStakingStorage()", {}, p.address),
    nodeMigrated: viewFun("0x0e95a9ea", "nodeMigrated(uint72)", {"_0": p.uint72}, p.bool),
    oldHub: viewFun("0x55f0fce4", "oldHub()", {}, p.address),
    oldIdentityStorage: viewFun("0xfea05863", "oldIdentityStorage()", {}, p.address),
    oldMigratedOperatorFees: viewFun("0x1b84892d", "oldMigratedOperatorFees()", {}, p.uint96),
    oldNodeOperatorFeesStorage: viewFun("0xe41dcc3b", "oldNodeOperatorFeesStorage()", {}, p.address),
    oldNodeStakes: viewFun("0xac3ee274", "oldNodeStakes(uint72)", {"_0": p.uint72}, p.uint96),
    oldNodesCount: viewFun("0xde55cc61", "oldNodesCount()", {}, p.uint72),
    oldOperatorFees: viewFun("0xe2853af1", "oldOperatorFees()", {}, p.uint96),
    oldProfileStorage: viewFun("0xd3677be5", "oldProfileStorage()", {}, p.address),
    oldServiceAgreementStorageV1: viewFun("0x18c15cfe", "oldServiceAgreementStorageV1()", {}, p.address),
    oldServiceAgreementStorageV1U1: viewFun("0xac11792a", "oldServiceAgreementStorageV1U1()", {}, p.address),
    oldStakingStorage: viewFun("0xd80dd9a7", "oldStakingStorage()", {}, p.address),
    oldStakingStorageBalance: viewFun("0xf2c75f17", "oldStakingStorageBalance()", {}, p.uint96),
    oldTotalStake: viewFun("0x86b13ea1", "oldTotalStake()", {}, p.uint96),
    oldTotalUnpaidRewards: viewFun("0x0f78bb52", "oldTotalUnpaidRewards()", {}, p.uint96),
    operatorMigrated: viewFun("0xca66d9e5", "operatorMigrated(uint72)", {"_0": p.uint72}, p.bool),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    token: viewFun("0xfc0c546a", "token()", {}, p.address),
    transferOperatorFees: fun("0x3c0cad0b", "transferOperatorFees()", {}, ),
    transferStake: fun("0xfd986ccf", "transferStake()", {}, ),
    transferUnpaidRewards: fun("0x3f0c503a", "transferUnpaidRewards(uint256,uint256)", {"startEpoch": p.uint256, "endEpoch": p.uint256}, ),
    updateAskStorage: fun("0xf68d7c14", "updateAskStorage(uint256,uint96)", {"weightedAskSum": p.uint256, "totalStake": p.uint96}, ),
}

export class Contract extends ContractBase {

    askStorage() {
        return this.eth_call(functions.askStorage, {})
    }

    delegatorMigrated(_0: DelegatorMigratedParams["_0"], _1: DelegatorMigratedParams["_1"]) {
        return this.eth_call(functions.delegatorMigrated, {_0, _1})
    }

    delegatorsMigrationInitiated() {
        return this.eth_call(functions.delegatorsMigrationInitiated, {})
    }

    epochStorageV6() {
        return this.eth_call(functions.epochStorageV6, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    migratedNodes() {
        return this.eth_call(functions.migratedNodes, {})
    }

    migratedStake() {
        return this.eth_call(functions.migratedStake, {})
    }

    migratedStakes(_0: MigratedStakesParams["_0"]) {
        return this.eth_call(functions.migratedStakes, {_0})
    }

    newIdentityStorage() {
        return this.eth_call(functions.newIdentityStorage, {})
    }

    newParametersStorage() {
        return this.eth_call(functions.newParametersStorage, {})
    }

    newProfileStorage() {
        return this.eth_call(functions.newProfileStorage, {})
    }

    newShardingTable() {
        return this.eth_call(functions.newShardingTable, {})
    }

    newStakingStorage() {
        return this.eth_call(functions.newStakingStorage, {})
    }

    nodeMigrated(_0: NodeMigratedParams["_0"]) {
        return this.eth_call(functions.nodeMigrated, {_0})
    }

    oldHub() {
        return this.eth_call(functions.oldHub, {})
    }

    oldIdentityStorage() {
        return this.eth_call(functions.oldIdentityStorage, {})
    }

    oldMigratedOperatorFees() {
        return this.eth_call(functions.oldMigratedOperatorFees, {})
    }

    oldNodeOperatorFeesStorage() {
        return this.eth_call(functions.oldNodeOperatorFeesStorage, {})
    }

    oldNodeStakes(_0: OldNodeStakesParams["_0"]) {
        return this.eth_call(functions.oldNodeStakes, {_0})
    }

    oldNodesCount() {
        return this.eth_call(functions.oldNodesCount, {})
    }

    oldOperatorFees() {
        return this.eth_call(functions.oldOperatorFees, {})
    }

    oldProfileStorage() {
        return this.eth_call(functions.oldProfileStorage, {})
    }

    oldServiceAgreementStorageV1() {
        return this.eth_call(functions.oldServiceAgreementStorageV1, {})
    }

    oldServiceAgreementStorageV1U1() {
        return this.eth_call(functions.oldServiceAgreementStorageV1U1, {})
    }

    oldStakingStorage() {
        return this.eth_call(functions.oldStakingStorage, {})
    }

    oldStakingStorageBalance() {
        return this.eth_call(functions.oldStakingStorageBalance, {})
    }

    oldTotalStake() {
        return this.eth_call(functions.oldTotalStake, {})
    }

    oldTotalUnpaidRewards() {
        return this.eth_call(functions.oldTotalUnpaidRewards, {})
    }

    operatorMigrated(_0: OperatorMigratedParams["_0"]) {
        return this.eth_call(functions.operatorMigrated, {_0})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    token() {
        return this.eth_call(functions.token, {})
    }
}

/// Function types
export type AskStorageParams = FunctionArguments<typeof functions.askStorage>
export type AskStorageReturn = FunctionReturn<typeof functions.askStorage>

export type DelegatorMigratedParams = FunctionArguments<typeof functions.delegatorMigrated>
export type DelegatorMigratedReturn = FunctionReturn<typeof functions.delegatorMigrated>

export type DelegatorsMigrationInitiatedParams = FunctionArguments<typeof functions.delegatorsMigrationInitiated>
export type DelegatorsMigrationInitiatedReturn = FunctionReturn<typeof functions.delegatorsMigrationInitiated>

export type EpochStorageV6Params = FunctionArguments<typeof functions.epochStorageV6>
export type EpochStorageV6Return = FunctionReturn<typeof functions.epochStorageV6>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitializeNewContractsParams = FunctionArguments<typeof functions.initializeNewContracts>
export type InitializeNewContractsReturn = FunctionReturn<typeof functions.initializeNewContracts>

export type InitializeOldContractsParams = FunctionArguments<typeof functions.initializeOldContracts>
export type InitializeOldContractsReturn = FunctionReturn<typeof functions.initializeOldContracts>

export type InitiateDelegatorsMigrationParams = FunctionArguments<typeof functions.initiateDelegatorsMigration>
export type InitiateDelegatorsMigrationReturn = FunctionReturn<typeof functions.initiateDelegatorsMigration>

export type MigrateDelegatorDataParams = FunctionArguments<typeof functions.migrateDelegatorData>
export type MigrateDelegatorDataReturn = FunctionReturn<typeof functions.migrateDelegatorData>

export type MigrateGlobalDataParams = FunctionArguments<typeof functions.migrateGlobalData>
export type MigrateGlobalDataReturn = FunctionReturn<typeof functions.migrateGlobalData>

export type MigrateNodeDataParams = FunctionArguments<typeof functions.migrateNodeData>
export type MigrateNodeDataReturn = FunctionReturn<typeof functions.migrateNodeData>

export type MigratedNodesParams = FunctionArguments<typeof functions.migratedNodes>
export type MigratedNodesReturn = FunctionReturn<typeof functions.migratedNodes>

export type MigratedStakeParams = FunctionArguments<typeof functions.migratedStake>
export type MigratedStakeReturn = FunctionReturn<typeof functions.migratedStake>

export type MigratedStakesParams = FunctionArguments<typeof functions.migratedStakes>
export type MigratedStakesReturn = FunctionReturn<typeof functions.migratedStakes>

export type NewIdentityStorageParams = FunctionArguments<typeof functions.newIdentityStorage>
export type NewIdentityStorageReturn = FunctionReturn<typeof functions.newIdentityStorage>

export type NewParametersStorageParams = FunctionArguments<typeof functions.newParametersStorage>
export type NewParametersStorageReturn = FunctionReturn<typeof functions.newParametersStorage>

export type NewProfileStorageParams = FunctionArguments<typeof functions.newProfileStorage>
export type NewProfileStorageReturn = FunctionReturn<typeof functions.newProfileStorage>

export type NewShardingTableParams = FunctionArguments<typeof functions.newShardingTable>
export type NewShardingTableReturn = FunctionReturn<typeof functions.newShardingTable>

export type NewStakingStorageParams = FunctionArguments<typeof functions.newStakingStorage>
export type NewStakingStorageReturn = FunctionReturn<typeof functions.newStakingStorage>

export type NodeMigratedParams = FunctionArguments<typeof functions.nodeMigrated>
export type NodeMigratedReturn = FunctionReturn<typeof functions.nodeMigrated>

export type OldHubParams = FunctionArguments<typeof functions.oldHub>
export type OldHubReturn = FunctionReturn<typeof functions.oldHub>

export type OldIdentityStorageParams = FunctionArguments<typeof functions.oldIdentityStorage>
export type OldIdentityStorageReturn = FunctionReturn<typeof functions.oldIdentityStorage>

export type OldMigratedOperatorFeesParams = FunctionArguments<typeof functions.oldMigratedOperatorFees>
export type OldMigratedOperatorFeesReturn = FunctionReturn<typeof functions.oldMigratedOperatorFees>

export type OldNodeOperatorFeesStorageParams = FunctionArguments<typeof functions.oldNodeOperatorFeesStorage>
export type OldNodeOperatorFeesStorageReturn = FunctionReturn<typeof functions.oldNodeOperatorFeesStorage>

export type OldNodeStakesParams = FunctionArguments<typeof functions.oldNodeStakes>
export type OldNodeStakesReturn = FunctionReturn<typeof functions.oldNodeStakes>

export type OldNodesCountParams = FunctionArguments<typeof functions.oldNodesCount>
export type OldNodesCountReturn = FunctionReturn<typeof functions.oldNodesCount>

export type OldOperatorFeesParams = FunctionArguments<typeof functions.oldOperatorFees>
export type OldOperatorFeesReturn = FunctionReturn<typeof functions.oldOperatorFees>

export type OldProfileStorageParams = FunctionArguments<typeof functions.oldProfileStorage>
export type OldProfileStorageReturn = FunctionReturn<typeof functions.oldProfileStorage>

export type OldServiceAgreementStorageV1Params = FunctionArguments<typeof functions.oldServiceAgreementStorageV1>
export type OldServiceAgreementStorageV1Return = FunctionReturn<typeof functions.oldServiceAgreementStorageV1>

export type OldServiceAgreementStorageV1U1Params = FunctionArguments<typeof functions.oldServiceAgreementStorageV1U1>
export type OldServiceAgreementStorageV1U1Return = FunctionReturn<typeof functions.oldServiceAgreementStorageV1U1>

export type OldStakingStorageParams = FunctionArguments<typeof functions.oldStakingStorage>
export type OldStakingStorageReturn = FunctionReturn<typeof functions.oldStakingStorage>

export type OldStakingStorageBalanceParams = FunctionArguments<typeof functions.oldStakingStorageBalance>
export type OldStakingStorageBalanceReturn = FunctionReturn<typeof functions.oldStakingStorageBalance>

export type OldTotalStakeParams = FunctionArguments<typeof functions.oldTotalStake>
export type OldTotalStakeReturn = FunctionReturn<typeof functions.oldTotalStake>

export type OldTotalUnpaidRewardsParams = FunctionArguments<typeof functions.oldTotalUnpaidRewards>
export type OldTotalUnpaidRewardsReturn = FunctionReturn<typeof functions.oldTotalUnpaidRewards>

export type OperatorMigratedParams = FunctionArguments<typeof functions.operatorMigrated>
export type OperatorMigratedReturn = FunctionReturn<typeof functions.operatorMigrated>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type TokenParams = FunctionArguments<typeof functions.token>
export type TokenReturn = FunctionReturn<typeof functions.token>

export type TransferOperatorFeesParams = FunctionArguments<typeof functions.transferOperatorFees>
export type TransferOperatorFeesReturn = FunctionReturn<typeof functions.transferOperatorFees>

export type TransferStakeParams = FunctionArguments<typeof functions.transferStake>
export type TransferStakeReturn = FunctionReturn<typeof functions.transferStake>

export type TransferUnpaidRewardsParams = FunctionArguments<typeof functions.transferUnpaidRewards>
export type TransferUnpaidRewardsReturn = FunctionReturn<typeof functions.transferUnpaidRewards>

export type UpdateAskStorageParams = FunctionArguments<typeof functions.updateAskStorage>
export type UpdateAskStorageReturn = FunctionReturn<typeof functions.updateAskStorage>

