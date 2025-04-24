import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    addAllowedAddress: fun("0x81788e2b", "addAllowedAddress(address)", {"_address": p.address}, ),
    coverCost: fun("0x40cd8229", "coverCost(uint256)", {"amount": p.uint256}, ),
    fundPaymaster: fun("0xbbee843c", "fundPaymaster(uint256)", {"amount": p.uint256}, ),
    removeAllowedAddress: fun("0x3c9d93b8", "removeAllowedAddress(address)", {"_address": p.address}, ),
}

export class Contract extends ContractBase {
}

/// Function types
export type AddAllowedAddressParams = FunctionArguments<typeof functions.addAllowedAddress>
export type AddAllowedAddressReturn = FunctionReturn<typeof functions.addAllowedAddress>

export type CoverCostParams = FunctionArguments<typeof functions.coverCost>
export type CoverCostReturn = FunctionReturn<typeof functions.coverCost>

export type FundPaymasterParams = FunctionArguments<typeof functions.fundPaymaster>
export type FundPaymasterReturn = FunctionReturn<typeof functions.fundPaymaster>

export type RemoveAllowedAddressParams = FunctionArguments<typeof functions.removeAllowedAddress>
export type RemoveAllowedAddressReturn = FunctionReturn<typeof functions.removeAllowedAddress>

