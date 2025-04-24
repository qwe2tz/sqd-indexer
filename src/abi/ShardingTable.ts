import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    'getShardingTable()': viewFun("0x289220c6", "getShardingTable()", {}, p.array(p.struct({"nodeId": p.bytes, "identityId": p.uint72, "ask": p.uint96, "stake": p.uint96}))),
    'getShardingTable(uint72,uint72)': viewFun("0xe5de01f1", "getShardingTable(uint72,uint72)", {"startingIdentityId": p.uint72, "nodesNumber": p.uint72}, p.array(p.struct({"nodeId": p.bytes, "identityId": p.uint72, "ask": p.uint96, "stake": p.uint96}))),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    'insertNode(uint72,uint72)': fun("0x6bf03848", "insertNode(uint72,uint72)", {"index": p.uint72, "identityId": p.uint72}, ),
    'insertNode(uint72)': fun("0x90444a10", "insertNode(uint72)", {"identityId": p.uint72}, ),
    migrationPeriodEnd: viewFun("0x461dd50f", "migrationPeriodEnd()", {}, p.uint256),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    profileStorage: viewFun("0xf42cb038", "profileStorage()", {}, p.address),
    removeNode: fun("0xaf9c1ec6", "removeNode(uint72)", {"identityId": p.uint72}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    shardingTableStorage: viewFun("0x823e2bc7", "shardingTableStorage()", {}, p.address),
    stakingStorage: viewFun("0xb518a00e", "stakingStorage()", {}, p.address),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    'getShardingTable()'() {
        return this.eth_call(functions['getShardingTable()'], {})
    }

    'getShardingTable(uint72,uint72)'(startingIdentityId: GetShardingTableParams_1["startingIdentityId"], nodesNumber: GetShardingTableParams_1["nodesNumber"]) {
        return this.eth_call(functions['getShardingTable(uint72,uint72)'], {startingIdentityId, nodesNumber})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    migrationPeriodEnd() {
        return this.eth_call(functions.migrationPeriodEnd, {})
    }

    name() {
        return this.eth_call(functions.name, {})
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
export type GetShardingTableParams_0 = FunctionArguments<typeof functions['getShardingTable()']>
export type GetShardingTableReturn_0 = FunctionReturn<typeof functions['getShardingTable()']>

export type GetShardingTableParams_1 = FunctionArguments<typeof functions['getShardingTable(uint72,uint72)']>
export type GetShardingTableReturn_1 = FunctionReturn<typeof functions['getShardingTable(uint72,uint72)']>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type InsertNodeParams_0 = FunctionArguments<typeof functions['insertNode(uint72,uint72)']>
export type InsertNodeReturn_0 = FunctionReturn<typeof functions['insertNode(uint72,uint72)']>

export type InsertNodeParams_1 = FunctionArguments<typeof functions['insertNode(uint72)']>
export type InsertNodeReturn_1 = FunctionReturn<typeof functions['insertNode(uint72)']>

export type MigrationPeriodEndParams = FunctionArguments<typeof functions.migrationPeriodEnd>
export type MigrationPeriodEndReturn = FunctionReturn<typeof functions.migrationPeriodEnd>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ProfileStorageParams = FunctionArguments<typeof functions.profileStorage>
export type ProfileStorageReturn = FunctionReturn<typeof functions.profileStorage>

export type RemoveNodeParams = FunctionArguments<typeof functions.removeNode>
export type RemoveNodeReturn = FunctionReturn<typeof functions.removeNode>

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

