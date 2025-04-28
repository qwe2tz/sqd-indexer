import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DelegatorAdded: event("0xf8640459e873004ceb462f701962087dd3a03a6c87e7d4acfaef637c669c430e", "DelegatorAdded(uint72,address)", {"identityId": indexed(p.uint72), "delegator": indexed(p.address)}),
    DelegatorRemoved: event("0x5b50126ea33b191746c71fa6548ce24885ad263177e3fabe36d403a6059bb201", "DelegatorRemoved(uint72,address)", {"identityId": indexed(p.uint72), "delegator": indexed(p.address)}),
}

export const functions = {
    addDelegator: fun("0xe87cc576", "addDelegator(uint72,address)", {"identityId": p.uint72, "delegator": p.address}, ),
    getDelegatorIndex: viewFun("0xdb684bd2", "getDelegatorIndex(uint72,address)", {"identityId": p.uint72, "delegator": p.address}, p.uint256),
    getDelegators: viewFun("0x60e99f71", "getDelegators(uint72)", {"identityId": p.uint72}, p.array(p.address)),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    isDelegatorMap: viewFun("0x5e83f456", "isDelegatorMap(uint72,address)", {"_0": p.uint72, "_1": p.address}, p.bool),
    isNodeDelegator: viewFun("0x31110b91", "isNodeDelegator(uint72,address)", {"identityId": p.uint72, "delegator": p.address}, p.bool),
    migrate: fun("0x2e558d69", "migrate(address[])", {"newAddresses": p.array(p.address)}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nodeDelegatorAddresses: viewFun("0x83b583d8", "nodeDelegatorAddresses(uint72,uint256)", {"_0": p.uint72, "_1": p.uint256}, p.address),
    nodeDelegatorIndex: viewFun("0x10da82de", "nodeDelegatorIndex(uint72,address)", {"_0": p.uint72, "_1": p.address}, p.uint256),
    removeDelegator: fun("0xef96be3c", "removeDelegator(uint72,address)", {"identityId": p.uint72, "delegator": p.address}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    getDelegatorIndex(identityId: GetDelegatorIndexParams["identityId"], delegator: GetDelegatorIndexParams["delegator"]) {
        return this.eth_call(functions.getDelegatorIndex, {identityId, delegator})
    }

    getDelegators(identityId: GetDelegatorsParams["identityId"]) {
        return this.eth_call(functions.getDelegators, {identityId})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isDelegatorMap(_0: IsDelegatorMapParams["_0"], _1: IsDelegatorMapParams["_1"]) {
        return this.eth_call(functions.isDelegatorMap, {_0, _1})
    }

    isNodeDelegator(identityId: IsNodeDelegatorParams["identityId"], delegator: IsNodeDelegatorParams["delegator"]) {
        return this.eth_call(functions.isNodeDelegator, {identityId, delegator})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nodeDelegatorAddresses(_0: NodeDelegatorAddressesParams["_0"], _1: NodeDelegatorAddressesParams["_1"]) {
        return this.eth_call(functions.nodeDelegatorAddresses, {_0, _1})
    }

    nodeDelegatorIndex(_0: NodeDelegatorIndexParams["_0"], _1: NodeDelegatorIndexParams["_1"]) {
        return this.eth_call(functions.nodeDelegatorIndex, {_0, _1})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type DelegatorAddedEventArgs = EParams<typeof events.DelegatorAdded>
export type DelegatorRemovedEventArgs = EParams<typeof events.DelegatorRemoved>

/// Function types
export type AddDelegatorParams = FunctionArguments<typeof functions.addDelegator>
export type AddDelegatorReturn = FunctionReturn<typeof functions.addDelegator>

export type GetDelegatorIndexParams = FunctionArguments<typeof functions.getDelegatorIndex>
export type GetDelegatorIndexReturn = FunctionReturn<typeof functions.getDelegatorIndex>

export type GetDelegatorsParams = FunctionArguments<typeof functions.getDelegators>
export type GetDelegatorsReturn = FunctionReturn<typeof functions.getDelegators>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type IsDelegatorMapParams = FunctionArguments<typeof functions.isDelegatorMap>
export type IsDelegatorMapReturn = FunctionReturn<typeof functions.isDelegatorMap>

export type IsNodeDelegatorParams = FunctionArguments<typeof functions.isNodeDelegator>
export type IsNodeDelegatorReturn = FunctionReturn<typeof functions.isNodeDelegator>

export type MigrateParams = FunctionArguments<typeof functions.migrate>
export type MigrateReturn = FunctionReturn<typeof functions.migrate>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NodeDelegatorAddressesParams = FunctionArguments<typeof functions.nodeDelegatorAddresses>
export type NodeDelegatorAddressesReturn = FunctionReturn<typeof functions.nodeDelegatorAddresses>

export type NodeDelegatorIndexParams = FunctionArguments<typeof functions.nodeDelegatorIndex>
export type NodeDelegatorIndexReturn = FunctionReturn<typeof functions.nodeDelegatorIndex>

export type RemoveDelegatorParams = FunctionArguments<typeof functions.removeDelegator>
export type RemoveDelegatorReturn = FunctionReturn<typeof functions.removeDelegator>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

