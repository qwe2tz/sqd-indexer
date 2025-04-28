import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AddressBlacklisted: event("0xdaf49ab9345b6cb75bcb5a7f726bff9183c34dcf5c098c385730f9fd893765f6", "AddressBlacklisted(address)", {"addr": indexed(p.address)}),
    AddressWhitelisted: event("0x4f783c179409b4127238bc9c990bc99b9a651666a0d20b51d6c42849eb88466d", "AddressWhitelisted(address)", {"addr": indexed(p.address)}),
    WhitelistDisabled: event("0x212c6e1d3045c9581ef0adf2504dbb1d137f52f38162ccf77a16c69d14eba5c3", "WhitelistDisabled()", {}),
    WhitelistEnabled: event("0xe5e5846f783279948f6ec5faad38318cde86fe5be7ea845ede56d62f16c37434", "WhitelistEnabled()", {}),
}

export const functions = {
    blacklistAddress: fun("0xf3290d75", "blacklistAddress(address)", {"addr": p.address}, ),
    disableWhitelist: fun("0xd6b0f484", "disableWhitelist()", {}, ),
    enableWhitelist: fun("0xcdfb2b4e", "enableWhitelist()", {}, ),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    whitelistAddress: fun("0x41566585", "whitelistAddress(address)", {"addr": p.address}, ),
    whitelisted: viewFun("0xd936547e", "whitelisted(address)", {"_0": p.address}, p.bool),
    whitelistingEnabled: viewFun("0x5b0c29eb", "whitelistingEnabled()", {}, p.bool),
}

export class Contract extends ContractBase {

    hub() {
        return this.eth_call(functions.hub, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    whitelisted(_0: WhitelistedParams["_0"]) {
        return this.eth_call(functions.whitelisted, {_0})
    }

    whitelistingEnabled() {
        return this.eth_call(functions.whitelistingEnabled, {})
    }
}

/// Event types
export type AddressBlacklistedEventArgs = EParams<typeof events.AddressBlacklisted>
export type AddressWhitelistedEventArgs = EParams<typeof events.AddressWhitelisted>
export type WhitelistDisabledEventArgs = EParams<typeof events.WhitelistDisabled>
export type WhitelistEnabledEventArgs = EParams<typeof events.WhitelistEnabled>

/// Function types
export type BlacklistAddressParams = FunctionArguments<typeof functions.blacklistAddress>
export type BlacklistAddressReturn = FunctionReturn<typeof functions.blacklistAddress>

export type DisableWhitelistParams = FunctionArguments<typeof functions.disableWhitelist>
export type DisableWhitelistReturn = FunctionReturn<typeof functions.disableWhitelist>

export type EnableWhitelistParams = FunctionArguments<typeof functions.enableWhitelist>
export type EnableWhitelistReturn = FunctionReturn<typeof functions.enableWhitelist>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type WhitelistAddressParams = FunctionArguments<typeof functions.whitelistAddress>
export type WhitelistAddressReturn = FunctionReturn<typeof functions.whitelistAddress>

export type WhitelistedParams = FunctionArguments<typeof functions.whitelisted>
export type WhitelistedReturn = FunctionReturn<typeof functions.whitelisted>

export type WhitelistingEnabledParams = FunctionArguments<typeof functions.whitelistingEnabled>
export type WhitelistingEnabledReturn = FunctionReturn<typeof functions.whitelistingEnabled>

