import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    KeyAdded: event("0x29ba4d095336046dcffc9e75d3d46d22e7b304e050464d5a198f183f9c4b21d8", "KeyAdded(uint72,bytes32,uint256,uint256)", {"identityId": indexed(p.uint72), "key": indexed(p.bytes32), "purpose": p.uint256, "keyType": p.uint256}),
    KeyRemoved: event("0xdd68ded2d8d9c661206e0e22f9d41397a921724bfc768864e3d32b21a9557ba9", "KeyRemoved(uint72,bytes32,uint256,uint256)", {"identityId": indexed(p.uint72), "key": indexed(p.bytes32), "purpose": p.uint256, "keyType": p.uint256}),
}

export const functions = {
    addKey: fun("0xbee3b94e", "addKey(uint72,bytes32,uint256,uint256)", {"identityId": p.uint72, "_key": p.bytes32, "_purpose": p.uint256, "_type": p.uint256}, ),
    deleteIdentity: fun("0xdc06a39d", "deleteIdentity(uint72)", {"identityId": p.uint72}, ),
    generateIdentityId: fun("0xfcbe6b14", "generateIdentityId()", {}, p.uint72),
    getIdentityId: viewFun("0x867a4680", "getIdentityId(address)", {"operational": p.address}, p.uint72),
    getKey: viewFun("0x68b229fa", "getKey(uint72,bytes32)", {"identityId": p.uint72, "_key": p.bytes32}, {"_0": p.uint256, "_1": p.uint256, "_2": p.bytes32}),
    getKeysByPurpose: viewFun("0x4719c3de", "getKeysByPurpose(uint72,uint256)", {"identityId": p.uint72, "_purpose": p.uint256}, p.array(p.bytes32)),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    identityIds: viewFun("0x1fc2b3ab", "identityIds(bytes32)", {"_0": p.bytes32}, p.uint72),
    keyHasPurpose: viewFun("0x35e4fb7a", "keyHasPurpose(uint72,bytes32,uint256)", {"identityId": p.uint72, "_key": p.bytes32, "_purpose": p.uint256}, p.bool),
    lastIdentityId: viewFun("0x202c3ce9", "lastIdentityId()", {}, p.uint72),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    removeKey: fun("0x67ac664f", "removeKey(uint72,bytes32)", {"identityId": p.uint72, "_key": p.bytes32}, ),
    removeOperationalKeyIdentityId: fun("0x3be15400", "removeOperationalKeyIdentityId(bytes32)", {"operationalKey": p.bytes32}, ),
    setLastIdentityId: fun("0x17fdf386", "setLastIdentityId(uint72)", {"identityId": p.uint72}, ),
    setOperationalKeyIdentityId: fun("0x707498ca", "setOperationalKeyIdentityId(bytes32,uint72)", {"operationalKey": p.bytes32, "identityId": p.uint72}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    getIdentityId(operational: GetIdentityIdParams["operational"]) {
        return this.eth_call(functions.getIdentityId, {operational})
    }

    getKey(identityId: GetKeyParams["identityId"], _key: GetKeyParams["_key"]) {
        return this.eth_call(functions.getKey, {identityId, _key})
    }

    getKeysByPurpose(identityId: GetKeysByPurposeParams["identityId"], _purpose: GetKeysByPurposeParams["_purpose"]) {
        return this.eth_call(functions.getKeysByPurpose, {identityId, _purpose})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    identityIds(_0: IdentityIdsParams["_0"]) {
        return this.eth_call(functions.identityIds, {_0})
    }

    keyHasPurpose(identityId: KeyHasPurposeParams["identityId"], _key: KeyHasPurposeParams["_key"], _purpose: KeyHasPurposeParams["_purpose"]) {
        return this.eth_call(functions.keyHasPurpose, {identityId, _key, _purpose})
    }

    lastIdentityId() {
        return this.eth_call(functions.lastIdentityId, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type KeyAddedEventArgs = EParams<typeof events.KeyAdded>
export type KeyRemovedEventArgs = EParams<typeof events.KeyRemoved>

/// Function types
export type AddKeyParams = FunctionArguments<typeof functions.addKey>
export type AddKeyReturn = FunctionReturn<typeof functions.addKey>

export type DeleteIdentityParams = FunctionArguments<typeof functions.deleteIdentity>
export type DeleteIdentityReturn = FunctionReturn<typeof functions.deleteIdentity>

export type GenerateIdentityIdParams = FunctionArguments<typeof functions.generateIdentityId>
export type GenerateIdentityIdReturn = FunctionReturn<typeof functions.generateIdentityId>

export type GetIdentityIdParams = FunctionArguments<typeof functions.getIdentityId>
export type GetIdentityIdReturn = FunctionReturn<typeof functions.getIdentityId>

export type GetKeyParams = FunctionArguments<typeof functions.getKey>
export type GetKeyReturn = FunctionReturn<typeof functions.getKey>

export type GetKeysByPurposeParams = FunctionArguments<typeof functions.getKeysByPurpose>
export type GetKeysByPurposeReturn = FunctionReturn<typeof functions.getKeysByPurpose>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IdentityIdsParams = FunctionArguments<typeof functions.identityIds>
export type IdentityIdsReturn = FunctionReturn<typeof functions.identityIds>

export type KeyHasPurposeParams = FunctionArguments<typeof functions.keyHasPurpose>
export type KeyHasPurposeReturn = FunctionReturn<typeof functions.keyHasPurpose>

export type LastIdentityIdParams = FunctionArguments<typeof functions.lastIdentityId>
export type LastIdentityIdReturn = FunctionReturn<typeof functions.lastIdentityId>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type RemoveKeyParams = FunctionArguments<typeof functions.removeKey>
export type RemoveKeyReturn = FunctionReturn<typeof functions.removeKey>

export type RemoveOperationalKeyIdentityIdParams = FunctionArguments<typeof functions.removeOperationalKeyIdentityId>
export type RemoveOperationalKeyIdentityIdReturn = FunctionReturn<typeof functions.removeOperationalKeyIdentityId>

export type SetLastIdentityIdParams = FunctionArguments<typeof functions.setLastIdentityId>
export type SetLastIdentityIdReturn = FunctionReturn<typeof functions.setLastIdentityId>

export type SetOperationalKeyIdentityIdParams = FunctionArguments<typeof functions.setOperationalKeyIdentityId>
export type SetOperationalKeyIdentityIdReturn = FunctionReturn<typeof functions.setOperationalKeyIdentityId>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

