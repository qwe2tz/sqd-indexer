import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    askStorage: viewFun("0xfc41116e", "askStorage()", {}, p.address),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    parametersStorage: viewFun("0x639a86a3", "parametersStorage()", {}, p.address),
    profileStorage: viewFun("0xf42cb038", "profileStorage()", {}, p.address),
    recalculateActiveSet: fun("0x01fb94c0", "recalculateActiveSet()", {}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    shardingTableStorage: viewFun("0x823e2bc7", "shardingTableStorage()", {}, p.address),
    stakingStorage: viewFun("0xb518a00e", "stakingStorage()", {}, p.address),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    askStorage() {
        return this.eth_call(functions.askStorage, {})
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

    profileStorage() {
        return this.eth_call(functions.profileStorage, {})
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
}

/// Function types
export type AskStorageParams = FunctionArguments<typeof functions.askStorage>
export type AskStorageReturn = FunctionReturn<typeof functions.askStorage>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParametersStorageParams = FunctionArguments<typeof functions.parametersStorage>
export type ParametersStorageReturn = FunctionReturn<typeof functions.parametersStorage>

export type ProfileStorageParams = FunctionArguments<typeof functions.profileStorage>
export type ProfileStorageReturn = FunctionReturn<typeof functions.profileStorage>

export type RecalculateActiveSetParams = FunctionArguments<typeof functions.recalculateActiveSet>
export type RecalculateActiveSetReturn = FunctionReturn<typeof functions.recalculateActiveSet>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type ShardingTableStorageParams = FunctionArguments<typeof functions.shardingTableStorage>
export type ShardingTableStorageReturn = FunctionReturn<typeof functions.shardingTableStorage>

export type StakingStorageParams = FunctionArguments<typeof functions.stakingStorage>
export type StakingStorageReturn = FunctionReturn<typeof functions.stakingStorage>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

