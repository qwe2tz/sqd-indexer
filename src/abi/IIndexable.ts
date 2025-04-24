import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    id: viewFun("0xaf640d0f", "id()", {}, p.uint8),
}

export class Contract extends ContractBase {

    id() {
        return this.eth_call(functions.id, {})
    }
}

/// Function types
export type IdParams = FunctionArguments<typeof functions.id>
export type IdReturn = FunctionReturn<typeof functions.id>

