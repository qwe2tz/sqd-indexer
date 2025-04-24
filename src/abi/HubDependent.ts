import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
}

export class Contract extends ContractBase {

    hub() {
        return this.eth_call(functions.hub, {})
    }
}

/// Function types
export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

