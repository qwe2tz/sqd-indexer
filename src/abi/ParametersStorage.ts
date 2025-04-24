import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    ParameterChanged: event("0x18af1c2db06558764ef7e5f81f429c1ec57050d7b3eb7c0cdd985ce6257ec972", "ParameterChanged(string,uint256)", {"parameterName": p.string, "parameterValue": p.uint256}),
}

export const functions = {
    askLowerBoundFactor: viewFun("0x1fcb831c", "askLowerBoundFactor()", {}, p.uint256),
    askUpperBoundFactor: viewFun("0x9d50e111", "askUpperBoundFactor()", {}, p.uint256),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    maximumStake: viewFun("0xb5c6b453", "maximumStake()", {}, p.uint96),
    minimumRequiredSignatures: viewFun("0xe35d1653", "minimumRequiredSignatures()", {}, p.uint256),
    minimumStake: viewFun("0xec5ffac2", "minimumStake()", {}, p.uint96),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nodeAskUpdateDelay: viewFun("0x96acc087", "nodeAskUpdateDelay()", {}, p.uint256),
    opWalletsLimitOnProfileCreation: viewFun("0x2d0d0e6a", "opWalletsLimitOnProfileCreation()", {}, p.uint16),
    operatorFeeUpdateDelay: viewFun("0xfb2dbdad", "operatorFeeUpdateDelay()", {}, p.uint256),
    setAskLowerBoundFactor: fun("0x0e6a052d", "setAskLowerBoundFactor(uint256)", {"_askLowerBoundFactor": p.uint256}, ),
    setAskUpperBoundFactor: fun("0xbe770f24", "setAskUpperBoundFactor(uint256)", {"_askUpperBoundFactor": p.uint256}, ),
    setMaximumStake: fun("0xe28dcb1d", "setMaximumStake(uint96)", {"newMaximumStake": p.uint96}, ),
    setMinimumRequiredSignatures: fun("0xf7ae9b6e", "setMinimumRequiredSignatures(uint256)", {"_minimumRequiredSignatures": p.uint256}, ),
    setMinimumStake: fun("0xb13a8c07", "setMinimumStake(uint96)", {"newMinimumStake": p.uint96}, ),
    setNodeAskUpdateDelay: fun("0xca8bd277", "setNodeAskUpdateDelay(uint256)", {"newNodeAskUpdateDelay": p.uint256}, ),
    setOpWalletsLimitOnProfileCreation: fun("0x4fcae33e", "setOpWalletsLimitOnProfileCreation(uint16)", {"opWalletsLimitOnProfileCreation_": p.uint16}, ),
    setOperatorFeeUpdateDelay: fun("0x9d28202e", "setOperatorFeeUpdateDelay(uint256)", {"newOperatorFeeUpdateDelay": p.uint256}, ),
    setShardingTableSizeLimit: fun("0x3a19ed36", "setShardingTableSizeLimit(uint16)", {"shardingTableSizeLimit_": p.uint16}, ),
    setStakeWithdrawalDelay: fun("0x2e08788e", "setStakeWithdrawalDelay(uint256)", {"newStakeWithdrawalDelay": p.uint256}, ),
    shardingTableSizeLimit: viewFun("0x324cc7da", "shardingTableSizeLimit()", {}, p.uint16),
    stakeWithdrawalDelay: viewFun("0x151db1b9", "stakeWithdrawalDelay()", {}, p.uint256),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    askLowerBoundFactor() {
        return this.eth_call(functions.askLowerBoundFactor, {})
    }

    askUpperBoundFactor() {
        return this.eth_call(functions.askUpperBoundFactor, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    maximumStake() {
        return this.eth_call(functions.maximumStake, {})
    }

    minimumRequiredSignatures() {
        return this.eth_call(functions.minimumRequiredSignatures, {})
    }

    minimumStake() {
        return this.eth_call(functions.minimumStake, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nodeAskUpdateDelay() {
        return this.eth_call(functions.nodeAskUpdateDelay, {})
    }

    opWalletsLimitOnProfileCreation() {
        return this.eth_call(functions.opWalletsLimitOnProfileCreation, {})
    }

    operatorFeeUpdateDelay() {
        return this.eth_call(functions.operatorFeeUpdateDelay, {})
    }

    shardingTableSizeLimit() {
        return this.eth_call(functions.shardingTableSizeLimit, {})
    }

    stakeWithdrawalDelay() {
        return this.eth_call(functions.stakeWithdrawalDelay, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type ParameterChangedEventArgs = EParams<typeof events.ParameterChanged>

/// Function types
export type AskLowerBoundFactorParams = FunctionArguments<typeof functions.askLowerBoundFactor>
export type AskLowerBoundFactorReturn = FunctionReturn<typeof functions.askLowerBoundFactor>

export type AskUpperBoundFactorParams = FunctionArguments<typeof functions.askUpperBoundFactor>
export type AskUpperBoundFactorReturn = FunctionReturn<typeof functions.askUpperBoundFactor>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type MaximumStakeParams = FunctionArguments<typeof functions.maximumStake>
export type MaximumStakeReturn = FunctionReturn<typeof functions.maximumStake>

export type MinimumRequiredSignaturesParams = FunctionArguments<typeof functions.minimumRequiredSignatures>
export type MinimumRequiredSignaturesReturn = FunctionReturn<typeof functions.minimumRequiredSignatures>

export type MinimumStakeParams = FunctionArguments<typeof functions.minimumStake>
export type MinimumStakeReturn = FunctionReturn<typeof functions.minimumStake>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NodeAskUpdateDelayParams = FunctionArguments<typeof functions.nodeAskUpdateDelay>
export type NodeAskUpdateDelayReturn = FunctionReturn<typeof functions.nodeAskUpdateDelay>

export type OpWalletsLimitOnProfileCreationParams = FunctionArguments<typeof functions.opWalletsLimitOnProfileCreation>
export type OpWalletsLimitOnProfileCreationReturn = FunctionReturn<typeof functions.opWalletsLimitOnProfileCreation>

export type OperatorFeeUpdateDelayParams = FunctionArguments<typeof functions.operatorFeeUpdateDelay>
export type OperatorFeeUpdateDelayReturn = FunctionReturn<typeof functions.operatorFeeUpdateDelay>

export type SetAskLowerBoundFactorParams = FunctionArguments<typeof functions.setAskLowerBoundFactor>
export type SetAskLowerBoundFactorReturn = FunctionReturn<typeof functions.setAskLowerBoundFactor>

export type SetAskUpperBoundFactorParams = FunctionArguments<typeof functions.setAskUpperBoundFactor>
export type SetAskUpperBoundFactorReturn = FunctionReturn<typeof functions.setAskUpperBoundFactor>

export type SetMaximumStakeParams = FunctionArguments<typeof functions.setMaximumStake>
export type SetMaximumStakeReturn = FunctionReturn<typeof functions.setMaximumStake>

export type SetMinimumRequiredSignaturesParams = FunctionArguments<typeof functions.setMinimumRequiredSignatures>
export type SetMinimumRequiredSignaturesReturn = FunctionReturn<typeof functions.setMinimumRequiredSignatures>

export type SetMinimumStakeParams = FunctionArguments<typeof functions.setMinimumStake>
export type SetMinimumStakeReturn = FunctionReturn<typeof functions.setMinimumStake>

export type SetNodeAskUpdateDelayParams = FunctionArguments<typeof functions.setNodeAskUpdateDelay>
export type SetNodeAskUpdateDelayReturn = FunctionReturn<typeof functions.setNodeAskUpdateDelay>

export type SetOpWalletsLimitOnProfileCreationParams = FunctionArguments<typeof functions.setOpWalletsLimitOnProfileCreation>
export type SetOpWalletsLimitOnProfileCreationReturn = FunctionReturn<typeof functions.setOpWalletsLimitOnProfileCreation>

export type SetOperatorFeeUpdateDelayParams = FunctionArguments<typeof functions.setOperatorFeeUpdateDelay>
export type SetOperatorFeeUpdateDelayReturn = FunctionReturn<typeof functions.setOperatorFeeUpdateDelay>

export type SetShardingTableSizeLimitParams = FunctionArguments<typeof functions.setShardingTableSizeLimit>
export type SetShardingTableSizeLimitReturn = FunctionReturn<typeof functions.setShardingTableSizeLimit>

export type SetStakeWithdrawalDelayParams = FunctionArguments<typeof functions.setStakeWithdrawalDelay>
export type SetStakeWithdrawalDelayReturn = FunctionReturn<typeof functions.setStakeWithdrawalDelay>

export type ShardingTableSizeLimitParams = FunctionArguments<typeof functions.shardingTableSizeLimit>
export type ShardingTableSizeLimitReturn = FunctionReturn<typeof functions.shardingTableSizeLimit>

export type StakeWithdrawalDelayParams = FunctionArguments<typeof functions.stakeWithdrawalDelay>
export type StakeWithdrawalDelayReturn = FunctionReturn<typeof functions.stakeWithdrawalDelay>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

