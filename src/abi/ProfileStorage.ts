import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    NodeAskUpdated: event("0x8f2c569528f97423c87d47f3a2204d94069d2557cba3f91f9a38ae251d24648b", "NodeAskUpdated(uint72,uint96,uint96)", {"identityId": indexed(p.uint72), "oldAsk": p.uint96, "newAsk": p.uint96}),
    NodeIdUpdated: event("0xde876e14e7f552ce6d9ca2bab6289109eb029c6cfd141adb90067593bc03bde3", "NodeIdUpdated(uint72,bytes,bytes)", {"identityId": indexed(p.uint72), "oldNodeId": p.bytes, "newNodeId": p.bytes}),
    NodeNameUpdated: event("0x54aeab69385dacd728be9d8bf26a38eb6bb805fd35e1a73f4f3614b5b91bdd24", "NodeNameUpdated(uint72,string,string)", {"identityId": indexed(p.uint72), "oldName": p.string, "newName": p.string}),
    OperatorFeeAdded: event("0xe7e6bc38648eee9f5eb19ddff99f365822a16ed6438ad4e17fedf1f5391b521a", "OperatorFeeAdded(uint72,uint16,uint256)", {"identityId": indexed(p.uint72), "feePercentage": p.uint16, "effectiveDate": p.uint256}),
    OperatorFeesReplaced: event("0x2b5c7b47dae968db086d5727d99a36fc757795da5800dfb6bdd81fc8b85b5a05", "OperatorFeesReplaced(uint72,uint16,uint16,uint256)", {"identityId": indexed(p.uint72), "oldFeePercentage": p.uint16, "newFeePercentage": p.uint16, "effectiveDate": p.uint256}),
    OperatorFeesUpdated: event("0x499b8c0761d38e2bcaeb85c78a657a09c7f47763302aa3ec0a11357af38b9b6b", "OperatorFeesUpdated(uint72,(uint16,uint256)[])", {"identityId": indexed(p.uint72), "operatorFees": p.array(p.struct({"feePercentage": p.uint16, "effectiveDate": p.uint256}))}),
    ProfileCreated: event("0xef78811ae844690a1f5b7ff8d76a23c2b441c851b472480247520df5f472cb0b", "ProfileCreated(uint72,string,bytes,uint16)", {"identityId": indexed(p.uint72), "nodeName": p.string, "nodeId": p.bytes, "initialOperatorFee": p.uint16}),
    ProfileDeleted: event("0x722ff4ac2c356aabfccceb7320318d0374f9728d2b2927cb288c426658ade93b", "ProfileDeleted(uint72,bytes)", {"identityId": indexed(p.uint72), "nodeId": p.bytes}),
}

export const functions = {
    addOperatorFee: fun("0x19f57bc2", "addOperatorFee(uint72,uint16,uint256)", {"identityId": p.uint72, "feePercentage": p.uint16, "effectiveDate": p.uint256}, ),
    askUpdateCooldown: viewFun("0x47dd6223", "askUpdateCooldown(uint72)", {"_0": p.uint72}, p.uint256),
    createProfile: fun("0x12179c64", "createProfile(uint72,string,bytes,uint16)", {"identityId": p.uint72, "nodeName": p.string, "nodeId": p.bytes, "initialOperatorFee": p.uint16}, ),
    deleteProfile: fun("0x3718ac59", "deleteProfile(uint72)", {"identityId": p.uint72}, ),
    getActiveOperatorFee: viewFun("0x53deb0af", "getActiveOperatorFee(uint72)", {"identityId": p.uint72}, p.struct({"feePercentage": p.uint16, "effectiveDate": p.uint256})),
    getActiveOperatorFeeEffectiveDate: viewFun("0xb2a20958", "getActiveOperatorFeeEffectiveDate(uint72)", {"identityId": p.uint72}, p.uint256),
    getActiveOperatorFeePercentage: viewFun("0x1985659b", "getActiveOperatorFeePercentage(uint72)", {"identityId": p.uint72}, p.uint16),
    getAsk: viewFun("0x39fb67dd", "getAsk(uint72)", {"identityId": p.uint72}, p.uint96),
    getLatestOperatorFee: viewFun("0x59886ed1", "getLatestOperatorFee(uint72)", {"identityId": p.uint72}, p.struct({"feePercentage": p.uint16, "effectiveDate": p.uint256})),
    getLatestOperatorFeeEffectiveDate: viewFun("0x3c6a11ce", "getLatestOperatorFeeEffectiveDate(uint72)", {"identityId": p.uint72}, p.uint256),
    getLatestOperatorFeePercentage: viewFun("0x4eb596f6", "getLatestOperatorFeePercentage(uint72)", {"identityId": p.uint72}, p.uint16),
    getName: viewFun("0x94fd67ae", "getName(uint72)", {"identityId": p.uint72}, p.string),
    getNodeId: viewFun("0x41c10b9a", "getNodeId(uint72)", {"identityId": p.uint72}, p.bytes),
    getOperatorFee: viewFun("0x243d504f", "getOperatorFee(uint72)", {"identityId": p.uint72}, p.uint16),
    getOperatorFeeByIndex: viewFun("0xb1b694c4", "getOperatorFeeByIndex(uint72,uint256)", {"identityId": p.uint72, "index": p.uint256}, p.struct({"feePercentage": p.uint16, "effectiveDate": p.uint256})),
    getOperatorFeeByTimestamp: viewFun("0x2c1345a0", "getOperatorFeeByTimestamp(uint72,uint256)", {"identityId": p.uint72, "timestamp": p.uint256}, p.struct({"feePercentage": p.uint16, "effectiveDate": p.uint256})),
    getOperatorFeeByTimestampReverse: viewFun("0x3ff0afee", "getOperatorFeeByTimestampReverse(uint72,uint256)", {"identityId": p.uint72, "timestamp": p.uint256}, p.struct({"feePercentage": p.uint16, "effectiveDate": p.uint256})),
    getOperatorFeeEffectiveDateByIndex: viewFun("0x4497d4e6", "getOperatorFeeEffectiveDateByIndex(uint72,uint256)", {"identityId": p.uint72, "index": p.uint256}, p.uint256),
    getOperatorFeeEffectiveDateByTimestamp: viewFun("0x5993a8c0", "getOperatorFeeEffectiveDateByTimestamp(uint72,uint256)", {"identityId": p.uint72, "timestamp": p.uint256}, p.uint256),
    getOperatorFeeEffectiveDateByTimestampReverse: viewFun("0x84089cc0", "getOperatorFeeEffectiveDateByTimestampReverse(uint72,uint256)", {"identityId": p.uint72, "timestamp": p.uint256}, p.uint256),
    getOperatorFeePercentageByIndex: viewFun("0xd082fad3", "getOperatorFeePercentageByIndex(uint72,uint256)", {"identityId": p.uint72, "index": p.uint256}, p.uint16),
    getOperatorFeePercentageByTimestamp: viewFun("0x1d9a19fe", "getOperatorFeePercentageByTimestamp(uint72,uint256)", {"identityId": p.uint72, "timestamp": p.uint256}, p.uint16),
    getOperatorFeePercentageByTimestampReverse: viewFun("0x8bb1f0b2", "getOperatorFeePercentageByTimestampReverse(uint72,uint256)", {"identityId": p.uint72, "timestamp": p.uint256}, p.uint16),
    getOperatorFees: viewFun("0xe27dbeb0", "getOperatorFees(uint72)", {"identityId": p.uint72}, p.array(p.struct({"feePercentage": p.uint16, "effectiveDate": p.uint256}))),
    getOperatorFeesLength: viewFun("0xf67e80ca", "getOperatorFeesLength(uint72)", {"identityId": p.uint72}, p.uint256),
    getProfile: viewFun("0xe49f999b", "getProfile(uint72)", {"identityId": p.uint72}, {"_0": p.string, "_1": p.bytes, "_2": p.uint96, "_3": p.array(p.struct({"feePercentage": p.uint16, "effectiveDate": p.uint256}))}),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    isNameTaken: viewFun("0xb3da4e34", "isNameTaken(string)", {"_0": p.string}, p.bool),
    isOperatorFeeChangePending: viewFun("0x39aa0ff9", "isOperatorFeeChangePending(uint72)", {"identityId": p.uint72}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nodeIdsList: viewFun("0x947bb615", "nodeIdsList(bytes)", {"_0": p.bytes}, p.bool),
    profileExists: viewFun("0xc04d7dcf", "profileExists(uint72)", {"identityId": p.uint72}, p.bool),
    profiles: viewFun("0x744277c8", "profiles(uint72)", {"_0": p.uint72}, {"name": p.string, "nodeId": p.bytes, "ask": p.uint96}),
    replacePendingOperatorFee: fun("0xd92f3ba2", "replacePendingOperatorFee(uint72,uint16,uint256)", {"identityId": p.uint72, "feePercentage": p.uint16, "effectiveDate": p.uint256}, ),
    setAsk: fun("0xd184a869", "setAsk(uint72,uint96)", {"identityId": p.uint72, "ask": p.uint96}, ),
    setAskUpdateCooldown: fun("0x06658374", "setAskUpdateCooldown(uint72,uint256)", {"identityId": p.uint72, "cooldownEnd": p.uint256}, ),
    setName: fun("0x7f9a6d31", "setName(uint72,string)", {"identityId": p.uint72, "_name": p.string}, ),
    setNodeId: fun("0x22bd9e81", "setNodeId(uint72,bytes)", {"identityId": p.uint72, "nodeId": p.bytes}, ),
    setOperatorFees: fun("0x534df3f5", "setOperatorFees(uint72,(uint16,uint256)[])", {"identityId": p.uint72, "operatorFees": p.array(p.struct({"feePercentage": p.uint16, "effectiveDate": p.uint256}))}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    askUpdateCooldown(_0: AskUpdateCooldownParams["_0"]) {
        return this.eth_call(functions.askUpdateCooldown, {_0})
    }

    getActiveOperatorFee(identityId: GetActiveOperatorFeeParams["identityId"]) {
        return this.eth_call(functions.getActiveOperatorFee, {identityId})
    }

    getActiveOperatorFeeEffectiveDate(identityId: GetActiveOperatorFeeEffectiveDateParams["identityId"]) {
        return this.eth_call(functions.getActiveOperatorFeeEffectiveDate, {identityId})
    }

    getActiveOperatorFeePercentage(identityId: GetActiveOperatorFeePercentageParams["identityId"]) {
        return this.eth_call(functions.getActiveOperatorFeePercentage, {identityId})
    }

    getAsk(identityId: GetAskParams["identityId"]) {
        return this.eth_call(functions.getAsk, {identityId})
    }

    getLatestOperatorFee(identityId: GetLatestOperatorFeeParams["identityId"]) {
        return this.eth_call(functions.getLatestOperatorFee, {identityId})
    }

    getLatestOperatorFeeEffectiveDate(identityId: GetLatestOperatorFeeEffectiveDateParams["identityId"]) {
        return this.eth_call(functions.getLatestOperatorFeeEffectiveDate, {identityId})
    }

    getLatestOperatorFeePercentage(identityId: GetLatestOperatorFeePercentageParams["identityId"]) {
        return this.eth_call(functions.getLatestOperatorFeePercentage, {identityId})
    }

    getName(identityId: GetNameParams["identityId"]) {
        return this.eth_call(functions.getName, {identityId})
    }

    getNodeId(identityId: GetNodeIdParams["identityId"]) {
        return this.eth_call(functions.getNodeId, {identityId})
    }

    getOperatorFee(identityId: GetOperatorFeeParams["identityId"]) {
        return this.eth_call(functions.getOperatorFee, {identityId})
    }

    getOperatorFeeByIndex(identityId: GetOperatorFeeByIndexParams["identityId"], index: GetOperatorFeeByIndexParams["index"]) {
        return this.eth_call(functions.getOperatorFeeByIndex, {identityId, index})
    }

    getOperatorFeeByTimestamp(identityId: GetOperatorFeeByTimestampParams["identityId"], timestamp: GetOperatorFeeByTimestampParams["timestamp"]) {
        return this.eth_call(functions.getOperatorFeeByTimestamp, {identityId, timestamp})
    }

    getOperatorFeeByTimestampReverse(identityId: GetOperatorFeeByTimestampReverseParams["identityId"], timestamp: GetOperatorFeeByTimestampReverseParams["timestamp"]) {
        return this.eth_call(functions.getOperatorFeeByTimestampReverse, {identityId, timestamp})
    }

    getOperatorFeeEffectiveDateByIndex(identityId: GetOperatorFeeEffectiveDateByIndexParams["identityId"], index: GetOperatorFeeEffectiveDateByIndexParams["index"]) {
        return this.eth_call(functions.getOperatorFeeEffectiveDateByIndex, {identityId, index})
    }

    getOperatorFeeEffectiveDateByTimestamp(identityId: GetOperatorFeeEffectiveDateByTimestampParams["identityId"], timestamp: GetOperatorFeeEffectiveDateByTimestampParams["timestamp"]) {
        return this.eth_call(functions.getOperatorFeeEffectiveDateByTimestamp, {identityId, timestamp})
    }

    getOperatorFeeEffectiveDateByTimestampReverse(identityId: GetOperatorFeeEffectiveDateByTimestampReverseParams["identityId"], timestamp: GetOperatorFeeEffectiveDateByTimestampReverseParams["timestamp"]) {
        return this.eth_call(functions.getOperatorFeeEffectiveDateByTimestampReverse, {identityId, timestamp})
    }

    getOperatorFeePercentageByIndex(identityId: GetOperatorFeePercentageByIndexParams["identityId"], index: GetOperatorFeePercentageByIndexParams["index"]) {
        return this.eth_call(functions.getOperatorFeePercentageByIndex, {identityId, index})
    }

    getOperatorFeePercentageByTimestamp(identityId: GetOperatorFeePercentageByTimestampParams["identityId"], timestamp: GetOperatorFeePercentageByTimestampParams["timestamp"]) {
        return this.eth_call(functions.getOperatorFeePercentageByTimestamp, {identityId, timestamp})
    }

    getOperatorFeePercentageByTimestampReverse(identityId: GetOperatorFeePercentageByTimestampReverseParams["identityId"], timestamp: GetOperatorFeePercentageByTimestampReverseParams["timestamp"]) {
        return this.eth_call(functions.getOperatorFeePercentageByTimestampReverse, {identityId, timestamp})
    }

    getOperatorFees(identityId: GetOperatorFeesParams["identityId"]) {
        return this.eth_call(functions.getOperatorFees, {identityId})
    }

    getOperatorFeesLength(identityId: GetOperatorFeesLengthParams["identityId"]) {
        return this.eth_call(functions.getOperatorFeesLength, {identityId})
    }

    getProfile(identityId: GetProfileParams["identityId"]) {
        return this.eth_call(functions.getProfile, {identityId})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isNameTaken(_0: IsNameTakenParams["_0"]) {
        return this.eth_call(functions.isNameTaken, {_0})
    }

    isOperatorFeeChangePending(identityId: IsOperatorFeeChangePendingParams["identityId"]) {
        return this.eth_call(functions.isOperatorFeeChangePending, {identityId})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nodeIdsList(_0: NodeIdsListParams["_0"]) {
        return this.eth_call(functions.nodeIdsList, {_0})
    }

    profileExists(identityId: ProfileExistsParams["identityId"]) {
        return this.eth_call(functions.profileExists, {identityId})
    }

    profiles(_0: ProfilesParams["_0"]) {
        return this.eth_call(functions.profiles, {_0})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type NodeAskUpdatedEventArgs = EParams<typeof events.NodeAskUpdated>
export type NodeIdUpdatedEventArgs = EParams<typeof events.NodeIdUpdated>
export type NodeNameUpdatedEventArgs = EParams<typeof events.NodeNameUpdated>
export type OperatorFeeAddedEventArgs = EParams<typeof events.OperatorFeeAdded>
export type OperatorFeesReplacedEventArgs = EParams<typeof events.OperatorFeesReplaced>
export type OperatorFeesUpdatedEventArgs = EParams<typeof events.OperatorFeesUpdated>
export type ProfileCreatedEventArgs = EParams<typeof events.ProfileCreated>
export type ProfileDeletedEventArgs = EParams<typeof events.ProfileDeleted>

/// Function types
export type AddOperatorFeeParams = FunctionArguments<typeof functions.addOperatorFee>
export type AddOperatorFeeReturn = FunctionReturn<typeof functions.addOperatorFee>

export type AskUpdateCooldownParams = FunctionArguments<typeof functions.askUpdateCooldown>
export type AskUpdateCooldownReturn = FunctionReturn<typeof functions.askUpdateCooldown>

export type CreateProfileParams = FunctionArguments<typeof functions.createProfile>
export type CreateProfileReturn = FunctionReturn<typeof functions.createProfile>

export type DeleteProfileParams = FunctionArguments<typeof functions.deleteProfile>
export type DeleteProfileReturn = FunctionReturn<typeof functions.deleteProfile>

export type GetActiveOperatorFeeParams = FunctionArguments<typeof functions.getActiveOperatorFee>
export type GetActiveOperatorFeeReturn = FunctionReturn<typeof functions.getActiveOperatorFee>

export type GetActiveOperatorFeeEffectiveDateParams = FunctionArguments<typeof functions.getActiveOperatorFeeEffectiveDate>
export type GetActiveOperatorFeeEffectiveDateReturn = FunctionReturn<typeof functions.getActiveOperatorFeeEffectiveDate>

export type GetActiveOperatorFeePercentageParams = FunctionArguments<typeof functions.getActiveOperatorFeePercentage>
export type GetActiveOperatorFeePercentageReturn = FunctionReturn<typeof functions.getActiveOperatorFeePercentage>

export type GetAskParams = FunctionArguments<typeof functions.getAsk>
export type GetAskReturn = FunctionReturn<typeof functions.getAsk>

export type GetLatestOperatorFeeParams = FunctionArguments<typeof functions.getLatestOperatorFee>
export type GetLatestOperatorFeeReturn = FunctionReturn<typeof functions.getLatestOperatorFee>

export type GetLatestOperatorFeeEffectiveDateParams = FunctionArguments<typeof functions.getLatestOperatorFeeEffectiveDate>
export type GetLatestOperatorFeeEffectiveDateReturn = FunctionReturn<typeof functions.getLatestOperatorFeeEffectiveDate>

export type GetLatestOperatorFeePercentageParams = FunctionArguments<typeof functions.getLatestOperatorFeePercentage>
export type GetLatestOperatorFeePercentageReturn = FunctionReturn<typeof functions.getLatestOperatorFeePercentage>

export type GetNameParams = FunctionArguments<typeof functions.getName>
export type GetNameReturn = FunctionReturn<typeof functions.getName>

export type GetNodeIdParams = FunctionArguments<typeof functions.getNodeId>
export type GetNodeIdReturn = FunctionReturn<typeof functions.getNodeId>

export type GetOperatorFeeParams = FunctionArguments<typeof functions.getOperatorFee>
export type GetOperatorFeeReturn = FunctionReturn<typeof functions.getOperatorFee>

export type GetOperatorFeeByIndexParams = FunctionArguments<typeof functions.getOperatorFeeByIndex>
export type GetOperatorFeeByIndexReturn = FunctionReturn<typeof functions.getOperatorFeeByIndex>

export type GetOperatorFeeByTimestampParams = FunctionArguments<typeof functions.getOperatorFeeByTimestamp>
export type GetOperatorFeeByTimestampReturn = FunctionReturn<typeof functions.getOperatorFeeByTimestamp>

export type GetOperatorFeeByTimestampReverseParams = FunctionArguments<typeof functions.getOperatorFeeByTimestampReverse>
export type GetOperatorFeeByTimestampReverseReturn = FunctionReturn<typeof functions.getOperatorFeeByTimestampReverse>

export type GetOperatorFeeEffectiveDateByIndexParams = FunctionArguments<typeof functions.getOperatorFeeEffectiveDateByIndex>
export type GetOperatorFeeEffectiveDateByIndexReturn = FunctionReturn<typeof functions.getOperatorFeeEffectiveDateByIndex>

export type GetOperatorFeeEffectiveDateByTimestampParams = FunctionArguments<typeof functions.getOperatorFeeEffectiveDateByTimestamp>
export type GetOperatorFeeEffectiveDateByTimestampReturn = FunctionReturn<typeof functions.getOperatorFeeEffectiveDateByTimestamp>

export type GetOperatorFeeEffectiveDateByTimestampReverseParams = FunctionArguments<typeof functions.getOperatorFeeEffectiveDateByTimestampReverse>
export type GetOperatorFeeEffectiveDateByTimestampReverseReturn = FunctionReturn<typeof functions.getOperatorFeeEffectiveDateByTimestampReverse>

export type GetOperatorFeePercentageByIndexParams = FunctionArguments<typeof functions.getOperatorFeePercentageByIndex>
export type GetOperatorFeePercentageByIndexReturn = FunctionReturn<typeof functions.getOperatorFeePercentageByIndex>

export type GetOperatorFeePercentageByTimestampParams = FunctionArguments<typeof functions.getOperatorFeePercentageByTimestamp>
export type GetOperatorFeePercentageByTimestampReturn = FunctionReturn<typeof functions.getOperatorFeePercentageByTimestamp>

export type GetOperatorFeePercentageByTimestampReverseParams = FunctionArguments<typeof functions.getOperatorFeePercentageByTimestampReverse>
export type GetOperatorFeePercentageByTimestampReverseReturn = FunctionReturn<typeof functions.getOperatorFeePercentageByTimestampReverse>

export type GetOperatorFeesParams = FunctionArguments<typeof functions.getOperatorFees>
export type GetOperatorFeesReturn = FunctionReturn<typeof functions.getOperatorFees>

export type GetOperatorFeesLengthParams = FunctionArguments<typeof functions.getOperatorFeesLength>
export type GetOperatorFeesLengthReturn = FunctionReturn<typeof functions.getOperatorFeesLength>

export type GetProfileParams = FunctionArguments<typeof functions.getProfile>
export type GetProfileReturn = FunctionReturn<typeof functions.getProfile>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IsNameTakenParams = FunctionArguments<typeof functions.isNameTaken>
export type IsNameTakenReturn = FunctionReturn<typeof functions.isNameTaken>

export type IsOperatorFeeChangePendingParams = FunctionArguments<typeof functions.isOperatorFeeChangePending>
export type IsOperatorFeeChangePendingReturn = FunctionReturn<typeof functions.isOperatorFeeChangePending>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NodeIdsListParams = FunctionArguments<typeof functions.nodeIdsList>
export type NodeIdsListReturn = FunctionReturn<typeof functions.nodeIdsList>

export type ProfileExistsParams = FunctionArguments<typeof functions.profileExists>
export type ProfileExistsReturn = FunctionReturn<typeof functions.profileExists>

export type ProfilesParams = FunctionArguments<typeof functions.profiles>
export type ProfilesReturn = FunctionReturn<typeof functions.profiles>

export type ReplacePendingOperatorFeeParams = FunctionArguments<typeof functions.replacePendingOperatorFee>
export type ReplacePendingOperatorFeeReturn = FunctionReturn<typeof functions.replacePendingOperatorFee>

export type SetAskParams = FunctionArguments<typeof functions.setAsk>
export type SetAskReturn = FunctionReturn<typeof functions.setAsk>

export type SetAskUpdateCooldownParams = FunctionArguments<typeof functions.setAskUpdateCooldown>
export type SetAskUpdateCooldownReturn = FunctionReturn<typeof functions.setAskUpdateCooldown>

export type SetNameParams = FunctionArguments<typeof functions.setName>
export type SetNameReturn = FunctionReturn<typeof functions.setName>

export type SetNodeIdParams = FunctionArguments<typeof functions.setNodeId>
export type SetNodeIdReturn = FunctionReturn<typeof functions.setNodeId>

export type SetOperatorFeesParams = FunctionArguments<typeof functions.setOperatorFees>
export type SetOperatorFeesReturn = FunctionReturn<typeof functions.setOperatorFees>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

