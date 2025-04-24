import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    deleteParanetService: fun("0xb83fb145", "deleteParanetService(bytes32)", {"paranetServiceId": p.bytes32}, ),
    getDescription: viewFun("0xb820a0ed", "getDescription(bytes32)", {"paranetServiceId": p.bytes32}, p.string),
    getName: viewFun("0x54b8d5e3", "getName(bytes32)", {"paranetServiceId": p.bytes32}, p.string),
    getParanetServiceAddresses: viewFun("0x270147ea", "getParanetServiceAddresses(bytes32)", {"paranetServiceId": p.bytes32}, p.array(p.address)),
    getParanetServiceKnowledgeCollectionLocator: viewFun("0x859d009d", "getParanetServiceKnowledgeCollectionLocator(bytes32)", {"paranetServiceId": p.bytes32}, {"_0": p.address, "_1": p.uint256, "_2": p.uint256}),
    getParanetServiceMetadata: viewFun("0xca6ef79b", "getParanetServiceMetadata(bytes32)", {"paranetServiceId": p.bytes32}, p.struct({"paranetServiceKCStorageContract": p.address, "paranetServiceKCTokenId": p.uint256, "paranetServiceKATokenId": p.uint256, "name": p.string, "description": p.string, "paranetServiceAddresses": p.array(p.address)})),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    isParanetServiceAddressRegistered: viewFun("0xec1f6af7", "isParanetServiceAddressRegistered(bytes32,address)", {"paranetServiceId": p.bytes32, "paranetServiceAddress": p.address}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    paranetServiceExists: viewFun("0xa9dbfe4c", "paranetServiceExists(bytes32)", {"paranetServiceId": p.bytes32}, p.bool),
    registerParanetService: fun("0x68583508", "registerParanetService(address,uint256,uint256,string,string,address[])", {"paranetServiceKCStorageContract": p.address, "paranetServiceKCTokenId": p.uint256, "paranetServiceKATokenId": p.uint256, "paranetServiceName": p.string, "paranetServiceDescription": p.string, "paranetServiceAddresses": p.array(p.address)}, p.bytes32),
    setDescription: fun("0x73f5e7b7", "setDescription(bytes32,string)", {"paranetServiceId": p.bytes32, "description_": p.string}, ),
    setIsParanetServiceAddressRegistered: fun("0x5f37c38b", "setIsParanetServiceAddressRegistered(bytes32,address,bool)", {"paranetServiceId": p.bytes32, "paranetServiceAddress": p.address, "isRegistered": p.bool}, ),
    setName: fun("0x77372213", "setName(bytes32,string)", {"paranetServiceId": p.bytes32, "name_": p.string}, ),
    setParanetServiceAddresses: fun("0xa506b2a8", "setParanetServiceAddresses(bytes32,address[])", {"paranetServiceId": p.bytes32, "paranetServiceAddresses": p.array(p.address)}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    getDescription(paranetServiceId: GetDescriptionParams["paranetServiceId"]) {
        return this.eth_call(functions.getDescription, {paranetServiceId})
    }

    getName(paranetServiceId: GetNameParams["paranetServiceId"]) {
        return this.eth_call(functions.getName, {paranetServiceId})
    }

    getParanetServiceAddresses(paranetServiceId: GetParanetServiceAddressesParams["paranetServiceId"]) {
        return this.eth_call(functions.getParanetServiceAddresses, {paranetServiceId})
    }

    getParanetServiceKnowledgeCollectionLocator(paranetServiceId: GetParanetServiceKnowledgeCollectionLocatorParams["paranetServiceId"]) {
        return this.eth_call(functions.getParanetServiceKnowledgeCollectionLocator, {paranetServiceId})
    }

    getParanetServiceMetadata(paranetServiceId: GetParanetServiceMetadataParams["paranetServiceId"]) {
        return this.eth_call(functions.getParanetServiceMetadata, {paranetServiceId})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isParanetServiceAddressRegistered(paranetServiceId: IsParanetServiceAddressRegisteredParams["paranetServiceId"], paranetServiceAddress: IsParanetServiceAddressRegisteredParams["paranetServiceAddress"]) {
        return this.eth_call(functions.isParanetServiceAddressRegistered, {paranetServiceId, paranetServiceAddress})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    paranetServiceExists(paranetServiceId: ParanetServiceExistsParams["paranetServiceId"]) {
        return this.eth_call(functions.paranetServiceExists, {paranetServiceId})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Function types
export type DeleteParanetServiceParams = FunctionArguments<typeof functions.deleteParanetService>
export type DeleteParanetServiceReturn = FunctionReturn<typeof functions.deleteParanetService>

export type GetDescriptionParams = FunctionArguments<typeof functions.getDescription>
export type GetDescriptionReturn = FunctionReturn<typeof functions.getDescription>

export type GetNameParams = FunctionArguments<typeof functions.getName>
export type GetNameReturn = FunctionReturn<typeof functions.getName>

export type GetParanetServiceAddressesParams = FunctionArguments<typeof functions.getParanetServiceAddresses>
export type GetParanetServiceAddressesReturn = FunctionReturn<typeof functions.getParanetServiceAddresses>

export type GetParanetServiceKnowledgeCollectionLocatorParams = FunctionArguments<typeof functions.getParanetServiceKnowledgeCollectionLocator>
export type GetParanetServiceKnowledgeCollectionLocatorReturn = FunctionReturn<typeof functions.getParanetServiceKnowledgeCollectionLocator>

export type GetParanetServiceMetadataParams = FunctionArguments<typeof functions.getParanetServiceMetadata>
export type GetParanetServiceMetadataReturn = FunctionReturn<typeof functions.getParanetServiceMetadata>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IsParanetServiceAddressRegisteredParams = FunctionArguments<typeof functions.isParanetServiceAddressRegistered>
export type IsParanetServiceAddressRegisteredReturn = FunctionReturn<typeof functions.isParanetServiceAddressRegistered>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParanetServiceExistsParams = FunctionArguments<typeof functions.paranetServiceExists>
export type ParanetServiceExistsReturn = FunctionReturn<typeof functions.paranetServiceExists>

export type RegisterParanetServiceParams = FunctionArguments<typeof functions.registerParanetService>
export type RegisterParanetServiceReturn = FunctionReturn<typeof functions.registerParanetService>

export type SetDescriptionParams = FunctionArguments<typeof functions.setDescription>
export type SetDescriptionReturn = FunctionReturn<typeof functions.setDescription>

export type SetIsParanetServiceAddressRegisteredParams = FunctionArguments<typeof functions.setIsParanetServiceAddressRegistered>
export type SetIsParanetServiceAddressRegisteredReturn = FunctionReturn<typeof functions.setIsParanetServiceAddressRegistered>

export type SetNameParams = FunctionArguments<typeof functions.setName>
export type SetNameReturn = FunctionReturn<typeof functions.setName>

export type SetParanetServiceAddressesParams = FunctionArguments<typeof functions.setParanetServiceAddresses>
export type SetParanetServiceAddressesReturn = FunctionReturn<typeof functions.setParanetServiceAddresses>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

