import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    IdentityCreated: event("0x075aca39edba283f02f8c21a516c19dd1208d3b3d647f7012be49fe0e8dc2fd7", "IdentityCreated(uint72,bytes32,bytes32)", {"identityId": indexed(p.uint72), "operationalKey": indexed(p.bytes32), "adminKey": indexed(p.bytes32)}),
    IdentityDeleted: event("0x8eb76f325ff8b1aeeacdc5189acc141ef54246ceae65dc6d5458e385388472a8", "IdentityDeleted(uint72)", {"identityId": indexed(p.uint72)}),
}

export const functions = {
    addKey: fun("0xbee3b94e", "addKey(uint72,bytes32,uint256,uint256)", {"identityId": p.uint72, "key": p.bytes32, "keyPurpose": p.uint256, "keyType": p.uint256}, ),
    addOperationalWallets: fun("0x002236a2", "addOperationalWallets(uint72,address[])", {"identityId": p.uint72, "operationalWallets": p.array(p.address)}, ),
    createIdentity: fun("0xd10e73ab", "createIdentity(address,address)", {"operational": p.address, "admin": p.address}, p.uint72),
    deleteIdentity: fun("0xdc06a39d", "deleteIdentity(uint72)", {"identityId": p.uint72}, ),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    identityStorage: viewFun("0xf11abfd8", "identityStorage()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    removeKey: fun("0x67ac664f", "removeKey(uint72,bytes32)", {"identityId": p.uint72, "key": p.bytes32}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    hub() {
        return this.eth_call(functions.hub, {})
    }

    identityStorage() {
        return this.eth_call(functions.identityStorage, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type IdentityCreatedEventArgs = EParams<typeof events.IdentityCreated>
export type IdentityDeletedEventArgs = EParams<typeof events.IdentityDeleted>

/// Function types
export type AddKeyParams = FunctionArguments<typeof functions.addKey>
export type AddKeyReturn = FunctionReturn<typeof functions.addKey>

export type AddOperationalWalletsParams = FunctionArguments<typeof functions.addOperationalWallets>
export type AddOperationalWalletsReturn = FunctionReturn<typeof functions.addOperationalWallets>

export type CreateIdentityParams = FunctionArguments<typeof functions.createIdentity>
export type CreateIdentityReturn = FunctionReturn<typeof functions.createIdentity>

export type DeleteIdentityParams = FunctionArguments<typeof functions.deleteIdentity>
export type DeleteIdentityReturn = FunctionReturn<typeof functions.deleteIdentity>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IdentityStorageParams = FunctionArguments<typeof functions.identityStorage>
export type IdentityStorageReturn = FunctionReturn<typeof functions.identityStorage>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type RemoveKeyParams = FunctionArguments<typeof functions.removeKey>
export type RemoveKeyReturn = FunctionReturn<typeof functions.removeKey>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

