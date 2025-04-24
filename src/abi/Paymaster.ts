import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
}

export const functions = {
    addAllowedAddress: fun("0x81788e2b", "addAllowedAddress(address)", {"_address": p.address}, ),
    allowedAddresses: viewFun("0x4120657a", "allowedAddresses(address)", {"_0": p.address}, p.bool),
    coverCost: fun("0x40cd8229", "coverCost(uint256)", {"amount": p.uint256}, ),
    fundPaymaster: fun("0xbbee843c", "fundPaymaster(uint256)", {"amount": p.uint256}, ),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    removeAllowedAddress: fun("0x3c9d93b8", "removeAllowedAddress(address)", {"_address": p.address}, ),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    tokenContract: viewFun("0x55a373d6", "tokenContract()", {}, p.address),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    withdraw: fun("0xf3fef3a3", "withdraw(address,uint256)", {"recipient": p.address, "amount": p.uint256}, ),
}

export class Contract extends ContractBase {

    allowedAddresses(_0: AllowedAddressesParams["_0"]) {
        return this.eth_call(functions.allowedAddresses, {_0})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    tokenContract() {
        return this.eth_call(functions.tokenContract, {})
    }
}

/// Event types
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>

/// Function types
export type AddAllowedAddressParams = FunctionArguments<typeof functions.addAllowedAddress>
export type AddAllowedAddressReturn = FunctionReturn<typeof functions.addAllowedAddress>

export type AllowedAddressesParams = FunctionArguments<typeof functions.allowedAddresses>
export type AllowedAddressesReturn = FunctionReturn<typeof functions.allowedAddresses>

export type CoverCostParams = FunctionArguments<typeof functions.coverCost>
export type CoverCostReturn = FunctionReturn<typeof functions.coverCost>

export type FundPaymasterParams = FunctionArguments<typeof functions.fundPaymaster>
export type FundPaymasterReturn = FunctionReturn<typeof functions.fundPaymaster>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type RemoveAllowedAddressParams = FunctionArguments<typeof functions.removeAllowedAddress>
export type RemoveAllowedAddressReturn = FunctionReturn<typeof functions.removeAllowedAddress>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type TokenContractParams = FunctionArguments<typeof functions.tokenContract>
export type TokenContractReturn = FunctionReturn<typeof functions.tokenContract>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type WithdrawParams = FunctionArguments<typeof functions.withdraw>
export type WithdrawReturn = FunctionReturn<typeof functions.withdraw>

