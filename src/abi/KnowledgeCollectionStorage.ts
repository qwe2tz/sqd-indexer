import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    ApprovalForAll: event("0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31", "ApprovalForAll(address,address,bool)", {"account": indexed(p.address), "operator": indexed(p.address), "approved": p.bool}),
    KnowledgeAssetsBurned: event("0x01de171fc555220302fc5e763796c3e41afe23b317c006e6980954439264d534", "KnowledgeAssetsBurned(uint256,address,uint256[])", {"id": indexed(p.uint256), "from": indexed(p.address), "tokenIds": p.array(p.uint256)}),
    KnowledgeAssetsMinted: event("0xbdd70967bd7c94a8f36071d3a87e77b06002cced2c82b9f75b928cc1ad50185b", "KnowledgeAssetsMinted(uint256,address,uint256,uint256)", {"id": indexed(p.uint256), "to": indexed(p.address), "startId": p.uint256, "endId": p.uint256}),
    KnowledgeCollectionBurnedUpdated: event("0x5bff62a7eaca732b94497b07b5c3292d2cb7a6fe7f92e7c7299642fcb98cf3a6", "KnowledgeCollectionBurnedUpdated(uint256,uint256[])", {"id": indexed(p.uint256), "burned": p.array(p.uint256)}),
    KnowledgeCollectionByteSizeUpdated: event("0x361725113554de14e8055d58563fe01474ab4774a85d77de50617dd79bb4e02d", "KnowledgeCollectionByteSizeUpdated(uint256,uint256)", {"id": indexed(p.uint256), "byteSize": p.uint256}),
    KnowledgeCollectionChunksAmountUpdated: event("0xd3a40d7db05c6165c6d0e0a913432d064c9625438b3401565a8adeaba0d0d7e9", "KnowledgeCollectionChunksAmountUpdated(uint256,uint256)", {"id": indexed(p.uint256), "chunksAmount": p.uint256}),
    KnowledgeCollectionCreated: event("0x46db7efe798caa54abe5fd07431cbc3afc57d6a9b3ef0fb0deaa4f750342382d", "KnowledgeCollectionCreated(uint256,string,bytes32,uint88,uint40,uint40,uint96,bool)", {"id": indexed(p.uint256), "publishOperationId": p.string, "merkleRoot": p.bytes32, "byteSize": p.uint88, "startEpoch": p.uint40, "endEpoch": p.uint40, "tokenAmount": p.uint96, "isImmutable": p.bool}),
    KnowledgeCollectionEndEpochUpdated: event("0x10d59c060941ef70f0ead23a598bcf92ca777e338c97f489bbfed2b2696d328c", "KnowledgeCollectionEndEpochUpdated(uint256,uint256)", {"id": indexed(p.uint256), "endEpoch": p.uint256}),
    KnowledgeCollectionMerkleRootAdded: event("0x98d9fb27c5bdc9404702b69558e688a63a226ea498498e7d63db5935acffe08f", "KnowledgeCollectionMerkleRootAdded(uint256,bytes32)", {"id": indexed(p.uint256), "merkleRoot": p.bytes32}),
    KnowledgeCollectionMerkleRootRemoved: event("0xd558164e368c299595e7e74dbfbd007d630c8ea77ab18effb6608f685380439f", "KnowledgeCollectionMerkleRootRemoved(uint256,bytes32)", {"id": indexed(p.uint256), "merkleRoot": p.bytes32}),
    KnowledgeCollectionMerkleRootsUpdated: event("0x3c9b1e770f30fbcee1346fc5ed9795759de1523a4ddcfa389a8ba98b90efce32", "KnowledgeCollectionMerkleRootsUpdated(uint256,(address,bytes32,uint256)[])", {"id": indexed(p.uint256), "merkleRoots": p.array(p.struct({"publisher": p.address, "merkleRoot": p.bytes32, "timestamp": p.uint256}))}),
    KnowledgeCollectionMintedUpdated: event("0x53afa80cfa66f15f7793774716018286cdeea04e91eb20f5f57c79a87cb36e49", "KnowledgeCollectionMintedUpdated(uint256,uint256)", {"id": indexed(p.uint256), "minted": p.uint256}),
    KnowledgeCollectionPublisherUpdated: event("0xa17925115fa26d6a53eb4cdd3dc550741d9cb402848be9d8591d1a7189ba0f9c", "KnowledgeCollectionPublisherUpdated(uint256,address)", {"id": indexed(p.uint256), "publisher": p.address}),
    KnowledgeCollectionStartEpochUpdated: event("0x13e5aef25a0944937841504cde275592eca74410384cbf2fe0a6f61635b7a9a9", "KnowledgeCollectionStartEpochUpdated(uint256,uint256)", {"id": indexed(p.uint256), "startEpoch": p.uint256}),
    KnowledgeCollectionTokenAmountUpdated: event("0x57c15c50b3af14288190c986b6d920a9dee032a480284beac65165693ebf38ce", "KnowledgeCollectionTokenAmountUpdated(uint256,uint256)", {"id": indexed(p.uint256), "tokenAmount": p.uint256}),
    KnowledgeCollectionUpdated: event("0x878d6c3cd5913b0472f0221ac24e910c71d406ca9e005669d36b9b8f4abf505c", "KnowledgeCollectionUpdated(uint256,string,bytes32,uint256,uint96)", {"id": indexed(p.uint256), "updateOperationId": p.string, "merkleRoot": p.bytes32, "byteSize": p.uint256, "tokenAmount": p.uint96}),
    MisplacedERC20Withdrawn: event("0x22d23a6f2e04fcc6f26fd8541f87bdc28e2db7bc94ccacc4b08e71830097174d", "MisplacedERC20Withdrawn(address,address,uint256)", {"custodian": indexed(p.address), "tokenContract": p.address, "amount": p.uint256}),
    MisplacedEtherWithdrawn: event("0xa8137f25699fd32e117da110ee3f11175d638136bda01b31ec3e63023ac969ba", "MisplacedEtherWithdrawn(address,uint256)", {"custodian": indexed(p.address), "amount": p.uint256}),
    TokenTransferred: event("0xefed6b8d78a916dbd402a323824ae4454c9214b8f3d05fa85b3bb7f30dc25c06", "TokenTransferred(address,uint256)", {"custodian": indexed(p.address), "amount": p.uint256}),
    TransferBatch: event("0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb", "TransferBatch(address,address,address,uint256[],uint256[])", {"operator": indexed(p.address), "from": indexed(p.address), "to": indexed(p.address), "ids": p.array(p.uint256), "values": p.array(p.uint256)}),
    TransferSingle: event("0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62", "TransferSingle(address,address,address,uint256,uint256)", {"operator": indexed(p.address), "from": indexed(p.address), "to": indexed(p.address), "id": p.uint256, "value": p.uint256}),
    URI: event("0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b", "URI(string,uint256)", {"value": p.string, "id": indexed(p.uint256)}),
    URIUpdate: event("0x97142cd134d2cdaa0af8e266511dc2cddc567e7f74290a93eb37a003a2910363", "URIUpdate(string)", {"newURI": p.string}),
}

export const functions = {
    KNOWLEDGE_COLLECTION_MAX_SIZE: viewFun("0x42afd3b9", "KNOWLEDGE_COLLECTION_MAX_SIZE()", {}, p.uint256),
    'balanceOf(address,uint256)': viewFun("0x00fdd58e", "balanceOf(address,uint256)", {"account": p.address, "id": p.uint256}, p.uint256),
    'balanceOf(address,uint256,uint256)': viewFun("0x2d760d57", "balanceOf(address,uint256,uint256)", {"owner": p.address, "start": p.uint256, "stop": p.uint256}, p.uint256),
    'balanceOf(address)': viewFun("0x70a08231", "balanceOf(address)", {"owner": p.address}, p.uint256),
    balanceOfBatch: viewFun("0x4e1273f4", "balanceOfBatch(address[],uint256[])", {"accounts": p.array(p.address), "ids": p.array(p.uint256)}, p.array(p.uint256)),
    burnKnowledgeAssetsTokens: fun("0x3111c5f8", "burnKnowledgeAssetsTokens(uint256,address,uint256[])", {"id": p.uint256, "from": p.address, "tokenIds": p.array(p.uint256)}, ),
    createKnowledgeCollection: fun("0x8409f56d", "createKnowledgeCollection(address,string,bytes32,uint256,uint88,uint40,uint40,uint96,bool)", {"publisher": p.address, "publishOperationId": p.string, "merkleRoot": p.bytes32, "knowledgeAssetsAmount": p.uint256, "byteSize": p.uint88, "startEpoch": p.uint40, "endEpoch": p.uint40, "tokenAmount": p.uint96, "isImmutable": p.bool}, p.uint256),
    currentTotalSupply: viewFun("0x410b1da8", "currentTotalSupply()", {}, p.uint256),
    getBurned: viewFun("0x3bccc6b4", "getBurned(uint256)", {"id": p.uint256}, p.array(p.uint256)),
    getBurnedAmount: viewFun("0x601602ed", "getBurnedAmount(uint256)", {"id": p.uint256}, p.uint256),
    getByteSize: viewFun("0x533c279a", "getByteSize(uint256)", {"id": p.uint256}, p.uint88),
    getEndEpoch: viewFun("0x22dff80c", "getEndEpoch(uint256)", {"id": p.uint256}, p.uint40),
    getKnowledgeAssetsAmount: viewFun("0xb591fd54", "getKnowledgeAssetsAmount(uint256)", {"id": p.uint256}, p.uint256),
    getKnowledgeAssetsRange: viewFun("0xbfed2578", "getKnowledgeAssetsRange(uint256)", {"id": p.uint256}, {"_0": p.uint256, "_1": p.uint256, "_2": p.array(p.uint256)}),
    getKnowledgeCollection: viewFun("0x9752f8e3", "getKnowledgeCollection(uint256)", {"id": p.uint256}, p.struct({"merkleRoots": p.array(p.struct({"publisher": p.address, "merkleRoot": p.bytes32, "timestamp": p.uint256})), "burned": p.array(p.uint256), "minted": p.uint256, "byteSize": p.uint88, "startEpoch": p.uint40, "endEpoch": p.uint40, "tokenAmount": p.uint96, "isImmutable": p.bool})),
    getKnowledgeCollectionId: viewFun("0xb45443eb", "getKnowledgeCollectionId(uint256)", {"tokenId": p.uint256}, p.uint256),
    getKnowledgeCollectionMetadata: viewFun("0xfc427c4c", "getKnowledgeCollectionMetadata(uint256)", {"id": p.uint256}, {"_0": p.array(p.struct({"publisher": p.address, "merkleRoot": p.bytes32, "timestamp": p.uint256})), "_1": p.array(p.uint256), "_2": p.uint256, "_3": p.uint88, "_4": p.uint40, "_5": p.uint40, "_6": p.uint96, "_7": p.bool}),
    getLatestKnowledgeCollectionId: viewFun("0x82840537", "getLatestKnowledgeCollectionId()", {}, p.uint256),
    getLatestMerkleRoot: viewFun("0xe19e8a72", "getLatestMerkleRoot(uint256)", {"id": p.uint256}, p.bytes32),
    getLatestMerkleRootObject: viewFun("0xb3f64084", "getLatestMerkleRootObject(uint256)", {"id": p.uint256}, p.struct({"publisher": p.address, "merkleRoot": p.bytes32, "timestamp": p.uint256})),
    getLatestMerkleRootPublisher: viewFun("0x87c5e7d4", "getLatestMerkleRootPublisher(uint256)", {"id": p.uint256}, p.address),
    getLatestMerkleRootTimestamp: viewFun("0xa695c8f8", "getLatestMerkleRootTimestamp(uint256)", {"id": p.uint256}, p.uint256),
    getMerkleRootByIndex: viewFun("0x71db13c9", "getMerkleRootByIndex(uint256,uint256)", {"id": p.uint256, "index": p.uint256}, p.bytes32),
    getMerkleRootObjectByIndex: viewFun("0x8872024d", "getMerkleRootObjectByIndex(uint256,uint256)", {"id": p.uint256, "index": p.uint256}, p.struct({"publisher": p.address, "merkleRoot": p.bytes32, "timestamp": p.uint256})),
    getMerkleRootPublisherByIndex: viewFun("0xf8bc0795", "getMerkleRootPublisherByIndex(uint256,uint256)", {"id": p.uint256, "index": p.uint256}, p.address),
    getMerkleRootTimestampByIndex: viewFun("0x2a13b958", "getMerkleRootTimestampByIndex(uint256,uint256)", {"id": p.uint256, "index": p.uint256}, p.uint256),
    getMerkleRoots: viewFun("0x3ed9b835", "getMerkleRoots(uint256)", {"id": p.uint256}, p.array(p.struct({"publisher": p.address, "merkleRoot": p.bytes32, "timestamp": p.uint256}))),
    getMinted: viewFun("0x1a9e379f", "getMinted(uint256)", {"id": p.uint256}, p.uint256),
    getStartEpoch: viewFun("0x59aa3c94", "getStartEpoch(uint256)", {"id": p.uint256}, p.uint40),
    getTokenAmount: viewFun("0xc2507ac1", "getTokenAmount(uint256)", {"id": p.uint256}, p.uint96),
    getTotalTokenAmount: viewFun("0xa85e8fcb", "getTotalTokenAmount()", {}, p.uint96),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    isApprovedForAll: viewFun("0xe985e9c5", "isApprovedForAll(address,address)", {"account": p.address, "operator": p.address}, p.bool),
    isKnowledgeAssetBurned: viewFun("0x312570a0", "isKnowledgeAssetBurned(uint256)", {"_0": p.uint256}, p.bool),
    isKnowledgeCollectionOwner: viewFun("0xc8b43f4f", "isKnowledgeCollectionOwner(address,uint256)", {"owner": p.address, "id": p.uint256}, p.bool),
    isOwnerOf: viewFun("0xc5b8f772", "isOwnerOf(address,uint256)", {"account": p.address, "id": p.uint256}, p.bool),
    isPartOfKnowledgeCollection: viewFun("0x68ba7fce", "isPartOfKnowledgeCollection(uint256,uint256)", {"id": p.uint256, "tokenId": p.uint256}, p.bool),
    knowledgeCollectionMaxSize: viewFun("0x330e2a95", "knowledgeCollectionMaxSize()", {}, p.uint256),
    knowledgeCollections: viewFun("0xd89e382c", "knowledgeCollections(uint256)", {"_0": p.uint256}, {"minted": p.uint256, "byteSize": p.uint88, "startEpoch": p.uint40, "endEpoch": p.uint40, "tokenAmount": p.uint96, "isImmutable": p.bool}),
    mintKnowledgeAssetsTokens: fun("0x1fe2333e", "mintKnowledgeAssetsTokens(uint256,address,uint256)", {"id": p.uint256, "to": p.address, "amount": p.uint256}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    popMerkleRoot: fun("0xcca3a487", "popMerkleRoot(uint256)", {"id": p.uint256}, ),
    pushMerkleRoot: fun("0xc71e1877", "pushMerkleRoot(address,uint256,bytes32)", {"publisher": p.address, "id": p.uint256, "merkleRoot": p.bytes32}, ),
    safeBatchTransferFrom: fun("0x2eb2c2d6", "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)", {"from": p.address, "to": p.address, "ids": p.array(p.uint256), "amounts": p.array(p.uint256), "data": p.bytes}, ),
    safeTransferFrom: fun("0xf242432a", "safeTransferFrom(address,address,uint256,uint256,bytes)", {"from": p.address, "to": p.address, "id": p.uint256, "amount": p.uint256, "data": p.bytes}, ),
    setApprovalForAll: fun("0xa22cb465", "setApprovalForAll(address,bool)", {"operator": p.address, "approved": p.bool}, ),
    setBurned: fun("0x17949bdf", "setBurned(uint256,uint256[])", {"id": p.uint256, "_burned": p.array(p.uint256)}, ),
    setByteSize: fun("0x4be0b93e", "setByteSize(uint256,uint88)", {"id": p.uint256, "_byteSize": p.uint88}, ),
    setEndEpoch: fun("0x4a6ebc65", "setEndEpoch(uint256,uint40)", {"id": p.uint256, "_endEpoch": p.uint40}, ),
    setMerkleRoots: fun("0x3e1e5bb5", "setMerkleRoots(uint256,(address,bytes32,uint256)[])", {"id": p.uint256, "_merkleRoots": p.array(p.struct({"publisher": p.address, "merkleRoot": p.bytes32, "timestamp": p.uint256}))}, ),
    setMinted: fun("0xcee816aa", "setMinted(uint256,uint256)", {"id": p.uint256, "_minted": p.uint256}, ),
    setStartEpoch: fun("0x58a10982", "setStartEpoch(uint256,uint40)", {"id": p.uint256, "_startEpoch": p.uint40}, ),
    setTokenAmount: fun("0x87321fa8", "setTokenAmount(uint256,uint96)", {"id": p.uint256, "_tokenAmount": p.uint96}, ),
    setURI: fun("0x02fe5305", "setURI(string)", {"baseURI": p.string}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    tokenContract: viewFun("0x55a373d6", "tokenContract()", {}, p.address),
    tokensOfOwner: viewFun("0x8462151c", "tokensOfOwner(address)", {"owner": p.address}, p.array(p.uint256)),
    tokensOfOwnerIn: viewFun("0x99a2557a", "tokensOfOwnerIn(address,uint256,uint256)", {"owner": p.address, "start": p.uint256, "stop": p.uint256}, p.array(p.uint256)),
    totalBurned: viewFun("0xd89135cd", "totalBurned()", {}, p.uint256),
    totalMinted: viewFun("0xa2309ff8", "totalMinted()", {}, p.uint256),
    transferTokens: fun("0x0c89a0df", "transferTokens(address)", {"custodian": p.address}, ),
    updateKnowledgeCollection: fun("0xbc1f23c8", "updateKnowledgeCollection(address,uint256,string,bytes32,uint256,uint256[],uint88,uint96)", {"publisher": p.address, "id": p.uint256, "updateOperationId": p.string, "merkleRoot": p.bytes32, "mintKnowledgeAssetsAmount": p.uint256, "knowledgeAssetsToBurn": p.array(p.uint256), "byteSize": p.uint88, "tokenAmount": p.uint96}, ),
    uri: viewFun("0x0e89341c", "uri(uint256)", {"_0": p.uint256}, p.string),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    withdrawMisplacedEther: fun("0x254cc46c", "withdrawMisplacedEther()", {}, ),
    withdrawMisplacedTokens: fun("0x9d7937b2", "withdrawMisplacedTokens(address)", {"tokenContractAddress": p.address}, ),
}

export class Contract extends ContractBase {

    KNOWLEDGE_COLLECTION_MAX_SIZE() {
        return this.eth_call(functions.KNOWLEDGE_COLLECTION_MAX_SIZE, {})
    }

    'balanceOf(address,uint256)'(account: BalanceOfParams_0["account"], id: BalanceOfParams_0["id"]) {
        return this.eth_call(functions['balanceOf(address,uint256)'], {account, id})
    }

    'balanceOf(address,uint256,uint256)'(owner: BalanceOfParams_1["owner"], start: BalanceOfParams_1["start"], stop: BalanceOfParams_1["stop"]) {
        return this.eth_call(functions['balanceOf(address,uint256,uint256)'], {owner, start, stop})
    }

    'balanceOf(address)'(owner: BalanceOfParams_2["owner"]) {
        return this.eth_call(functions['balanceOf(address)'], {owner})
    }

    balanceOfBatch(accounts: BalanceOfBatchParams["accounts"], ids: BalanceOfBatchParams["ids"]) {
        return this.eth_call(functions.balanceOfBatch, {accounts, ids})
    }

    currentTotalSupply() {
        return this.eth_call(functions.currentTotalSupply, {})
    }

    getBurned(id: GetBurnedParams["id"]) {
        return this.eth_call(functions.getBurned, {id})
    }

    getBurnedAmount(id: GetBurnedAmountParams["id"]) {
        return this.eth_call(functions.getBurnedAmount, {id})
    }

    getByteSize(id: GetByteSizeParams["id"]) {
        return this.eth_call(functions.getByteSize, {id})
    }

    getEndEpoch(id: GetEndEpochParams["id"]) {
        return this.eth_call(functions.getEndEpoch, {id})
    }

    getKnowledgeAssetsAmount(id: GetKnowledgeAssetsAmountParams["id"]) {
        return this.eth_call(functions.getKnowledgeAssetsAmount, {id})
    }

    getKnowledgeAssetsRange(id: GetKnowledgeAssetsRangeParams["id"]) {
        return this.eth_call(functions.getKnowledgeAssetsRange, {id})
    }

    getKnowledgeCollection(id: GetKnowledgeCollectionParams["id"]) {
        return this.eth_call(functions.getKnowledgeCollection, {id})
    }

    getKnowledgeCollectionId(tokenId: GetKnowledgeCollectionIdParams["tokenId"]) {
        return this.eth_call(functions.getKnowledgeCollectionId, {tokenId})
    }

    getKnowledgeCollectionMetadata(id: GetKnowledgeCollectionMetadataParams["id"]) {
        return this.eth_call(functions.getKnowledgeCollectionMetadata, {id})
    }

    getLatestKnowledgeCollectionId() {
        return this.eth_call(functions.getLatestKnowledgeCollectionId, {})
    }

    getLatestMerkleRoot(id: GetLatestMerkleRootParams["id"]) {
        return this.eth_call(functions.getLatestMerkleRoot, {id})
    }

    getLatestMerkleRootObject(id: GetLatestMerkleRootObjectParams["id"]) {
        return this.eth_call(functions.getLatestMerkleRootObject, {id})
    }

    getLatestMerkleRootPublisher(id: GetLatestMerkleRootPublisherParams["id"]) {
        return this.eth_call(functions.getLatestMerkleRootPublisher, {id})
    }

    getLatestMerkleRootTimestamp(id: GetLatestMerkleRootTimestampParams["id"]) {
        return this.eth_call(functions.getLatestMerkleRootTimestamp, {id})
    }

    getMerkleRootByIndex(id: GetMerkleRootByIndexParams["id"], index: GetMerkleRootByIndexParams["index"]) {
        return this.eth_call(functions.getMerkleRootByIndex, {id, index})
    }

    getMerkleRootObjectByIndex(id: GetMerkleRootObjectByIndexParams["id"], index: GetMerkleRootObjectByIndexParams["index"]) {
        return this.eth_call(functions.getMerkleRootObjectByIndex, {id, index})
    }

    getMerkleRootPublisherByIndex(id: GetMerkleRootPublisherByIndexParams["id"], index: GetMerkleRootPublisherByIndexParams["index"]) {
        return this.eth_call(functions.getMerkleRootPublisherByIndex, {id, index})
    }

    getMerkleRootTimestampByIndex(id: GetMerkleRootTimestampByIndexParams["id"], index: GetMerkleRootTimestampByIndexParams["index"]) {
        return this.eth_call(functions.getMerkleRootTimestampByIndex, {id, index})
    }

    getMerkleRoots(id: GetMerkleRootsParams["id"]) {
        return this.eth_call(functions.getMerkleRoots, {id})
    }

    getMinted(id: GetMintedParams["id"]) {
        return this.eth_call(functions.getMinted, {id})
    }

    getStartEpoch(id: GetStartEpochParams["id"]) {
        return this.eth_call(functions.getStartEpoch, {id})
    }

    getTokenAmount(id: GetTokenAmountParams["id"]) {
        return this.eth_call(functions.getTokenAmount, {id})
    }

    getTotalTokenAmount() {
        return this.eth_call(functions.getTotalTokenAmount, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isApprovedForAll(account: IsApprovedForAllParams["account"], operator: IsApprovedForAllParams["operator"]) {
        return this.eth_call(functions.isApprovedForAll, {account, operator})
    }

    isKnowledgeAssetBurned(_0: IsKnowledgeAssetBurnedParams["_0"]) {
        return this.eth_call(functions.isKnowledgeAssetBurned, {_0})
    }

    isKnowledgeCollectionOwner(owner: IsKnowledgeCollectionOwnerParams["owner"], id: IsKnowledgeCollectionOwnerParams["id"]) {
        return this.eth_call(functions.isKnowledgeCollectionOwner, {owner, id})
    }

    isOwnerOf(account: IsOwnerOfParams["account"], id: IsOwnerOfParams["id"]) {
        return this.eth_call(functions.isOwnerOf, {account, id})
    }

    isPartOfKnowledgeCollection(id: IsPartOfKnowledgeCollectionParams["id"], tokenId: IsPartOfKnowledgeCollectionParams["tokenId"]) {
        return this.eth_call(functions.isPartOfKnowledgeCollection, {id, tokenId})
    }

    knowledgeCollectionMaxSize() {
        return this.eth_call(functions.knowledgeCollectionMaxSize, {})
    }

    knowledgeCollections(_0: KnowledgeCollectionsParams["_0"]) {
        return this.eth_call(functions.knowledgeCollections, {_0})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    tokenContract() {
        return this.eth_call(functions.tokenContract, {})
    }

    tokensOfOwner(owner: TokensOfOwnerParams["owner"]) {
        return this.eth_call(functions.tokensOfOwner, {owner})
    }

    tokensOfOwnerIn(owner: TokensOfOwnerInParams["owner"], start: TokensOfOwnerInParams["start"], stop: TokensOfOwnerInParams["stop"]) {
        return this.eth_call(functions.tokensOfOwnerIn, {owner, start, stop})
    }

    totalBurned() {
        return this.eth_call(functions.totalBurned, {})
    }

    totalMinted() {
        return this.eth_call(functions.totalMinted, {})
    }

    uri(_0: UriParams["_0"]) {
        return this.eth_call(functions.uri, {_0})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type ApprovalForAllEventArgs = EParams<typeof events.ApprovalForAll>
export type KnowledgeAssetsBurnedEventArgs = EParams<typeof events.KnowledgeAssetsBurned>
export type KnowledgeAssetsMintedEventArgs = EParams<typeof events.KnowledgeAssetsMinted>
export type KnowledgeCollectionBurnedUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionBurnedUpdated>
export type KnowledgeCollectionByteSizeUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionByteSizeUpdated>
export type KnowledgeCollectionChunksAmountUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionChunksAmountUpdated>
export type KnowledgeCollectionCreatedEventArgs = EParams<typeof events.KnowledgeCollectionCreated>
export type KnowledgeCollectionEndEpochUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionEndEpochUpdated>
export type KnowledgeCollectionMerkleRootAddedEventArgs = EParams<typeof events.KnowledgeCollectionMerkleRootAdded>
export type KnowledgeCollectionMerkleRootRemovedEventArgs = EParams<typeof events.KnowledgeCollectionMerkleRootRemoved>
export type KnowledgeCollectionMerkleRootsUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionMerkleRootsUpdated>
export type KnowledgeCollectionMintedUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionMintedUpdated>
export type KnowledgeCollectionPublisherUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionPublisherUpdated>
export type KnowledgeCollectionStartEpochUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionStartEpochUpdated>
export type KnowledgeCollectionTokenAmountUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionTokenAmountUpdated>
export type KnowledgeCollectionUpdatedEventArgs = EParams<typeof events.KnowledgeCollectionUpdated>
export type MisplacedERC20WithdrawnEventArgs = EParams<typeof events.MisplacedERC20Withdrawn>
export type MisplacedEtherWithdrawnEventArgs = EParams<typeof events.MisplacedEtherWithdrawn>
export type TokenTransferredEventArgs = EParams<typeof events.TokenTransferred>
export type TransferBatchEventArgs = EParams<typeof events.TransferBatch>
export type TransferSingleEventArgs = EParams<typeof events.TransferSingle>
export type URIEventArgs = EParams<typeof events.URI>
export type URIUpdateEventArgs = EParams<typeof events.URIUpdate>

/// Function types
export type KNOWLEDGE_COLLECTION_MAX_SIZEParams = FunctionArguments<typeof functions.KNOWLEDGE_COLLECTION_MAX_SIZE>
export type KNOWLEDGE_COLLECTION_MAX_SIZEReturn = FunctionReturn<typeof functions.KNOWLEDGE_COLLECTION_MAX_SIZE>

export type BalanceOfParams_0 = FunctionArguments<typeof functions['balanceOf(address,uint256)']>
export type BalanceOfReturn_0 = FunctionReturn<typeof functions['balanceOf(address,uint256)']>

export type BalanceOfParams_1 = FunctionArguments<typeof functions['balanceOf(address,uint256,uint256)']>
export type BalanceOfReturn_1 = FunctionReturn<typeof functions['balanceOf(address,uint256,uint256)']>

export type BalanceOfParams_2 = FunctionArguments<typeof functions['balanceOf(address)']>
export type BalanceOfReturn_2 = FunctionReturn<typeof functions['balanceOf(address)']>

export type BalanceOfBatchParams = FunctionArguments<typeof functions.balanceOfBatch>
export type BalanceOfBatchReturn = FunctionReturn<typeof functions.balanceOfBatch>

export type BurnKnowledgeAssetsTokensParams = FunctionArguments<typeof functions.burnKnowledgeAssetsTokens>
export type BurnKnowledgeAssetsTokensReturn = FunctionReturn<typeof functions.burnKnowledgeAssetsTokens>

export type CreateKnowledgeCollectionParams = FunctionArguments<typeof functions.createKnowledgeCollection>
export type CreateKnowledgeCollectionReturn = FunctionReturn<typeof functions.createKnowledgeCollection>

export type CurrentTotalSupplyParams = FunctionArguments<typeof functions.currentTotalSupply>
export type CurrentTotalSupplyReturn = FunctionReturn<typeof functions.currentTotalSupply>

export type GetBurnedParams = FunctionArguments<typeof functions.getBurned>
export type GetBurnedReturn = FunctionReturn<typeof functions.getBurned>

export type GetBurnedAmountParams = FunctionArguments<typeof functions.getBurnedAmount>
export type GetBurnedAmountReturn = FunctionReturn<typeof functions.getBurnedAmount>

export type GetByteSizeParams = FunctionArguments<typeof functions.getByteSize>
export type GetByteSizeReturn = FunctionReturn<typeof functions.getByteSize>

export type GetEndEpochParams = FunctionArguments<typeof functions.getEndEpoch>
export type GetEndEpochReturn = FunctionReturn<typeof functions.getEndEpoch>

export type GetKnowledgeAssetsAmountParams = FunctionArguments<typeof functions.getKnowledgeAssetsAmount>
export type GetKnowledgeAssetsAmountReturn = FunctionReturn<typeof functions.getKnowledgeAssetsAmount>

export type GetKnowledgeAssetsRangeParams = FunctionArguments<typeof functions.getKnowledgeAssetsRange>
export type GetKnowledgeAssetsRangeReturn = FunctionReturn<typeof functions.getKnowledgeAssetsRange>

export type GetKnowledgeCollectionParams = FunctionArguments<typeof functions.getKnowledgeCollection>
export type GetKnowledgeCollectionReturn = FunctionReturn<typeof functions.getKnowledgeCollection>

export type GetKnowledgeCollectionIdParams = FunctionArguments<typeof functions.getKnowledgeCollectionId>
export type GetKnowledgeCollectionIdReturn = FunctionReturn<typeof functions.getKnowledgeCollectionId>

export type GetKnowledgeCollectionMetadataParams = FunctionArguments<typeof functions.getKnowledgeCollectionMetadata>
export type GetKnowledgeCollectionMetadataReturn = FunctionReturn<typeof functions.getKnowledgeCollectionMetadata>

export type GetLatestKnowledgeCollectionIdParams = FunctionArguments<typeof functions.getLatestKnowledgeCollectionId>
export type GetLatestKnowledgeCollectionIdReturn = FunctionReturn<typeof functions.getLatestKnowledgeCollectionId>

export type GetLatestMerkleRootParams = FunctionArguments<typeof functions.getLatestMerkleRoot>
export type GetLatestMerkleRootReturn = FunctionReturn<typeof functions.getLatestMerkleRoot>

export type GetLatestMerkleRootObjectParams = FunctionArguments<typeof functions.getLatestMerkleRootObject>
export type GetLatestMerkleRootObjectReturn = FunctionReturn<typeof functions.getLatestMerkleRootObject>

export type GetLatestMerkleRootPublisherParams = FunctionArguments<typeof functions.getLatestMerkleRootPublisher>
export type GetLatestMerkleRootPublisherReturn = FunctionReturn<typeof functions.getLatestMerkleRootPublisher>

export type GetLatestMerkleRootTimestampParams = FunctionArguments<typeof functions.getLatestMerkleRootTimestamp>
export type GetLatestMerkleRootTimestampReturn = FunctionReturn<typeof functions.getLatestMerkleRootTimestamp>

export type GetMerkleRootByIndexParams = FunctionArguments<typeof functions.getMerkleRootByIndex>
export type GetMerkleRootByIndexReturn = FunctionReturn<typeof functions.getMerkleRootByIndex>

export type GetMerkleRootObjectByIndexParams = FunctionArguments<typeof functions.getMerkleRootObjectByIndex>
export type GetMerkleRootObjectByIndexReturn = FunctionReturn<typeof functions.getMerkleRootObjectByIndex>

export type GetMerkleRootPublisherByIndexParams = FunctionArguments<typeof functions.getMerkleRootPublisherByIndex>
export type GetMerkleRootPublisherByIndexReturn = FunctionReturn<typeof functions.getMerkleRootPublisherByIndex>

export type GetMerkleRootTimestampByIndexParams = FunctionArguments<typeof functions.getMerkleRootTimestampByIndex>
export type GetMerkleRootTimestampByIndexReturn = FunctionReturn<typeof functions.getMerkleRootTimestampByIndex>

export type GetMerkleRootsParams = FunctionArguments<typeof functions.getMerkleRoots>
export type GetMerkleRootsReturn = FunctionReturn<typeof functions.getMerkleRoots>

export type GetMintedParams = FunctionArguments<typeof functions.getMinted>
export type GetMintedReturn = FunctionReturn<typeof functions.getMinted>

export type GetStartEpochParams = FunctionArguments<typeof functions.getStartEpoch>
export type GetStartEpochReturn = FunctionReturn<typeof functions.getStartEpoch>

export type GetTokenAmountParams = FunctionArguments<typeof functions.getTokenAmount>
export type GetTokenAmountReturn = FunctionReturn<typeof functions.getTokenAmount>

export type GetTotalTokenAmountParams = FunctionArguments<typeof functions.getTotalTokenAmount>
export type GetTotalTokenAmountReturn = FunctionReturn<typeof functions.getTotalTokenAmount>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type IsApprovedForAllParams = FunctionArguments<typeof functions.isApprovedForAll>
export type IsApprovedForAllReturn = FunctionReturn<typeof functions.isApprovedForAll>

export type IsKnowledgeAssetBurnedParams = FunctionArguments<typeof functions.isKnowledgeAssetBurned>
export type IsKnowledgeAssetBurnedReturn = FunctionReturn<typeof functions.isKnowledgeAssetBurned>

export type IsKnowledgeCollectionOwnerParams = FunctionArguments<typeof functions.isKnowledgeCollectionOwner>
export type IsKnowledgeCollectionOwnerReturn = FunctionReturn<typeof functions.isKnowledgeCollectionOwner>

export type IsOwnerOfParams = FunctionArguments<typeof functions.isOwnerOf>
export type IsOwnerOfReturn = FunctionReturn<typeof functions.isOwnerOf>

export type IsPartOfKnowledgeCollectionParams = FunctionArguments<typeof functions.isPartOfKnowledgeCollection>
export type IsPartOfKnowledgeCollectionReturn = FunctionReturn<typeof functions.isPartOfKnowledgeCollection>

export type KnowledgeCollectionMaxSizeParams = FunctionArguments<typeof functions.knowledgeCollectionMaxSize>
export type KnowledgeCollectionMaxSizeReturn = FunctionReturn<typeof functions.knowledgeCollectionMaxSize>

export type KnowledgeCollectionsParams = FunctionArguments<typeof functions.knowledgeCollections>
export type KnowledgeCollectionsReturn = FunctionReturn<typeof functions.knowledgeCollections>

export type MintKnowledgeAssetsTokensParams = FunctionArguments<typeof functions.mintKnowledgeAssetsTokens>
export type MintKnowledgeAssetsTokensReturn = FunctionReturn<typeof functions.mintKnowledgeAssetsTokens>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type PopMerkleRootParams = FunctionArguments<typeof functions.popMerkleRoot>
export type PopMerkleRootReturn = FunctionReturn<typeof functions.popMerkleRoot>

export type PushMerkleRootParams = FunctionArguments<typeof functions.pushMerkleRoot>
export type PushMerkleRootReturn = FunctionReturn<typeof functions.pushMerkleRoot>

export type SafeBatchTransferFromParams = FunctionArguments<typeof functions.safeBatchTransferFrom>
export type SafeBatchTransferFromReturn = FunctionReturn<typeof functions.safeBatchTransferFrom>

export type SafeTransferFromParams = FunctionArguments<typeof functions.safeTransferFrom>
export type SafeTransferFromReturn = FunctionReturn<typeof functions.safeTransferFrom>

export type SetApprovalForAllParams = FunctionArguments<typeof functions.setApprovalForAll>
export type SetApprovalForAllReturn = FunctionReturn<typeof functions.setApprovalForAll>

export type SetBurnedParams = FunctionArguments<typeof functions.setBurned>
export type SetBurnedReturn = FunctionReturn<typeof functions.setBurned>

export type SetByteSizeParams = FunctionArguments<typeof functions.setByteSize>
export type SetByteSizeReturn = FunctionReturn<typeof functions.setByteSize>

export type SetEndEpochParams = FunctionArguments<typeof functions.setEndEpoch>
export type SetEndEpochReturn = FunctionReturn<typeof functions.setEndEpoch>

export type SetMerkleRootsParams = FunctionArguments<typeof functions.setMerkleRoots>
export type SetMerkleRootsReturn = FunctionReturn<typeof functions.setMerkleRoots>

export type SetMintedParams = FunctionArguments<typeof functions.setMinted>
export type SetMintedReturn = FunctionReturn<typeof functions.setMinted>

export type SetStartEpochParams = FunctionArguments<typeof functions.setStartEpoch>
export type SetStartEpochReturn = FunctionReturn<typeof functions.setStartEpoch>

export type SetTokenAmountParams = FunctionArguments<typeof functions.setTokenAmount>
export type SetTokenAmountReturn = FunctionReturn<typeof functions.setTokenAmount>

export type SetURIParams = FunctionArguments<typeof functions.setURI>
export type SetURIReturn = FunctionReturn<typeof functions.setURI>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TokenContractParams = FunctionArguments<typeof functions.tokenContract>
export type TokenContractReturn = FunctionReturn<typeof functions.tokenContract>

export type TokensOfOwnerParams = FunctionArguments<typeof functions.tokensOfOwner>
export type TokensOfOwnerReturn = FunctionReturn<typeof functions.tokensOfOwner>

export type TokensOfOwnerInParams = FunctionArguments<typeof functions.tokensOfOwnerIn>
export type TokensOfOwnerInReturn = FunctionReturn<typeof functions.tokensOfOwnerIn>

export type TotalBurnedParams = FunctionArguments<typeof functions.totalBurned>
export type TotalBurnedReturn = FunctionReturn<typeof functions.totalBurned>

export type TotalMintedParams = FunctionArguments<typeof functions.totalMinted>
export type TotalMintedReturn = FunctionReturn<typeof functions.totalMinted>

export type TransferTokensParams = FunctionArguments<typeof functions.transferTokens>
export type TransferTokensReturn = FunctionReturn<typeof functions.transferTokens>

export type UpdateKnowledgeCollectionParams = FunctionArguments<typeof functions.updateKnowledgeCollection>
export type UpdateKnowledgeCollectionReturn = FunctionReturn<typeof functions.updateKnowledgeCollection>

export type UriParams = FunctionArguments<typeof functions.uri>
export type UriReturn = FunctionReturn<typeof functions.uri>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type WithdrawMisplacedEtherParams = FunctionArguments<typeof functions.withdrawMisplacedEther>
export type WithdrawMisplacedEtherReturn = FunctionReturn<typeof functions.withdrawMisplacedEther>

export type WithdrawMisplacedTokensParams = FunctionArguments<typeof functions.withdrawMisplacedTokens>
export type WithdrawMisplacedTokensReturn = FunctionReturn<typeof functions.withdrawMisplacedTokens>

