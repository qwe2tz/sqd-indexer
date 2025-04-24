import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    addCumulativeTracSpent: fun("0xab989e61", "addCumulativeTracSpent(address,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "addedTracSpent": p.uint96}, ),
    addSubmittedKnowledgeCollection: fun("0xe2bf8afb", "addSubmittedKnowledgeCollection(address,bytes32,bytes32)", {"miner": p.address, "paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32}, ),
    addTotalTracSpent: fun("0xcfcc8a6f", "addTotalTracSpent(address,uint96)", {"miner": p.address, "addedTracSpent": p.uint96}, ),
    addUnrewardedTracSpent: fun("0x56ff9eae", "addUnrewardedTracSpent(address,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "addedUnrewardedTracSpent": p.uint96}, ),
    addUpdatingKnowledgeCollectionState: fun("0x3e638ae5", "addUpdatingKnowledgeCollectionState(address,bytes32,address,uint256,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "knowledgeCollectionStorageContract": p.address, "knowledgeCollectionId": p.uint256, "merkleRoot": p.bytes32, "updateTokenAmount": p.uint96}, ),
    addUpdatingKnowledgeCollectionUpdateTokenAmount: fun("0xea12942e", "addUpdatingKnowledgeCollectionUpdateTokenAmount(address,bytes32,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "knowledgeCollectionStateId": p.bytes32, "addedUpdateTokenAmount": p.uint96}, ),
    addcumulativeAwardedToken: fun("0xffae52bd", "addcumulativeAwardedToken(address,bytes32,uint256)", {"miner": p.address, "paranetId": p.bytes32, "addedcumulativeAwardedToken": p.uint256}, ),
    decrementTotalSubmittedKnowledgeCollectionsCount: fun("0x6ad14abe", "decrementTotalSubmittedKnowledgeCollectionsCount(address)", {"miner": p.address}, ),
    deleteKnowledgeMiner: fun("0xff09c84c", "deleteKnowledgeMiner(address)", {"miner": p.address}, ),
    getCumulativeTracSpent: viewFun("0xe64c1340", "getCumulativeTracSpent(address,bytes32)", {"miner": p.address, "paranetId": p.bytes32}, p.uint96),
    getKnowledgeMinerMetadata: viewFun("0xed2822e9", "getKnowledgeMinerMetadata(address)", {"addr": p.address}, p.struct({"addr": p.address, "totalTracSpent": p.uint96, "totalSubmittedKnowledgeCollectionsCount": p.uint256})),
    'getSubmittedKnowledgeCollections(address,bytes32)': viewFun("0x648be34f", "getSubmittedKnowledgeCollections(address,bytes32)", {"miner": p.address, "paranetId": p.bytes32}, p.array(p.bytes32)),
    'getSubmittedKnowledgeCollections(address,bytes32,uint256,uint256)': viewFun("0x70731827", "getSubmittedKnowledgeCollections(address,bytes32,uint256,uint256)", {"miner": p.address, "paranetId": p.bytes32, "start": p.uint256, "end": p.uint256}, p.array(p.bytes32)),
    getTotalSubmittedKnowledgeCollectionsCount: viewFun("0x54fe80bb", "getTotalSubmittedKnowledgeCollectionsCount(address)", {"miner": p.address}, p.uint256),
    getTotalTracSpent: viewFun("0xbe817565", "getTotalTracSpent(address)", {"miner": p.address}, p.uint96),
    getUnrewardedTracSpent: viewFun("0xd0e86214", "getUnrewardedTracSpent(address,bytes32)", {"miner": p.address, "paranetId": p.bytes32}, p.uint96),
    'getUpdatingKnowledgeCollectionStates(address,bytes32)': viewFun("0x00cf84b8", "getUpdatingKnowledgeCollectionStates(address,bytes32)", {"miner": p.address, "paranetId": p.bytes32}, p.array(p.struct({"knowledgeCollectionStorageContract": p.address, "knowledgeCollectionId": p.uint256, "merkleRoot": p.bytes32, "updateTokenAmount": p.uint96}))),
    'getUpdatingKnowledgeCollectionStates(address,bytes32,uint256,uint256)': viewFun("0x88af6558", "getUpdatingKnowledgeCollectionStates(address,bytes32,uint256,uint256)", {"miner": p.address, "paranetId": p.bytes32, "start": p.uint256, "end": p.uint256}, p.array(p.struct({"knowledgeCollectionStorageContract": p.address, "knowledgeCollectionId": p.uint256, "merkleRoot": p.bytes32, "updateTokenAmount": p.uint96}))),
    getcumulativeAwardedToken: viewFun("0xf6346917", "getcumulativeAwardedToken(address,bytes32)", {"miner": p.address, "paranetId": p.bytes32}, p.uint256),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    incrementTotalSubmittedKnowledgeCollectionsCount: fun("0xda9c0662", "incrementTotalSubmittedKnowledgeCollectionsCount(address)", {"miner": p.address}, ),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    knowledgeMinerExists: viewFun("0x17544c8a", "knowledgeMinerExists(address)", {"miner": p.address}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    paranetsRegistry: viewFun("0xc20d67ec", "paranetsRegistry()", {}, p.address),
    registerKnowledgeMiner: fun("0x70a8e5c2", "registerKnowledgeMiner(address)", {"miner": p.address}, ),
    removeSubmittedKnowledgeCollection: fun("0x80acf194", "removeSubmittedKnowledgeCollection(address,bytes32,bytes32)", {"miner": p.address, "paranetId": p.bytes32, "knowledgeCollectionId": p.bytes32}, ),
    setCumulativeTracSpent: fun("0x82864a8c", "setCumulativeTracSpent(address,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "cumulativeTracSpent": p.uint96}, ),
    setTotalSubmittedKnowledgeCollectionsCount: fun("0xd1b6b5e4", "setTotalSubmittedKnowledgeCollectionsCount(address,uint256)", {"miner": p.address, "totalSubmittedKnowledgeCollectionsCount": p.uint256}, ),
    setTotalTracSpent: fun("0xc8611ca4", "setTotalTracSpent(address,uint96)", {"miner": p.address, "totalTracSpent": p.uint96}, ),
    setUnrewardedTracSpent: fun("0x72f85de3", "setUnrewardedTracSpent(address,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "unrewardedTracSpent": p.uint96}, ),
    setUpdatingKnowledgeCollectionUpdateTokenAmount: fun("0x7f29782c", "setUpdatingKnowledgeCollectionUpdateTokenAmount(address,bytes32,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "knowledgeCollectionStateId": p.bytes32, "updateTokenAmount": p.uint96}, ),
    setcumulativeAwardedToken: fun("0xf1c36755", "setcumulativeAwardedToken(address,bytes32,uint256)", {"miner": p.address, "paranetId": p.bytes32, "cumulativeAwardedToken": p.uint256}, ),
    subCumulativeTracSpent: fun("0xf73871a8", "subCumulativeTracSpent(address,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "subtractedTracSpent": p.uint96}, ),
    subTotalTracSpent: fun("0x6342c5da", "subTotalTracSpent(address,uint96)", {"miner": p.address, "subtractedTracSpent": p.uint96}, ),
    subUnrewardedTracSpent: fun("0x383fcc10", "subUnrewardedTracSpent(address,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "subtractedUnrewardedTracSpent": p.uint96}, ),
    subUpdatingKnowledgeCollectionUpdateTokenAmount: fun("0x12280bea", "subUpdatingKnowledgeCollectionUpdateTokenAmount(address,bytes32,bytes32,uint96)", {"miner": p.address, "paranetId": p.bytes32, "knowledgeCollectionStateId": p.bytes32, "subtractedUpdateTokenAmount": p.uint96}, ),
    subcumulativeAwardedToken: fun("0x616a8e2d", "subcumulativeAwardedToken(address,bytes32,uint256)", {"miner": p.address, "paranetId": p.bytes32, "subtractedcumulativeAwardedToken": p.uint256}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    getCumulativeTracSpent(miner: GetCumulativeTracSpentParams["miner"], paranetId: GetCumulativeTracSpentParams["paranetId"]) {
        return this.eth_call(functions.getCumulativeTracSpent, {miner, paranetId})
    }

    getKnowledgeMinerMetadata(addr: GetKnowledgeMinerMetadataParams["addr"]) {
        return this.eth_call(functions.getKnowledgeMinerMetadata, {addr})
    }

    'getSubmittedKnowledgeCollections(address,bytes32)'(miner: GetSubmittedKnowledgeCollectionsParams_0["miner"], paranetId: GetSubmittedKnowledgeCollectionsParams_0["paranetId"]) {
        return this.eth_call(functions['getSubmittedKnowledgeCollections(address,bytes32)'], {miner, paranetId})
    }

    'getSubmittedKnowledgeCollections(address,bytes32,uint256,uint256)'(miner: GetSubmittedKnowledgeCollectionsParams_1["miner"], paranetId: GetSubmittedKnowledgeCollectionsParams_1["paranetId"], start: GetSubmittedKnowledgeCollectionsParams_1["start"], end: GetSubmittedKnowledgeCollectionsParams_1["end"]) {
        return this.eth_call(functions['getSubmittedKnowledgeCollections(address,bytes32,uint256,uint256)'], {miner, paranetId, start, end})
    }

    getTotalSubmittedKnowledgeCollectionsCount(miner: GetTotalSubmittedKnowledgeCollectionsCountParams["miner"]) {
        return this.eth_call(functions.getTotalSubmittedKnowledgeCollectionsCount, {miner})
    }

    getTotalTracSpent(miner: GetTotalTracSpentParams["miner"]) {
        return this.eth_call(functions.getTotalTracSpent, {miner})
    }

    getUnrewardedTracSpent(miner: GetUnrewardedTracSpentParams["miner"], paranetId: GetUnrewardedTracSpentParams["paranetId"]) {
        return this.eth_call(functions.getUnrewardedTracSpent, {miner, paranetId})
    }

    'getUpdatingKnowledgeCollectionStates(address,bytes32)'(miner: GetUpdatingKnowledgeCollectionStatesParams_0["miner"], paranetId: GetUpdatingKnowledgeCollectionStatesParams_0["paranetId"]) {
        return this.eth_call(functions['getUpdatingKnowledgeCollectionStates(address,bytes32)'], {miner, paranetId})
    }

    'getUpdatingKnowledgeCollectionStates(address,bytes32,uint256,uint256)'(miner: GetUpdatingKnowledgeCollectionStatesParams_1["miner"], paranetId: GetUpdatingKnowledgeCollectionStatesParams_1["paranetId"], start: GetUpdatingKnowledgeCollectionStatesParams_1["start"], end: GetUpdatingKnowledgeCollectionStatesParams_1["end"]) {
        return this.eth_call(functions['getUpdatingKnowledgeCollectionStates(address,bytes32,uint256,uint256)'], {miner, paranetId, start, end})
    }

    getcumulativeAwardedToken(miner: GetcumulativeAwardedTokenParams["miner"], paranetId: GetcumulativeAwardedTokenParams["paranetId"]) {
        return this.eth_call(functions.getcumulativeAwardedToken, {miner, paranetId})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    knowledgeMinerExists(miner: KnowledgeMinerExistsParams["miner"]) {
        return this.eth_call(functions.knowledgeMinerExists, {miner})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    paranetsRegistry() {
        return this.eth_call(functions.paranetsRegistry, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Function types
export type AddCumulativeTracSpentParams = FunctionArguments<typeof functions.addCumulativeTracSpent>
export type AddCumulativeTracSpentReturn = FunctionReturn<typeof functions.addCumulativeTracSpent>

export type AddSubmittedKnowledgeCollectionParams = FunctionArguments<typeof functions.addSubmittedKnowledgeCollection>
export type AddSubmittedKnowledgeCollectionReturn = FunctionReturn<typeof functions.addSubmittedKnowledgeCollection>

export type AddTotalTracSpentParams = FunctionArguments<typeof functions.addTotalTracSpent>
export type AddTotalTracSpentReturn = FunctionReturn<typeof functions.addTotalTracSpent>

export type AddUnrewardedTracSpentParams = FunctionArguments<typeof functions.addUnrewardedTracSpent>
export type AddUnrewardedTracSpentReturn = FunctionReturn<typeof functions.addUnrewardedTracSpent>

export type AddUpdatingKnowledgeCollectionStateParams = FunctionArguments<typeof functions.addUpdatingKnowledgeCollectionState>
export type AddUpdatingKnowledgeCollectionStateReturn = FunctionReturn<typeof functions.addUpdatingKnowledgeCollectionState>

export type AddUpdatingKnowledgeCollectionUpdateTokenAmountParams = FunctionArguments<typeof functions.addUpdatingKnowledgeCollectionUpdateTokenAmount>
export type AddUpdatingKnowledgeCollectionUpdateTokenAmountReturn = FunctionReturn<typeof functions.addUpdatingKnowledgeCollectionUpdateTokenAmount>

export type AddcumulativeAwardedTokenParams = FunctionArguments<typeof functions.addcumulativeAwardedToken>
export type AddcumulativeAwardedTokenReturn = FunctionReturn<typeof functions.addcumulativeAwardedToken>

export type DecrementTotalSubmittedKnowledgeCollectionsCountParams = FunctionArguments<typeof functions.decrementTotalSubmittedKnowledgeCollectionsCount>
export type DecrementTotalSubmittedKnowledgeCollectionsCountReturn = FunctionReturn<typeof functions.decrementTotalSubmittedKnowledgeCollectionsCount>

export type DeleteKnowledgeMinerParams = FunctionArguments<typeof functions.deleteKnowledgeMiner>
export type DeleteKnowledgeMinerReturn = FunctionReturn<typeof functions.deleteKnowledgeMiner>

export type GetCumulativeTracSpentParams = FunctionArguments<typeof functions.getCumulativeTracSpent>
export type GetCumulativeTracSpentReturn = FunctionReturn<typeof functions.getCumulativeTracSpent>

export type GetKnowledgeMinerMetadataParams = FunctionArguments<typeof functions.getKnowledgeMinerMetadata>
export type GetKnowledgeMinerMetadataReturn = FunctionReturn<typeof functions.getKnowledgeMinerMetadata>

export type GetSubmittedKnowledgeCollectionsParams_0 = FunctionArguments<typeof functions['getSubmittedKnowledgeCollections(address,bytes32)']>
export type GetSubmittedKnowledgeCollectionsReturn_0 = FunctionReturn<typeof functions['getSubmittedKnowledgeCollections(address,bytes32)']>

export type GetSubmittedKnowledgeCollectionsParams_1 = FunctionArguments<typeof functions['getSubmittedKnowledgeCollections(address,bytes32,uint256,uint256)']>
export type GetSubmittedKnowledgeCollectionsReturn_1 = FunctionReturn<typeof functions['getSubmittedKnowledgeCollections(address,bytes32,uint256,uint256)']>

export type GetTotalSubmittedKnowledgeCollectionsCountParams = FunctionArguments<typeof functions.getTotalSubmittedKnowledgeCollectionsCount>
export type GetTotalSubmittedKnowledgeCollectionsCountReturn = FunctionReturn<typeof functions.getTotalSubmittedKnowledgeCollectionsCount>

export type GetTotalTracSpentParams = FunctionArguments<typeof functions.getTotalTracSpent>
export type GetTotalTracSpentReturn = FunctionReturn<typeof functions.getTotalTracSpent>

export type GetUnrewardedTracSpentParams = FunctionArguments<typeof functions.getUnrewardedTracSpent>
export type GetUnrewardedTracSpentReturn = FunctionReturn<typeof functions.getUnrewardedTracSpent>

export type GetUpdatingKnowledgeCollectionStatesParams_0 = FunctionArguments<typeof functions['getUpdatingKnowledgeCollectionStates(address,bytes32)']>
export type GetUpdatingKnowledgeCollectionStatesReturn_0 = FunctionReturn<typeof functions['getUpdatingKnowledgeCollectionStates(address,bytes32)']>

export type GetUpdatingKnowledgeCollectionStatesParams_1 = FunctionArguments<typeof functions['getUpdatingKnowledgeCollectionStates(address,bytes32,uint256,uint256)']>
export type GetUpdatingKnowledgeCollectionStatesReturn_1 = FunctionReturn<typeof functions['getUpdatingKnowledgeCollectionStates(address,bytes32,uint256,uint256)']>

export type GetcumulativeAwardedTokenParams = FunctionArguments<typeof functions.getcumulativeAwardedToken>
export type GetcumulativeAwardedTokenReturn = FunctionReturn<typeof functions.getcumulativeAwardedToken>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IncrementTotalSubmittedKnowledgeCollectionsCountParams = FunctionArguments<typeof functions.incrementTotalSubmittedKnowledgeCollectionsCount>
export type IncrementTotalSubmittedKnowledgeCollectionsCountReturn = FunctionReturn<typeof functions.incrementTotalSubmittedKnowledgeCollectionsCount>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type KnowledgeMinerExistsParams = FunctionArguments<typeof functions.knowledgeMinerExists>
export type KnowledgeMinerExistsReturn = FunctionReturn<typeof functions.knowledgeMinerExists>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParanetsRegistryParams = FunctionArguments<typeof functions.paranetsRegistry>
export type ParanetsRegistryReturn = FunctionReturn<typeof functions.paranetsRegistry>

export type RegisterKnowledgeMinerParams = FunctionArguments<typeof functions.registerKnowledgeMiner>
export type RegisterKnowledgeMinerReturn = FunctionReturn<typeof functions.registerKnowledgeMiner>

export type RemoveSubmittedKnowledgeCollectionParams = FunctionArguments<typeof functions.removeSubmittedKnowledgeCollection>
export type RemoveSubmittedKnowledgeCollectionReturn = FunctionReturn<typeof functions.removeSubmittedKnowledgeCollection>

export type SetCumulativeTracSpentParams = FunctionArguments<typeof functions.setCumulativeTracSpent>
export type SetCumulativeTracSpentReturn = FunctionReturn<typeof functions.setCumulativeTracSpent>

export type SetTotalSubmittedKnowledgeCollectionsCountParams = FunctionArguments<typeof functions.setTotalSubmittedKnowledgeCollectionsCount>
export type SetTotalSubmittedKnowledgeCollectionsCountReturn = FunctionReturn<typeof functions.setTotalSubmittedKnowledgeCollectionsCount>

export type SetTotalTracSpentParams = FunctionArguments<typeof functions.setTotalTracSpent>
export type SetTotalTracSpentReturn = FunctionReturn<typeof functions.setTotalTracSpent>

export type SetUnrewardedTracSpentParams = FunctionArguments<typeof functions.setUnrewardedTracSpent>
export type SetUnrewardedTracSpentReturn = FunctionReturn<typeof functions.setUnrewardedTracSpent>

export type SetUpdatingKnowledgeCollectionUpdateTokenAmountParams = FunctionArguments<typeof functions.setUpdatingKnowledgeCollectionUpdateTokenAmount>
export type SetUpdatingKnowledgeCollectionUpdateTokenAmountReturn = FunctionReturn<typeof functions.setUpdatingKnowledgeCollectionUpdateTokenAmount>

export type SetcumulativeAwardedTokenParams = FunctionArguments<typeof functions.setcumulativeAwardedToken>
export type SetcumulativeAwardedTokenReturn = FunctionReturn<typeof functions.setcumulativeAwardedToken>

export type SubCumulativeTracSpentParams = FunctionArguments<typeof functions.subCumulativeTracSpent>
export type SubCumulativeTracSpentReturn = FunctionReturn<typeof functions.subCumulativeTracSpent>

export type SubTotalTracSpentParams = FunctionArguments<typeof functions.subTotalTracSpent>
export type SubTotalTracSpentReturn = FunctionReturn<typeof functions.subTotalTracSpent>

export type SubUnrewardedTracSpentParams = FunctionArguments<typeof functions.subUnrewardedTracSpent>
export type SubUnrewardedTracSpentReturn = FunctionReturn<typeof functions.subUnrewardedTracSpent>

export type SubUpdatingKnowledgeCollectionUpdateTokenAmountParams = FunctionArguments<typeof functions.subUpdatingKnowledgeCollectionUpdateTokenAmount>
export type SubUpdatingKnowledgeCollectionUpdateTokenAmountReturn = FunctionReturn<typeof functions.subUpdatingKnowledgeCollectionUpdateTokenAmount>

export type SubcumulativeAwardedTokenParams = FunctionArguments<typeof functions.subcumulativeAwardedToken>
export type SubcumulativeAwardedTokenReturn = FunctionReturn<typeof functions.subcumulativeAwardedToken>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

