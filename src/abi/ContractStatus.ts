import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
}

export class Contract extends ContractBase {

    hub() {
        return this.eth_call(functions.hub, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }
}

/// Function types
export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

