import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AssetStorageChanged: event("0x63815734218aeae79d59f32dd4a1c3e52f1b7ee925099608c48820fd6a9e8622", "AssetStorageChanged(string,address)", {"contractName": p.string, "newContractAddress": p.address}),
    AssetStorageRemoved: event("0xd89d3830336d870f0a416f1b4bcb4b1949142af8503d36b85dd139ae01199d6d", "AssetStorageRemoved(string,address)", {"contractName": p.string, "contractAddress": p.address}),
    ContractChanged: event("0xcb274d507e7a9978f5a8c15929fd58c472b8addc1a9bba454b0c0a49a05c9152", "ContractChanged(string,address)", {"contractName": p.string, "newContractAddress": p.address}),
    ContractRemoved: event("0x7ad6d7c73213a93d033801d72c729d90fb72104796b75ad799858b26f2b9872f", "ContractRemoved(string,address)", {"contractName": p.string, "contractAddress": p.address}),
    NewAssetStorage: event("0xcdc1fe6fc2802fb854569bcc8beec2e254e7c890e42fea11687b53f62bb14565", "NewAssetStorage(string,address)", {"contractName": p.string, "newContractAddress": p.address}),
    NewContract: event("0x208f725e4760f521e142bbc1400aa805d7e669438e05e416eddc3df3db3d4536", "NewContract(string,address)", {"contractName": p.string, "newContractAddress": p.address}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
}

export const functions = {
    forwardCall: fun("0x22bee494", "forwardCall(address,bytes)", {"target": p.address, "data": p.bytes}, p.bytes),
    getAllAssetStorages: viewFun("0xef51fdf1", "getAllAssetStorages()", {}, p.array(p.struct({"name": p.string, "addr": p.address}))),
    getAllContracts: viewFun("0x18d3ce96", "getAllContracts()", {}, p.array(p.struct({"name": p.string, "addr": p.address}))),
    getAssetStorageAddress: viewFun("0x6444a2fe", "getAssetStorageAddress(string)", {"assetStorageName": p.string}, p.address),
    getContractAddress: viewFun("0x04433bbc", "getContractAddress(string)", {"contractName": p.string}, p.address),
    'isAssetStorage(address)': viewFun("0x34f702db", "isAssetStorage(address)", {"assetStorageAddress": p.address}, p.bool),
    'isAssetStorage(string)': viewFun("0x598f847f", "isAssetStorage(string)", {"assetStorageName": p.string}, p.bool),
    'isContract(address)': viewFun("0x16279055", "isContract(address)", {"selectedContractAddress": p.address}, p.bool),
    'isContract(string)': viewFun("0x211e940e", "isContract(string)", {"contractName": p.string}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    removeAssetStorageByAddress: fun("0x68104e3a", "removeAssetStorageByAddress(address)", {"assetStorageAddress": p.address}, ),
    removeAssetStorageByName: fun("0xfe28135d", "removeAssetStorageByName(string)", {"assetStorageName": p.string}, ),
    removeContractByAddress: fun("0xa8e24477", "removeContractByAddress(address)", {"contractAddress": p.address}, ),
    removeContractByName: fun("0x96f8e08e", "removeContractByName(string)", {"contractName": p.string}, ),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    setAndReinitializeContracts: fun("0x46e46a09", "setAndReinitializeContracts((string,address)[],(string,address)[],address[],(string,bytes[])[])", {"newContracts": p.array(p.struct({"name": p.string, "addr": p.address})), "newAssetStorageContracts": p.array(p.struct({"name": p.string, "addr": p.address})), "contractsToReinitialize": p.array(p.address), "forwardCallsData": p.array(p.struct({"contractName": p.string, "encodedData": p.array(p.bytes)}))}, ),
    setAssetStorageAddress: fun("0x077512fa", "setAssetStorageAddress(string,address)", {"assetStorageName": p.string, "assetStorageAddress": p.address}, ),
    setContractAddress: fun("0x534e785c", "setContractAddress(string,address)", {"contractName": p.string, "newContractAddress": p.address}, ),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    getAllAssetStorages() {
        return this.eth_call(functions.getAllAssetStorages, {})
    }

    getAllContracts() {
        return this.eth_call(functions.getAllContracts, {})
    }

    getAssetStorageAddress(assetStorageName: GetAssetStorageAddressParams["assetStorageName"]) {
        return this.eth_call(functions.getAssetStorageAddress, {assetStorageName})
    }

    getContractAddress(contractName: GetContractAddressParams["contractName"]) {
        return this.eth_call(functions.getContractAddress, {contractName})
    }

    'isAssetStorage(address)'(assetStorageAddress: IsAssetStorageParams_0["assetStorageAddress"]) {
        return this.eth_call(functions['isAssetStorage(address)'], {assetStorageAddress})
    }

    'isAssetStorage(string)'(assetStorageName: IsAssetStorageParams_1["assetStorageName"]) {
        return this.eth_call(functions['isAssetStorage(string)'], {assetStorageName})
    }

    'isContract(address)'(selectedContractAddress: IsContractParams_0["selectedContractAddress"]) {
        return this.eth_call(functions['isContract(address)'], {selectedContractAddress})
    }

    'isContract(string)'(contractName: IsContractParams_1["contractName"]) {
        return this.eth_call(functions['isContract(string)'], {contractName})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type AssetStorageChangedEventArgs = EParams<typeof events.AssetStorageChanged>
export type AssetStorageRemovedEventArgs = EParams<typeof events.AssetStorageRemoved>
export type ContractChangedEventArgs = EParams<typeof events.ContractChanged>
export type ContractRemovedEventArgs = EParams<typeof events.ContractRemoved>
export type NewAssetStorageEventArgs = EParams<typeof events.NewAssetStorage>
export type NewContractEventArgs = EParams<typeof events.NewContract>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>

/// Function types
export type ForwardCallParams = FunctionArguments<typeof functions.forwardCall>
export type ForwardCallReturn = FunctionReturn<typeof functions.forwardCall>

export type GetAllAssetStoragesParams = FunctionArguments<typeof functions.getAllAssetStorages>
export type GetAllAssetStoragesReturn = FunctionReturn<typeof functions.getAllAssetStorages>

export type GetAllContractsParams = FunctionArguments<typeof functions.getAllContracts>
export type GetAllContractsReturn = FunctionReturn<typeof functions.getAllContracts>

export type GetAssetStorageAddressParams = FunctionArguments<typeof functions.getAssetStorageAddress>
export type GetAssetStorageAddressReturn = FunctionReturn<typeof functions.getAssetStorageAddress>

export type GetContractAddressParams = FunctionArguments<typeof functions.getContractAddress>
export type GetContractAddressReturn = FunctionReturn<typeof functions.getContractAddress>

export type IsAssetStorageParams_0 = FunctionArguments<typeof functions['isAssetStorage(address)']>
export type IsAssetStorageReturn_0 = FunctionReturn<typeof functions['isAssetStorage(address)']>

export type IsAssetStorageParams_1 = FunctionArguments<typeof functions['isAssetStorage(string)']>
export type IsAssetStorageReturn_1 = FunctionReturn<typeof functions['isAssetStorage(string)']>

export type IsContractParams_0 = FunctionArguments<typeof functions['isContract(address)']>
export type IsContractReturn_0 = FunctionReturn<typeof functions['isContract(address)']>

export type IsContractParams_1 = FunctionArguments<typeof functions['isContract(string)']>
export type IsContractReturn_1 = FunctionReturn<typeof functions['isContract(string)']>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type RemoveAssetStorageByAddressParams = FunctionArguments<typeof functions.removeAssetStorageByAddress>
export type RemoveAssetStorageByAddressReturn = FunctionReturn<typeof functions.removeAssetStorageByAddress>

export type RemoveAssetStorageByNameParams = FunctionArguments<typeof functions.removeAssetStorageByName>
export type RemoveAssetStorageByNameReturn = FunctionReturn<typeof functions.removeAssetStorageByName>

export type RemoveContractByAddressParams = FunctionArguments<typeof functions.removeContractByAddress>
export type RemoveContractByAddressReturn = FunctionReturn<typeof functions.removeContractByAddress>

export type RemoveContractByNameParams = FunctionArguments<typeof functions.removeContractByName>
export type RemoveContractByNameReturn = FunctionReturn<typeof functions.removeContractByName>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type SetAndReinitializeContractsParams = FunctionArguments<typeof functions.setAndReinitializeContracts>
export type SetAndReinitializeContractsReturn = FunctionReturn<typeof functions.setAndReinitializeContracts>

export type SetAssetStorageAddressParams = FunctionArguments<typeof functions.setAssetStorageAddress>
export type SetAssetStorageAddressReturn = FunctionReturn<typeof functions.setAssetStorageAddress>

export type SetContractAddressParams = FunctionArguments<typeof functions.setContractAddress>
export type SetContractAddressReturn = FunctionReturn<typeof functions.setContractAddress>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

