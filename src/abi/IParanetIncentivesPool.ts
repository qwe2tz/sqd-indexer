import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    getParanetIncentivesPoolStorage: viewFun("0x5513cee3", "getParanetIncentivesPoolStorage()", {}, p.address),
}

export class Contract extends ContractBase {

    getParanetIncentivesPoolStorage() {
        return this.eth_call(functions.getParanetIncentivesPoolStorage, {})
    }
}

/// Function types
export type GetParanetIncentivesPoolStorageParams = FunctionArguments<typeof functions.getParanetIncentivesPoolStorage>
export type GetParanetIncentivesPoolStorageReturn = FunctionReturn<typeof functions.getParanetIncentivesPoolStorage>

