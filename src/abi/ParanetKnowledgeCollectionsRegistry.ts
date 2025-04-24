import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    addKnowledgeCollection: fun("0x39f8439c", "addKnowledgeCollection(bytes32,address,uint256,address)", {"paranetId": p.bytes32, "knowledgeCollectionStorageContract": p.address, "knowledgeCollectionTokenId": p.uint256, "miner": p.address}, p.bytes32),
    getKnowledgeCollectionLocator: viewFun("0xb075699c", "getKnowledgeCollectionLocator(bytes32)", {"knowledgeCollectionId": p.bytes32}, {"_0": p.address, "_1": p.uint256}),
    getKnowledgeCollectionLocators: viewFun("0xea00f479", "getKnowledgeCollectionLocators(bytes32[])", {"knowledgeCollectionIds": p.array(p.bytes32)}, p.array(p.struct({"knowledgeCollectionStorageContract": p.address, "knowledgeCollectionTokenId": p.uint256}))),
    getKnowledgeCollectionObject: viewFun("0x233e457b", "getKnowledgeCollectionObject(bytes32)", {"knowledgeCollectionId": p.bytes32}, p.struct({"knowledgeCollectionStorageContract": p.address, "knowledgeCollectionTokenId": p.uint256, "minerAddress": p.address, "paranetId": p.bytes32})),
    getMinerAddress: viewFun("0xd09b73dd", "getMinerAddress(bytes32)", {"knowledgeCollectionId": p.bytes32}, p.address),
    getParanetId: viewFun("0xea9375c8", "getParanetId(bytes32)", {"knowledgeCollectionId": p.bytes32}, p.bytes32),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    isParanetKnowledgeCollection: viewFun("0xf476aa16", "isParanetKnowledgeCollection(bytes32)", {"knowledgeCollectionId": p.bytes32}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    removeKnowledgeCollection: fun("0xd4ee9e15", "removeKnowledgeCollection(bytes32)", {"knowledgeCollectionId": p.bytes32}, ),
    setMinerAddress: fun("0xda446248", "setMinerAddress(bytes32,address)", {"knowledgeCollectionId": p.bytes32, "minerAddress": p.address}, ),
    setParanetId: fun("0xd944a4fe", "setParanetId(bytes32,bytes32)", {"knowledgeCollectionId": p.bytes32, "paranetId": p.bytes32}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    getKnowledgeCollectionLocator(knowledgeCollectionId: GetKnowledgeCollectionLocatorParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.getKnowledgeCollectionLocator, {knowledgeCollectionId})
    }

    getKnowledgeCollectionLocators(knowledgeCollectionIds: GetKnowledgeCollectionLocatorsParams["knowledgeCollectionIds"]) {
        return this.eth_call(functions.getKnowledgeCollectionLocators, {knowledgeCollectionIds})
    }

    getKnowledgeCollectionObject(knowledgeCollectionId: GetKnowledgeCollectionObjectParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.getKnowledgeCollectionObject, {knowledgeCollectionId})
    }

    getMinerAddress(knowledgeCollectionId: GetMinerAddressParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.getMinerAddress, {knowledgeCollectionId})
    }

    getParanetId(knowledgeCollectionId: GetParanetIdParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.getParanetId, {knowledgeCollectionId})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isParanetKnowledgeCollection(knowledgeCollectionId: IsParanetKnowledgeCollectionParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.isParanetKnowledgeCollection, {knowledgeCollectionId})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Function types
export type AddKnowledgeCollectionParams = FunctionArguments<typeof functions.addKnowledgeCollection>
export type AddKnowledgeCollectionReturn = FunctionReturn<typeof functions.addKnowledgeCollection>

export type GetKnowledgeCollectionLocatorParams = FunctionArguments<typeof functions.getKnowledgeCollectionLocator>
export type GetKnowledgeCollectionLocatorReturn = FunctionReturn<typeof functions.getKnowledgeCollectionLocator>

export type GetKnowledgeCollectionLocatorsParams = FunctionArguments<typeof functions.getKnowledgeCollectionLocators>
export type GetKnowledgeCollectionLocatorsReturn = FunctionReturn<typeof functions.getKnowledgeCollectionLocators>

export type GetKnowledgeCollectionObjectParams = FunctionArguments<typeof functions.getKnowledgeCollectionObject>
export type GetKnowledgeCollectionObjectReturn = FunctionReturn<typeof functions.getKnowledgeCollectionObject>

export type GetMinerAddressParams = FunctionArguments<typeof functions.getMinerAddress>
export type GetMinerAddressReturn = FunctionReturn<typeof functions.getMinerAddress>

export type GetParanetIdParams = FunctionArguments<typeof functions.getParanetId>
export type GetParanetIdReturn = FunctionReturn<typeof functions.getParanetId>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IsParanetKnowledgeCollectionParams = FunctionArguments<typeof functions.isParanetKnowledgeCollection>
export type IsParanetKnowledgeCollectionReturn = FunctionReturn<typeof functions.isParanetKnowledgeCollection>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type RemoveKnowledgeCollectionParams = FunctionArguments<typeof functions.removeKnowledgeCollection>
export type RemoveKnowledgeCollectionReturn = FunctionReturn<typeof functions.removeKnowledgeCollection>

export type SetMinerAddressParams = FunctionArguments<typeof functions.setMinerAddress>
export type SetMinerAddressReturn = FunctionReturn<typeof functions.setMinerAddress>

export type SetParanetIdParams = FunctionArguments<typeof functions.setParanetId>
export type SetParanetIdReturn = FunctionReturn<typeof functions.setParanetId>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

