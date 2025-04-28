import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    KnowledgeCollectionSubmittedToParanet: event("0x088bc21e3e07f7ae36e13ee8b7548a0cac8a2e992c2062fbb1712922a07bd325", "KnowledgeCollectionSubmittedToParanet(address,uint256,uint256,address,uint256)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "knowledgeCollectionStorageContract": p.address, "knowledgeCollectionId": p.uint256}),
    ParanetIncetivesPoolDeployed: event("0xceb0c9434c01e06fe35de496fa7a36e09a8c2cc0a0fef6a248f51d127a693bc0", "ParanetIncetivesPoolDeployed(address,uint256,uint256,(string,address,address))", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "incentivesPool": p.struct({"name": p.string, "storageAddr": p.address, "rewardTokenAddress": p.address})}),
    ParanetMetadataUpdated: event("0x0e6cb6fe0b65b03cc1216f9800d58cf2e875b14157d6bd194f3261e358247b89", "ParanetMetadataUpdated(address,uint256,uint256,string,string)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "newParanetName": p.string, "newParanetDescription": p.string}),
    ParanetPermissionedMinerAccessRequestAccepted: event("0x775d4e199c6e22bb22ace0058a877dbd62a1f94cb79380d93b0c587890c73f82", "ParanetPermissionedMinerAccessRequestAccepted(address,uint256,uint256,address)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "minerAddress": p.address}),
    ParanetPermissionedMinerAccessRequestCreated: event("0xc80b41093d24d49914693c33ba326548398a9b502a623e1efae5968f953b23e2", "ParanetPermissionedMinerAccessRequestCreated(address,uint256,uint256,address)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "minerAddress": p.address}),
    ParanetPermissionedMinerAccessRequestRejected: event("0x2b1815d9b068badbc8ec8f4704c783b73392a873272c42b4d1492652dc168597", "ParanetPermissionedMinerAccessRequestRejected(address,uint256,uint256,address)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "minerAddress": p.address}),
    ParanetPermissionedMinerAdded: event("0x0f08bdad14bf0f15af55715c756db1dc8c923f9f2a0f3a2dc9f3f3aa4a0df17e", "ParanetPermissionedMinerAdded(address,uint256,uint256,address)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "minerAddress": p.address}),
    ParanetPermissionedMinerRemoved: event("0x5b639c1e07d28c52f9d406f590ddeaed7a448b69384310914691c55e67f1b799", "ParanetPermissionedMinerRemoved(address,uint256,uint256,address)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "minerAddress": p.address}),
    ParanetPermissionedNodeAdded: event("0x65258386739f60d38b10ed7552da361657c95ba161e4c4f10096ba76b76f1896", "ParanetPermissionedNodeAdded(address,uint256,uint256,uint72)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "identityId": p.uint72}),
    ParanetPermissionedNodeJoinRequestAccepted: event("0xac87882ac3b7b07691094a3addb257cb616dff73cf3a096cf048396079eb5c6d", "ParanetPermissionedNodeJoinRequestAccepted(address,uint256,uint256,uint72)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "identityId": p.uint72}),
    ParanetPermissionedNodeJoinRequestCreated: event("0x7d187c1045062f10664ca3f88fb390d137a2fd5a2f8a3822842ea403b458cf71", "ParanetPermissionedNodeJoinRequestCreated(address,uint256,uint256,uint72)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "identityId": p.uint72}),
    ParanetPermissionedNodeJoinRequestRejected: event("0x86e7cc4efb7890e7d92a941c3c84caecce9d240daad4114c84474267d6a52925", "ParanetPermissionedNodeJoinRequestRejected(address,uint256,uint256,uint72)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "identityId": p.uint72}),
    ParanetPermissionedNodeRemoved: event("0xfc5c9c8389a6ddda755ece0722398060060089dcd6cb907b6e3f0ab6202a7f7e", "ParanetPermissionedNodeRemoved(address,uint256,uint256,uint72)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "identityId": p.uint72}),
    ParanetRegistered: event("0x98ca7a7cb10aedc68aa1bbc3e9a7ab3da6dd0dfe6c4ede4d1f8c59e3d3e51086", "ParanetRegistered(address,uint256,uint256,string,string,uint8,uint8,uint8)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "parnetKATokenId": indexed(p.uint256), "paranetName": p.string, "paranetDescription": p.string, "nodesAccessPolicy": p.uint8, "minersAccessPolicy": p.uint8, "knowledgeCollectionsSubmissionPolicy": p.uint8}),
    ParanetServiceAdded: event("0xe0d077b7d5c7b63b1e02307f4951bc008a554c4242db9e30f9df56f9f0778753", "ParanetServiceAdded(address,uint256,uint256,address,uint256,uint256)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "paranetServiceKCStorageContract": p.address, "paranetServiceKCTokenId": p.uint256, "paranetServiceKATokenId": p.uint256}),
    ParanetServiceMetadataUpdated: event("0xa456303de286cc7873a44c4c2ca032754a7bb4b2f5bdaa4fceba87350b12ac45", "ParanetServiceMetadataUpdated(address,uint256,uint256,string,string,address[])", {"paranetServiceKCStorageContract": indexed(p.address), "paranetServiceKCTokenId": indexed(p.uint256), "paranetServiceKATokenId": indexed(p.uint256), "newParanetServiceName": p.string, "newParanetServiceDescription": p.string, "newParanetServiceAddresses": p.array(p.address)}),
    ParanetServiceRegistered: event("0x8c08c1c9da03993ddb9c747cd7ef5f01464d70d29083ae67c69982b167df55f3", "ParanetServiceRegistered(address,uint256,uint256,string,string,address[])", {"paranetServiceKCStorageContract": indexed(p.address), "paranetServiceKCTokenId": indexed(p.uint256), "paranetServiceKATokenId": indexed(p.uint256), "paranetServiceName": p.string, "paranetServiceDescription": p.string, "paranetServiceAddresses": p.array(p.address)}),
}

export const functions = {
    addCurator: fun("0x4f64014c", "addCurator(address,uint256,uint256,address)", {"paranetKCStorageContract": p.address, "paranetKnowledgeCollectionTokenId": p.uint256, "paranetKnowledgeAssetTokenId": p.uint256, "curator": p.address}, ),
    addParanetPermissionedMiners: fun("0x17d75cc7", "addParanetPermissionedMiners(address,uint256,uint256,address[])", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "minerAddresses": p.array(p.address)}, ),
    addParanetPermissionedNodes: fun("0xbf2985fd", "addParanetPermissionedNodes(address,uint256,uint256,uint72[])", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "identityIds": p.array(p.uint72)}, ),
    addParanetServices: fun("0x4d520143", "addParanetServices(address,uint256,uint256,(address,uint256,uint256)[])", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "services": p.array(p.struct({"knowledgeCollectionStorageContract": p.address, "knowledgeCollectionTokenId": p.uint256, "knowledgeAssetTokenId": p.uint256}))}, ),
    approvePermissionedMiner: fun("0x0f82919b", "approvePermissionedMiner(address,uint256,uint256,address)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "minerAddress": p.address}, ),
    approvePermissionedNode: fun("0x9855e932", "approvePermissionedNode(address,uint256,uint256,uint72)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "identityId": p.uint72}, ),
    chronos: viewFun("0x65774548", "chronos()", {}, p.address),
    getKnowledgeCollectionLocatorsWithPagination: viewFun("0xecffa0a6", "getKnowledgeCollectionLocatorsWithPagination(bytes32,uint256,uint256)", {"paranetId": p.bytes32, "offset": p.uint256, "limit": p.uint256}, p.array(p.struct({"knowledgeCollectionStorageContract": p.address, "knowledgeCollectionTokenId": p.uint256}))),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    identityStorage: viewFun("0xf11abfd8", "identityStorage()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    paranetKnowledgeCollectionsRegistry: viewFun("0x76d1f3f2", "paranetKnowledgeCollectionsRegistry()", {}, p.address),
    paranetKnowledgeMinersRegistry: viewFun("0x06dfb6c1", "paranetKnowledgeMinersRegistry()", {}, p.address),
    paranetServicesRegistry: viewFun("0x7cbf33bd", "paranetServicesRegistry()", {}, p.address),
    paranetStagingRegistry: viewFun("0x150686f2", "paranetStagingRegistry()", {}, p.address),
    paranetsRegistry: viewFun("0xc20d67ec", "paranetsRegistry()", {}, p.address),
    profileStorage: viewFun("0xf42cb038", "profileStorage()", {}, p.address),
    registerParanet: fun("0xd46e31ce", "registerParanet(address,uint256,uint256,string,string,uint8,uint8,uint8)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "paranetName": p.string, "paranetDescription": p.string, "nodesAccessPolicy": p.uint8, "minersAccessPolicy": p.uint8, "knowledgeCollectionsSubmissionPolicy": p.uint8}, p.bytes32),
    registerParanetService: fun("0x68583508", "registerParanetService(address,uint256,uint256,string,string,address[])", {"paranetServiceKCStorageContract": p.address, "paranetServiceKCTokenId": p.uint256, "paranetServiceKATokenId": p.uint256, "paranetServiceName": p.string, "paranetServiceDescription": p.string, "paranetServiceAddresses": p.array(p.address)}, p.bytes32),
    rejectPermissionedMiner: fun("0xe7c2a90d", "rejectPermissionedMiner(address,uint256,uint256,address)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "minerAddress": p.address}, ),
    rejectPermissionedNode: fun("0x26cd2a4b", "rejectPermissionedNode(address,uint256,uint256,uint72)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "identityId": p.uint72}, ),
    removeCurator: fun("0xee486d18", "removeCurator(address,uint256,uint256,address)", {"paranetKCStorageContract": p.address, "paranetKnowledgeCollectionTokenId": p.uint256, "paranetKnowledgeAssetTokenId": p.uint256, "curator": p.address}, ),
    removeParanetPermissionedMiners: fun("0x164b3147", "removeParanetPermissionedMiners(address,uint256,uint256,address[])", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "minerAddresses": p.array(p.address)}, ),
    removeParanetPermissionedNodes: fun("0x2a1951ea", "removeParanetPermissionedNodes(address,uint256,uint256,uint72[])", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "identityIds": p.array(p.uint72)}, ),
    requestParanetPermissionedMinerAccess: fun("0xa405b1fc", "requestParanetPermissionedMinerAccess(address,uint256,uint256)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256}, ),
    requestParanetPermissionedNodeAccess: fun("0x084a2ea6", "requestParanetPermissionedNodeAccess(address,uint256,uint256)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256}, ),
    reviewKnowledgeCollection: fun("0xab370327", "reviewKnowledgeCollection(address,uint256,uint256,address,uint256,bool)", {"paranetKCStorageContract": p.address, "paranetKnowledgeCollectionTokenId": p.uint256, "paranetKnowledgeAssetTokenId": p.uint256, "knowledgeCollectionStorageContract": p.address, "knowledgeCollectionTokenId": p.uint256, "accepted": p.bool}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    stageKnowledgeCollection: fun("0x9057b900", "stageKnowledgeCollection(address,uint256,uint256,address,uint256)", {"paranetKCStorageContract": p.address, "paranetKnowledgeCollectionTokenId": p.uint256, "paranetKnowledgeAssetTokenId": p.uint256, "knowledgeCollectionStorageContract": p.address, "knowledgeCollectionTokenId": p.uint256}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    submitKnowledgeCollection: fun("0x39cecb02", "submitKnowledgeCollection(address,uint256,uint256,address,uint256)", {"paranetKCStorageContract": p.address, "paranetKnowledgeCollectionTokenId": p.uint256, "paranetKnowledgeAssetTokenId": p.uint256, "knowledgeCollectionStorageContract": p.address, "knowledgeCollectionTokenId": p.uint256}, ),
    updateParanetMetadata: fun("0x90d23826", "updateParanetMetadata(address,uint256,uint256,string,string)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "paranetName": p.string, "paranetDescription": p.string}, ),
    updateParanetServiceMetadata: fun("0x8d7b7652", "updateParanetServiceMetadata(address,uint256,uint256,string,string,address[])", {"paranetServiceKCStorageContract": p.address, "paranetServiceKCTokenId": p.uint256, "paranetServiceKATokenId": p.uint256, "paranetServiceName": p.string, "paranetServiceDescription": p.string, "paranetServiceAddresses": p.array(p.address)}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    chronos() {
        return this.eth_call(functions.chronos, {})
    }

    getKnowledgeCollectionLocatorsWithPagination(paranetId: GetKnowledgeCollectionLocatorsWithPaginationParams["paranetId"], offset: GetKnowledgeCollectionLocatorsWithPaginationParams["offset"], limit: GetKnowledgeCollectionLocatorsWithPaginationParams["limit"]) {
        return this.eth_call(functions.getKnowledgeCollectionLocatorsWithPagination, {paranetId, offset, limit})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    identityStorage() {
        return this.eth_call(functions.identityStorage, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    paranetKnowledgeCollectionsRegistry() {
        return this.eth_call(functions.paranetKnowledgeCollectionsRegistry, {})
    }

    paranetKnowledgeMinersRegistry() {
        return this.eth_call(functions.paranetKnowledgeMinersRegistry, {})
    }

    paranetServicesRegistry() {
        return this.eth_call(functions.paranetServicesRegistry, {})
    }

    paranetStagingRegistry() {
        return this.eth_call(functions.paranetStagingRegistry, {})
    }

    paranetsRegistry() {
        return this.eth_call(functions.paranetsRegistry, {})
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
}

/// Event types
export type KnowledgeCollectionSubmittedToParanetEventArgs = EParams<typeof events.KnowledgeCollectionSubmittedToParanet>
export type ParanetIncetivesPoolDeployedEventArgs = EParams<typeof events.ParanetIncetivesPoolDeployed>
export type ParanetMetadataUpdatedEventArgs = EParams<typeof events.ParanetMetadataUpdated>
export type ParanetPermissionedMinerAccessRequestAcceptedEventArgs = EParams<typeof events.ParanetPermissionedMinerAccessRequestAccepted>
export type ParanetPermissionedMinerAccessRequestCreatedEventArgs = EParams<typeof events.ParanetPermissionedMinerAccessRequestCreated>
export type ParanetPermissionedMinerAccessRequestRejectedEventArgs = EParams<typeof events.ParanetPermissionedMinerAccessRequestRejected>
export type ParanetPermissionedMinerAddedEventArgs = EParams<typeof events.ParanetPermissionedMinerAdded>
export type ParanetPermissionedMinerRemovedEventArgs = EParams<typeof events.ParanetPermissionedMinerRemoved>
export type ParanetPermissionedNodeAddedEventArgs = EParams<typeof events.ParanetPermissionedNodeAdded>
export type ParanetPermissionedNodeJoinRequestAcceptedEventArgs = EParams<typeof events.ParanetPermissionedNodeJoinRequestAccepted>
export type ParanetPermissionedNodeJoinRequestCreatedEventArgs = EParams<typeof events.ParanetPermissionedNodeJoinRequestCreated>
export type ParanetPermissionedNodeJoinRequestRejectedEventArgs = EParams<typeof events.ParanetPermissionedNodeJoinRequestRejected>
export type ParanetPermissionedNodeRemovedEventArgs = EParams<typeof events.ParanetPermissionedNodeRemoved>
export type ParanetRegisteredEventArgs = EParams<typeof events.ParanetRegistered>
export type ParanetServiceAddedEventArgs = EParams<typeof events.ParanetServiceAdded>
export type ParanetServiceMetadataUpdatedEventArgs = EParams<typeof events.ParanetServiceMetadataUpdated>
export type ParanetServiceRegisteredEventArgs = EParams<typeof events.ParanetServiceRegistered>

/// Function types
export type AddCuratorParams = FunctionArguments<typeof functions.addCurator>
export type AddCuratorReturn = FunctionReturn<typeof functions.addCurator>

export type AddParanetPermissionedMinersParams = FunctionArguments<typeof functions.addParanetPermissionedMiners>
export type AddParanetPermissionedMinersReturn = FunctionReturn<typeof functions.addParanetPermissionedMiners>

export type AddParanetPermissionedNodesParams = FunctionArguments<typeof functions.addParanetPermissionedNodes>
export type AddParanetPermissionedNodesReturn = FunctionReturn<typeof functions.addParanetPermissionedNodes>

export type AddParanetServicesParams = FunctionArguments<typeof functions.addParanetServices>
export type AddParanetServicesReturn = FunctionReturn<typeof functions.addParanetServices>

export type ApprovePermissionedMinerParams = FunctionArguments<typeof functions.approvePermissionedMiner>
export type ApprovePermissionedMinerReturn = FunctionReturn<typeof functions.approvePermissionedMiner>

export type ApprovePermissionedNodeParams = FunctionArguments<typeof functions.approvePermissionedNode>
export type ApprovePermissionedNodeReturn = FunctionReturn<typeof functions.approvePermissionedNode>

export type ChronosParams = FunctionArguments<typeof functions.chronos>
export type ChronosReturn = FunctionReturn<typeof functions.chronos>

export type GetKnowledgeCollectionLocatorsWithPaginationParams = FunctionArguments<typeof functions.getKnowledgeCollectionLocatorsWithPagination>
export type GetKnowledgeCollectionLocatorsWithPaginationReturn = FunctionReturn<typeof functions.getKnowledgeCollectionLocatorsWithPagination>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IdentityStorageParams = FunctionArguments<typeof functions.identityStorage>
export type IdentityStorageReturn = FunctionReturn<typeof functions.identityStorage>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParanetKnowledgeCollectionsRegistryParams = FunctionArguments<typeof functions.paranetKnowledgeCollectionsRegistry>
export type ParanetKnowledgeCollectionsRegistryReturn = FunctionReturn<typeof functions.paranetKnowledgeCollectionsRegistry>

export type ParanetKnowledgeMinersRegistryParams = FunctionArguments<typeof functions.paranetKnowledgeMinersRegistry>
export type ParanetKnowledgeMinersRegistryReturn = FunctionReturn<typeof functions.paranetKnowledgeMinersRegistry>

export type ParanetServicesRegistryParams = FunctionArguments<typeof functions.paranetServicesRegistry>
export type ParanetServicesRegistryReturn = FunctionReturn<typeof functions.paranetServicesRegistry>

export type ParanetStagingRegistryParams = FunctionArguments<typeof functions.paranetStagingRegistry>
export type ParanetStagingRegistryReturn = FunctionReturn<typeof functions.paranetStagingRegistry>

export type ParanetsRegistryParams = FunctionArguments<typeof functions.paranetsRegistry>
export type ParanetsRegistryReturn = FunctionReturn<typeof functions.paranetsRegistry>

export type ProfileStorageParams = FunctionArguments<typeof functions.profileStorage>
export type ProfileStorageReturn = FunctionReturn<typeof functions.profileStorage>

export type RegisterParanetParams = FunctionArguments<typeof functions.registerParanet>
export type RegisterParanetReturn = FunctionReturn<typeof functions.registerParanet>

export type RegisterParanetServiceParams = FunctionArguments<typeof functions.registerParanetService>
export type RegisterParanetServiceReturn = FunctionReturn<typeof functions.registerParanetService>

export type RejectPermissionedMinerParams = FunctionArguments<typeof functions.rejectPermissionedMiner>
export type RejectPermissionedMinerReturn = FunctionReturn<typeof functions.rejectPermissionedMiner>

export type RejectPermissionedNodeParams = FunctionArguments<typeof functions.rejectPermissionedNode>
export type RejectPermissionedNodeReturn = FunctionReturn<typeof functions.rejectPermissionedNode>

export type RemoveCuratorParams = FunctionArguments<typeof functions.removeCurator>
export type RemoveCuratorReturn = FunctionReturn<typeof functions.removeCurator>

export type RemoveParanetPermissionedMinersParams = FunctionArguments<typeof functions.removeParanetPermissionedMiners>
export type RemoveParanetPermissionedMinersReturn = FunctionReturn<typeof functions.removeParanetPermissionedMiners>

export type RemoveParanetPermissionedNodesParams = FunctionArguments<typeof functions.removeParanetPermissionedNodes>
export type RemoveParanetPermissionedNodesReturn = FunctionReturn<typeof functions.removeParanetPermissionedNodes>

export type RequestParanetPermissionedMinerAccessParams = FunctionArguments<typeof functions.requestParanetPermissionedMinerAccess>
export type RequestParanetPermissionedMinerAccessReturn = FunctionReturn<typeof functions.requestParanetPermissionedMinerAccess>

export type RequestParanetPermissionedNodeAccessParams = FunctionArguments<typeof functions.requestParanetPermissionedNodeAccess>
export type RequestParanetPermissionedNodeAccessReturn = FunctionReturn<typeof functions.requestParanetPermissionedNodeAccess>

export type ReviewKnowledgeCollectionParams = FunctionArguments<typeof functions.reviewKnowledgeCollection>
export type ReviewKnowledgeCollectionReturn = FunctionReturn<typeof functions.reviewKnowledgeCollection>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StageKnowledgeCollectionParams = FunctionArguments<typeof functions.stageKnowledgeCollection>
export type StageKnowledgeCollectionReturn = FunctionReturn<typeof functions.stageKnowledgeCollection>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type SubmitKnowledgeCollectionParams = FunctionArguments<typeof functions.submitKnowledgeCollection>
export type SubmitKnowledgeCollectionReturn = FunctionReturn<typeof functions.submitKnowledgeCollection>

export type UpdateParanetMetadataParams = FunctionArguments<typeof functions.updateParanetMetadata>
export type UpdateParanetMetadataReturn = FunctionReturn<typeof functions.updateParanetMetadata>

export type UpdateParanetServiceMetadataParams = FunctionArguments<typeof functions.updateParanetServiceMetadata>
export type UpdateParanetServiceMetadataReturn = FunctionReturn<typeof functions.updateParanetServiceMetadata>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

