import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    deployIncentivesPool: fun("0x69df55ac", "deployIncentivesPool(address,uint256,address)", {"storageAddress": p.address, "tracToTokenEmissionMultiplier": p.uint256, "poolStorageAddress": p.address}, p.address),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    hub() {
        return this.eth_call(functions.hub, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Function types
export type DeployIncentivesPoolParams = FunctionArguments<typeof functions.deployIncentivesPool>
export type DeployIncentivesPoolReturn = FunctionReturn<typeof functions.deployIncentivesPool>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

