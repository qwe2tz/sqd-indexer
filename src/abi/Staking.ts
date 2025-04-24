import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    askContract: viewFun("0xc86da6f8", "askContract()", {}, p.address),
    cancelOperatorFeeWithdrawal: fun("0x540218e2", "cancelOperatorFeeWithdrawal(uint72)", {"identityId": p.uint72}, ),
    cancelWithdrawal: fun("0x2bb2f44e", "cancelWithdrawal(uint72)", {"identityId": p.uint72}, ),
    delegatorsInfo: viewFun("0x61fbddc2", "delegatorsInfo()", {}, p.address),
    distributeRewards: fun("0xd8e1b907", "distributeRewards(uint72,uint96)", {"identityId": p.uint72, "rewardAmount": p.uint96}, ),
    finalizeOperatorFeeWithdrawal: fun("0xf94d315b", "finalizeOperatorFeeWithdrawal(uint72)", {"identityId": p.uint72}, ),
    finalizeWithdrawal: fun("0x7b1d97d9", "finalizeWithdrawal(uint72)", {"identityId": p.uint72}, ),
    getDelegatorStats: viewFun("0x9532e980", "getDelegatorStats(uint72,address)", {"identityId": p.uint72, "delegator": p.address}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint96}),
    getNodeStats: viewFun("0xdb9d9626", "getNodeStats(uint72)", {"identityId": p.uint72}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint96}),
    getOperatorFeeStats: viewFun("0x1a228329", "getOperatorFeeStats(uint72)", {"identityId": p.uint72}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint96}),
    getOperatorStats: viewFun("0x2b84ed6a", "getOperatorStats(uint72)", {"identityId": p.uint72}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint96}),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    identityStorage: viewFun("0xf11abfd8", "identityStorage()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    parametersStorage: viewFun("0x639a86a3", "parametersStorage()", {}, p.address),
    profileStorage: viewFun("0xf42cb038", "profileStorage()", {}, p.address),
    redelegate: fun("0x996642a5", "redelegate(uint72,uint72,uint96)", {"fromIdentityId": p.uint72, "toIdentityId": p.uint72, "stakeAmount": p.uint96}, ),
    requestOperatorFeeWithdrawal: fun("0x686d4873", "requestOperatorFeeWithdrawal(uint72,uint96)", {"identityId": p.uint72, "withdrawalAmount": p.uint96}, ),
    requestWithdrawal: fun("0x7356c4d1", "requestWithdrawal(uint72,uint96)", {"identityId": p.uint72, "removedStake": p.uint96}, ),
    restakeOperatorFee: fun("0x6d6da80c", "restakeOperatorFee(uint72,uint96)", {"identityId": p.uint72, "addedStake": p.uint96}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    shardingTableContract: viewFun("0x6b838a5a", "shardingTableContract()", {}, p.address),
    shardingTableStorage: viewFun("0x823e2bc7", "shardingTableStorage()", {}, p.address),
    simulateStakeInfoUpdate: viewFun("0xfe50cbbc", "simulateStakeInfoUpdate(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint96}),
    stake: fun("0x7cba7353", "stake(uint72,uint96)", {"identityId": p.uint72, "addedStake": p.uint96}, ),
    stakingStorage: viewFun("0xb518a00e", "stakingStorage()", {}, p.address),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    tokenContract: viewFun("0x55a373d6", "tokenContract()", {}, p.address),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    askContract() {
        return this.eth_call(functions.askContract, {})
    }

    delegatorsInfo() {
        return this.eth_call(functions.delegatorsInfo, {})
    }

    getDelegatorStats(identityId: GetDelegatorStatsParams["identityId"], delegator: GetDelegatorStatsParams["delegator"]) {
        return this.eth_call(functions.getDelegatorStats, {identityId, delegator})
    }

    getNodeStats(identityId: GetNodeStatsParams["identityId"]) {
        return this.eth_call(functions.getNodeStats, {identityId})
    }

    getOperatorFeeStats(identityId: GetOperatorFeeStatsParams["identityId"]) {
        return this.eth_call(functions.getOperatorFeeStats, {identityId})
    }

    getOperatorStats(identityId: GetOperatorStatsParams["identityId"]) {
        return this.eth_call(functions.getOperatorStats, {identityId})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    identityStorage() {
        return this.eth_call(functions.identityStorage, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    parametersStorage() {
        return this.eth_call(functions.parametersStorage, {})
    }

    profileStorage() {
        return this.eth_call(functions.profileStorage, {})
    }

    shardingTableContract() {
        return this.eth_call(functions.shardingTableContract, {})
    }

    shardingTableStorage() {
        return this.eth_call(functions.shardingTableStorage, {})
    }

    simulateStakeInfoUpdate(identityId: SimulateStakeInfoUpdateParams["identityId"], delegatorKey: SimulateStakeInfoUpdateParams["delegatorKey"]) {
        return this.eth_call(functions.simulateStakeInfoUpdate, {identityId, delegatorKey})
    }

    stakingStorage() {
        return this.eth_call(functions.stakingStorage, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    tokenContract() {
        return this.eth_call(functions.tokenContract, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Function types
export type AskContractParams = FunctionArguments<typeof functions.askContract>
export type AskContractReturn = FunctionReturn<typeof functions.askContract>

export type CancelOperatorFeeWithdrawalParams = FunctionArguments<typeof functions.cancelOperatorFeeWithdrawal>
export type CancelOperatorFeeWithdrawalReturn = FunctionReturn<typeof functions.cancelOperatorFeeWithdrawal>

export type CancelWithdrawalParams = FunctionArguments<typeof functions.cancelWithdrawal>
export type CancelWithdrawalReturn = FunctionReturn<typeof functions.cancelWithdrawal>

export type DelegatorsInfoParams = FunctionArguments<typeof functions.delegatorsInfo>
export type DelegatorsInfoReturn = FunctionReturn<typeof functions.delegatorsInfo>

export type DistributeRewardsParams = FunctionArguments<typeof functions.distributeRewards>
export type DistributeRewardsReturn = FunctionReturn<typeof functions.distributeRewards>

export type FinalizeOperatorFeeWithdrawalParams = FunctionArguments<typeof functions.finalizeOperatorFeeWithdrawal>
export type FinalizeOperatorFeeWithdrawalReturn = FunctionReturn<typeof functions.finalizeOperatorFeeWithdrawal>

export type FinalizeWithdrawalParams = FunctionArguments<typeof functions.finalizeWithdrawal>
export type FinalizeWithdrawalReturn = FunctionReturn<typeof functions.finalizeWithdrawal>

export type GetDelegatorStatsParams = FunctionArguments<typeof functions.getDelegatorStats>
export type GetDelegatorStatsReturn = FunctionReturn<typeof functions.getDelegatorStats>

export type GetNodeStatsParams = FunctionArguments<typeof functions.getNodeStats>
export type GetNodeStatsReturn = FunctionReturn<typeof functions.getNodeStats>

export type GetOperatorFeeStatsParams = FunctionArguments<typeof functions.getOperatorFeeStats>
export type GetOperatorFeeStatsReturn = FunctionReturn<typeof functions.getOperatorFeeStats>

export type GetOperatorStatsParams = FunctionArguments<typeof functions.getOperatorStats>
export type GetOperatorStatsReturn = FunctionReturn<typeof functions.getOperatorStats>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IdentityStorageParams = FunctionArguments<typeof functions.identityStorage>
export type IdentityStorageReturn = FunctionReturn<typeof functions.identityStorage>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParametersStorageParams = FunctionArguments<typeof functions.parametersStorage>
export type ParametersStorageReturn = FunctionReturn<typeof functions.parametersStorage>

export type ProfileStorageParams = FunctionArguments<typeof functions.profileStorage>
export type ProfileStorageReturn = FunctionReturn<typeof functions.profileStorage>

export type RedelegateParams = FunctionArguments<typeof functions.redelegate>
export type RedelegateReturn = FunctionReturn<typeof functions.redelegate>

export type RequestOperatorFeeWithdrawalParams = FunctionArguments<typeof functions.requestOperatorFeeWithdrawal>
export type RequestOperatorFeeWithdrawalReturn = FunctionReturn<typeof functions.requestOperatorFeeWithdrawal>

export type RequestWithdrawalParams = FunctionArguments<typeof functions.requestWithdrawal>
export type RequestWithdrawalReturn = FunctionReturn<typeof functions.requestWithdrawal>

export type RestakeOperatorFeeParams = FunctionArguments<typeof functions.restakeOperatorFee>
export type RestakeOperatorFeeReturn = FunctionReturn<typeof functions.restakeOperatorFee>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type ShardingTableContractParams = FunctionArguments<typeof functions.shardingTableContract>
export type ShardingTableContractReturn = FunctionReturn<typeof functions.shardingTableContract>

export type ShardingTableStorageParams = FunctionArguments<typeof functions.shardingTableStorage>
export type ShardingTableStorageReturn = FunctionReturn<typeof functions.shardingTableStorage>

export type SimulateStakeInfoUpdateParams = FunctionArguments<typeof functions.simulateStakeInfoUpdate>
export type SimulateStakeInfoUpdateReturn = FunctionReturn<typeof functions.simulateStakeInfoUpdate>

export type StakeParams = FunctionArguments<typeof functions.stake>
export type StakeReturn = FunctionReturn<typeof functions.stake>

export type StakingStorageParams = FunctionArguments<typeof functions.stakingStorage>
export type StakingStorageReturn = FunctionReturn<typeof functions.stakingStorage>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type TokenContractParams = FunctionArguments<typeof functions.tokenContract>
export type TokenContractReturn = FunctionReturn<typeof functions.tokenContract>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

