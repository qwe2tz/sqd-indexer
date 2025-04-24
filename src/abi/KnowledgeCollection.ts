import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    askStorage: viewFun("0xfc41116e", "askStorage()", {}, p.address),
    chronos: viewFun("0x65774548", "chronos()", {}, p.address),
    createKnowledgeCollection: fun("0xe8ee1fc4", "createKnowledgeCollection(string,bytes32,uint256,uint88,uint40,uint96,bool,address,uint72,bytes32,bytes32,uint72[],bytes32[],bytes32[])", {"publishOperationId": p.string, "merkleRoot": p.bytes32, "knowledgeAssetsAmount": p.uint256, "byteSize": p.uint88, "epochs": p.uint40, "tokenAmount": p.uint96, "isImmutable": p.bool, "paymaster": p.address, "publisherNodeIdentityId": p.uint72, "publisherNodeR": p.bytes32, "publisherNodeVS": p.bytes32, "identityIds": p.array(p.uint72), "r": p.array(p.bytes32), "vs": p.array(p.bytes32)}, p.uint256),
    epochStorage: viewFun("0x0d6a03be", "epochStorage()", {}, p.address),
    extendKnowledgeCollectionLifetime: fun("0x100c758d", "extendKnowledgeCollectionLifetime(uint256,uint40,uint96,address)", {"id": p.uint256, "epochs": p.uint40, "tokenAmount": p.uint96, "paymaster": p.address}, ),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    identityStorage: viewFun("0xf11abfd8", "identityStorage()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    knowledgeCollectionStorage: viewFun("0x63d0c82b", "knowledgeCollectionStorage()", {}, p.address),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    parametersStorage: viewFun("0x639a86a3", "parametersStorage()", {}, p.address),
    paranetKnowledgeCollectionsRegistry: viewFun("0x76d1f3f2", "paranetKnowledgeCollectionsRegistry()", {}, p.address),
    paranetKnowledgeMinersRegistry: viewFun("0x06dfb6c1", "paranetKnowledgeMinersRegistry()", {}, p.address),
    paranetsRegistry: viewFun("0xc20d67ec", "paranetsRegistry()", {}, p.address),
    paymasterManager: viewFun("0x922333e9", "paymasterManager()", {}, p.address),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    shardingTableStorage: viewFun("0x823e2bc7", "shardingTableStorage()", {}, p.address),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    tokenContract: viewFun("0x55a373d6", "tokenContract()", {}, p.address),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    askStorage() {
        return this.eth_call(functions.askStorage, {})
    }

    chronos() {
        return this.eth_call(functions.chronos, {})
    }

    epochStorage() {
        return this.eth_call(functions.epochStorage, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    identityStorage() {
        return this.eth_call(functions.identityStorage, {})
    }

    knowledgeCollectionStorage() {
        return this.eth_call(functions.knowledgeCollectionStorage, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    parametersStorage() {
        return this.eth_call(functions.parametersStorage, {})
    }

    paranetKnowledgeCollectionsRegistry() {
        return this.eth_call(functions.paranetKnowledgeCollectionsRegistry, {})
    }

    paranetKnowledgeMinersRegistry() {
        return this.eth_call(functions.paranetKnowledgeMinersRegistry, {})
    }

    paranetsRegistry() {
        return this.eth_call(functions.paranetsRegistry, {})
    }

    paymasterManager() {
        return this.eth_call(functions.paymasterManager, {})
    }

    shardingTableStorage() {
        return this.eth_call(functions.shardingTableStorage, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    tokenContract() {
        return this.eth_call(functions.tokenContract, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Function types
export type AskStorageParams = FunctionArguments<typeof functions.askStorage>
export type AskStorageReturn = FunctionReturn<typeof functions.askStorage>

export type ChronosParams = FunctionArguments<typeof functions.chronos>
export type ChronosReturn = FunctionReturn<typeof functions.chronos>

export type CreateKnowledgeCollectionParams = FunctionArguments<typeof functions.createKnowledgeCollection>
export type CreateKnowledgeCollectionReturn = FunctionReturn<typeof functions.createKnowledgeCollection>

export type EpochStorageParams = FunctionArguments<typeof functions.epochStorage>
export type EpochStorageReturn = FunctionReturn<typeof functions.epochStorage>

export type ExtendKnowledgeCollectionLifetimeParams = FunctionArguments<typeof functions.extendKnowledgeCollectionLifetime>
export type ExtendKnowledgeCollectionLifetimeReturn = FunctionReturn<typeof functions.extendKnowledgeCollectionLifetime>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IdentityStorageParams = FunctionArguments<typeof functions.identityStorage>
export type IdentityStorageReturn = FunctionReturn<typeof functions.identityStorage>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type KnowledgeCollectionStorageParams = FunctionArguments<typeof functions.knowledgeCollectionStorage>
export type KnowledgeCollectionStorageReturn = FunctionReturn<typeof functions.knowledgeCollectionStorage>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParametersStorageParams = FunctionArguments<typeof functions.parametersStorage>
export type ParametersStorageReturn = FunctionReturn<typeof functions.parametersStorage>

export type ParanetKnowledgeCollectionsRegistryParams = FunctionArguments<typeof functions.paranetKnowledgeCollectionsRegistry>
export type ParanetKnowledgeCollectionsRegistryReturn = FunctionReturn<typeof functions.paranetKnowledgeCollectionsRegistry>

export type ParanetKnowledgeMinersRegistryParams = FunctionArguments<typeof functions.paranetKnowledgeMinersRegistry>
export type ParanetKnowledgeMinersRegistryReturn = FunctionReturn<typeof functions.paranetKnowledgeMinersRegistry>

export type ParanetsRegistryParams = FunctionArguments<typeof functions.paranetsRegistry>
export type ParanetsRegistryReturn = FunctionReturn<typeof functions.paranetsRegistry>

export type PaymasterManagerParams = FunctionArguments<typeof functions.paymasterManager>
export type PaymasterManagerReturn = FunctionReturn<typeof functions.paymasterManager>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type ShardingTableStorageParams = FunctionArguments<typeof functions.shardingTableStorage>
export type ShardingTableStorageReturn = FunctionReturn<typeof functions.shardingTableStorage>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type TokenContractParams = FunctionArguments<typeof functions.tokenContract>
export type TokenContractReturn = FunctionReturn<typeof functions.tokenContract>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

