import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    ParanetIncentivesPoolDeployed: event("0x7503a598267d154cfb4ccd9166c079f07755899087779e8f64747bb7805eb5d3", "ParanetIncentivesPoolDeployed(address,uint256,uint256,address,address,address)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "storageAddress": p.address, "poolAddress": p.address, "rewardTokenAddress": p.address}),
    ParanetIncentivesPoolRedeployed: event("0x4f04b44f32a196d55bd57cf91ac1913f9e979ff7299b9a98336f8aa16fc1954f", "ParanetIncentivesPoolRedeployed(address,uint256,uint256,address,address)", {"paranetKCStorageContract": indexed(p.address), "paranetKCTokenId": indexed(p.uint256), "paranetKATokenId": indexed(p.uint256), "storageAddress": p.address, "newPoolAddress": p.address}),
}

export const functions = {
    deployIncentivesPool: fun("0x0468cd69", "deployIncentivesPool(address,uint256,uint256,uint256,uint16,uint16,string,address)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "tracToTokenEmissionMultiplier": p.uint256, "paranetOperatorRewardPercentage": p.uint16, "paranetIncentivizationProposalVotersRewardPercentage": p.uint16, "incentivesPoolName": p.string, "rewardTokenAddress": p.address}, ),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    paranetIncentivesPoolFactoryHelper: viewFun("0x6fb96bc2", "paranetIncentivesPoolFactoryHelper()", {}, p.address),
    paranetsRegistry: viewFun("0xc20d67ec", "paranetsRegistry()", {}, p.address),
    redeployIncentivesPool: fun("0x24c45748", "redeployIncentivesPool(address,uint256,uint256,address)", {"paranetKCStorageContract": p.address, "paranetKCTokenId": p.uint256, "paranetKATokenId": p.uint256, "storageAddress": p.address}, ),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    hub() {
        return this.eth_call(functions.hub, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    paranetIncentivesPoolFactoryHelper() {
        return this.eth_call(functions.paranetIncentivesPoolFactoryHelper, {})
    }

    paranetsRegistry() {
        return this.eth_call(functions.paranetsRegistry, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type ParanetIncentivesPoolDeployedEventArgs = EParams<typeof events.ParanetIncentivesPoolDeployed>
export type ParanetIncentivesPoolRedeployedEventArgs = EParams<typeof events.ParanetIncentivesPoolRedeployed>

/// Function types
export type DeployIncentivesPoolParams = FunctionArguments<typeof functions.deployIncentivesPool>
export type DeployIncentivesPoolReturn = FunctionReturn<typeof functions.deployIncentivesPool>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ParanetIncentivesPoolFactoryHelperParams = FunctionArguments<typeof functions.paranetIncentivesPoolFactoryHelper>
export type ParanetIncentivesPoolFactoryHelperReturn = FunctionReturn<typeof functions.paranetIncentivesPoolFactoryHelper>

export type ParanetsRegistryParams = FunctionArguments<typeof functions.paranetsRegistry>
export type ParanetsRegistryReturn = FunctionReturn<typeof functions.paranetsRegistry>

export type RedeployIncentivesPoolParams = FunctionArguments<typeof functions.redeployIncentivesPool>
export type RedeployIncentivesPoolReturn = FunctionReturn<typeof functions.redeployIncentivesPool>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

