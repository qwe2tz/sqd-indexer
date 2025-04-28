import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    TokenEmissionMultiplierUpdateFinalized: event("0xd144c2e9ae3577cdda1255292ab31e31d6fa43aed5fb87076936b1e0506b8445", "TokenEmissionMultiplierUpdateFinalized(uint256,uint256)", {"oldMultiplier": p.uint256, "newMultiplier": p.uint256}),
    TokenEmissionMultiplierUpdateInitiated: event("0xd58e03b5c1842c922faa3cb548071068636b8cfa508aac3f73bb5eb9edddfdf3", "TokenEmissionMultiplierUpdateInitiated(uint256,uint256,uint256)", {"oldMultiplier": p.uint256, "newMultiplier": p.uint256, "timestamp": p.uint256}),
}

export const functions = {
    claimIncentivizationProposalVoterReward: fun("0xb75995f2", "claimIncentivizationProposalVoterReward()", {}, ),
    claimKnowledgeMinerReward: fun("0x1a466f70", "claimKnowledgeMinerReward(uint256)", {"amount": p.uint256}, ),
    claimParanetOperatorReward: fun("0xe7610a66", "claimParanetOperatorReward()", {}, ),
    finalizeTokenEmissionMultiplierUpdate: fun("0xc75df87b", "finalizeTokenEmissionMultiplierUpdate()", {}, ),
    getClaimableAllKnowledgeMinersRewardAmount: viewFun("0xd6e21479", "getClaimableAllKnowledgeMinersRewardAmount()", {}, p.uint256),
    getClaimableAllProposalVotersRewardAmount: viewFun("0x62525727", "getClaimableAllProposalVotersRewardAmount()", {}, p.uint256),
    getClaimableKnowledgeMinerRewardAmount: viewFun("0xa2b749c4", "getClaimableKnowledgeMinerRewardAmount()", {}, p.uint256),
    getClaimableParanetOperatorRewardAmount: viewFun("0x2bdaed2d", "getClaimableParanetOperatorRewardAmount()", {}, p.uint256),
    getClaimableProposalVoterRewardAmount: viewFun("0xc2077780", "getClaimableProposalVoterRewardAmount()", {}, p.uint256),
    getEffectiveTokenEmissionMultiplier: viewFun("0x8a21d7b8", "getEffectiveTokenEmissionMultiplier(uint256)", {"timestamp": p.uint256}, p.uint256),
    getParanetIncentivesPoolStorage: viewFun("0x5513cee3", "getParanetIncentivesPoolStorage()", {}, p.address),
    getTotalAllKnowledgeMinersIncentiveEstimation: viewFun("0x6287b53d", "getTotalAllKnowledgeMinersIncentiveEstimation()", {}, p.uint256),
    getTotalAllProposalVotersIncentiveEstimation: viewFun("0xed5028f2", "getTotalAllProposalVotersIncentiveEstimation()", {}, p.uint256),
    getTotalKnowledgeMinerIncentiveEstimation: viewFun("0x381e3ede", "getTotalKnowledgeMinerIncentiveEstimation()", {}, p.uint256),
    getTotalParanetOperatorIncentiveEstimation: viewFun("0x0f3f4b44", "getTotalParanetOperatorIncentiveEstimation()", {}, p.uint256),
    getTotalProposalVoterIncentiveEstimation: viewFun("0x28e749be", "getTotalProposalVoterIncentiveEstimation()", {}, p.uint256),
    gettokenEmissionMultipliers: viewFun("0xf8c12ee6", "gettokenEmissionMultipliers()", {}, p.array(p.struct({"multiplier": p.uint256, "timestamp": p.uint256, "finalized": p.bool}))),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initiateTokenEmissionMultiplierUpdate: fun("0x55fae92f", "initiateTokenEmissionMultiplierUpdate(uint256)", {"newMultiplier": p.uint256}, ),
    isKnowledgeMiner: viewFun("0xed008c58", "isKnowledgeMiner(address)", {"addr": p.address}, p.bool),
    isParanetOperator: viewFun("0x09d5ef32", "isParanetOperator(address)", {"addr": p.address}, p.bool),
    isProposalVoter: viewFun("0xdf44677a", "isProposalVoter(address)", {"addr": p.address}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    paranetIncentivesPoolStorage: viewFun("0x254ed5f7", "paranetIncentivesPoolStorage()", {}, p.address),
    paranetKnowledgeMinersRegistry: viewFun("0x06dfb6c1", "paranetKnowledgeMinersRegistry()", {}, p.address),
    paranetsRegistry: viewFun("0xc20d67ec", "paranetsRegistry()", {}, p.address),
    tokenEmissionMultiplierUpdateDelay: viewFun("0x474262bb", "tokenEmissionMultiplierUpdateDelay()", {}, p.uint256),
    tokenEmissionMultipliers: viewFun("0xecd492b3", "tokenEmissionMultipliers(uint256)", {"_0": p.uint256}, {"multiplier": p.uint256, "timestamp": p.uint256, "finalized": p.bool}),
    updatetokenEmissionMultiplierUpdateDelay: fun("0xcbcfb799", "updatetokenEmissionMultiplierUpdateDelay(uint256)", {"newDelay": p.uint256}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    voterclaimedToken: viewFun("0x232ac695", "voterclaimedToken(address)", {"addr": p.address}, p.uint256),
}

export class Contract extends ContractBase {

    getClaimableAllKnowledgeMinersRewardAmount() {
        return this.eth_call(functions.getClaimableAllKnowledgeMinersRewardAmount, {})
    }

    getClaimableAllProposalVotersRewardAmount() {
        return this.eth_call(functions.getClaimableAllProposalVotersRewardAmount, {})
    }

    getClaimableKnowledgeMinerRewardAmount() {
        return this.eth_call(functions.getClaimableKnowledgeMinerRewardAmount, {})
    }

    getClaimableParanetOperatorRewardAmount() {
        return this.eth_call(functions.getClaimableParanetOperatorRewardAmount, {})
    }

    getClaimableProposalVoterRewardAmount() {
        return this.eth_call(functions.getClaimableProposalVoterRewardAmount, {})
    }

    getEffectiveTokenEmissionMultiplier(timestamp: GetEffectiveTokenEmissionMultiplierParams["timestamp"]) {
        return this.eth_call(functions.getEffectiveTokenEmissionMultiplier, {timestamp})
    }

    getParanetIncentivesPoolStorage() {
        return this.eth_call(functions.getParanetIncentivesPoolStorage, {})
    }

    getTotalAllKnowledgeMinersIncentiveEstimation() {
        return this.eth_call(functions.getTotalAllKnowledgeMinersIncentiveEstimation, {})
    }

    getTotalAllProposalVotersIncentiveEstimation() {
        return this.eth_call(functions.getTotalAllProposalVotersIncentiveEstimation, {})
    }

    getTotalKnowledgeMinerIncentiveEstimation() {
        return this.eth_call(functions.getTotalKnowledgeMinerIncentiveEstimation, {})
    }

    getTotalParanetOperatorIncentiveEstimation() {
        return this.eth_call(functions.getTotalParanetOperatorIncentiveEstimation, {})
    }

    getTotalProposalVoterIncentiveEstimation() {
        return this.eth_call(functions.getTotalProposalVoterIncentiveEstimation, {})
    }

    gettokenEmissionMultipliers() {
        return this.eth_call(functions.gettokenEmissionMultipliers, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isKnowledgeMiner(addr: IsKnowledgeMinerParams["addr"]) {
        return this.eth_call(functions.isKnowledgeMiner, {addr})
    }

    isParanetOperator(addr: IsParanetOperatorParams["addr"]) {
        return this.eth_call(functions.isParanetOperator, {addr})
    }

    isProposalVoter(addr: IsProposalVoterParams["addr"]) {
        return this.eth_call(functions.isProposalVoter, {addr})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    paranetIncentivesPoolStorage() {
        return this.eth_call(functions.paranetIncentivesPoolStorage, {})
    }

    paranetKnowledgeMinersRegistry() {
        return this.eth_call(functions.paranetKnowledgeMinersRegistry, {})
    }

    paranetsRegistry() {
        return this.eth_call(functions.paranetsRegistry, {})
    }

    tokenEmissionMultiplierUpdateDelay() {
        return this.eth_call(functions.tokenEmissionMultiplierUpdateDelay, {})
    }

    tokenEmissionMultipliers(_0: TokenEmissionMultipliersParams["_0"]) {
        return this.eth_call(functions.tokenEmissionMultipliers, {_0})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    voterclaimedToken(addr: VoterclaimedTokenParams["addr"]) {
        return this.eth_call(functions.voterclaimedToken, {addr})
    }
}

/// Event types
export type TokenEmissionMultiplierUpdateFinalizedEventArgs = EParams<typeof events.TokenEmissionMultiplierUpdateFinalized>
export type TokenEmissionMultiplierUpdateInitiatedEventArgs = EParams<typeof events.TokenEmissionMultiplierUpdateInitiated>

/// Function types
export type ClaimIncentivizationProposalVoterRewardParams = FunctionArguments<typeof functions.claimIncentivizationProposalVoterReward>
export type ClaimIncentivizationProposalVoterRewardReturn = FunctionReturn<typeof functions.claimIncentivizationProposalVoterReward>

export type ClaimKnowledgeMinerRewardParams = FunctionArguments<typeof functions.claimKnowledgeMinerReward>
export type ClaimKnowledgeMinerRewardReturn = FunctionReturn<typeof functions.claimKnowledgeMinerReward>

export type ClaimParanetOperatorRewardParams = FunctionArguments<typeof functions.claimParanetOperatorReward>
export type ClaimParanetOperatorRewardReturn = FunctionReturn<typeof functions.claimParanetOperatorReward>

export type FinalizeTokenEmissionMultiplierUpdateParams = FunctionArguments<typeof functions.finalizeTokenEmissionMultiplierUpdate>
export type FinalizeTokenEmissionMultiplierUpdateReturn = FunctionReturn<typeof functions.finalizeTokenEmissionMultiplierUpdate>

export type GetClaimableAllKnowledgeMinersRewardAmountParams = FunctionArguments<typeof functions.getClaimableAllKnowledgeMinersRewardAmount>
export type GetClaimableAllKnowledgeMinersRewardAmountReturn = FunctionReturn<typeof functions.getClaimableAllKnowledgeMinersRewardAmount>

export type GetClaimableAllProposalVotersRewardAmountParams = FunctionArguments<typeof functions.getClaimableAllProposalVotersRewardAmount>
export type GetClaimableAllProposalVotersRewardAmountReturn = FunctionReturn<typeof functions.getClaimableAllProposalVotersRewardAmount>

export type GetClaimableKnowledgeMinerRewardAmountParams = FunctionArguments<typeof functions.getClaimableKnowledgeMinerRewardAmount>
export type GetClaimableKnowledgeMinerRewardAmountReturn = FunctionReturn<typeof functions.getClaimableKnowledgeMinerRewardAmount>

export type GetClaimableParanetOperatorRewardAmountParams = FunctionArguments<typeof functions.getClaimableParanetOperatorRewardAmount>
export type GetClaimableParanetOperatorRewardAmountReturn = FunctionReturn<typeof functions.getClaimableParanetOperatorRewardAmount>

export type GetClaimableProposalVoterRewardAmountParams = FunctionArguments<typeof functions.getClaimableProposalVoterRewardAmount>
export type GetClaimableProposalVoterRewardAmountReturn = FunctionReturn<typeof functions.getClaimableProposalVoterRewardAmount>

export type GetEffectiveTokenEmissionMultiplierParams = FunctionArguments<typeof functions.getEffectiveTokenEmissionMultiplier>
export type GetEffectiveTokenEmissionMultiplierReturn = FunctionReturn<typeof functions.getEffectiveTokenEmissionMultiplier>

export type GetParanetIncentivesPoolStorageParams = FunctionArguments<typeof functions.getParanetIncentivesPoolStorage>
export type GetParanetIncentivesPoolStorageReturn = FunctionReturn<typeof functions.getParanetIncentivesPoolStorage>

export type GetTotalAllKnowledgeMinersIncentiveEstimationParams = FunctionArguments<typeof functions.getTotalAllKnowledgeMinersIncentiveEstimation>
export type GetTotalAllKnowledgeMinersIncentiveEstimationReturn = FunctionReturn<typeof functions.getTotalAllKnowledgeMinersIncentiveEstimation>

export type GetTotalAllProposalVotersIncentiveEstimationParams = FunctionArguments<typeof functions.getTotalAllProposalVotersIncentiveEstimation>
export type GetTotalAllProposalVotersIncentiveEstimationReturn = FunctionReturn<typeof functions.getTotalAllProposalVotersIncentiveEstimation>

export type GetTotalKnowledgeMinerIncentiveEstimationParams = FunctionArguments<typeof functions.getTotalKnowledgeMinerIncentiveEstimation>
export type GetTotalKnowledgeMinerIncentiveEstimationReturn = FunctionReturn<typeof functions.getTotalKnowledgeMinerIncentiveEstimation>

export type GetTotalParanetOperatorIncentiveEstimationParams = FunctionArguments<typeof functions.getTotalParanetOperatorIncentiveEstimation>
export type GetTotalParanetOperatorIncentiveEstimationReturn = FunctionReturn<typeof functions.getTotalParanetOperatorIncentiveEstimation>

export type GetTotalProposalVoterIncentiveEstimationParams = FunctionArguments<typeof functions.getTotalProposalVoterIncentiveEstimation>
export type GetTotalProposalVoterIncentiveEstimationReturn = FunctionReturn<typeof functions.getTotalProposalVoterIncentiveEstimation>

export type GettokenEmissionMultipliersParams = FunctionArguments<typeof functions.gettokenEmissionMultipliers>
export type GettokenEmissionMultipliersReturn = FunctionReturn<typeof functions.gettokenEmissionMultipliers>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitiateTokenEmissionMultiplierUpdateParams = FunctionArguments<typeof functions.initiateTokenEmissionMultiplierUpdate>
export type InitiateTokenEmissionMultiplierUpdateReturn = FunctionReturn<typeof functions.initiateTokenEmissionMultiplierUpdate>

export type IsKnowledgeMinerParams = FunctionArguments<typeof functions.isKnowledgeMiner>
export type IsKnowledgeMinerReturn = FunctionReturn<typeof functions.isKnowledgeMiner>

export type IsParanetOperatorParams = FunctionArguments<typeof functions.isParanetOperator>
export type IsParanetOperatorReturn = FunctionReturn<typeof functions.isParanetOperator>

export type IsProposalVoterParams = FunctionArguments<typeof functions.isProposalVoter>
export type IsProposalVoterReturn = FunctionReturn<typeof functions.isProposalVoter>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParanetIncentivesPoolStorageParams = FunctionArguments<typeof functions.paranetIncentivesPoolStorage>
export type ParanetIncentivesPoolStorageReturn = FunctionReturn<typeof functions.paranetIncentivesPoolStorage>

export type ParanetKnowledgeMinersRegistryParams = FunctionArguments<typeof functions.paranetKnowledgeMinersRegistry>
export type ParanetKnowledgeMinersRegistryReturn = FunctionReturn<typeof functions.paranetKnowledgeMinersRegistry>

export type ParanetsRegistryParams = FunctionArguments<typeof functions.paranetsRegistry>
export type ParanetsRegistryReturn = FunctionReturn<typeof functions.paranetsRegistry>

export type TokenEmissionMultiplierUpdateDelayParams = FunctionArguments<typeof functions.tokenEmissionMultiplierUpdateDelay>
export type TokenEmissionMultiplierUpdateDelayReturn = FunctionReturn<typeof functions.tokenEmissionMultiplierUpdateDelay>

export type TokenEmissionMultipliersParams = FunctionArguments<typeof functions.tokenEmissionMultipliers>
export type TokenEmissionMultipliersReturn = FunctionReturn<typeof functions.tokenEmissionMultipliers>

export type UpdatetokenEmissionMultiplierUpdateDelayParams = FunctionArguments<typeof functions.updatetokenEmissionMultiplierUpdateDelay>
export type UpdatetokenEmissionMultiplierUpdateDelayReturn = FunctionReturn<typeof functions.updatetokenEmissionMultiplierUpdateDelay>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type VoterclaimedTokenParams = FunctionArguments<typeof functions.voterclaimedToken>
export type VoterclaimedTokenReturn = FunctionReturn<typeof functions.voterclaimedToken>

