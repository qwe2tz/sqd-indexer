import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    EPOCH_LENGTH: viewFun("0xac4746ab", "EPOCH_LENGTH()", {}, p.uint256),
    START_TIME: viewFun("0xddaa26ad", "START_TIME()", {}, p.uint256),
    elapsedTimeInCurrentEpoch: viewFun("0xe26ec56a", "elapsedTimeInCurrentEpoch()", {}, p.uint256),
    epochAtTimestamp: viewFun("0x8b51bfc6", "epochAtTimestamp(uint256)", {"timestamp": p.uint256}, p.uint256),
    epochLength: viewFun("0x57d775f8", "epochLength()", {}, p.uint256),
    getCurrentEpoch: viewFun("0xb97dd9e2", "getCurrentEpoch()", {}, p.uint256),
    hasEpochElapsed: viewFun("0x97c4ad54", "hasEpochElapsed(uint256)", {"epochNumber": p.uint256}, p.bool),
    isChronosActive: viewFun("0x0745bad1", "isChronosActive()", {}, p.bool),
    startTime: viewFun("0x78e97925", "startTime()", {}, p.uint256),
    timeUntilNextEpoch: viewFun("0x5a5da627", "timeUntilNextEpoch()", {}, p.uint256),
    timestampForEpoch: viewFun("0x9e3d52f9", "timestampForEpoch(uint256)", {"epochNumber": p.uint256}, p.uint256),
    totalElapsedTime: viewFun("0xcac44cda", "totalElapsedTime()", {}, p.uint256),
}

export class Contract extends ContractBase {

    EPOCH_LENGTH() {
        return this.eth_call(functions.EPOCH_LENGTH, {})
    }

    START_TIME() {
        return this.eth_call(functions.START_TIME, {})
    }

    elapsedTimeInCurrentEpoch() {
        return this.eth_call(functions.elapsedTimeInCurrentEpoch, {})
    }

    epochAtTimestamp(timestamp: EpochAtTimestampParams["timestamp"]) {
        return this.eth_call(functions.epochAtTimestamp, {timestamp})
    }

    epochLength() {
        return this.eth_call(functions.epochLength, {})
    }

    getCurrentEpoch() {
        return this.eth_call(functions.getCurrentEpoch, {})
    }

    hasEpochElapsed(epochNumber: HasEpochElapsedParams["epochNumber"]) {
        return this.eth_call(functions.hasEpochElapsed, {epochNumber})
    }

    isChronosActive() {
        return this.eth_call(functions.isChronosActive, {})
    }

    startTime() {
        return this.eth_call(functions.startTime, {})
    }

    timeUntilNextEpoch() {
        return this.eth_call(functions.timeUntilNextEpoch, {})
    }

    timestampForEpoch(epochNumber: TimestampForEpochParams["epochNumber"]) {
        return this.eth_call(functions.timestampForEpoch, {epochNumber})
    }

    totalElapsedTime() {
        return this.eth_call(functions.totalElapsedTime, {})
    }
}

/// Function types
export type EPOCH_LENGTHParams = FunctionArguments<typeof functions.EPOCH_LENGTH>
export type EPOCH_LENGTHReturn = FunctionReturn<typeof functions.EPOCH_LENGTH>

export type START_TIMEParams = FunctionArguments<typeof functions.START_TIME>
export type START_TIMEReturn = FunctionReturn<typeof functions.START_TIME>

export type ElapsedTimeInCurrentEpochParams = FunctionArguments<typeof functions.elapsedTimeInCurrentEpoch>
export type ElapsedTimeInCurrentEpochReturn = FunctionReturn<typeof functions.elapsedTimeInCurrentEpoch>

export type EpochAtTimestampParams = FunctionArguments<typeof functions.epochAtTimestamp>
export type EpochAtTimestampReturn = FunctionReturn<typeof functions.epochAtTimestamp>

export type EpochLengthParams = FunctionArguments<typeof functions.epochLength>
export type EpochLengthReturn = FunctionReturn<typeof functions.epochLength>

export type GetCurrentEpochParams = FunctionArguments<typeof functions.getCurrentEpoch>
export type GetCurrentEpochReturn = FunctionReturn<typeof functions.getCurrentEpoch>

export type HasEpochElapsedParams = FunctionArguments<typeof functions.hasEpochElapsed>
export type HasEpochElapsedReturn = FunctionReturn<typeof functions.hasEpochElapsed>

export type IsChronosActiveParams = FunctionArguments<typeof functions.isChronosActive>
export type IsChronosActiveReturn = FunctionReturn<typeof functions.isChronosActive>

export type StartTimeParams = FunctionArguments<typeof functions.startTime>
export type StartTimeReturn = FunctionReturn<typeof functions.startTime>

export type TimeUntilNextEpochParams = FunctionArguments<typeof functions.timeUntilNextEpoch>
export type TimeUntilNextEpochReturn = FunctionReturn<typeof functions.timeUntilNextEpoch>

export type TimestampForEpochParams = FunctionArguments<typeof functions.timestampForEpoch>
export type TimestampForEpochReturn = FunctionReturn<typeof functions.timestampForEpoch>

export type TotalElapsedTimeParams = FunctionArguments<typeof functions.totalElapsedTime>
export type TotalElapsedTimeReturn = FunctionReturn<typeof functions.totalElapsedTime>

