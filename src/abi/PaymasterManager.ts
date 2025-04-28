import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    PaymasterDeployed: event("0x666ce8e1d1e4bef8b7f38ddac5e6c92550f4a063a7396ccac6a69e39878a4cfe", "PaymasterDeployed(address,address)", {"deployer": indexed(p.address), "paymasterAddress": indexed(p.address)}),
}

export const functions = {
    deployPaymaster: fun("0xbcf5614c", "deployPaymaster()", {}, ),
    deployedPaymasters: viewFun("0xe604d3dc", "deployedPaymasters(address,uint256)", {"_0": p.address, "_1": p.uint256}, p.address),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    setStatus: fun("0x5c40f6f4", "setStatus(bool)", {"_status": p.bool}, ),
    status: viewFun("0x200d2ed2", "status()", {}, p.bool),
    validPaymasters: viewFun("0xf8cc3299", "validPaymasters(address)", {"_0": p.address}, p.bool),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
}

export class Contract extends ContractBase {

    deployedPaymasters(_0: DeployedPaymastersParams["_0"], _1: DeployedPaymastersParams["_1"]) {
        return this.eth_call(functions.deployedPaymasters, {_0, _1})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    status() {
        return this.eth_call(functions.status, {})
    }

    validPaymasters(_0: ValidPaymastersParams["_0"]) {
        return this.eth_call(functions.validPaymasters, {_0})
    }

    version() {
        return this.eth_call(functions.version, {})
    }
}

/// Event types
export type PaymasterDeployedEventArgs = EParams<typeof events.PaymasterDeployed>

/// Function types
export type DeployPaymasterParams = FunctionArguments<typeof functions.deployPaymaster>
export type DeployPaymasterReturn = FunctionReturn<typeof functions.deployPaymaster>

export type DeployedPaymastersParams = FunctionArguments<typeof functions.deployedPaymasters>
export type DeployedPaymastersReturn = FunctionReturn<typeof functions.deployedPaymasters>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type SetStatusParams = FunctionArguments<typeof functions.setStatus>
export type SetStatusReturn = FunctionReturn<typeof functions.setStatus>

export type StatusParams = FunctionArguments<typeof functions.status>
export type StatusReturn = FunctionReturn<typeof functions.status>

export type ValidPaymastersParams = FunctionArguments<typeof functions.validPaymasters>
export type ValidPaymastersReturn = FunctionReturn<typeof functions.validPaymasters>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

