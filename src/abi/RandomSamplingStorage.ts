import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    PendingProofingPeriodDurationReplaced: event("0x0cabeeac01b9ff10587628ba97bf2ff185d87fe701500e4a469d1dde41cf35c7", "PendingProofingPeriodDurationReplaced(uint16,uint16,uint256)", {"oldDurationInBlocks": p.uint16, "newDurationInBlocks": p.uint16, "effectiveEpoch": indexed(p.uint256)}),
    ProofingPeriodDurationAdded: event("0xd3954c4ca20611772f541713d291ab2202a9cf8dee1fc6cb577a0bf5f0a32464", "ProofingPeriodDurationAdded(uint16,uint256)", {"durationInBlocks": p.uint16, "effectiveEpoch": indexed(p.uint256)}),
}

export const functions = {
    CHUNK_BYTE_SIZE: viewFun("0x1b202ccf", "CHUNK_BYTE_SIZE()", {}, p.uint8),
    addProofingPeriodDuration: fun("0x01ae11e2", "addProofingPeriodDuration(uint16,uint256)", {"durationInBlocks": p.uint16, "effectiveEpoch": p.uint256}, ),
    addToEpochNodeDelegatorScore: fun("0xcdddd01f", "addToEpochNodeDelegatorScore(uint256,uint72,bytes32,uint256)", {"epoch": p.uint256, "identityId": p.uint72, "delegatorKey": p.bytes32, "score": p.uint256}, ),
    addToNodeScore: fun("0x243178e0", "addToNodeScore(uint256,uint256,uint72,uint256)", {"epoch": p.uint256, "proofPeriodStartBlock": p.uint256, "identityId": p.uint72, "score": p.uint256}, ),
    allNodesEpochProofPeriodScore: viewFun("0x9b421519", "allNodesEpochProofPeriodScore(uint256,uint256)", {"_0": p.uint256, "_1": p.uint256}, p.uint256),
    chronos: viewFun("0x65774548", "chronos()", {}, p.address),
    epochNodeDelegatorScore: viewFun("0x5f9e1b4b", "epochNodeDelegatorScore(uint256,uint72,bytes32)", {"_0": p.uint256, "_1": p.uint72, "_2": p.bytes32}, p.uint256),
    epochNodeValidProofsCount: viewFun("0xd718e555", "epochNodeValidProofsCount(uint256,uint72)", {"_0": p.uint256, "_1": p.uint72}, p.uint256),
    getActiveProofPeriodStatus: viewFun("0x35e19505", "getActiveProofPeriodStatus()", {}, p.struct({"activeProofPeriodStartBlock": p.uint256, "isValid": p.bool})),
    getActiveProofingPeriodDurationInBlocks: viewFun("0xacc0d4b8", "getActiveProofingPeriodDurationInBlocks()", {}, p.uint16),
    getEpochAllNodesProofPeriodScore: viewFun("0x972387cd", "getEpochAllNodesProofPeriodScore(uint256,uint256)", {"epoch": p.uint256, "proofPeriodStartBlock": p.uint256}, p.uint256),
    getEpochNodeDelegatorScore: viewFun("0x0ee1bfcd", "getEpochNodeDelegatorScore(uint256,uint72,bytes32)", {"epoch": p.uint256, "identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint256),
    getEpochNodeValidProofsCount: viewFun("0x1369c314", "getEpochNodeValidProofsCount(uint256,uint72)", {"epoch": p.uint256, "identityId": p.uint72}, p.uint256),
    getEpochProofingPeriodDurationInBlocks: viewFun("0x8014b590", "getEpochProofingPeriodDurationInBlocks(uint256)", {"epoch": p.uint256}, p.uint16),
    getHistoricalProofPeriodStartBlock: viewFun("0x4e152055", "getHistoricalProofPeriodStartBlock(uint256,uint256)", {"proofPeriodStartBlock": p.uint256, "offset": p.uint256}, p.uint256),
    getNodeChallenge: viewFun("0xd0777821", "getNodeChallenge(uint72)", {"identityId": p.uint72}, p.struct({"knowledgeCollectionId": p.uint256, "chunkId": p.uint256, "knowledgeCollectionStorageContract": p.address, "epoch": p.uint256, "activeProofPeriodStartBlock": p.uint256, "proofingPeriodDurationInBlocks": p.uint256, "solved": p.bool})),
    getNodeEpochProofPeriodScore: viewFun("0xe06b764f", "getNodeEpochProofPeriodScore(uint72,uint256,uint256)", {"identityId": p.uint72, "epoch": p.uint256, "proofPeriodStartBlock": p.uint256}, p.uint256),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    incrementEpochNodeValidProofsCount: fun("0x57bb2a2d", "incrementEpochNodeValidProofsCount(uint256,uint72)", {"epoch": p.uint256, "identityId": p.uint72}, ),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    isPendingProofingPeriodDuration: viewFun("0x41dd1268", "isPendingProofingPeriodDuration()", {}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nodeEpochProofPeriodScore: viewFun("0x3fd05fb3", "nodeEpochProofPeriodScore(uint72,uint256,uint256)", {"_0": p.uint72, "_1": p.uint256, "_2": p.uint256}, p.uint256),
    nodesChallenges: viewFun("0xfd06cc4c", "nodesChallenges(uint72)", {"_0": p.uint72}, {"knowledgeCollectionId": p.uint256, "chunkId": p.uint256, "knowledgeCollectionStorageContract": p.address, "epoch": p.uint256, "activeProofPeriodStartBlock": p.uint256, "proofingPeriodDurationInBlocks": p.uint256, "solved": p.bool}),
    proofingPeriodDurations: viewFun("0x7196dc53", "proofingPeriodDurations(uint256)", {"_0": p.uint256}, {"durationInBlocks": p.uint16, "effectiveEpoch": p.uint256}),
    replacePendingProofingPeriodDuration: fun("0x320d7549", "replacePendingProofingPeriodDuration(uint16,uint256)", {"durationInBlocks": p.uint16, "effectiveEpoch": p.uint256}, ),
    setNodeChallenge: fun("0x80f3ab64", "setNodeChallenge(uint72,(uint256,uint256,address,uint256,uint256,uint256,bool))", {"identityId": p.uint72, "challenge": p.struct({"knowledgeCollectionId": p.uint256, "chunkId": p.uint256, "knowledgeCollectionStorageContract": p.address, "epoch": p.uint256, "activeProofPeriodStartBlock": p.uint256, "proofingPeriodDurationInBlocks": p.uint256, "solved": p.bool})}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    updateAndGetActiveProofPeriodStartBlock: fun("0xffa9bfce", "updateAndGetActiveProofPeriodStartBlock()", {}, p.uint256),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    CHUNK_BYTE_SIZE() {
        return this.eth_call(functions.CHUNK_BYTE_SIZE, {})
    }

    allNodesEpochProofPeriodScore(_0: AllNodesEpochProofPeriodScoreParams["_0"], _1: AllNodesEpochProofPeriodScoreParams["_1"]) {
        return this.eth_call(functions.allNodesEpochProofPeriodScore, {_0, _1})
    }

    chronos() {
        return this.eth_call(functions.chronos, {})
    }

    epochNodeDelegatorScore(_0: EpochNodeDelegatorScoreParams["_0"], _1: EpochNodeDelegatorScoreParams["_1"], _2: EpochNodeDelegatorScoreParams["_2"]) {
        return this.eth_call(functions.epochNodeDelegatorScore, {_0, _1, _2})
    }

    epochNodeValidProofsCount(_0: EpochNodeValidProofsCountParams["_0"], _1: EpochNodeValidProofsCountParams["_1"]) {
        return this.eth_call(functions.epochNodeValidProofsCount, {_0, _1})
    }

    getActiveProofPeriodStatus() {
        return this.eth_call(functions.getActiveProofPeriodStatus, {})
    }

    getActiveProofingPeriodDurationInBlocks() {
        return this.eth_call(functions.getActiveProofingPeriodDurationInBlocks, {})
    }

    getEpochAllNodesProofPeriodScore(epoch: GetEpochAllNodesProofPeriodScoreParams["epoch"], proofPeriodStartBlock: GetEpochAllNodesProofPeriodScoreParams["proofPeriodStartBlock"]) {
        return this.eth_call(functions.getEpochAllNodesProofPeriodScore, {epoch, proofPeriodStartBlock})
    }

    getEpochNodeDelegatorScore(epoch: GetEpochNodeDelegatorScoreParams["epoch"], identityId: GetEpochNodeDelegatorScoreParams["identityId"], delegatorKey: GetEpochNodeDelegatorScoreParams["delegatorKey"]) {
        return this.eth_call(functions.getEpochNodeDelegatorScore, {epoch, identityId, delegatorKey})
    }

    getEpochNodeValidProofsCount(epoch: GetEpochNodeValidProofsCountParams["epoch"], identityId: GetEpochNodeValidProofsCountParams["identityId"]) {
        return this.eth_call(functions.getEpochNodeValidProofsCount, {epoch, identityId})
    }

    getEpochProofingPeriodDurationInBlocks(epoch: GetEpochProofingPeriodDurationInBlocksParams["epoch"]) {
        return this.eth_call(functions.getEpochProofingPeriodDurationInBlocks, {epoch})
    }

    getHistoricalProofPeriodStartBlock(proofPeriodStartBlock: GetHistoricalProofPeriodStartBlockParams["proofPeriodStartBlock"], offset: GetHistoricalProofPeriodStartBlockParams["offset"]) {
        return this.eth_call(functions.getHistoricalProofPeriodStartBlock, {proofPeriodStartBlock, offset})
    }

    getNodeChallenge(identityId: GetNodeChallengeParams["identityId"]) {
        return this.eth_call(functions.getNodeChallenge, {identityId})
    }

    getNodeEpochProofPeriodScore(identityId: GetNodeEpochProofPeriodScoreParams["identityId"], epoch: GetNodeEpochProofPeriodScoreParams["epoch"], proofPeriodStartBlock: GetNodeEpochProofPeriodScoreParams["proofPeriodStartBlock"]) {
        return this.eth_call(functions.getNodeEpochProofPeriodScore, {identityId, epoch, proofPeriodStartBlock})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isPendingProofingPeriodDuration() {
        return this.eth_call(functions.isPendingProofingPeriodDuration, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nodeEpochProofPeriodScore(_0: NodeEpochProofPeriodScoreParams["_0"], _1: NodeEpochProofPeriodScoreParams["_1"], _2: NodeEpochProofPeriodScoreParams["_2"]) {
        return this.eth_call(functions.nodeEpochProofPeriodScore, {_0, _1, _2})
    }

    nodesChallenges(_0: NodesChallengesParams["_0"]) {
        return this.eth_call(functions.nodesChallenges, {_0})
    }

    proofingPeriodDurations(_0: ProofingPeriodDurationsParams["_0"]) {
        return this.eth_call(functions.proofingPeriodDurations, {_0})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type PendingProofingPeriodDurationReplacedEventArgs = EParams<typeof events.PendingProofingPeriodDurationReplaced>
export type ProofingPeriodDurationAddedEventArgs = EParams<typeof events.ProofingPeriodDurationAdded>

/// Function types
export type CHUNK_BYTE_SIZEParams = FunctionArguments<typeof functions.CHUNK_BYTE_SIZE>
export type CHUNK_BYTE_SIZEReturn = FunctionReturn<typeof functions.CHUNK_BYTE_SIZE>

export type AddProofingPeriodDurationParams = FunctionArguments<typeof functions.addProofingPeriodDuration>
export type AddProofingPeriodDurationReturn = FunctionReturn<typeof functions.addProofingPeriodDuration>

export type AddToEpochNodeDelegatorScoreParams = FunctionArguments<typeof functions.addToEpochNodeDelegatorScore>
export type AddToEpochNodeDelegatorScoreReturn = FunctionReturn<typeof functions.addToEpochNodeDelegatorScore>

export type AddToNodeScoreParams = FunctionArguments<typeof functions.addToNodeScore>
export type AddToNodeScoreReturn = FunctionReturn<typeof functions.addToNodeScore>

export type AllNodesEpochProofPeriodScoreParams = FunctionArguments<typeof functions.allNodesEpochProofPeriodScore>
export type AllNodesEpochProofPeriodScoreReturn = FunctionReturn<typeof functions.allNodesEpochProofPeriodScore>

export type ChronosParams = FunctionArguments<typeof functions.chronos>
export type ChronosReturn = FunctionReturn<typeof functions.chronos>

export type EpochNodeDelegatorScoreParams = FunctionArguments<typeof functions.epochNodeDelegatorScore>
export type EpochNodeDelegatorScoreReturn = FunctionReturn<typeof functions.epochNodeDelegatorScore>

export type EpochNodeValidProofsCountParams = FunctionArguments<typeof functions.epochNodeValidProofsCount>
export type EpochNodeValidProofsCountReturn = FunctionReturn<typeof functions.epochNodeValidProofsCount>

export type GetActiveProofPeriodStatusParams = FunctionArguments<typeof functions.getActiveProofPeriodStatus>
export type GetActiveProofPeriodStatusReturn = FunctionReturn<typeof functions.getActiveProofPeriodStatus>

export type GetActiveProofingPeriodDurationInBlocksParams = FunctionArguments<typeof functions.getActiveProofingPeriodDurationInBlocks>
export type GetActiveProofingPeriodDurationInBlocksReturn = FunctionReturn<typeof functions.getActiveProofingPeriodDurationInBlocks>

export type GetEpochAllNodesProofPeriodScoreParams = FunctionArguments<typeof functions.getEpochAllNodesProofPeriodScore>
export type GetEpochAllNodesProofPeriodScoreReturn = FunctionReturn<typeof functions.getEpochAllNodesProofPeriodScore>

export type GetEpochNodeDelegatorScoreParams = FunctionArguments<typeof functions.getEpochNodeDelegatorScore>
export type GetEpochNodeDelegatorScoreReturn = FunctionReturn<typeof functions.getEpochNodeDelegatorScore>

export type GetEpochNodeValidProofsCountParams = FunctionArguments<typeof functions.getEpochNodeValidProofsCount>
export type GetEpochNodeValidProofsCountReturn = FunctionReturn<typeof functions.getEpochNodeValidProofsCount>

export type GetEpochProofingPeriodDurationInBlocksParams = FunctionArguments<typeof functions.getEpochProofingPeriodDurationInBlocks>
export type GetEpochProofingPeriodDurationInBlocksReturn = FunctionReturn<typeof functions.getEpochProofingPeriodDurationInBlocks>

export type GetHistoricalProofPeriodStartBlockParams = FunctionArguments<typeof functions.getHistoricalProofPeriodStartBlock>
export type GetHistoricalProofPeriodStartBlockReturn = FunctionReturn<typeof functions.getHistoricalProofPeriodStartBlock>

export type GetNodeChallengeParams = FunctionArguments<typeof functions.getNodeChallenge>
export type GetNodeChallengeReturn = FunctionReturn<typeof functions.getNodeChallenge>

export type GetNodeEpochProofPeriodScoreParams = FunctionArguments<typeof functions.getNodeEpochProofPeriodScore>
export type GetNodeEpochProofPeriodScoreReturn = FunctionReturn<typeof functions.getNodeEpochProofPeriodScore>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IncrementEpochNodeValidProofsCountParams = FunctionArguments<typeof functions.incrementEpochNodeValidProofsCount>
export type IncrementEpochNodeValidProofsCountReturn = FunctionReturn<typeof functions.incrementEpochNodeValidProofsCount>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type IsPendingProofingPeriodDurationParams = FunctionArguments<typeof functions.isPendingProofingPeriodDuration>
export type IsPendingProofingPeriodDurationReturn = FunctionReturn<typeof functions.isPendingProofingPeriodDuration>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NodeEpochProofPeriodScoreParams = FunctionArguments<typeof functions.nodeEpochProofPeriodScore>
export type NodeEpochProofPeriodScoreReturn = FunctionReturn<typeof functions.nodeEpochProofPeriodScore>

export type NodesChallengesParams = FunctionArguments<typeof functions.nodesChallenges>
export type NodesChallengesReturn = FunctionReturn<typeof functions.nodesChallenges>

export type ProofingPeriodDurationsParams = FunctionArguments<typeof functions.proofingPeriodDurations>
export type ProofingPeriodDurationsReturn = FunctionReturn<typeof functions.proofingPeriodDurations>

export type ReplacePendingProofingPeriodDurationParams = FunctionArguments<typeof functions.replacePendingProofingPeriodDuration>
export type ReplacePendingProofingPeriodDurationReturn = FunctionReturn<typeof functions.replacePendingProofingPeriodDuration>

export type SetNodeChallengeParams = FunctionArguments<typeof functions.setNodeChallenge>
export type SetNodeChallengeReturn = FunctionReturn<typeof functions.setNodeChallenge>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type UpdateAndGetActiveProofPeriodStartBlockParams = FunctionArguments<typeof functions.updateAndGetActiveProofPeriodStartBlock>
export type UpdateAndGetActiveProofPeriodStartBlockReturn = FunctionReturn<typeof functions.updateAndGetActiveProofPeriodStartBlock>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

