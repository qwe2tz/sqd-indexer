import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    askContract: viewFun("0xc86da6f8", "askContract()", {}, p.address),
    createProfile: fun("0xf0f9f5dd", "createProfile(address,address[],string,bytes,uint16)", {"adminWallet": p.address, "operationalWallets": p.array(p.address), "nodeName": p.string, "nodeId": p.bytes, "initialOperatorFee": p.uint16}, ),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    identityContract: viewFun("0x67031bae", "identityContract()", {}, p.address),
    identityStorage: viewFun("0xf11abfd8", "identityStorage()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    parametersStorage: viewFun("0x639a86a3", "parametersStorage()", {}, p.address),
    profileStorage: viewFun("0xf42cb038", "profileStorage()", {}, p.address),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    updateAsk: fun("0xc740e04c", "updateAsk(uint72,uint96)", {"identityId": p.uint72, "ask": p.uint96}, ),
    updateOperatorFee: fun("0xc9d3d594", "updateOperatorFee(uint72,uint16)", {"identityId": p.uint72, "newOperatorFee": p.uint16}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    whitelistStorage: viewFun("0x9e2469ec", "whitelistStorage()", {}, p.address),
}

export class Contract extends ContractBase {

    askContract() {
        return this.eth_call(functions.askContract, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    identityContract() {
        return this.eth_call(functions.identityContract, {})
    }

    identityStorage() {
        return this.eth_call(functions.identityStorage, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    parametersStorage() {
        return this.eth_call(functions.parametersStorage, {})
    }

    profileStorage() {
        return this.eth_call(functions.profileStorage, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    whitelistStorage() {
        return this.eth_call(functions.whitelistStorage, {})
    }
}

/// Function types
export type AskContractParams = FunctionArguments<typeof functions.askContract>
export type AskContractReturn = FunctionReturn<typeof functions.askContract>

export type CreateProfileParams = FunctionArguments<typeof functions.createProfile>
export type CreateProfileReturn = FunctionReturn<typeof functions.createProfile>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IdentityContractParams = FunctionArguments<typeof functions.identityContract>
export type IdentityContractReturn = FunctionReturn<typeof functions.identityContract>

export type IdentityStorageParams = FunctionArguments<typeof functions.identityStorage>
export type IdentityStorageReturn = FunctionReturn<typeof functions.identityStorage>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParametersStorageParams = FunctionArguments<typeof functions.parametersStorage>
export type ParametersStorageReturn = FunctionReturn<typeof functions.parametersStorage>

export type ProfileStorageParams = FunctionArguments<typeof functions.profileStorage>
export type ProfileStorageReturn = FunctionReturn<typeof functions.profileStorage>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type UpdateAskParams = FunctionArguments<typeof functions.updateAsk>
export type UpdateAskReturn = FunctionReturn<typeof functions.updateAsk>

export type UpdateOperatorFeeParams = FunctionArguments<typeof functions.updateOperatorFee>
export type UpdateOperatorFeeReturn = FunctionReturn<typeof functions.updateOperatorFee>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type WhitelistStorageParams = FunctionArguments<typeof functions.whitelistStorage>
export type WhitelistStorageReturn = FunctionReturn<typeof functions.whitelistStorage>

