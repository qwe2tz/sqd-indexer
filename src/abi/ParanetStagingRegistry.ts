import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    CuratorAdded: event("0x8962d1202273be9fd849eccab8e48213621271370936e145e8b83d6458fe36c3", "CuratorAdded(bytes32,address)", {"paranetId": indexed(p.bytes32), "curator": indexed(p.address)}),
    CuratorRemoved: event("0x5d2bd4ff395fb27e47322194ba420c824c8a0fe9a00f6af50407122e96cc1a0f", "CuratorRemoved(bytes32,address)", {"paranetId": indexed(p.bytes32), "curator": indexed(p.address)}),
    KnowledgeCollectionReviewed: event("0x05359febdf3f4077057dcec99d7e59ecdae3f47829ec2070285081cc160b1fdb", "KnowledgeCollectionReviewed(bytes32,bytes32,bool)", {"paranetId": indexed(p.bytes32), "knowledgeCollectionId": indexed(p.bytes32), "accepted": p.bool}),
    KnowledgeCollectionStaged: event("0x54a485d6a8c689d10a2cf8191528558930b7bf2153eb86c49cbb684c65f876fb", "KnowledgeCollectionStaged(bytes32,bytes32,address)", {"paranetId": indexed(p.bytes32), "knowledgeCollectionId": indexed(p.bytes32), "submitter": indexed(p.address)}),
}

export const functions = {
    addCurator: fun("0xaaa5bc16", "addCurator(bytes32,address)", {"paranetId": p.bytes32, "curator": p.address}, ),
    collectionSubmitters: viewFun("0xf102a126", "collectionSubmitters(bytes32,bytes32)", {"_0": p.bytes32, "_1": p.bytes32}, p.address),
    curators: viewFun("0xb64cfd31", "curators(bytes32,address)", {"_0": p.bytes32, "_1": p.address}, p.bool),
    getAllParanetCurators: viewFun("0xce4e8081", "getAllParanetCurators(bytes32)", {"paranetId": p.bytes32}, p.array(p.address)),
    getKnowledgeCollectionStatus: viewFun("0x1ff6d7bf", "getKnowledgeCollectionStatus(bytes32,bytes32)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32}, p.uint8),
    getKnowledgeCollectionSubmitter: viewFun("0x929983b2", "getKnowledgeCollectionSubmitter(bytes32,bytes32)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32}, p.address),
    getPendingCollections: viewFun("0xb35a40a5", "getPendingCollections(bytes32,uint256,uint256)", {"paranetId": p.bytes32, "offset": p.uint256, "limit": p.uint256}, {"collections": p.array(p.struct({"knowledgeCollectionId": p.bytes32, "submitter": p.address, "status": p.uint8})), "total": p.uint256}),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    isCurator: viewFun("0xca45bd77", "isCurator(bytes32,address)", {"paranetId": p.bytes32, "account": p.address}, p.bool),
    isKnowledgeCollectionApproved: viewFun("0xd4c3bffa", "isKnowledgeCollectionApproved(bytes32,bytes32)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32}, p.bool),
    isKnowledgeCollectionStaged: viewFun("0xdf43ae79", "isKnowledgeCollectionStaged(bytes32,bytes32)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    paranetCuratorIndexes: viewFun("0x4dc3de8e", "paranetCuratorIndexes(bytes32,address)", {"_0": p.bytes32, "_1": p.address}, p.uint256),
    paranetCurators: viewFun("0xf682edf9", "paranetCurators(bytes32,uint256)", {"_0": p.bytes32, "_1": p.uint256}, p.address),
    removeCurator: fun("0x1d829b8b", "removeCurator(bytes32,address)", {"paranetId": p.bytes32, "curator": p.address}, ),
    reviewKnowledgeCollection: fun("0x9cc26648", "reviewKnowledgeCollection(bytes32,bytes32,bool)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32, "accepted": p.bool}, ),
    stageKnowledgeCollection: fun("0xc1e69561", "stageKnowledgeCollection(bytes32,bytes32,address)", {"paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32, "submitter": p.address}, ),
    stagedCollections: viewFun("0x9a69bb87", "stagedCollections(bytes32,bytes32)", {"_0": p.bytes32, "_1": p.bytes32}, p.uint8),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    collectionSubmitters(_0: CollectionSubmittersParams["_0"], _1: CollectionSubmittersParams["_1"]) {
        return this.eth_call(functions.collectionSubmitters, {_0, _1})
    }

    curators(_0: CuratorsParams["_0"], _1: CuratorsParams["_1"]) {
        return this.eth_call(functions.curators, {_0, _1})
    }

    getAllParanetCurators(paranetId: GetAllParanetCuratorsParams["paranetId"]) {
        return this.eth_call(functions.getAllParanetCurators, {paranetId})
    }

    getKnowledgeCollectionStatus(paranetId: GetKnowledgeCollectionStatusParams["paranetId"], knowledgeCollectionId: GetKnowledgeCollectionStatusParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.getKnowledgeCollectionStatus, {paranetId, knowledgeCollectionId})
    }

    getKnowledgeCollectionSubmitter(paranetId: GetKnowledgeCollectionSubmitterParams["paranetId"], knowledgeCollectionId: GetKnowledgeCollectionSubmitterParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.getKnowledgeCollectionSubmitter, {paranetId, knowledgeCollectionId})
    }

    getPendingCollections(paranetId: GetPendingCollectionsParams["paranetId"], offset: GetPendingCollectionsParams["offset"], limit: GetPendingCollectionsParams["limit"]) {
        return this.eth_call(functions.getPendingCollections, {paranetId, offset, limit})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isCurator(paranetId: IsCuratorParams["paranetId"], account: IsCuratorParams["account"]) {
        return this.eth_call(functions.isCurator, {paranetId, account})
    }

    isKnowledgeCollectionApproved(paranetId: IsKnowledgeCollectionApprovedParams["paranetId"], knowledgeCollectionId: IsKnowledgeCollectionApprovedParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.isKnowledgeCollectionApproved, {paranetId, knowledgeCollectionId})
    }

    isKnowledgeCollectionStaged(paranetId: IsKnowledgeCollectionStagedParams["paranetId"], knowledgeCollectionId: IsKnowledgeCollectionStagedParams["knowledgeCollectionId"]) {
        return this.eth_call(functions.isKnowledgeCollectionStaged, {paranetId, knowledgeCollectionId})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    paranetCuratorIndexes(_0: ParanetCuratorIndexesParams["_0"], _1: ParanetCuratorIndexesParams["_1"]) {
        return this.eth_call(functions.paranetCuratorIndexes, {_0, _1})
    }

    paranetCurators(_0: ParanetCuratorsParams["_0"], _1: ParanetCuratorsParams["_1"]) {
        return this.eth_call(functions.paranetCurators, {_0, _1})
    }

    stagedCollections(_0: StagedCollectionsParams["_0"], _1: StagedCollectionsParams["_1"]) {
        return this.eth_call(functions.stagedCollections, {_0, _1})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type CuratorAddedEventArgs = EParams<typeof events.CuratorAdded>
export type CuratorRemovedEventArgs = EParams<typeof events.CuratorRemoved>
export type KnowledgeCollectionReviewedEventArgs = EParams<typeof events.KnowledgeCollectionReviewed>
export type KnowledgeCollectionStagedEventArgs = EParams<typeof events.KnowledgeCollectionStaged>

/// Function types
export type AddCuratorParams = FunctionArguments<typeof functions.addCurator>
export type AddCuratorReturn = FunctionReturn<typeof functions.addCurator>

export type CollectionSubmittersParams = FunctionArguments<typeof functions.collectionSubmitters>
export type CollectionSubmittersReturn = FunctionReturn<typeof functions.collectionSubmitters>

export type CuratorsParams = FunctionArguments<typeof functions.curators>
export type CuratorsReturn = FunctionReturn<typeof functions.curators>

export type GetAllParanetCuratorsParams = FunctionArguments<typeof functions.getAllParanetCurators>
export type GetAllParanetCuratorsReturn = FunctionReturn<typeof functions.getAllParanetCurators>

export type GetKnowledgeCollectionStatusParams = FunctionArguments<typeof functions.getKnowledgeCollectionStatus>
export type GetKnowledgeCollectionStatusReturn = FunctionReturn<typeof functions.getKnowledgeCollectionStatus>

export type GetKnowledgeCollectionSubmitterParams = FunctionArguments<typeof functions.getKnowledgeCollectionSubmitter>
export type GetKnowledgeCollectionSubmitterReturn = FunctionReturn<typeof functions.getKnowledgeCollectionSubmitter>

export type GetPendingCollectionsParams = FunctionArguments<typeof functions.getPendingCollections>
export type GetPendingCollectionsReturn = FunctionReturn<typeof functions.getPendingCollections>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IsCuratorParams = FunctionArguments<typeof functions.isCurator>
export type IsCuratorReturn = FunctionReturn<typeof functions.isCurator>

export type IsKnowledgeCollectionApprovedParams = FunctionArguments<typeof functions.isKnowledgeCollectionApproved>
export type IsKnowledgeCollectionApprovedReturn = FunctionReturn<typeof functions.isKnowledgeCollectionApproved>

export type IsKnowledgeCollectionStagedParams = FunctionArguments<typeof functions.isKnowledgeCollectionStaged>
export type IsKnowledgeCollectionStagedReturn = FunctionReturn<typeof functions.isKnowledgeCollectionStaged>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParanetCuratorIndexesParams = FunctionArguments<typeof functions.paranetCuratorIndexes>
export type ParanetCuratorIndexesReturn = FunctionReturn<typeof functions.paranetCuratorIndexes>

export type ParanetCuratorsParams = FunctionArguments<typeof functions.paranetCurators>
export type ParanetCuratorsReturn = FunctionReturn<typeof functions.paranetCurators>

export type RemoveCuratorParams = FunctionArguments<typeof functions.removeCurator>
export type RemoveCuratorReturn = FunctionReturn<typeof functions.removeCurator>

export type ReviewKnowledgeCollectionParams = FunctionArguments<typeof functions.reviewKnowledgeCollection>
export type ReviewKnowledgeCollectionReturn = FunctionReturn<typeof functions.reviewKnowledgeCollection>

export type StageKnowledgeCollectionParams = FunctionArguments<typeof functions.stageKnowledgeCollection>
export type StageKnowledgeCollectionReturn = FunctionReturn<typeof functions.stageKnowledgeCollection>

export type StagedCollectionsParams = FunctionArguments<typeof functions.stagedCollections>
export type StagedCollectionsReturn = FunctionReturn<typeof functions.stagedCollections>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

