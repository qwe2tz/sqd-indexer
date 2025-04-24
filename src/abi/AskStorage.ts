import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    decreaseTotalActiveStake: fun("0x07919018", "decreaseTotalActiveStake(uint96)", {"amount": p.uint96}, ),
    decreaseWeightedActiveAskSum: fun("0x454c0a2c", "decreaseWeightedActiveAskSum(uint256)", {"amount": p.uint256}, ),
    getAskBounds: viewFun("0xa3c8492d", "getAskBounds()", {}, {"_0": p.uint256, "_1": p.uint256}),
    getAskLowerBound: viewFun("0x3fcc9121", "getAskLowerBound()", {}, p.uint256),
    getAskUpperBound: viewFun("0x71db96cf", "getAskUpperBound()", {}, p.uint256),
    getPrevPricePerKbEpoch: viewFun("0x9071baf0", "getPrevPricePerKbEpoch()", {}, p.uint256),
    getPrevStakeWeightedAverageAsk: viewFun("0x4462526f", "getPrevStakeWeightedAverageAsk()", {}, p.uint256),
    getPricePerKbEpoch: viewFun("0x7f50f5b8", "getPricePerKbEpoch()", {}, p.uint256),
    getStakeWeightedAverageAsk: viewFun("0x99099b3f", "getStakeWeightedAverageAsk()", {}, p.uint256),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    increaseTotalActiveStake: fun("0x84a93910", "increaseTotalActiveStake(uint96)", {"amount": p.uint96}, ),
    increaseWeightedActiveAskSum: fun("0x95ff0d33", "increaseWeightedActiveAskSum(uint256)", {"amount": p.uint256}, ),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    parametersStorage: viewFun("0x639a86a3", "parametersStorage()", {}, p.address),
    prevTotalActiveStake: viewFun("0x9920fd49", "prevTotalActiveStake()", {}, p.uint96),
    prevWeightedActiveAskSum: viewFun("0x301f07b0", "prevWeightedActiveAskSum()", {}, p.uint256),
    setPrevTotalActiveStake: fun("0x9f058c7f", "setPrevTotalActiveStake(uint96)", {"_prevTotalActiveStake": p.uint96}, ),
    setPrevWeightedActiveAskSum: fun("0x32c3422d", "setPrevWeightedActiveAskSum(uint256)", {"_prevWeightedActiveAskSum": p.uint256}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    setTotalActiveStake: fun("0xc4cfa9bf", "setTotalActiveStake(uint96)", {"_totalActiveStake": p.uint96}, ),
    setWeightedActiveAskSum: fun("0x9390c373", "setWeightedActiveAskSum(uint256)", {"_weightedActiveAskSum": p.uint256}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    totalActiveStake: viewFun("0x28f73148", "totalActiveStake()", {}, p.uint96),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    weightedActiveAskSum: viewFun("0xbc0a4e38", "weightedActiveAskSum()", {}, p.uint256),
}

export class Contract extends ContractBase {

    getAskBounds() {
        return this.eth_call(functions.getAskBounds, {})
    }

    getAskLowerBound() {
        return this.eth_call(functions.getAskLowerBound, {})
    }

    getAskUpperBound() {
        return this.eth_call(functions.getAskUpperBound, {})
    }

    getPrevPricePerKbEpoch() {
        return this.eth_call(functions.getPrevPricePerKbEpoch, {})
    }

    getPrevStakeWeightedAverageAsk() {
        return this.eth_call(functions.getPrevStakeWeightedAverageAsk, {})
    }

    getPricePerKbEpoch() {
        return this.eth_call(functions.getPricePerKbEpoch, {})
    }

    getStakeWeightedAverageAsk() {
        return this.eth_call(functions.getStakeWeightedAverageAsk, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    parametersStorage() {
        return this.eth_call(functions.parametersStorage, {})
    }

    prevTotalActiveStake() {
        return this.eth_call(functions.prevTotalActiveStake, {})
    }

    prevWeightedActiveAskSum() {
        return this.eth_call(functions.prevWeightedActiveAskSum, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    totalActiveStake() {
        return this.eth_call(functions.totalActiveStake, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    weightedActiveAskSum() {
        return this.eth_call(functions.weightedActiveAskSum, {})
    }
}

/// Function types
export type DecreaseTotalActiveStakeParams = FunctionArguments<typeof functions.decreaseTotalActiveStake>
export type DecreaseTotalActiveStakeReturn = FunctionReturn<typeof functions.decreaseTotalActiveStake>

export type DecreaseWeightedActiveAskSumParams = FunctionArguments<typeof functions.decreaseWeightedActiveAskSum>
export type DecreaseWeightedActiveAskSumReturn = FunctionReturn<typeof functions.decreaseWeightedActiveAskSum>

export type GetAskBoundsParams = FunctionArguments<typeof functions.getAskBounds>
export type GetAskBoundsReturn = FunctionReturn<typeof functions.getAskBounds>

export type GetAskLowerBoundParams = FunctionArguments<typeof functions.getAskLowerBound>
export type GetAskLowerBoundReturn = FunctionReturn<typeof functions.getAskLowerBound>

export type GetAskUpperBoundParams = FunctionArguments<typeof functions.getAskUpperBound>
export type GetAskUpperBoundReturn = FunctionReturn<typeof functions.getAskUpperBound>

export type GetPrevPricePerKbEpochParams = FunctionArguments<typeof functions.getPrevPricePerKbEpoch>
export type GetPrevPricePerKbEpochReturn = FunctionReturn<typeof functions.getPrevPricePerKbEpoch>

export type GetPrevStakeWeightedAverageAskParams = FunctionArguments<typeof functions.getPrevStakeWeightedAverageAsk>
export type GetPrevStakeWeightedAverageAskReturn = FunctionReturn<typeof functions.getPrevStakeWeightedAverageAsk>

export type GetPricePerKbEpochParams = FunctionArguments<typeof functions.getPricePerKbEpoch>
export type GetPricePerKbEpochReturn = FunctionReturn<typeof functions.getPricePerKbEpoch>

export type GetStakeWeightedAverageAskParams = FunctionArguments<typeof functions.getStakeWeightedAverageAsk>
export type GetStakeWeightedAverageAskReturn = FunctionReturn<typeof functions.getStakeWeightedAverageAsk>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IncreaseTotalActiveStakeParams = FunctionArguments<typeof functions.increaseTotalActiveStake>
export type IncreaseTotalActiveStakeReturn = FunctionReturn<typeof functions.increaseTotalActiveStake>

export type IncreaseWeightedActiveAskSumParams = FunctionArguments<typeof functions.increaseWeightedActiveAskSum>
export type IncreaseWeightedActiveAskSumReturn = FunctionReturn<typeof functions.increaseWeightedActiveAskSum>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParametersStorageParams = FunctionArguments<typeof functions.parametersStorage>
export type ParametersStorageReturn = FunctionReturn<typeof functions.parametersStorage>

export type PrevTotalActiveStakeParams = FunctionArguments<typeof functions.prevTotalActiveStake>
export type PrevTotalActiveStakeReturn = FunctionReturn<typeof functions.prevTotalActiveStake>

export type PrevWeightedActiveAskSumParams = FunctionArguments<typeof functions.prevWeightedActiveAskSum>
export type PrevWeightedActiveAskSumReturn = FunctionReturn<typeof functions.prevWeightedActiveAskSum>

export type SetPrevTotalActiveStakeParams = FunctionArguments<typeof functions.setPrevTotalActiveStake>
export type SetPrevTotalActiveStakeReturn = FunctionReturn<typeof functions.setPrevTotalActiveStake>

export type SetPrevWeightedActiveAskSumParams = FunctionArguments<typeof functions.setPrevWeightedActiveAskSum>
export type SetPrevWeightedActiveAskSumReturn = FunctionReturn<typeof functions.setPrevWeightedActiveAskSum>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type SetTotalActiveStakeParams = FunctionArguments<typeof functions.setTotalActiveStake>
export type SetTotalActiveStakeReturn = FunctionReturn<typeof functions.setTotalActiveStake>

export type SetWeightedActiveAskSumParams = FunctionArguments<typeof functions.setWeightedActiveAskSum>
export type SetWeightedActiveAskSumReturn = FunctionReturn<typeof functions.setWeightedActiveAskSum>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type TotalActiveStakeParams = FunctionArguments<typeof functions.totalActiveStake>
export type TotalActiveStakeReturn = FunctionReturn<typeof functions.totalActiveStake>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type WeightedActiveAskSumParams = FunctionArguments<typeof functions.weightedActiveAskSum>
export type WeightedActiveAskSumReturn = FunctionReturn<typeof functions.weightedActiveAskSum>

