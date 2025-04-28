import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    MisplacedERC20Withdrawn: event("0x22d23a6f2e04fcc6f26fd8541f87bdc28e2db7bc94ccacc4b08e71830097174d", "MisplacedERC20Withdrawn(address,address,uint256)", {"custodian": indexed(p.address), "tokenContract": p.address, "amount": p.uint256}),
    MisplacedEtherWithdrawn: event("0xa8137f25699fd32e117da110ee3f11175d638136bda01b31ec3e63023ac969ba", "MisplacedEtherWithdrawn(address,uint256)", {"custodian": indexed(p.address), "amount": p.uint256}),
    TokenTransferred: event("0xefed6b8d78a916dbd402a323824ae4454c9214b8f3d05fa85b3bb7f30dc25c06", "TokenTransferred(address,uint256)", {"custodian": indexed(p.address), "amount": p.uint256}),
}

export const functions = {
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    tokenContract: viewFun("0x55a373d6", "tokenContract()", {}, p.address),
    transferTokens: fun("0x0c89a0df", "transferTokens(address)", {"custodian": p.address}, ),
    withdrawMisplacedEther: fun("0x254cc46c", "withdrawMisplacedEther()", {}, ),
    withdrawMisplacedTokens: fun("0x9d7937b2", "withdrawMisplacedTokens(address)", {"tokenContractAddress": p.address}, ),
}

export class Contract extends ContractBase {

    hub() {
        return this.eth_call(functions.hub, {})
    }

    tokenContract() {
        return this.eth_call(functions.tokenContract, {})
    }
}

/// Event types
export type MisplacedERC20WithdrawnEventArgs = EParams<typeof events.MisplacedERC20Withdrawn>
export type MisplacedEtherWithdrawnEventArgs = EParams<typeof events.MisplacedEtherWithdrawn>
export type TokenTransferredEventArgs = EParams<typeof events.TokenTransferred>

/// Function types
export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type TokenContractParams = FunctionArguments<typeof functions.tokenContract>
export type TokenContractReturn = FunctionReturn<typeof functions.tokenContract>

export type TransferTokensParams = FunctionArguments<typeof functions.transferTokens>
export type TransferTokensReturn = FunctionReturn<typeof functions.transferTokens>

export type WithdrawMisplacedEtherParams = FunctionArguments<typeof functions.withdrawMisplacedEther>
export type WithdrawMisplacedEtherReturn = FunctionReturn<typeof functions.withdrawMisplacedEther>

export type WithdrawMisplacedTokensParams = FunctionArguments<typeof functions.withdrawMisplacedTokens>
export type WithdrawMisplacedTokensReturn = FunctionReturn<typeof functions.withdrawMisplacedTokens>

