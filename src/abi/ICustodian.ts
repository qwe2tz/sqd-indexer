import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    getOwners: viewFun("0xa0e67e2b", "getOwners()", {}, p.array(p.address)),
}

export class Contract extends ContractBase {

    getOwners() {
        return this.eth_call(functions.getOwners, {})
    }
}

/// Function types
export type GetOwnersParams = FunctionArguments<typeof functions.getOwners>
export type GetOwnersReturn = FunctionReturn<typeof functions.getOwners>

