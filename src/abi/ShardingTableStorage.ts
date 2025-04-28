import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    IdentityIdIndexSet: event("0x9dbb2411a2adcb1a5a27df434778cb7c05f013d52cb938d09ef5be2b7f1f26e6", "IdentityIdIndexSet(uint72,uint72)", {"identityId": indexed(p.uint72), "index": p.uint72}),
    NodeIndexDecremented: event("0x9ba7102917c182590bee88b7a4999bf62b739bf5e62e4439f8e5c02acde0fb0a", "NodeIndexDecremented(uint72,uint72)", {"identityId": indexed(p.uint72), "newIndex": p.uint72}),
    NodeIndexIncremented: event("0x16d9469d05114ec05448350b0981f3260b0b96bf65d3ce5372c6274e1b43b526", "NodeIndexIncremented(uint72,uint72)", {"identityId": indexed(p.uint72), "newIndex": p.uint72}),
    NodeObjectCreated: event("0x351949e84e28b58642183aa76cc54a233323f30816e0a59d4e8f692c5b8e87ec", "NodeObjectCreated(uint72,bytes,uint256,uint72)", {"identityId": indexed(p.uint72), "nodeId": p.bytes, "hashRingPosition": p.uint256, "index": p.uint72}),
    NodeObjectDeleted: event("0x2972a9d48919c3e7018e4436f4195941dc265d23ee59bc71fddaf5b9e73fdb6b", "NodeObjectDeleted(uint72)", {"identityId": indexed(p.uint72)}),
    NodesCountDecremented: event("0xff8d8bf03d5604d67bd29e36bf83ab7fc87580c16d17eef87c7cb5bdd4c25895", "NodesCountDecremented(uint72)", {"newCount": p.uint72}),
    NodesCountIncremented: event("0xc0a54bb1830712a78cb34c91c7c363cd0c300e16ed87bedb31f1af6575cd4789", "NodesCountIncremented(uint72)", {"newCount": p.uint72}),
}

export const functions = {
    createNodeObject: fun("0x6e8d2bf1", "createNodeObject(uint256,bytes,uint72,uint72)", {"hashRingPosition": p.uint256, "nodeId": p.bytes, "identityId": p.uint72, "index": p.uint72}, ),
    decrementNodeIndex: fun("0x8a9e65dc", "decrementNodeIndex(uint72)", {"identityId": p.uint72}, ),
    decrementNodesCount: fun("0xd9b65463", "decrementNodesCount()", {}, ),
    deleteNodeObject: fun("0xba624e84", "deleteNodeObject(uint72)", {"identityId": p.uint72}, ),
    getAdjacentIdentityIdsByIndex: viewFun("0x20309bce", "getAdjacentIdentityIdsByIndex(uint72)", {"index": p.uint72}, {"_0": p.uint72, "_1": p.uint72}),
    getHashRingPosition: viewFun("0x1335899b", "getHashRingPosition(uint72)", {"identityId": p.uint72}, p.uint256),
    getHashRingPositionByIndex: viewFun("0x57f0514f", "getHashRingPositionByIndex(uint72)", {"index": p.uint72}, p.uint256),
    getMultipleNodes: viewFun("0x76d03c2f", "getMultipleNodes(uint72,uint16)", {"firstIdentityId": p.uint72, "nodesNumber": p.uint16}, p.array(p.struct({"hashRingPosition": p.uint256, "nodeId": p.bytes, "index": p.uint72, "identityId": p.uint72}))),
    getNeighborhoodBoundaryByIndexes: viewFun("0x653b106f", "getNeighborhoodBoundaryByIndexes(uint72,uint72,uint72)", {"leftEdgeIndex": p.uint72, "closestNodeIndex": p.uint72, "rightEdgeIndex": p.uint72}, {"_0": p.struct({"hashRingPosition": p.uint256, "nodeId": p.bytes, "index": p.uint72, "identityId": p.uint72}), "_1": p.struct({"hashRingPosition": p.uint256, "nodeId": p.bytes, "index": p.uint72, "identityId": p.uint72}), "_2": p.struct({"hashRingPosition": p.uint256, "nodeId": p.bytes, "index": p.uint72, "identityId": p.uint72})}),
    getNode: viewFun("0x162929e9", "getNode(uint72)", {"identityId": p.uint72}, p.struct({"hashRingPosition": p.uint256, "nodeId": p.bytes, "index": p.uint72, "identityId": p.uint72})),
    getNodeByIndex: viewFun("0xcb28cfad", "getNodeByIndex(uint72)", {"index": p.uint72}, p.struct({"hashRingPosition": p.uint256, "nodeId": p.bytes, "index": p.uint72, "identityId": p.uint72})),
    head: viewFun("0x8f7dcfa3", "head()", {}, p.uint72),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    incrementNodeIndex: fun("0x1d2d3a2f", "incrementNodeIndex(uint72)", {"identityId": p.uint72}, ),
    incrementNodesCount: fun("0x4f3ae9ee", "incrementNodesCount()", {}, ),
    indexToIdentityId: viewFun("0x3ce8f960", "indexToIdentityId(uint72)", {"_0": p.uint72}, p.uint72),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nodeExists: viewFun("0x5d68479c", "nodeExists(uint72)", {"identityId": p.uint72}, p.bool),
    nodeExistsByIndex: viewFun("0xf8c9fcc7", "nodeExistsByIndex(uint72)", {"index": p.uint72}, p.bool),
    nodesCount: viewFun("0xf1a3c5b3", "nodesCount()", {}, p.uint72),
    setIdentityId: fun("0x11e2bb1a", "setIdentityId(uint72,uint72)", {"index": p.uint72, "identityId": p.uint72}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    getAdjacentIdentityIdsByIndex(index: GetAdjacentIdentityIdsByIndexParams["index"]) {
        return this.eth_call(functions.getAdjacentIdentityIdsByIndex, {index})
    }

    getHashRingPosition(identityId: GetHashRingPositionParams["identityId"]) {
        return this.eth_call(functions.getHashRingPosition, {identityId})
    }

    getHashRingPositionByIndex(index: GetHashRingPositionByIndexParams["index"]) {
        return this.eth_call(functions.getHashRingPositionByIndex, {index})
    }

    getMultipleNodes(firstIdentityId: GetMultipleNodesParams["firstIdentityId"], nodesNumber: GetMultipleNodesParams["nodesNumber"]) {
        return this.eth_call(functions.getMultipleNodes, {firstIdentityId, nodesNumber})
    }

    getNeighborhoodBoundaryByIndexes(leftEdgeIndex: GetNeighborhoodBoundaryByIndexesParams["leftEdgeIndex"], closestNodeIndex: GetNeighborhoodBoundaryByIndexesParams["closestNodeIndex"], rightEdgeIndex: GetNeighborhoodBoundaryByIndexesParams["rightEdgeIndex"]) {
        return this.eth_call(functions.getNeighborhoodBoundaryByIndexes, {leftEdgeIndex, closestNodeIndex, rightEdgeIndex})
    }

    getNode(identityId: GetNodeParams["identityId"]) {
        return this.eth_call(functions.getNode, {identityId})
    }

    getNodeByIndex(index: GetNodeByIndexParams["index"]) {
        return this.eth_call(functions.getNodeByIndex, {index})
    }

    head() {
        return this.eth_call(functions.head, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    indexToIdentityId(_0: IndexToIdentityIdParams["_0"]) {
        return this.eth_call(functions.indexToIdentityId, {_0})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nodeExists(identityId: NodeExistsParams["identityId"]) {
        return this.eth_call(functions.nodeExists, {identityId})
    }

    nodeExistsByIndex(index: NodeExistsByIndexParams["index"]) {
        return this.eth_call(functions.nodeExistsByIndex, {index})
    }

    nodesCount() {
        return this.eth_call(functions.nodesCount, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type IdentityIdIndexSetEventArgs = EParams<typeof events.IdentityIdIndexSet>
export type NodeIndexDecrementedEventArgs = EParams<typeof events.NodeIndexDecremented>
export type NodeIndexIncrementedEventArgs = EParams<typeof events.NodeIndexIncremented>
export type NodeObjectCreatedEventArgs = EParams<typeof events.NodeObjectCreated>
export type NodeObjectDeletedEventArgs = EParams<typeof events.NodeObjectDeleted>
export type NodesCountDecrementedEventArgs = EParams<typeof events.NodesCountDecremented>
export type NodesCountIncrementedEventArgs = EParams<typeof events.NodesCountIncremented>

/// Function types
export type CreateNodeObjectParams = FunctionArguments<typeof functions.createNodeObject>
export type CreateNodeObjectReturn = FunctionReturn<typeof functions.createNodeObject>

export type DecrementNodeIndexParams = FunctionArguments<typeof functions.decrementNodeIndex>
export type DecrementNodeIndexReturn = FunctionReturn<typeof functions.decrementNodeIndex>

export type DecrementNodesCountParams = FunctionArguments<typeof functions.decrementNodesCount>
export type DecrementNodesCountReturn = FunctionReturn<typeof functions.decrementNodesCount>

export type DeleteNodeObjectParams = FunctionArguments<typeof functions.deleteNodeObject>
export type DeleteNodeObjectReturn = FunctionReturn<typeof functions.deleteNodeObject>

export type GetAdjacentIdentityIdsByIndexParams = FunctionArguments<typeof functions.getAdjacentIdentityIdsByIndex>
export type GetAdjacentIdentityIdsByIndexReturn = FunctionReturn<typeof functions.getAdjacentIdentityIdsByIndex>

export type GetHashRingPositionParams = FunctionArguments<typeof functions.getHashRingPosition>
export type GetHashRingPositionReturn = FunctionReturn<typeof functions.getHashRingPosition>

export type GetHashRingPositionByIndexParams = FunctionArguments<typeof functions.getHashRingPositionByIndex>
export type GetHashRingPositionByIndexReturn = FunctionReturn<typeof functions.getHashRingPositionByIndex>

export type GetMultipleNodesParams = FunctionArguments<typeof functions.getMultipleNodes>
export type GetMultipleNodesReturn = FunctionReturn<typeof functions.getMultipleNodes>

export type GetNeighborhoodBoundaryByIndexesParams = FunctionArguments<typeof functions.getNeighborhoodBoundaryByIndexes>
export type GetNeighborhoodBoundaryByIndexesReturn = FunctionReturn<typeof functions.getNeighborhoodBoundaryByIndexes>

export type GetNodeParams = FunctionArguments<typeof functions.getNode>
export type GetNodeReturn = FunctionReturn<typeof functions.getNode>

export type GetNodeByIndexParams = FunctionArguments<typeof functions.getNodeByIndex>
export type GetNodeByIndexReturn = FunctionReturn<typeof functions.getNodeByIndex>

export type HeadParams = FunctionArguments<typeof functions.head>
export type HeadReturn = FunctionReturn<typeof functions.head>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IncrementNodeIndexParams = FunctionArguments<typeof functions.incrementNodeIndex>
export type IncrementNodeIndexReturn = FunctionReturn<typeof functions.incrementNodeIndex>

export type IncrementNodesCountParams = FunctionArguments<typeof functions.incrementNodesCount>
export type IncrementNodesCountReturn = FunctionReturn<typeof functions.incrementNodesCount>

export type IndexToIdentityIdParams = FunctionArguments<typeof functions.indexToIdentityId>
export type IndexToIdentityIdReturn = FunctionReturn<typeof functions.indexToIdentityId>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NodeExistsParams = FunctionArguments<typeof functions.nodeExists>
export type NodeExistsReturn = FunctionReturn<typeof functions.nodeExists>

export type NodeExistsByIndexParams = FunctionArguments<typeof functions.nodeExistsByIndex>
export type NodeExistsByIndexReturn = FunctionReturn<typeof functions.nodeExistsByIndex>

export type NodesCountParams = FunctionArguments<typeof functions.nodesCount>
export type NodesCountReturn = FunctionReturn<typeof functions.nodesCount>

export type SetIdentityIdParams = FunctionArguments<typeof functions.setIdentityId>
export type SetIdentityIdReturn = FunctionReturn<typeof functions.setIdentityId>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

