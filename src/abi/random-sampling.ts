import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AvgBlockTimeUpdated: event("0x95fa9944b5bdc334dc873ecb9faf45565a1c9b46042fe8d7eb3b95f86d5ad7b8", "AvgBlockTimeUpdated(uint8)", {"avgBlockTimeInSeconds": p.uint8}),
    ChallengeCreated: event("0x2fb7be93cd4e6c50594b9da5ba240de504a356c61d0338c111ebc97af5ca2822", "ChallengeCreated(uint256,uint256,uint256,uint256,uint256,uint256)", {"identityId": indexed(p.uint256), "epoch": indexed(p.uint256), "knowledgeCollectionId": p.uint256, "chunkId": p.uint256, "activeProofPeriodBlock": indexed(p.uint256), "proofingPeriodDurationInBlocks": p.uint256}),
    ProofingPeriodDurationInBlocksUpdated: event("0x95d011e45f767555272b5d16ee40a70f6d6d509562e8f276671716ae118a801e", "ProofingPeriodDurationInBlocksUpdated(uint8)", {"durationInBlocks": p.uint8}),
    ValidProofSubmitted: event("0x1528ce3b24e1525cc3dd22f269dda756f4fbe5a39860d17940ad72a524507daa", "ValidProofSubmitted(uint72,uint256,uint256)", {"identityId": indexed(p.uint72), "epoch": indexed(p.uint256), "score": p.uint256}),
}

export const functions = {
    SCALING_FACTOR: viewFun("0xef4cadc5", "SCALING_FACTOR()", {}, p.uint256),
    askStorage: viewFun("0xfc41116e", "askStorage()", {}, p.address),
    avgBlockTimeInSeconds: viewFun("0x8833af6f", "avgBlockTimeInSeconds()", {}, p.uint8),
    chronos: viewFun("0x65774548", "chronos()", {}, p.address),
    createChallenge: fun("0x1cd821eb", "createChallenge()", {}, ),
    delegatorsInfo: viewFun("0x61fbddc2", "delegatorsInfo()", {}, p.address),
    epochStorage: viewFun("0x0d6a03be", "epochStorage()", {}, p.address),
    getDelegatorEpochRewardsAmount: viewFun("0x49bdfe45", "getDelegatorEpochRewardsAmount(uint72,uint256)", {"identityId": p.uint72, "epoch": p.uint256}, p.uint256),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    identityStorage: viewFun("0xf11abfd8", "identityStorage()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    knowledgeCollectionStorage: viewFun("0x63d0c82b", "knowledgeCollectionStorage()", {}, p.address),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    parametersStorage: viewFun("0x639a86a3", "parametersStorage()", {}, p.address),
    profileStorage: viewFun("0xf42cb038", "profileStorage()", {}, p.address),
    randomSamplingStorage: viewFun("0x953adf8a", "randomSamplingStorage()", {}, p.address),
    setAvgBlockTimeInSeconds: fun("0x0d23714f", "setAvgBlockTimeInSeconds(uint8)", {"blockTimeInSeconds": p.uint8}, ),
    setProofingPeriodDurationInBlocks: fun("0xd92e1979", "setProofingPeriodDurationInBlocks(uint16)", {"durationInBlocks": p.uint16}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    setW1: fun("0x67572b01", "setW1(uint256)", {"_w1": p.uint256}, ),
    setW2: fun("0x2a35b256", "setW2(uint256)", {"_w2": p.uint256}, ),
    shardingTableStorage: viewFun("0x823e2bc7", "shardingTableStorage()", {}, p.address),
    stakingStorage: viewFun("0xb518a00e", "stakingStorage()", {}, p.address),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    submitProof: fun("0x9de9c6dc", "submitProof(string,bytes32[])", {"chunk": p.string, "merkleProof": p.array(p.bytes32)}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    w1: viewFun("0x7e44755b", "w1()", {}, p.uint256),
    w2: viewFun("0x03cf8a20", "w2()", {}, p.uint256),
}

export class Contract extends ContractBase {

    SCALING_FACTOR() {
        return this.eth_call(functions.SCALING_FACTOR, {})
    }

    askStorage() {
        return this.eth_call(functions.askStorage, {})
    }

    avgBlockTimeInSeconds() {
        return this.eth_call(functions.avgBlockTimeInSeconds, {})
    }

    chronos() {
        return this.eth_call(functions.chronos, {})
    }

    delegatorsInfo() {
        return this.eth_call(functions.delegatorsInfo, {})
    }

    epochStorage() {
        return this.eth_call(functions.epochStorage, {})
    }

    getDelegatorEpochRewardsAmount(identityId: GetDelegatorEpochRewardsAmountParams["identityId"], epoch: GetDelegatorEpochRewardsAmountParams["epoch"]) {
        return this.eth_call(functions.getDelegatorEpochRewardsAmount, {identityId, epoch})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    identityStorage() {
        return this.eth_call(functions.identityStorage, {})
    }

    knowledgeCollectionStorage() {
        return this.eth_call(functions.knowledgeCollectionStorage, {})
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

    randomSamplingStorage() {
        return this.eth_call(functions.randomSamplingStorage, {})
    }

    shardingTableStorage() {
        return this.eth_call(functions.shardingTableStorage, {})
    }

    stakingStorage() {
        return this.eth_call(functions.stakingStorage, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    w1() {
        return this.eth_call(functions.w1, {})
    }

    w2() {
        return this.eth_call(functions.w2, {})
    }
}

/// Event types
export type AvgBlockTimeUpdatedEventArgs = EParams<typeof events.AvgBlockTimeUpdated>
export type ChallengeCreatedEventArgs = EParams<typeof events.ChallengeCreated>
export type ProofingPeriodDurationInBlocksUpdatedEventArgs = EParams<typeof events.ProofingPeriodDurationInBlocksUpdated>
export type ValidProofSubmittedEventArgs = EParams<typeof events.ValidProofSubmitted>

/// Function types
export type SCALING_FACTORParams = FunctionArguments<typeof functions.SCALING_FACTOR>
export type SCALING_FACTORReturn = FunctionReturn<typeof functions.SCALING_FACTOR>

export type AskStorageParams = FunctionArguments<typeof functions.askStorage>
export type AskStorageReturn = FunctionReturn<typeof functions.askStorage>

export type AvgBlockTimeInSecondsParams = FunctionArguments<typeof functions.avgBlockTimeInSeconds>
export type AvgBlockTimeInSecondsReturn = FunctionReturn<typeof functions.avgBlockTimeInSeconds>

export type ChronosParams = FunctionArguments<typeof functions.chronos>
export type ChronosReturn = FunctionReturn<typeof functions.chronos>

export type CreateChallengeParams = FunctionArguments<typeof functions.createChallenge>
export type CreateChallengeReturn = FunctionReturn<typeof functions.createChallenge>

export type DelegatorsInfoParams = FunctionArguments<typeof functions.delegatorsInfo>
export type DelegatorsInfoReturn = FunctionReturn<typeof functions.delegatorsInfo>

export type EpochStorageParams = FunctionArguments<typeof functions.epochStorage>
export type EpochStorageReturn = FunctionReturn<typeof functions.epochStorage>

export type GetDelegatorEpochRewardsAmountParams = FunctionArguments<typeof functions.getDelegatorEpochRewardsAmount>
export type GetDelegatorEpochRewardsAmountReturn = FunctionReturn<typeof functions.getDelegatorEpochRewardsAmount>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IdentityStorageParams = FunctionArguments<typeof functions.identityStorage>
export type IdentityStorageReturn = FunctionReturn<typeof functions.identityStorage>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type KnowledgeCollectionStorageParams = FunctionArguments<typeof functions.knowledgeCollectionStorage>
export type KnowledgeCollectionStorageReturn = FunctionReturn<typeof functions.knowledgeCollectionStorage>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParametersStorageParams = FunctionArguments<typeof functions.parametersStorage>
export type ParametersStorageReturn = FunctionReturn<typeof functions.parametersStorage>

export type ProfileStorageParams = FunctionArguments<typeof functions.profileStorage>
export type ProfileStorageReturn = FunctionReturn<typeof functions.profileStorage>

export type RandomSamplingStorageParams = FunctionArguments<typeof functions.randomSamplingStorage>
export type RandomSamplingStorageReturn = FunctionReturn<typeof functions.randomSamplingStorage>

export type SetAvgBlockTimeInSecondsParams = FunctionArguments<typeof functions.setAvgBlockTimeInSeconds>
export type SetAvgBlockTimeInSecondsReturn = FunctionReturn<typeof functions.setAvgBlockTimeInSeconds>

export type SetProofingPeriodDurationInBlocksParams = FunctionArguments<typeof functions.setProofingPeriodDurationInBlocks>
export type SetProofingPeriodDurationInBlocksReturn = FunctionReturn<typeof functions.setProofingPeriodDurationInBlocks>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type SetW1Params = FunctionArguments<typeof functions.setW1>
export type SetW1Return = FunctionReturn<typeof functions.setW1>

export type SetW2Params = FunctionArguments<typeof functions.setW2>
export type SetW2Return = FunctionReturn<typeof functions.setW2>

export type ShardingTableStorageParams = FunctionArguments<typeof functions.shardingTableStorage>
export type ShardingTableStorageReturn = FunctionReturn<typeof functions.shardingTableStorage>

export type StakingStorageParams = FunctionArguments<typeof functions.stakingStorage>
export type StakingStorageReturn = FunctionReturn<typeof functions.stakingStorage>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type SubmitProofParams = FunctionArguments<typeof functions.submitProof>
export type SubmitProofReturn = FunctionReturn<typeof functions.submitProof>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type W1Params = FunctionArguments<typeof functions.w1>
export type W1Return = FunctionReturn<typeof functions.w1>

export type W2Params = FunctionArguments<typeof functions.w2>
export type W2Return = FunctionReturn<typeof functions.w2>

