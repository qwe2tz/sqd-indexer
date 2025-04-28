import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    EpochProducedKnowledgeValueAdded: event("0xe5219a34d5f6f99f12f1f1da9877f9b481785a134be5d3af2646757db1589899", "EpochProducedKnowledgeValueAdded(uint72,uint256,uint96)", {"identityId": indexed(p.uint72), "epoch": indexed(p.uint256), "knowledgeValue": p.uint96}),
    EpochTokensPaidOut: event("0xb2eec04f54e8feeca5bfd4500dc3e07bd1fdb20c6a4f71bc54386fbf1c79fc64", "EpochTokensPaidOut(uint256,uint256,uint72,uint96)", {"shardId": indexed(p.uint256), "epoch": indexed(p.uint256), "identityId": indexed(p.uint72), "amount": p.uint96}),
    EpochsFinalized: event("0xf5e0b76446dcb61b7b71f2105da35440aaa94ff21ef805e3bc2e6c1bee73b51b", "EpochsFinalized(uint256,uint256,uint256)", {"shardId": indexed(p.uint256), "startEpoch": p.uint256, "endEpoch": p.uint256}),
    TokensAddedToEpochRange: event("0x679556c38f879ccbda2d639d678eca41e35e15a12d0aa372b3589e9130905037", "TokensAddedToEpochRange(uint256,uint256,uint256,uint96,uint96)", {"shardId": indexed(p.uint256), "startEpoch": p.uint256, "endEpoch": p.uint256, "tokenAmount": p.uint96, "remainder": p.uint96}),
}

export const functions = {
    accumulatedRemainder: viewFun("0xa800e0d5", "accumulatedRemainder(uint256)", {"_0": p.uint256}, p.uint96),
    addEpochProducedKnowledgeValue: fun("0x630b82a8", "addEpochProducedKnowledgeValue(uint72,uint256,uint96)", {"identityId": p.uint72, "epoch": p.uint256, "knowledgeValue": p.uint96}, ),
    addTokensToEpochRange: fun("0x387f6bda", "addTokensToEpochRange(uint256,uint256,uint256,uint96)", {"shardId": p.uint256, "startEpoch": p.uint256, "endEpoch": p.uint256, "tokenAmount": p.uint96}, ),
    chronos: viewFun("0x65774548", "chronos()", {}, p.address),
    cumulative: viewFun("0xcaf8cffe", "cumulative(uint256,uint256)", {"_0": p.uint256, "_1": p.uint256}, p.uint96),
    diff: viewFun("0x8f5e514a", "diff(uint256,uint256)", {"_0": p.uint256, "_1": p.uint256}, p.int96),
    distributed: viewFun("0x14395ee4", "distributed(uint256,uint256)", {"_0": p.uint256, "_1": p.uint256}, p.uint96),
    epochNodeMaxProducedKnowledgeValue: viewFun("0x4406ff22", "epochNodeMaxProducedKnowledgeValue(uint256)", {"_0": p.uint256}, p.uint96),
    epochProducedKnowledgeValue: viewFun("0x8890eb1c", "epochProducedKnowledgeValue(uint256)", {"_0": p.uint256}, p.uint96),
    getCurrentEpochNodeMaxProducedKnowledgeValue: viewFun("0x9c915922", "getCurrentEpochNodeMaxProducedKnowledgeValue()", {}, p.uint96),
    getCurrentEpochPool: viewFun("0x70f699d4", "getCurrentEpochPool(uint256)", {"shardId": p.uint256}, p.uint96),
    getCurrentEpochProducedKnowledgeValue: viewFun("0x8592971a", "getCurrentEpochProducedKnowledgeValue()", {}, p.uint96),
    getCurrentEpochRemainingPool: viewFun("0xe2666782", "getCurrentEpochRemainingPool(uint256)", {"shardId": p.uint256}, p.uint96),
    getEpochDistributedPool: viewFun("0x679b656f", "getEpochDistributedPool(uint256,uint256)", {"shardId": p.uint256, "epoch": p.uint256}, p.uint96),
    getEpochNodeMaxProducedKnowledgeValue: viewFun("0x197345d7", "getEpochNodeMaxProducedKnowledgeValue(uint256)", {"epoch": p.uint256}, p.uint96),
    getEpochPool: viewFun("0xbd1c66a0", "getEpochPool(uint256,uint256)", {"shardId": p.uint256, "epoch": p.uint256}, p.uint96),
    getEpochProducedKnowledgeValue: viewFun("0x462a8578", "getEpochProducedKnowledgeValue(uint256)", {"epoch": p.uint256}, p.uint96),
    getEpochRangePool: viewFun("0x4dead866", "getEpochRangePool(uint256,uint256,uint256)", {"shardId": p.uint256, "startEpoch": p.uint256, "endEpoch": p.uint256}, p.uint96),
    getEpochRemainingPool: viewFun("0xb875164c", "getEpochRemainingPool(uint256,uint256)", {"shardId": p.uint256, "epoch": p.uint256}, p.uint96),
    getNodeCurrentEpochProducedKnowledgeValue: viewFun("0x80a8dd38", "getNodeCurrentEpochProducedKnowledgeValue(uint72)", {"identityId": p.uint72}, p.uint96),
    getNodeCurrentEpochProducedKnowledgeValuePercentage: viewFun("0x745d9caa", "getNodeCurrentEpochProducedKnowledgeValuePercentage(uint72)", {"identityId": p.uint72}, p.uint256),
    getNodeEpochPaidOut: viewFun("0x41ffd206", "getNodeEpochPaidOut(uint256,uint72,uint256)", {"shardId": p.uint256, "identityId": p.uint72, "epoch": p.uint256}, p.uint96),
    getNodeEpochProducedKnowledgeValue: viewFun("0xfb127a42", "getNodeEpochProducedKnowledgeValue(uint72,uint256)", {"identityId": p.uint72, "epoch": p.uint256}, p.uint96),
    getNodeEpochProducedKnowledgeValuePercentage: viewFun("0x4e2483f4", "getNodeEpochProducedKnowledgeValuePercentage(uint72,uint256)", {"identityId": p.uint72, "epoch": p.uint256}, p.uint256),
    getNodePreviousEpochPaidOut: viewFun("0xd89d0dd8", "getNodePreviousEpochPaidOut(uint256,uint72)", {"shardId": p.uint256, "identityId": p.uint72}, p.uint96),
    getNodePreviousEpochProducedKnowledgeValue: viewFun("0xd8751b9a", "getNodePreviousEpochProducedKnowledgeValue(uint72)", {"identityId": p.uint72}, p.uint96),
    getNodePreviousEpochProducedKnowledgeValuePercentage: viewFun("0xbbf750cd", "getNodePreviousEpochProducedKnowledgeValuePercentage(uint72)", {"identityId": p.uint72}, p.uint256),
    getPreviousEpochDistributedPool: viewFun("0x66268585", "getPreviousEpochDistributedPool(uint256)", {"shardId": p.uint256}, p.uint96),
    getPreviousEpochNodeMaxProducedKnowledgeValue: viewFun("0x76153a23", "getPreviousEpochNodeMaxProducedKnowledgeValue()", {}, p.uint96),
    getPreviousEpochPool: viewFun("0x8687e10e", "getPreviousEpochPool(uint256)", {"shardId": p.uint256}, p.uint96),
    getPreviousEpochProducedKnowledgeValue: viewFun("0xd7d9482f", "getPreviousEpochProducedKnowledgeValue()", {}, p.uint96),
    getPreviousEpochRemainingPool: viewFun("0x3051db70", "getPreviousEpochRemainingPool(uint256)", {"shardId": p.uint256}, p.uint96),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    lastFinalizedEpoch: viewFun("0x9400dc26", "lastFinalizedEpoch(uint256)", {"_0": p.uint256}, p.uint256),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nodesEpochProducedKnowledgeValue: viewFun("0x9dafc471", "nodesEpochProducedKnowledgeValue(uint72,uint256)", {"_0": p.uint72, "_1": p.uint256}, p.uint96),
    nodesPaidOut: viewFun("0xbaef9afb", "nodesPaidOut(uint72,uint256,uint256)", {"_0": p.uint72, "_1": p.uint256, "_2": p.uint256}, p.uint96),
    payOutEpochTokens: fun("0xeedc022c", "payOutEpochTokens(uint256,uint256,uint72,uint96)", {"shardId": p.uint256, "epoch": p.uint256, "identityId": p.uint72, "amount": p.uint96}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    accumulatedRemainder(_0: AccumulatedRemainderParams["_0"]) {
        return this.eth_call(functions.accumulatedRemainder, {_0})
    }

    chronos() {
        return this.eth_call(functions.chronos, {})
    }

    cumulative(_0: CumulativeParams["_0"], _1: CumulativeParams["_1"]) {
        return this.eth_call(functions.cumulative, {_0, _1})
    }

    diff(_0: DiffParams["_0"], _1: DiffParams["_1"]) {
        return this.eth_call(functions.diff, {_0, _1})
    }

    distributed(_0: DistributedParams["_0"], _1: DistributedParams["_1"]) {
        return this.eth_call(functions.distributed, {_0, _1})
    }

    epochNodeMaxProducedKnowledgeValue(_0: EpochNodeMaxProducedKnowledgeValueParams["_0"]) {
        return this.eth_call(functions.epochNodeMaxProducedKnowledgeValue, {_0})
    }

    epochProducedKnowledgeValue(_0: EpochProducedKnowledgeValueParams["_0"]) {
        return this.eth_call(functions.epochProducedKnowledgeValue, {_0})
    }

    getCurrentEpochNodeMaxProducedKnowledgeValue() {
        return this.eth_call(functions.getCurrentEpochNodeMaxProducedKnowledgeValue, {})
    }

    getCurrentEpochPool(shardId: GetCurrentEpochPoolParams["shardId"]) {
        return this.eth_call(functions.getCurrentEpochPool, {shardId})
    }

    getCurrentEpochProducedKnowledgeValue() {
        return this.eth_call(functions.getCurrentEpochProducedKnowledgeValue, {})
    }

    getCurrentEpochRemainingPool(shardId: GetCurrentEpochRemainingPoolParams["shardId"]) {
        return this.eth_call(functions.getCurrentEpochRemainingPool, {shardId})
    }

    getEpochDistributedPool(shardId: GetEpochDistributedPoolParams["shardId"], epoch: GetEpochDistributedPoolParams["epoch"]) {
        return this.eth_call(functions.getEpochDistributedPool, {shardId, epoch})
    }

    getEpochNodeMaxProducedKnowledgeValue(epoch: GetEpochNodeMaxProducedKnowledgeValueParams["epoch"]) {
        return this.eth_call(functions.getEpochNodeMaxProducedKnowledgeValue, {epoch})
    }

    getEpochPool(shardId: GetEpochPoolParams["shardId"], epoch: GetEpochPoolParams["epoch"]) {
        return this.eth_call(functions.getEpochPool, {shardId, epoch})
    }

    getEpochProducedKnowledgeValue(epoch: GetEpochProducedKnowledgeValueParams["epoch"]) {
        return this.eth_call(functions.getEpochProducedKnowledgeValue, {epoch})
    }

    getEpochRangePool(shardId: GetEpochRangePoolParams["shardId"], startEpoch: GetEpochRangePoolParams["startEpoch"], endEpoch: GetEpochRangePoolParams["endEpoch"]) {
        return this.eth_call(functions.getEpochRangePool, {shardId, startEpoch, endEpoch})
    }

    getEpochRemainingPool(shardId: GetEpochRemainingPoolParams["shardId"], epoch: GetEpochRemainingPoolParams["epoch"]) {
        return this.eth_call(functions.getEpochRemainingPool, {shardId, epoch})
    }

    getNodeCurrentEpochProducedKnowledgeValue(identityId: GetNodeCurrentEpochProducedKnowledgeValueParams["identityId"]) {
        return this.eth_call(functions.getNodeCurrentEpochProducedKnowledgeValue, {identityId})
    }

    getNodeCurrentEpochProducedKnowledgeValuePercentage(identityId: GetNodeCurrentEpochProducedKnowledgeValuePercentageParams["identityId"]) {
        return this.eth_call(functions.getNodeCurrentEpochProducedKnowledgeValuePercentage, {identityId})
    }

    getNodeEpochPaidOut(shardId: GetNodeEpochPaidOutParams["shardId"], identityId: GetNodeEpochPaidOutParams["identityId"], epoch: GetNodeEpochPaidOutParams["epoch"]) {
        return this.eth_call(functions.getNodeEpochPaidOut, {shardId, identityId, epoch})
    }

    getNodeEpochProducedKnowledgeValue(identityId: GetNodeEpochProducedKnowledgeValueParams["identityId"], epoch: GetNodeEpochProducedKnowledgeValueParams["epoch"]) {
        return this.eth_call(functions.getNodeEpochProducedKnowledgeValue, {identityId, epoch})
    }

    getNodeEpochProducedKnowledgeValuePercentage(identityId: GetNodeEpochProducedKnowledgeValuePercentageParams["identityId"], epoch: GetNodeEpochProducedKnowledgeValuePercentageParams["epoch"]) {
        return this.eth_call(functions.getNodeEpochProducedKnowledgeValuePercentage, {identityId, epoch})
    }

    getNodePreviousEpochPaidOut(shardId: GetNodePreviousEpochPaidOutParams["shardId"], identityId: GetNodePreviousEpochPaidOutParams["identityId"]) {
        return this.eth_call(functions.getNodePreviousEpochPaidOut, {shardId, identityId})
    }

    getNodePreviousEpochProducedKnowledgeValue(identityId: GetNodePreviousEpochProducedKnowledgeValueParams["identityId"]) {
        return this.eth_call(functions.getNodePreviousEpochProducedKnowledgeValue, {identityId})
    }

    getNodePreviousEpochProducedKnowledgeValuePercentage(identityId: GetNodePreviousEpochProducedKnowledgeValuePercentageParams["identityId"]) {
        return this.eth_call(functions.getNodePreviousEpochProducedKnowledgeValuePercentage, {identityId})
    }

    getPreviousEpochDistributedPool(shardId: GetPreviousEpochDistributedPoolParams["shardId"]) {
        return this.eth_call(functions.getPreviousEpochDistributedPool, {shardId})
    }

    getPreviousEpochNodeMaxProducedKnowledgeValue() {
        return this.eth_call(functions.getPreviousEpochNodeMaxProducedKnowledgeValue, {})
    }

    getPreviousEpochPool(shardId: GetPreviousEpochPoolParams["shardId"]) {
        return this.eth_call(functions.getPreviousEpochPool, {shardId})
    }

    getPreviousEpochProducedKnowledgeValue() {
        return this.eth_call(functions.getPreviousEpochProducedKnowledgeValue, {})
    }

    getPreviousEpochRemainingPool(shardId: GetPreviousEpochRemainingPoolParams["shardId"]) {
        return this.eth_call(functions.getPreviousEpochRemainingPool, {shardId})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    lastFinalizedEpoch(_0: LastFinalizedEpochParams["_0"]) {
        return this.eth_call(functions.lastFinalizedEpoch, {_0})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nodesEpochProducedKnowledgeValue(_0: NodesEpochProducedKnowledgeValueParams["_0"], _1: NodesEpochProducedKnowledgeValueParams["_1"]) {
        return this.eth_call(functions.nodesEpochProducedKnowledgeValue, {_0, _1})
    }

    nodesPaidOut(_0: NodesPaidOutParams["_0"], _1: NodesPaidOutParams["_1"], _2: NodesPaidOutParams["_2"]) {
        return this.eth_call(functions.nodesPaidOut, {_0, _1, _2})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type EpochProducedKnowledgeValueAddedEventArgs = EParams<typeof events.EpochProducedKnowledgeValueAdded>
export type EpochTokensPaidOutEventArgs = EParams<typeof events.EpochTokensPaidOut>
export type EpochsFinalizedEventArgs = EParams<typeof events.EpochsFinalized>
export type TokensAddedToEpochRangeEventArgs = EParams<typeof events.TokensAddedToEpochRange>

/// Function types
export type AccumulatedRemainderParams = FunctionArguments<typeof functions.accumulatedRemainder>
export type AccumulatedRemainderReturn = FunctionReturn<typeof functions.accumulatedRemainder>

export type AddEpochProducedKnowledgeValueParams = FunctionArguments<typeof functions.addEpochProducedKnowledgeValue>
export type AddEpochProducedKnowledgeValueReturn = FunctionReturn<typeof functions.addEpochProducedKnowledgeValue>

export type AddTokensToEpochRangeParams = FunctionArguments<typeof functions.addTokensToEpochRange>
export type AddTokensToEpochRangeReturn = FunctionReturn<typeof functions.addTokensToEpochRange>

export type ChronosParams = FunctionArguments<typeof functions.chronos>
export type ChronosReturn = FunctionReturn<typeof functions.chronos>

export type CumulativeParams = FunctionArguments<typeof functions.cumulative>
export type CumulativeReturn = FunctionReturn<typeof functions.cumulative>

export type DiffParams = FunctionArguments<typeof functions.diff>
export type DiffReturn = FunctionReturn<typeof functions.diff>

export type DistributedParams = FunctionArguments<typeof functions.distributed>
export type DistributedReturn = FunctionReturn<typeof functions.distributed>

export type EpochNodeMaxProducedKnowledgeValueParams = FunctionArguments<typeof functions.epochNodeMaxProducedKnowledgeValue>
export type EpochNodeMaxProducedKnowledgeValueReturn = FunctionReturn<typeof functions.epochNodeMaxProducedKnowledgeValue>

export type EpochProducedKnowledgeValueParams = FunctionArguments<typeof functions.epochProducedKnowledgeValue>
export type EpochProducedKnowledgeValueReturn = FunctionReturn<typeof functions.epochProducedKnowledgeValue>

export type GetCurrentEpochNodeMaxProducedKnowledgeValueParams = FunctionArguments<typeof functions.getCurrentEpochNodeMaxProducedKnowledgeValue>
export type GetCurrentEpochNodeMaxProducedKnowledgeValueReturn = FunctionReturn<typeof functions.getCurrentEpochNodeMaxProducedKnowledgeValue>

export type GetCurrentEpochPoolParams = FunctionArguments<typeof functions.getCurrentEpochPool>
export type GetCurrentEpochPoolReturn = FunctionReturn<typeof functions.getCurrentEpochPool>

export type GetCurrentEpochProducedKnowledgeValueParams = FunctionArguments<typeof functions.getCurrentEpochProducedKnowledgeValue>
export type GetCurrentEpochProducedKnowledgeValueReturn = FunctionReturn<typeof functions.getCurrentEpochProducedKnowledgeValue>

export type GetCurrentEpochRemainingPoolParams = FunctionArguments<typeof functions.getCurrentEpochRemainingPool>
export type GetCurrentEpochRemainingPoolReturn = FunctionReturn<typeof functions.getCurrentEpochRemainingPool>

export type GetEpochDistributedPoolParams = FunctionArguments<typeof functions.getEpochDistributedPool>
export type GetEpochDistributedPoolReturn = FunctionReturn<typeof functions.getEpochDistributedPool>

export type GetEpochNodeMaxProducedKnowledgeValueParams = FunctionArguments<typeof functions.getEpochNodeMaxProducedKnowledgeValue>
export type GetEpochNodeMaxProducedKnowledgeValueReturn = FunctionReturn<typeof functions.getEpochNodeMaxProducedKnowledgeValue>

export type GetEpochPoolParams = FunctionArguments<typeof functions.getEpochPool>
export type GetEpochPoolReturn = FunctionReturn<typeof functions.getEpochPool>

export type GetEpochProducedKnowledgeValueParams = FunctionArguments<typeof functions.getEpochProducedKnowledgeValue>
export type GetEpochProducedKnowledgeValueReturn = FunctionReturn<typeof functions.getEpochProducedKnowledgeValue>

export type GetEpochRangePoolParams = FunctionArguments<typeof functions.getEpochRangePool>
export type GetEpochRangePoolReturn = FunctionReturn<typeof functions.getEpochRangePool>

export type GetEpochRemainingPoolParams = FunctionArguments<typeof functions.getEpochRemainingPool>
export type GetEpochRemainingPoolReturn = FunctionReturn<typeof functions.getEpochRemainingPool>

export type GetNodeCurrentEpochProducedKnowledgeValueParams = FunctionArguments<typeof functions.getNodeCurrentEpochProducedKnowledgeValue>
export type GetNodeCurrentEpochProducedKnowledgeValueReturn = FunctionReturn<typeof functions.getNodeCurrentEpochProducedKnowledgeValue>

export type GetNodeCurrentEpochProducedKnowledgeValuePercentageParams = FunctionArguments<typeof functions.getNodeCurrentEpochProducedKnowledgeValuePercentage>
export type GetNodeCurrentEpochProducedKnowledgeValuePercentageReturn = FunctionReturn<typeof functions.getNodeCurrentEpochProducedKnowledgeValuePercentage>

export type GetNodeEpochPaidOutParams = FunctionArguments<typeof functions.getNodeEpochPaidOut>
export type GetNodeEpochPaidOutReturn = FunctionReturn<typeof functions.getNodeEpochPaidOut>

export type GetNodeEpochProducedKnowledgeValueParams = FunctionArguments<typeof functions.getNodeEpochProducedKnowledgeValue>
export type GetNodeEpochProducedKnowledgeValueReturn = FunctionReturn<typeof functions.getNodeEpochProducedKnowledgeValue>

export type GetNodeEpochProducedKnowledgeValuePercentageParams = FunctionArguments<typeof functions.getNodeEpochProducedKnowledgeValuePercentage>
export type GetNodeEpochProducedKnowledgeValuePercentageReturn = FunctionReturn<typeof functions.getNodeEpochProducedKnowledgeValuePercentage>

export type GetNodePreviousEpochPaidOutParams = FunctionArguments<typeof functions.getNodePreviousEpochPaidOut>
export type GetNodePreviousEpochPaidOutReturn = FunctionReturn<typeof functions.getNodePreviousEpochPaidOut>

export type GetNodePreviousEpochProducedKnowledgeValueParams = FunctionArguments<typeof functions.getNodePreviousEpochProducedKnowledgeValue>
export type GetNodePreviousEpochProducedKnowledgeValueReturn = FunctionReturn<typeof functions.getNodePreviousEpochProducedKnowledgeValue>

export type GetNodePreviousEpochProducedKnowledgeValuePercentageParams = FunctionArguments<typeof functions.getNodePreviousEpochProducedKnowledgeValuePercentage>
export type GetNodePreviousEpochProducedKnowledgeValuePercentageReturn = FunctionReturn<typeof functions.getNodePreviousEpochProducedKnowledgeValuePercentage>

export type GetPreviousEpochDistributedPoolParams = FunctionArguments<typeof functions.getPreviousEpochDistributedPool>
export type GetPreviousEpochDistributedPoolReturn = FunctionReturn<typeof functions.getPreviousEpochDistributedPool>

export type GetPreviousEpochNodeMaxProducedKnowledgeValueParams = FunctionArguments<typeof functions.getPreviousEpochNodeMaxProducedKnowledgeValue>
export type GetPreviousEpochNodeMaxProducedKnowledgeValueReturn = FunctionReturn<typeof functions.getPreviousEpochNodeMaxProducedKnowledgeValue>

export type GetPreviousEpochPoolParams = FunctionArguments<typeof functions.getPreviousEpochPool>
export type GetPreviousEpochPoolReturn = FunctionReturn<typeof functions.getPreviousEpochPool>

export type GetPreviousEpochProducedKnowledgeValueParams = FunctionArguments<typeof functions.getPreviousEpochProducedKnowledgeValue>
export type GetPreviousEpochProducedKnowledgeValueReturn = FunctionReturn<typeof functions.getPreviousEpochProducedKnowledgeValue>

export type GetPreviousEpochRemainingPoolParams = FunctionArguments<typeof functions.getPreviousEpochRemainingPool>
export type GetPreviousEpochRemainingPoolReturn = FunctionReturn<typeof functions.getPreviousEpochRemainingPool>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type LastFinalizedEpochParams = FunctionArguments<typeof functions.lastFinalizedEpoch>
export type LastFinalizedEpochReturn = FunctionReturn<typeof functions.lastFinalizedEpoch>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NodesEpochProducedKnowledgeValueParams = FunctionArguments<typeof functions.nodesEpochProducedKnowledgeValue>
export type NodesEpochProducedKnowledgeValueReturn = FunctionReturn<typeof functions.nodesEpochProducedKnowledgeValue>

export type NodesPaidOutParams = FunctionArguments<typeof functions.nodesPaidOut>
export type NodesPaidOutReturn = FunctionReturn<typeof functions.nodesPaidOut>

export type PayOutEpochTokensParams = FunctionArguments<typeof functions.payOutEpochTokens>
export type PayOutEpochTokensReturn = FunctionReturn<typeof functions.payOutEpochTokens>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

