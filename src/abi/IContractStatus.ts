import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
}

export class Contract extends ContractBase {
}

/// Function types
export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

