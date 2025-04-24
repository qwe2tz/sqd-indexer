import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    addCumulativeKnowledgeValue: fun("0x2cc6570e", "addCumulativeKnowledgeValue(bytes32,uint96)", {"paranetId": p.bytes32, "addedKnowledgeValue": p.uint96}, ),
    addIncentivesPool: fun("0xb919c217", "addIncentivesPool(bytes32,string,address,address)", {"paranetId": p.bytes32, "incentivesPoolName": p.string, "storageAddress": p.address, "rewardTokenAddress": p.address}, ),
    addKnowledgeCollecton: fun("0x0d0240c7", "addKnowledgeCollecton(bytes32,bytes32)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32}, ),
    addKnowledgeMiner: fun("0xd4ae4de8", "addKnowledgeMiner(bytes32,address)", {"paranetId": p.bytes32, "knowledgeMinerAddress": p.address}, ),
    addKnowledgeMinerAccessRequest: fun("0xe02a7ffe", "addKnowledgeMinerAccessRequest(bytes32,address,uint8)", {"paranetId": p.bytes32, "miner": p.address, "status": p.uint8}, ),
    addNodeJoinRequest: fun("0x401a5f0d", "addNodeJoinRequest(bytes32,uint72,uint8)", {"paranetId": p.bytes32, "identityId": p.uint72, "status": p.uint8}, ),
    addPermissionedNode: fun("0x7687be7a", "addPermissionedNode(bytes32,uint72,bytes)", {"paranetId": p.bytes32, "identityId": p.uint72, "nodeId": p.bytes}, ),
    addService: fun("0x11fc13a6", "addService(bytes32,bytes32)", {"paranetId": p.bytes32, "serviceId": p.bytes32}, ),
    deleteParanet: fun("0x09a0b004", "deleteParanet(bytes32)", {"paranetId": p.bytes32}, ),
    getAllIncentivesPools: viewFun("0x932680d8", "getAllIncentivesPools(bytes32)", {"paranetId": p.bytes32}, p.array(p.struct({"name": p.string, "storageAddr": p.address, "rewardTokenAddress": p.address}))),
    getAllParanetIds: viewFun("0x6d929293", "getAllParanetIds()", {}, p.array(p.bytes32)),
    getCumulativeKnowledgeValue: viewFun("0xba4a40e1", "getCumulativeKnowledgeValue(bytes32)", {"paranetId": p.bytes32}, p.uint96),
    getDescription: viewFun("0xb820a0ed", "getDescription(bytes32)", {"paranetId": p.bytes32}, p.string),
    getIncentivesPoolByPoolName: viewFun("0x20c00b36", "getIncentivesPoolByPoolName(bytes32,string)", {"paranetId": p.bytes32, "poolName": p.string}, p.struct({"name": p.string, "storageAddr": p.address, "rewardTokenAddress": p.address})),
    getIncentivesPoolByStorageAddress: viewFun("0x0fac1401", "getIncentivesPoolByStorageAddress(bytes32,address)", {"paranetId": p.bytes32, "storageAddr": p.address}, p.struct({"name": p.string, "storageAddr": p.address, "rewardTokenAddress": p.address})),
    getKnowledgeCollections: viewFun("0x71573c62", "getKnowledgeCollections(bytes32)", {"paranetId": p.bytes32}, p.array(p.bytes32)),
    getKnowledgeCollectionsCount: viewFun("0x1d258c36", "getKnowledgeCollectionsCount(bytes32)", {"paranetId": p.bytes32}, p.uint256),
    getKnowledgeCollectionsStartingFromKnowlCollectionId: viewFun("0xaba05852", "getKnowledgeCollectionsStartingFromKnowlCollectionId(bytes32,bytes32,uint256)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32, "limit": p.uint256}, p.array(p.bytes32)),
    getKnowledgeCollectionsSubmissionPolicy: viewFun("0x5c17b598", "getKnowledgeCollectionsSubmissionPolicy(bytes32)", {"paranetId": p.bytes32}, p.uint8),
    getKnowledgeCollectionsWithPagination: viewFun("0xed142c21", "getKnowledgeCollectionsWithPagination(bytes32,uint256,uint256)", {"paranetId": p.bytes32, "offset": p.uint256, "limit": p.uint256}, p.array(p.bytes32)),
    getKnowledgeMinerAccessRequest: viewFun("0xbb8af60b", "getKnowledgeMinerAccessRequest(bytes32,address,uint256)", {"paranetId": p.bytes32, "miner": p.address, "index": p.uint256}, p.struct({"createdAt": p.uint256, "updatedAt": p.uint256, "miner": p.address, "status": p.uint8})),
    getKnowledgeMinerAccessRequests: viewFun("0xb7e29dd7", "getKnowledgeMinerAccessRequests(bytes32,address)", {"paranetId": p.bytes32, "miner": p.address}, p.array(p.struct({"createdAt": p.uint256, "updatedAt": p.uint256, "miner": p.address, "status": p.uint8}))),
    getKnowledgeMinerAccessRequestsCount: viewFun("0x50c103ca", "getKnowledgeMinerAccessRequestsCount(bytes32,address)", {"paranetId": p.bytes32, "miner": p.address}, p.uint256),
    getKnowledgeMiners: viewFun("0x44d071ae", "getKnowledgeMiners(bytes32)", {"paranetId": p.bytes32}, p.array(p.address)),
    getKnowledgeMinersCount: viewFun("0xb0def5fe", "getKnowledgeMinersCount(bytes32)", {"paranetId": p.bytes32}, p.uint256),
    getLatestKnowledgeMinerAccessRequest: viewFun("0xb40b0947", "getLatestKnowledgeMinerAccessRequest(bytes32,address)", {"paranetId": p.bytes32, "miner": p.address}, p.struct({"createdAt": p.uint256, "updatedAt": p.uint256, "miner": p.address, "status": p.uint8})),
    getLatestNodeJoinRequest: viewFun("0x31a7ba1f", "getLatestNodeJoinRequest(bytes32,uint72)", {"paranetId": p.bytes32, "identityId": p.uint72}, p.struct({"createdAt": p.uint256, "updatedAt": p.uint256, "identityId": p.uint72, "status": p.uint8})),
    getMinersAccessPolicy: viewFun("0x7a336e28", "getMinersAccessPolicy(bytes32)", {"paranetId": p.bytes32}, p.uint8),
    getName: viewFun("0x54b8d5e3", "getName(bytes32)", {"paranetId": p.bytes32}, p.string),
    getNodeJoinRequest: viewFun("0x676705d1", "getNodeJoinRequest(bytes32,uint72,uint256)", {"paranetId": p.bytes32, "identityId": p.uint72, "index": p.uint256}, p.struct({"createdAt": p.uint256, "updatedAt": p.uint256, "identityId": p.uint72, "status": p.uint8})),
    getNodeJoinRequests: viewFun("0xc107036f", "getNodeJoinRequests(bytes32,uint72)", {"paranetId": p.bytes32, "identityId": p.uint72}, p.array(p.struct({"createdAt": p.uint256, "updatedAt": p.uint256, "identityId": p.uint72, "status": p.uint8}))),
    getNodeJoinRequestsCount: viewFun("0x3baf7964", "getNodeJoinRequestsCount(bytes32,uint72)", {"paranetId": p.bytes32, "identityId": p.uint72}, p.uint256),
    getNodesAccessPolicy: viewFun("0x361e1286", "getNodesAccessPolicy(bytes32)", {"paranetId": p.bytes32}, p.uint8),
    getParanetIdAtIndex: viewFun("0xb1174832", "getParanetIdAtIndex(uint256)", {"index": p.uint256}, p.bytes32),
    getParanetIds: viewFun("0x6379d57c", "getParanetIds(uint256,uint256)", {"offset": p.uint256, "limit": p.uint256}, p.array(p.bytes32)),
    getParanetIdsMapping: viewFun("0x18c4323c", "getParanetIdsMapping(bytes32)", {"paranetId": p.bytes32}, p.uint256),
    getParanetKnowledgeAssetLocator: viewFun("0x5cf53af8", "getParanetKnowledgeAssetLocator(bytes32)", {"paranetId": p.bytes32}, {"_0": p.address, "_1": p.uint256, "_2": p.uint256}),
    getParanetMetadata: viewFun("0x2674986b", "getParanetMetadata(bytes32)", {"paranetId": p.bytes32}, p.struct({"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "name": p.string, "description": p.string, "nodesAccessPolicy": p.uint8, "minersAccessPolicy": p.uint8, "knowledgeCollectionsSubmissionPolicy": p.uint8, "cumulativeKnowledgeValue": p.uint96})),
    getParanetsCount: viewFun("0x1a2ed0c6", "getParanetsCount()", {}, p.uint256),
    getPermissionedNodes: viewFun("0x0028dcb6", "getPermissionedNodes(bytes32)", {"paranetId": p.bytes32}, p.array(p.struct({"identityId": p.uint72, "nodeId": p.bytes}))),
    getPermissionedNodesCount: viewFun("0x3a8fdb95", "getPermissionedNodesCount(bytes32)", {"paranetId": p.bytes32}, p.uint256),
    getServices: viewFun("0xcd01532b", "getServices(bytes32)", {"paranetId": p.bytes32}, p.array(p.bytes32)),
    getServicesCount: viewFun("0xa19c4541", "getServicesCount(bytes32)", {"paranetId": p.bytes32}, p.uint256),
    hasIncentivesPoolByName: viewFun("0xa00ce618", "hasIncentivesPoolByName(bytes32,string)", {"paranetId": p.bytes32, "poolName": p.string}, p.bool),
    hasIncentivesPoolByStorageAddress: viewFun("0xd4f0b666", "hasIncentivesPoolByStorageAddress(bytes32,address)", {"paranetId": p.bytes32, "storageAddr": p.address}, p.bool),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    isKnowledgeCollectionRegistered: viewFun("0x63d3a1b7", "isKnowledgeCollectionRegistered(bytes32,bytes32)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32}, p.bool),
    isKnowledgeMinerRegistered: viewFun("0x6e933554", "isKnowledgeMinerRegistered(bytes32,address)", {"paranetId": p.bytes32, "knowledgeMinerAddress": p.address}, p.bool),
    isPermissionedNode: viewFun("0x35631335", "isPermissionedNode(bytes32,uint72)", {"paranetId": p.bytes32, "identityId": p.uint72}, p.bool),
    isServiceImplemented: viewFun("0x989959a8", "isServiceImplemented(bytes32,bytes32)", {"paranetId": p.bytes32, "serviceId": p.bytes32}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    paranetExists: viewFun("0x7e18d547", "paranetExists(bytes32)", {"paranetId": p.bytes32}, p.bool),
    registerParanet: fun("0xd46e31ce", "registerParanet(address,uint256,uint256,string,string,uint8,uint8,uint8)", {"knowledgeCollectionStorageContract": p.address, "knowledgeCollectionTokenId": p.uint256, "knowledgeAssetTokenId": p.uint256, "paranetName": p.string, "paranetDescription": p.string, "nodesAccessPolicy": p.uint8, "minersAccessPolicy": p.uint8, "knowledgeCollectionsSubmissionPolicy": p.uint8}, p.bytes32),
    removeKnowledgeCollection: fun("0xc8a8b37e", "removeKnowledgeCollection(bytes32,bytes32)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32}, ),
    removeKnowledgeMiner: fun("0x17b902ca", "removeKnowledgeMiner(bytes32,address)", {"paranetId": p.bytes32, "knowledgeMinerAddress": p.address}, ),
    removeKnowledgeMinerAccessRequest: fun("0x0ffaa5bf", "removeKnowledgeMinerAccessRequest(bytes32,address,uint256)", {"paranetId": p.bytes32, "miner": p.address, "index": p.uint256}, ),
    removeNodeJoinRequest: fun("0xb24ed4a9", "removeNodeJoinRequest(bytes32,uint72,uint256)", {"paranetId": p.bytes32, "identityId": p.uint72, "index": p.uint256}, ),
    removePermissionedNode: fun("0xf2d7bdbe", "removePermissionedNode(bytes32,uint72)", {"paranetId": p.bytes32, "identityId": p.uint72}, ),
    removeService: fun("0x4bd1d554", "removeService(bytes32,bytes32)", {"paranetId": p.bytes32, "serviceId": p.bytes32}, ),
    setCumulativeKnowledgeValue: fun("0x18b832a2", "setCumulativeKnowledgeValue(bytes32,uint96)", {"paranetId": p.bytes32, "cumulativeKnowledgeValue": p.uint96}, ),
    setDescription: fun("0x73f5e7b7", "setDescription(bytes32,string)", {"paranetId": p.bytes32, "description": p.string}, ),
    setKnowledgeCollectionsSubmissionPolicy: fun("0x5dd792bf", "setKnowledgeCollectionsSubmissionPolicy(bytes32,uint8)", {"paranetId": p.bytes32, "knowledgeCollectionsSubmissionPolicy": p.uint8}, ),
    setMinersAccessPolicy: fun("0x7c6954b5", "setMinersAccessPolicy(bytes32,uint8)", {"paranetId": p.bytes32, "minersAccessPolicy": p.uint8}, ),
    setName: fun("0x77372213", "setName(bytes32,string)", {"paranetId": p.bytes32, "name_": p.string}, ),
    setNodesAccessPolicy: fun("0x855fe44b", "setNodesAccessPolicy(bytes32,uint8)", {"paranetId": p.bytes32, "nodesAccessPolicy": p.uint8}, ),
    subCumulativeKnowledgeValue: fun("0xb74d5872", "subCumulativeKnowledgeValue(bytes32,uint96)", {"paranetId": p.bytes32, "subtractedKnowledgeValue": p.uint96}, ),
    updateKnowledgeMinerAccessRequestStatus: fun("0xfa10e2db", "updateKnowledgeMinerAccessRequestStatus(bytes32,address,uint256,uint8)", {"paranetId": p.bytes32, "miner": p.address, "index": p.uint256, "status": p.uint8}, ),
    updateNodeJoinRequestStatus: fun("0xf9d756e0", "updateNodeJoinRequestStatus(bytes32,uint72,uint256,uint8)", {"paranetId": p.bytes32, "identityId": p.uint72, "index": p.uint256, "status": p.uint8}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    getAllIncentivesPools(paranetId: GetAllIncentivesPoolsParams["paranetId"]) {
        return this.eth_call(functions.getAllIncentivesPools, {paranetId})
    }

    getAllParanetIds() {
        return this.eth_call(functions.getAllParanetIds, {})
    }

    getCumulativeKnowledgeValue(paranetId: GetCumulativeKnowledgeValueParams["paranetId"]) {
        return this.eth_call(functions.getCumulativeKnowledgeValue, {paranetId})
    }

    getDescription(paranetId: GetDescriptionParams["paranetId"]) {
        return this.eth_call(functions.getDescription, {paranetId})
    }

    getIncentivesPoolByPoolName(paranetId: GetIncentivesPoolByPoolNameParams["paranetId"], poolName: GetIncentivesPoolByPoolNameParams["poolName"]) {
        return this.eth_call(functions.getIncentivesPoolByPoolName, {paranetId, poolName})
    }

    getIncentivesPoolByStorageAddress(paranetId: GetIncentivesPoolByStorageAddressParams["paranetId"], storageAddr: GetIncentivesPoolByStorageAddressParams["storageAddr"]) {
        return this.eth_call(functions.getIncentivesPoolByStorageAddress, {paranetId, storageAddr})
    }

    getKnowledgeCollections(paranetId: GetKnowledgeCollectionsParams["paranetId"]) {
        return this.eth_call(functions.getKnowledgeCollections, {paranetId})
    }

    getKnowledgeCollectionsCount(paranetId: GetKnowledgeCollectionsCountParams["paranetId"]) {
        return this.eth_call(functions.getKnowledgeCollectionsCount, {paranetId})
    }

    getKnowledgeCollectionsStartingFromKnowlCollectionId(paranetId: GetKnowledgeCollectionsStartingFromKnowlCollectionIdParams["paranetId"], knowledgeCollectionId: GetKnowledgeCollectionsStartingFromKnowlCollectionIdParams["knowledgeCollectionId"], limit: GetKnowledgeCollectionsStartingFromKnowlCollectionIdParams["limit"]) {
        return this.eth_call(functions.getKnowledgeCollectionsStartingFromKnowlCollectionId, {paranetId, knowledgeCollectionId, limit})
    }

    getKnowledgeCollectionsSubmissionPolicy(paranetId: GetKnowledgeCollectionsSubmissionPolicyParams["paranetId"]) {
        return this.eth_call(functions.getKnowledgeCollectionsSubmissionPolicy, {paranetId})
    }

    getKnowledgeCollectionsWithPagination(paranetId: GetKnowledgeCollectionsWithPaginationParams["paranetId"], offset: GetKnowledgeCollectionsWithPaginationParams["offset"], limit: GetKnowledgeCollectionsWithPaginationParams["limit"]) {
        return this.eth_call(functions.getKnowledgeCollectionsWithPagination, {paranetId, offset, limit})
    }

    getKnowledgeMinerAccessRequest(paranetId: GetKnowledgeMinerAccessRequestParams["paranetId"], miner: GetKnowledgeMinerAccessRequestParams["miner"], index: GetKnowledgeMinerAccessRequestParams["index"]) {
        return this.eth_call(functions.getKnowledgeMinerAccessRequest, {paranetId, miner, index})
    }

    getKnowledgeMinerAccessRequests(paranetId: GetKnowledgeMinerAccessRequestsParams["paranetId"], miner: GetKnowledgeMinerAccessRequestsParams["miner"]) {
        return this.eth_call(functions.getKnowledgeMinerAccessRequests, {paranetId, miner})
    }

    getKnowledgeMinerAccessRequestsCount(paranetId: GetKnowledgeMinerAccessRequestsCountParams["paranetId"], miner: GetKnowledgeMinerAccessRequestsCountParams["miner"]) {
        return this.eth_call(functions.getKnowledgeMinerAccessRequestsCount, {paranetId, miner})
    }

    getKnowledgeMiners(paranetId: GetKnowledgeMinersParams["paranetId"]) {
        return this.eth_call(functions.getKnowledgeMiners, {paranetId})
    }

    getKnowledgeMinersCount(paranetId: GetKnowledgeMinersCountParams["paranetId"]) {
        return this.eth_call(functions.getKnowledgeMinersCount, {paranetId})
    }

    getLatestKnowledgeMinerAccessRequest(paranetId: GetLatestKnowledgeMinerAccessRequestParams["paranetId"], miner: GetLatestKnowledgeMinerAccessRequestParams["miner"]) {
        return this.eth_call(functions.getLatestKnowledgeMinerAccessRequest, {paranetId, miner})
    }

    getLatestNodeJoinRequest(paranetId: GetLatestNodeJoinRequestParams["paranetId"], identityId: GetLatestNodeJoinRequestParams["identityId"]) {
        return this.eth_call(functions.getLatestNodeJoinRequest, {paranetId, identityId})
    }

    getMinersAccessPolicy(paranetId: GetMinersAccessPolicyParams["paranetId"]) {
        return this.eth_call(functions.getMinersAccessPolicy, {paranetId})
    }

    getName(paranetId: GetNameParams["paranetId"]) {
        return this.eth_call(functions.getName, {paranetId})
    }

    getNodeJoinRequest(paranetId: GetNodeJoinRequestParams["paranetId"], identityId: GetNodeJoinRequestParams["identityId"], index: GetNodeJoinRequestParams["index"]) {
        return this.eth_call(functions.getNodeJoinRequest, {paranetId, identityId, index})
    }

    getNodeJoinRequests(paranetId: GetNodeJoinRequestsParams["paranetId"], identityId: GetNodeJoinRequestsParams["identityId"]) {
        return this.eth_call(functions.getNodeJoinRequests, {paranetId, identityId})
    }

    getNodeJoinRequestsCount(paranetId: GetNodeJoinRequestsCountParams["paranetId"], identityId: GetNodeJoinRequestsCountParams["identityId"]) {
        return this.eth_call(functions.getNodeJoinRequestsCount, {paranetId, identityId})
    }

    getNodesAccessPolicy(paranetId: GetNodesAccessPolicyParams["paranetId"]) {
        return this.eth_call(functions.getNodesAccessPolicy, {paranetId})
    }

    getParanetIdAtIndex(index: GetParanetIdAtIndexParams["index"]) {
        return this.eth_call(functions.getParanetIdAtIndex, {index})
    }

    getParanetIds(offset: GetParanetIdsParams["offset"], limit: GetParanetIdsParams["limit"]) {
        return this.eth_call(functions.getParanetIds, {offset, limit})
    }

    getParanetIdsMapping(paranetId: GetParanetIdsMappingParams["paranetId"]) {
        return this.eth_call(functions.getParanetIdsMapping, {paranetId})
    }

    getParanetKnowledgeAssetLocator(paranetId: GetParanetKnowledgeAssetLocatorParams["paranetId"]) {
        return this.eth_call(functions.getParanetKnowledgeAssetLocator, {paranetId})
    }

    getParanetMetadata(paranetId: GetParanetMetadataParams["paranetId"]) {
        return this.eth_call(functions.getParanetMetadata, {paranetId})
    }

    getParanetsCount() {
        return this.eth_call(functions.getParanetsCount, {})
    }

    getPermissionedNodes(paranetId: GetPermissionedNodesParams["paranetId"]) {
        return this.eth_call(functions.getPermissionedNodes, {paranetId})
    }

    getPermissionedNodesCount(paranetId: GetPermissionedNodesCountParams["paranetId"]) {
        return this.eth_call(functions.getPermissionedNodesCount, {paranetId})
    }

    getServices(paranetId: GetServicesParams["paranetId"]) {
        return this.eth_call(functions.getServices, {paranetId})
    }

    getServicesCount(paranetId: GetServicesCountParams["paranetId"]) {
        return this.eth_call(functions.getServicesCount, {paranetId})
    }

    hasIncentivesPoolByName(paranetId: HasIncentivesPoolByNameParams["paranetId"], poolName: HasIncentivesPoolByNameParams["poolName"]) {
        return this.eth_call(functions.hasIncentivesPoolByName, {paranetId, poolName})
    }

    hasIncentivesPoolByStorageAddress(paranetId: HasIncentivesPoolByStorageAddressParams["paranetId"], storageAddr: HasIncentivesPoolByStorageAddressParams["storageAddr"]) {
        return this.eth_call(functions.hasIncentivesPoolByStorageAddress, {paranetId, storageAddr})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isKnowledgeCollectionRegistered(paranetId: IsKnowledgeCollectionRegisteredParams["paranetId"], knowledgeCollectionId: IsKnowledgeCollectionRegisteredParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.isKnowledgeCollectionRegistered, {paranetId, knowledgeCollectionId})
    }

    isKnowledgeMinerRegistered(paranetId: IsKnowledgeMinerRegisteredParams["paranetId"], knowledgeMinerAddress: IsKnowledgeMinerRegisteredParams["knowledgeMinerAddress"]) {
        return this.eth_call(functions.isKnowledgeMinerRegistered, {paranetId, knowledgeMinerAddress})
    }

    isPermissionedNode(paranetId: IsPermissionedNodeParams["paranetId"], identityId: IsPermissionedNodeParams["identityId"]) {
        return this.eth_call(functions.isPermissionedNode, {paranetId, identityId})
    }

    isServiceImplemented(paranetId: IsServiceImplementedParams["paranetId"], serviceId: IsServiceImplementedParams["serviceId"]) {
        return this.eth_call(functions.isServiceImplemented, {paranetId, serviceId})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    paranetExists(paranetId: ParanetExistsParams["paranetId"]) {
        return this.eth_call(functions.paranetExists, {paranetId})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Function types
export type AddCumulativeKnowledgeValueParams = FunctionArguments<typeof functions.addCumulativeKnowledgeValue>
export type AddCumulativeKnowledgeValueReturn = FunctionReturn<typeof functions.addCumulativeKnowledgeValue>

export type AddIncentivesPoolParams = FunctionArguments<typeof functions.addIncentivesPool>
export type AddIncentivesPoolReturn = FunctionReturn<typeof functions.addIncentivesPool>

export type AddKnowledgeCollectonParams = FunctionArguments<typeof functions.addKnowledgeCollecton>
export type AddKnowledgeCollectonReturn = FunctionReturn<typeof functions.addKnowledgeCollecton>

export type AddKnowledgeMinerParams = FunctionArguments<typeof functions.addKnowledgeMiner>
export type AddKnowledgeMinerReturn = FunctionReturn<typeof functions.addKnowledgeMiner>

export type AddKnowledgeMinerAccessRequestParams = FunctionArguments<typeof functions.addKnowledgeMinerAccessRequest>
export type AddKnowledgeMinerAccessRequestReturn = FunctionReturn<typeof functions.addKnowledgeMinerAccessRequest>

export type AddNodeJoinRequestParams = FunctionArguments<typeof functions.addNodeJoinRequest>
export type AddNodeJoinRequestReturn = FunctionReturn<typeof functions.addNodeJoinRequest>

export type AddPermissionedNodeParams = FunctionArguments<typeof functions.addPermissionedNode>
export type AddPermissionedNodeReturn = FunctionReturn<typeof functions.addPermissionedNode>

export type AddServiceParams = FunctionArguments<typeof functions.addService>
export type AddServiceReturn = FunctionReturn<typeof functions.addService>

export type DeleteParanetParams = FunctionArguments<typeof functions.deleteParanet>
export type DeleteParanetReturn = FunctionReturn<typeof functions.deleteParanet>

export type GetAllIncentivesPoolsParams = FunctionArguments<typeof functions.getAllIncentivesPools>
export type GetAllIncentivesPoolsReturn = FunctionReturn<typeof functions.getAllIncentivesPools>

export type GetAllParanetIdsParams = FunctionArguments<typeof functions.getAllParanetIds>
export type GetAllParanetIdsReturn = FunctionReturn<typeof functions.getAllParanetIds>

export type GetCumulativeKnowledgeValueParams = FunctionArguments<typeof functions.getCumulativeKnowledgeValue>
export type GetCumulativeKnowledgeValueReturn = FunctionReturn<typeof functions.getCumulativeKnowledgeValue>

export type GetDescriptionParams = FunctionArguments<typeof functions.getDescription>
export type GetDescriptionReturn = FunctionReturn<typeof functions.getDescription>

export type GetIncentivesPoolByPoolNameParams = FunctionArguments<typeof functions.getIncentivesPoolByPoolName>
export type GetIncentivesPoolByPoolNameReturn = FunctionReturn<typeof functions.getIncentivesPoolByPoolName>

export type GetIncentivesPoolByStorageAddressParams = FunctionArguments<typeof functions.getIncentivesPoolByStorageAddress>
export type GetIncentivesPoolByStorageAddressReturn = FunctionReturn<typeof functions.getIncentivesPoolByStorageAddress>

export type GetKnowledgeCollectionsParams = FunctionArguments<typeof functions.getKnowledgeCollections>
export type GetKnowledgeCollectionsReturn = FunctionReturn<typeof functions.getKnowledgeCollections>

export type GetKnowledgeCollectionsCountParams = FunctionArguments<typeof functions.getKnowledgeCollectionsCount>
export type GetKnowledgeCollectionsCountReturn = FunctionReturn<typeof functions.getKnowledgeCollectionsCount>

export type GetKnowledgeCollectionsStartingFromKnowlCollectionIdParams = FunctionArguments<typeof functions.getKnowledgeCollectionsStartingFromKnowlCollectionId>
export type GetKnowledgeCollectionsStartingFromKnowlCollectionIdReturn = FunctionReturn<typeof functions.getKnowledgeCollectionsStartingFromKnowlCollectionId>

export type GetKnowledgeCollectionsSubmissionPolicyParams = FunctionArguments<typeof functions.getKnowledgeCollectionsSubmissionPolicy>
export type GetKnowledgeCollectionsSubmissionPolicyReturn = FunctionReturn<typeof functions.getKnowledgeCollectionsSubmissionPolicy>

export type GetKnowledgeCollectionsWithPaginationParams = FunctionArguments<typeof functions.getKnowledgeCollectionsWithPagination>
export type GetKnowledgeCollectionsWithPaginationReturn = FunctionReturn<typeof functions.getKnowledgeCollectionsWithPagination>

export type GetKnowledgeMinerAccessRequestParams = FunctionArguments<typeof functions.getKnowledgeMinerAccessRequest>
export type GetKnowledgeMinerAccessRequestReturn = FunctionReturn<typeof functions.getKnowledgeMinerAccessRequest>

export type GetKnowledgeMinerAccessRequestsParams = FunctionArguments<typeof functions.getKnowledgeMinerAccessRequests>
export type GetKnowledgeMinerAccessRequestsReturn = FunctionReturn<typeof functions.getKnowledgeMinerAccessRequests>

export type GetKnowledgeMinerAccessRequestsCountParams = FunctionArguments<typeof functions.getKnowledgeMinerAccessRequestsCount>
export type GetKnowledgeMinerAccessRequestsCountReturn = FunctionReturn<typeof functions.getKnowledgeMinerAccessRequestsCount>

export type GetKnowledgeMinersParams = FunctionArguments<typeof functions.getKnowledgeMiners>
export type GetKnowledgeMinersReturn = FunctionReturn<typeof functions.getKnowledgeMiners>

export type GetKnowledgeMinersCountParams = FunctionArguments<typeof functions.getKnowledgeMinersCount>
export type GetKnowledgeMinersCountReturn = FunctionReturn<typeof functions.getKnowledgeMinersCount>

export type GetLatestKnowledgeMinerAccessRequestParams = FunctionArguments<typeof functions.getLatestKnowledgeMinerAccessRequest>
export type GetLatestKnowledgeMinerAccessRequestReturn = FunctionReturn<typeof functions.getLatestKnowledgeMinerAccessRequest>

export type GetLatestNodeJoinRequestParams = FunctionArguments<typeof functions.getLatestNodeJoinRequest>
export type GetLatestNodeJoinRequestReturn = FunctionReturn<typeof functions.getLatestNodeJoinRequest>

export type GetMinersAccessPolicyParams = FunctionArguments<typeof functions.getMinersAccessPolicy>
export type GetMinersAccessPolicyReturn = FunctionReturn<typeof functions.getMinersAccessPolicy>

export type GetNameParams = FunctionArguments<typeof functions.getName>
export type GetNameReturn = FunctionReturn<typeof functions.getName>

export type GetNodeJoinRequestParams = FunctionArguments<typeof functions.getNodeJoinRequest>
export type GetNodeJoinRequestReturn = FunctionReturn<typeof functions.getNodeJoinRequest>

export type GetNodeJoinRequestsParams = FunctionArguments<typeof functions.getNodeJoinRequests>
export type GetNodeJoinRequestsReturn = FunctionReturn<typeof functions.getNodeJoinRequests>

export type GetNodeJoinRequestsCountParams = FunctionArguments<typeof functions.getNodeJoinRequestsCount>
export type GetNodeJoinRequestsCountReturn = FunctionReturn<typeof functions.getNodeJoinRequestsCount>

export type GetNodesAccessPolicyParams = FunctionArguments<typeof functions.getNodesAccessPolicy>
export type GetNodesAccessPolicyReturn = FunctionReturn<typeof functions.getNodesAccessPolicy>

export type GetParanetIdAtIndexParams = FunctionArguments<typeof functions.getParanetIdAtIndex>
export type GetParanetIdAtIndexReturn = FunctionReturn<typeof functions.getParanetIdAtIndex>

export type GetParanetIdsParams = FunctionArguments<typeof functions.getParanetIds>
export type GetParanetIdsReturn = FunctionReturn<typeof functions.getParanetIds>

export type GetParanetIdsMappingParams = FunctionArguments<typeof functions.getParanetIdsMapping>
export type GetParanetIdsMappingReturn = FunctionReturn<typeof functions.getParanetIdsMapping>

export type GetParanetKnowledgeAssetLocatorParams = FunctionArguments<typeof functions.getParanetKnowledgeAssetLocator>
export type GetParanetKnowledgeAssetLocatorReturn = FunctionReturn<typeof functions.getParanetKnowledgeAssetLocator>

export type GetParanetMetadataParams = FunctionArguments<typeof functions.getParanetMetadata>
export type GetParanetMetadataReturn = FunctionReturn<typeof functions.getParanetMetadata>

export type GetParanetsCountParams = FunctionArguments<typeof functions.getParanetsCount>
export type GetParanetsCountReturn = FunctionReturn<typeof functions.getParanetsCount>

export type GetPermissionedNodesParams = FunctionArguments<typeof functions.getPermissionedNodes>
export type GetPermissionedNodesReturn = FunctionReturn<typeof functions.getPermissionedNodes>

export type GetPermissionedNodesCountParams = FunctionArguments<typeof functions.getPermissionedNodesCount>
export type GetPermissionedNodesCountReturn = FunctionReturn<typeof functions.getPermissionedNodesCount>

export type GetServicesParams = FunctionArguments<typeof functions.getServices>
export type GetServicesReturn = FunctionReturn<typeof functions.getServices>

export type GetServicesCountParams = FunctionArguments<typeof functions.getServicesCount>
export type GetServicesCountReturn = FunctionReturn<typeof functions.getServicesCount>

export type HasIncentivesPoolByNameParams = FunctionArguments<typeof functions.hasIncentivesPoolByName>
export type HasIncentivesPoolByNameReturn = FunctionReturn<typeof functions.hasIncentivesPoolByName>

export type HasIncentivesPoolByStorageAddressParams = FunctionArguments<typeof functions.hasIncentivesPoolByStorageAddress>
export type HasIncentivesPoolByStorageAddressReturn = FunctionReturn<typeof functions.hasIncentivesPoolByStorageAddress>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IsKnowledgeCollectionRegisteredParams = FunctionArguments<typeof functions.isKnowledgeCollectionRegistered>
export type IsKnowledgeCollectionRegisteredReturn = FunctionReturn<typeof functions.isKnowledgeCollectionRegistered>

export type IsKnowledgeMinerRegisteredParams = FunctionArguments<typeof functions.isKnowledgeMinerRegistered>
export type IsKnowledgeMinerRegisteredReturn = FunctionReturn<typeof functions.isKnowledgeMinerRegistered>

export type IsPermissionedNodeParams = FunctionArguments<typeof functions.isPermissionedNode>
export type IsPermissionedNodeReturn = FunctionReturn<typeof functions.isPermissionedNode>

export type IsServiceImplementedParams = FunctionArguments<typeof functions.isServiceImplemented>
export type IsServiceImplementedReturn = FunctionReturn<typeof functions.isServiceImplemented>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParanetExistsParams = FunctionArguments<typeof functions.paranetExists>
export type ParanetExistsReturn = FunctionReturn<typeof functions.paranetExists>

export type RegisterParanetParams = FunctionArguments<typeof functions.registerParanet>
export type RegisterParanetReturn = FunctionReturn<typeof functions.registerParanet>

export type RemoveKnowledgeCollectionParams = FunctionArguments<typeof functions.removeKnowledgeCollection>
export type RemoveKnowledgeCollectionReturn = FunctionReturn<typeof functions.removeKnowledgeCollection>

export type RemoveKnowledgeMinerParams = FunctionArguments<typeof functions.removeKnowledgeMiner>
export type RemoveKnowledgeMinerReturn = FunctionReturn<typeof functions.removeKnowledgeMiner>

export type RemoveKnowledgeMinerAccessRequestParams = FunctionArguments<typeof functions.removeKnowledgeMinerAccessRequest>
export type RemoveKnowledgeMinerAccessRequestReturn = FunctionReturn<typeof functions.removeKnowledgeMinerAccessRequest>

export type RemoveNodeJoinRequestParams = FunctionArguments<typeof functions.removeNodeJoinRequest>
export type RemoveNodeJoinRequestReturn = FunctionReturn<typeof functions.removeNodeJoinRequest>

export type RemovePermissionedNodeParams = FunctionArguments<typeof functions.removePermissionedNode>
export type RemovePermissionedNodeReturn = FunctionReturn<typeof functions.removePermissionedNode>

export type RemoveServiceParams = FunctionArguments<typeof functions.removeService>
export type RemoveServiceReturn = FunctionReturn<typeof functions.removeService>

export type SetCumulativeKnowledgeValueParams = FunctionArguments<typeof functions.setCumulativeKnowledgeValue>
export type SetCumulativeKnowledgeValueReturn = FunctionReturn<typeof functions.setCumulativeKnowledgeValue>

export type SetDescriptionParams = FunctionArguments<typeof functions.setDescription>
export type SetDescriptionReturn = FunctionReturn<typeof functions.setDescription>

export type SetKnowledgeCollectionsSubmissionPolicyParams = FunctionArguments<typeof functions.setKnowledgeCollectionsSubmissionPolicy>
export type SetKnowledgeCollectionsSubmissionPolicyReturn = FunctionReturn<typeof functions.setKnowledgeCollectionsSubmissionPolicy>

export type SetMinersAccessPolicyParams = FunctionArguments<typeof functions.setMinersAccessPolicy>
export type SetMinersAccessPolicyReturn = FunctionReturn<typeof functions.setMinersAccessPolicy>

export type SetNameParams = FunctionArguments<typeof functions.setName>
export type SetNameReturn = FunctionReturn<typeof functions.setName>

export type SetNodesAccessPolicyParams = FunctionArguments<typeof functions.setNodesAccessPolicy>
export type SetNodesAccessPolicyReturn = FunctionReturn<typeof functions.setNodesAccessPolicy>

export type SubCumulativeKnowledgeValueParams = FunctionArguments<typeof functions.subCumulativeKnowledgeValue>
export type SubCumulativeKnowledgeValueReturn = FunctionReturn<typeof functions.subCumulativeKnowledgeValue>

export type UpdateKnowledgeMinerAccessRequestStatusParams = FunctionArguments<typeof functions.updateKnowledgeMinerAccessRequestStatus>
export type UpdateKnowledgeMinerAccessRequestStatusReturn = FunctionReturn<typeof functions.updateKnowledgeMinerAccessRequestStatus>

export type UpdateNodeJoinRequestStatusParams = FunctionArguments<typeof functions.updateNodeJoinRequestStatus>
export type UpdateNodeJoinRequestStatusReturn = FunctionReturn<typeof functions.updateNodeJoinRequestStatus>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

