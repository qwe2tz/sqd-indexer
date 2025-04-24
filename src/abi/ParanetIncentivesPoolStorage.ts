import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    IncentivesPoolAddressSet: event("0xfa2e7719e53a465cbdf9e98d3b1f88419e5bef372a8e1e5b04032547d1063833", "IncentivesPoolAddressSet(address,address)", {"oldAddress": indexed(p.address), "newAddress": indexed(p.address)}),
    MinerRewardIncreased: event("0xdc3dbd186c839d8bcf3715e5395897cca720cb919ebc897fc5a20a50e248e05f", "MinerRewardIncreased(address,uint256,uint256)", {"miner": indexed(p.address), "additionalAmount": p.uint256, "newTotal": p.uint256}),
    MinerRewardProfileAdded: event("0x41e363b9cf79d8569a1a18e3d2c41712bcf93b633bb374ae75fc02550411ecad", "MinerRewardProfileAdded(address,uint256)", {"miner": indexed(p.address), "amount": p.uint256}),
    OperatorRewardIncreased: event("0x390edd62146c33465a61f9a9abc8181aca7d2d1687d2b6978f1cea1732a42c06", "OperatorRewardIncreased(address,uint256,uint256)", {"operator": indexed(p.address), "additionalAmount": p.uint256, "newTotal": p.uint256}),
    OperatorRewardProfileAdded: event("0x7e4f24bfc108d173caf330cc5bcd1cbd66897221c90778bd1fe654b26a463ef5", "OperatorRewardProfileAdded(address,uint256)", {"operator": indexed(p.address), "amount": p.uint256}),
    RewardTransferred: event("0x9c944f9bf53dd7797190e4b01a2e438a604c4d8f33a684d386a7e93769296141", "RewardTransferred(address,uint256)", {"recipient": indexed(p.address), "amount": p.uint256}),
    TokenOriginSet: event("0x10b932359401be2a51cb9424afd7e25d8c33879c0cf4f379364741997ef181a7", "TokenOriginSet(address,address)", {"oldOrigin": indexed(p.address), "newOrigin": indexed(p.address)}),
    TokenRewardDeposit: event("0xba250d4080869eae5d5654c940431d4d65f7d402d361614db741dc7afdb26731", "TokenRewardDeposit(address,uint256)", {"sender": p.address, "amount": p.uint256}),
    TotalMinersclaimedTokenDecremented: event("0xe3d6066e841ac94e83567769cdb1725c633712e1c9c00f92cd14ebbf26ea0646", "TotalMinersclaimedTokenDecremented(uint256,uint256)", {"amount": p.uint256, "newTotal": p.uint256}),
    TotalMinersclaimedTokenSet: event("0x27b18ac9f7962cd4f84e5c197e41149db331c8628f345c887db957e7b4d1ef8b", "TotalMinersclaimedTokenSet(uint256,uint256)", {"oldAmount": p.uint256, "newAmount": p.uint256}),
    TotalOperatorsclaimedTokenDecremented: event("0x63c6840d4adb5389de492e4eea71a341b604e1b5d98d7794af286a0bb3c54793", "TotalOperatorsclaimedTokenDecremented(uint256,uint256)", {"amount": p.uint256, "newTotal": p.uint256}),
    TotalOperatorsclaimedTokenSet: event("0xbdc5fb47996b63963ec35fbb1b7818ca8d268df6b26f9a3539ca24f5995a5805", "TotalOperatorsclaimedTokenSet(uint256,uint256)", {"oldAmount": p.uint256, "newAmount": p.uint256}),
    TotalVotersclaimedTokenDecremented: event("0xc6cb8a592e9b4fd6201c831c615c697b10a03c7c5f6e506da3ba43b918d451a2", "TotalVotersclaimedTokenDecremented(uint256,uint256)", {"amount": p.uint256, "newTotal": p.uint256}),
    TotalVotersclaimedTokenSet: event("0xb67e0e4fc9be491d2400e39d7fba963ac22e04d3e042ceaba9b4c77afede1c42", "TotalVotersclaimedTokenSet(uint256,uint256)", {"oldAmount": p.uint256, "newAmount": p.uint256}),
    VoterAdded: event("0x8751e6f526999903cd277f35b031e684ef10ef54ad2a0f822f38d7da45e5225e", "VoterAdded(address,uint16)", {"voter": indexed(p.address), "weight": p.uint16}),
    VoterRemoved: event("0x00b952de4007d54e280382c5f2a740be743253ba010a8e6fb4dc42bc5afa4057", "VoterRemoved(address,uint96)", {"voter": indexed(p.address), "weight": p.uint96}),
    VoterRewardClaimed: event("0x66e30c336b159cdc5dd3932f9994fe054e834d64658728ad3e7657d8b6058319", "VoterRewardClaimed(address,uint256)", {"voter": indexed(p.address), "amount": p.uint256}),
    VoterWeightUpdated: event("0xb50978d00824c5c555cb37b877c3fd8a21488e92e9e71a1c10fb4ce63d35504c", "VoterWeightUpdated(address,uint96,uint96)", {"voter": indexed(p.address), "oldWeight": p.uint96, "newWeight": p.uint96}),
    VotersRegistrarTransferred: event("0x073a6bd3d1f7477919aae00dc8abf9efbe463e4a8bc8beae5db8f20185003403", "VotersRegistrarTransferred(address,address)", {"previousRegistrar": indexed(p.address), "newRegistrar": indexed(p.address)}),
    VotersRemoved: event("0x5582f36a6787445373fc7df010b2a1f684e271cb510551dc7f1b60fa628aedbf", "VotersRemoved(uint256)", {"count": p.uint256}),
}

export const functions = {
    addClaimedOperatorReward: fun("0x1772e2cb", "addClaimedOperatorReward(address,uint256)", {"addr": p.address, "claimableTokenReward": p.uint256}, ),
    addMinerClaimedReward: fun("0x16bcbc9e", "addMinerClaimedReward(address,uint256)", {"addr": p.address, "claimableTokenReward": p.uint256}, ),
    addMinerClaimedRewardProfile: fun("0x02945c2b", "addMinerClaimedRewardProfile(address,uint256)", {"addr": p.address, "claimableTokenReward": p.uint256}, ),
    addOperatorClaimedRewardsProfile: fun("0x2ee4d008", "addOperatorClaimedRewardsProfile(address,uint256)", {"addr": p.address, "claimableTokenReward": p.uint256}, ),
    addTotalMinersclaimedToken: fun("0xf57c90c5", "addTotalMinersclaimedToken(uint256)", {"amount": p.uint256}, ),
    addTotalOperatorsclaimedToken: fun("0x31726278", "addTotalOperatorsclaimedToken(uint256)", {"amount": p.uint256}, ),
    addTotalVotersclaimedToken: fun("0x40598c9c", "addTotalVotersclaimedToken(uint256)", {"amount": p.uint256}, ),
    addVoterClaimedToken: fun("0x64debaf2", "addVoterClaimedToken(address,uint256)", {"voter": p.address, "amount": p.uint256}, ),
    addVoters: fun("0x43ba86da", "addVoters((address,uint96)[])", {"voters_": p.array(p.struct({"addr": p.address, "weight": p.uint96}))}, ),
    claimedMinerRewards: viewFun("0x752cc379", "claimedMinerRewards(uint256)", {"_0": p.uint256}, {"addr": p.address, "claimedToken": p.uint256}),
    claimedMinerRewardsIndexes: viewFun("0x3751c084", "claimedMinerRewardsIndexes(address)", {"_0": p.address}, p.uint256),
    claimedOperatorRewards: viewFun("0xb3fdab3c", "claimedOperatorRewards(uint256)", {"_0": p.uint256}, {"addr": p.address, "claimedToken": p.uint256}),
    claimedOperatorRewardsIndexes: viewFun("0x99ff0b50", "claimedOperatorRewardsIndexes(address)", {"_0": p.address}, p.uint256),
    cumulativeVotersWeight: viewFun("0x5ae599e9", "cumulativeVotersWeight()", {}, p.uint96),
    decrementTotalMinersclaimedToken: fun("0xb0012325", "decrementTotalMinersclaimedToken(uint256)", {"amount": p.uint256}, ),
    decrementTotalOperatorsclaimedToken: fun("0x39643210", "decrementTotalOperatorsclaimedToken(uint256)", {"amount": p.uint256}, ),
    decrementTotalVotersclaimedToken: fun("0x77b290e2", "decrementTotalVotersclaimedToken(uint256)", {"amount": p.uint256}, ),
    getAllRewardedMiners: viewFun("0x97d2b870", "getAllRewardedMiners()", {}, p.array(p.struct({"addr": p.address, "claimedToken": p.uint256}))),
    getAllRewardedOperators: viewFun("0x3fc97eaf", "getAllRewardedOperators()", {}, p.array(p.struct({"addr": p.address, "claimedToken": p.uint256}))),
    getBalance: viewFun("0x12065fe0", "getBalance()", {}, p.uint256),
    getClaimedMinerRewardsAtIndex: viewFun("0xe3197454", "getClaimedMinerRewardsAtIndex(uint256)", {"index": p.uint256}, p.struct({"addr": p.address, "claimedToken": p.uint256})),
    getClaimedMinerRewardsLength: viewFun("0x1a501dcd", "getClaimedMinerRewardsLength()", {}, p.uint256),
    getClaimedOperatorRewardsAtIndex: viewFun("0xdcc5c4a0", "getClaimedOperatorRewardsAtIndex(uint256)", {"index": p.uint256}, p.struct({"addr": p.address, "claimedToken": p.uint256})),
    getClaimedOperatorRewardsLength: viewFun("0x35f74a99", "getClaimedOperatorRewardsLength()", {}, p.uint256),
    getPaginatedClaimedMinerRewards: viewFun("0x56691e13", "getPaginatedClaimedMinerRewards(uint256,uint256)", {"offset": p.uint256, "limit": p.uint256}, {"rewards": p.array(p.struct({"addr": p.address, "claimedToken": p.uint256})), "total": p.uint256}),
    getPaginatedClaimedOperatorRewards: viewFun("0xbc3c2178", "getPaginatedClaimedOperatorRewards(uint256,uint256)", {"offset": p.uint256, "limit": p.uint256}, {"rewards": p.array(p.struct({"addr": p.address, "claimedToken": p.uint256})), "total": p.uint256}),
    getPaginatedVoters: viewFun("0xd9261cf3", "getPaginatedVoters(uint256,uint256)", {"offset": p.uint256, "limit": p.uint256}, {"votersList": p.array(p.struct({"addr": p.address, "weight": p.uint96, "claimedToken": p.uint256})), "total": p.uint256}),
    getVoter: viewFun("0xd4f50f98", "getVoter(address)", {"voterAddress": p.address}, p.struct({"addr": p.address, "weight": p.uint96, "claimedToken": p.uint256})),
    getVoterAtIndex: viewFun("0xb80bec58", "getVoterAtIndex(uint256)", {"index": p.uint256}, p.struct({"addr": p.address, "weight": p.uint96, "claimedToken": p.uint256})),
    getVoters: viewFun("0xcdd72253", "getVoters()", {}, p.array(p.struct({"addr": p.address, "weight": p.uint96, "claimedToken": p.uint256}))),
    getVotersCount: viewFun("0xc0f2a777", "getVotersCount()", {}, p.uint256),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    isProposalVoter: viewFun("0xdf44677a", "isProposalVoter(address)", {"addr": p.address}, p.bool),
    minerclaimedToken: viewFun("0xce5079a8", "minerclaimedToken(address)", {"minerAddress": p.address}, p.uint256),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    operatorclaimedToken: viewFun("0x2797e03c", "operatorclaimedToken(address)", {"operatorAddress": p.address}, p.uint256),
    paranetId: viewFun("0x956e9055", "paranetId()", {}, p.bytes32),
    paranetIncentivesPoolAddress: viewFun("0xf9c84728", "paranetIncentivesPoolAddress()", {}, p.address),
    paranetIncentivizationProposalVotersRewardPercentage: viewFun("0xeeb02df7", "paranetIncentivizationProposalVotersRewardPercentage()", {}, p.uint16),
    paranetOperatorRewardPercentage: viewFun("0xbac60330", "paranetOperatorRewardPercentage()", {}, p.uint16),
    paranetsRegistry: viewFun("0xc20d67ec", "paranetsRegistry()", {}, p.address),
    removeVoter: fun("0x86c1ff68", "removeVoter(address)", {"voterAddress": p.address}, ),
    removeVoters: fun("0x56643ca5", "removeVoters(address[])", {"votersToRemove": p.array(p.address)}, ),
    setParanetIncentivesPool: fun("0xf2820804", "setParanetIncentivesPool(address)", {"_paranetIncentivesPoolAddress": p.address}, ),
    setTokenOrigin: fun("0x0ddf8248", "setTokenOrigin(address)", {"newOrigin": p.address}, ),
    setTotalMinersclaimedToken: fun("0x720b9a41", "setTotalMinersclaimedToken(uint256)", {"amount": p.uint256}, ),
    setTotalOperatorsclaimedToken: fun("0x2b70bb73", "setTotalOperatorsclaimedToken(uint256)", {"amount": p.uint256}, ),
    setTotalVotersclaimedToken: fun("0x232cdb95", "setTotalVotersclaimedToken(uint256)", {"amount": p.uint256}, ),
    token: viewFun("0xfc0c546a", "token()", {}, p.address),
    tokenOrigin: viewFun("0xb04caf30", "tokenOrigin()", {}, p.address),
    totalMinersclaimedToken: viewFun("0xa61df35b", "totalMinersclaimedToken()", {}, p.uint256),
    totalOperatorsclaimedToken: viewFun("0x25a090f5", "totalOperatorsclaimedToken()", {}, p.uint256),
    totalReceived: viewFun("0xa3c2c462", "totalReceived()", {}, p.uint256),
    totalVotersclaimedToken: viewFun("0xf377f71d", "totalVotersclaimedToken()", {}, p.uint256),
    transferReward: fun("0x15490ebb", "transferReward(address,uint256)", {"rewardAddress": p.address, "amount": p.uint256}, ),
    transferVotersRegistrarRole: fun("0x6ed76718", "transferVotersRegistrarRole(address)", {"newRegistrar": p.address}, ),
    updateVoterWeight: fun("0xce03a5b1", "updateVoterWeight(address,uint96)", {"voter": p.address, "newWeight": p.uint96}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    voters: viewFun("0xda58c7d9", "voters(uint256)", {"_0": p.uint256}, {"addr": p.address, "weight": p.uint96, "claimedToken": p.uint256}),
    votersIndexes: viewFun("0xaa2a9f8a", "votersIndexes(address)", {"_0": p.address}, p.uint256),
    votersRegistrar: viewFun("0xea12dce0", "votersRegistrar()", {}, p.address),
}

export class Contract extends ContractBase {

    claimedMinerRewards(_0: ClaimedMinerRewardsParams["_0"]) {
        return this.eth_call(functions.claimedMinerRewards, {_0})
    }

    claimedMinerRewardsIndexes(_0: ClaimedMinerRewardsIndexesParams["_0"]) {
        return this.eth_call(functions.claimedMinerRewardsIndexes, {_0})
    }

    claimedOperatorRewards(_0: ClaimedOperatorRewardsParams["_0"]) {
        return this.eth_call(functions.claimedOperatorRewards, {_0})
    }

    claimedOperatorRewardsIndexes(_0: ClaimedOperatorRewardsIndexesParams["_0"]) {
        return this.eth_call(functions.claimedOperatorRewardsIndexes, {_0})
    }

    cumulativeVotersWeight() {
        return this.eth_call(functions.cumulativeVotersWeight, {})
    }

    getAllRewardedMiners() {
        return this.eth_call(functions.getAllRewardedMiners, {})
    }

    getAllRewardedOperators() {
        return this.eth_call(functions.getAllRewardedOperators, {})
    }

    getBalance() {
        return this.eth_call(functions.getBalance, {})
    }

    getClaimedMinerRewardsAtIndex(index: GetClaimedMinerRewardsAtIndexParams["index"]) {
        return this.eth_call(functions.getClaimedMinerRewardsAtIndex, {index})
    }

    getClaimedMinerRewardsLength() {
        return this.eth_call(functions.getClaimedMinerRewardsLength, {})
    }

    getClaimedOperatorRewardsAtIndex(index: GetClaimedOperatorRewardsAtIndexParams["index"]) {
        return this.eth_call(functions.getClaimedOperatorRewardsAtIndex, {index})
    }

    getClaimedOperatorRewardsLength() {
        return this.eth_call(functions.getClaimedOperatorRewardsLength, {})
    }

    getPaginatedClaimedMinerRewards(offset: GetPaginatedClaimedMinerRewardsParams["offset"], limit: GetPaginatedClaimedMinerRewardsParams["limit"]) {
        return this.eth_call(functions.getPaginatedClaimedMinerRewards, {offset, limit})
    }

    getPaginatedClaimedOperatorRewards(offset: GetPaginatedClaimedOperatorRewardsParams["offset"], limit: GetPaginatedClaimedOperatorRewardsParams["limit"]) {
        return this.eth_call(functions.getPaginatedClaimedOperatorRewards, {offset, limit})
    }

    getPaginatedVoters(offset: GetPaginatedVotersParams["offset"], limit: GetPaginatedVotersParams["limit"]) {
        return this.eth_call(functions.getPaginatedVoters, {offset, limit})
    }

    getVoter(voterAddress: GetVoterParams["voterAddress"]) {
        return this.eth_call(functions.getVoter, {voterAddress})
    }

    getVoterAtIndex(index: GetVoterAtIndexParams["index"]) {
        return this.eth_call(functions.getVoterAtIndex, {index})
    }

    getVoters() {
        return this.eth_call(functions.getVoters, {})
    }

    getVotersCount() {
        return this.eth_call(functions.getVotersCount, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isProposalVoter(addr: IsProposalVoterParams["addr"]) {
        return this.eth_call(functions.isProposalVoter, {addr})
    }

    minerclaimedToken(minerAddress: MinerclaimedTokenParams["minerAddress"]) {
        return this.eth_call(functions.minerclaimedToken, {minerAddress})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    operatorclaimedToken(operatorAddress: OperatorclaimedTokenParams["operatorAddress"]) {
        return this.eth_call(functions.operatorclaimedToken, {operatorAddress})
    }

    paranetId() {
        return this.eth_call(functions.paranetId, {})
    }

    paranetIncentivesPoolAddress() {
        return this.eth_call(functions.paranetIncentivesPoolAddress, {})
    }

    paranetIncentivizationProposalVotersRewardPercentage() {
        return this.eth_call(functions.paranetIncentivizationProposalVotersRewardPercentage, {})
    }

    paranetOperatorRewardPercentage() {
        return this.eth_call(functions.paranetOperatorRewardPercentage, {})
    }

    paranetsRegistry() {
        return this.eth_call(functions.paranetsRegistry, {})
    }

    token() {
        return this.eth_call(functions.token, {})
    }

    tokenOrigin() {
        return this.eth_call(functions.tokenOrigin, {})
    }

    totalMinersclaimedToken() {
        return this.eth_call(functions.totalMinersclaimedToken, {})
    }

    totalOperatorsclaimedToken() {
        return this.eth_call(functions.totalOperatorsclaimedToken, {})
    }

    totalReceived() {
        return this.eth_call(functions.totalReceived, {})
    }

    totalVotersclaimedToken() {
        return this.eth_call(functions.totalVotersclaimedToken, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    voters(_0: VotersParams["_0"]) {
        return this.eth_call(functions.voters, {_0})
    }

    votersIndexes(_0: VotersIndexesParams["_0"]) {
        return this.eth_call(functions.votersIndexes, {_0})
    }

    votersRegistrar() {
        return this.eth_call(functions.votersRegistrar, {})
    }
}

/// Event types
export type IncentivesPoolAddressSetEventArgs = EParams<typeof events.IncentivesPoolAddressSet>
export type MinerRewardIncreasedEventArgs = EParams<typeof events.MinerRewardIncreased>
export type MinerRewardProfileAddedEventArgs = EParams<typeof events.MinerRewardProfileAdded>
export type OperatorRewardIncreasedEventArgs = EParams<typeof events.OperatorRewardIncreased>
export type OperatorRewardProfileAddedEventArgs = EParams<typeof events.OperatorRewardProfileAdded>
export type RewardTransferredEventArgs = EParams<typeof events.RewardTransferred>
export type TokenOriginSetEventArgs = EParams<typeof events.TokenOriginSet>
export type TokenRewardDepositEventArgs = EParams<typeof events.TokenRewardDeposit>
export type TotalMinersclaimedTokenDecrementedEventArgs = EParams<typeof events.TotalMinersclaimedTokenDecremented>
export type TotalMinersclaimedTokenSetEventArgs = EParams<typeof events.TotalMinersclaimedTokenSet>
export type TotalOperatorsclaimedTokenDecrementedEventArgs = EParams<typeof events.TotalOperatorsclaimedTokenDecremented>
export type TotalOperatorsclaimedTokenSetEventArgs = EParams<typeof events.TotalOperatorsclaimedTokenSet>
export type TotalVotersclaimedTokenDecrementedEventArgs = EParams<typeof events.TotalVotersclaimedTokenDecremented>
export type TotalVotersclaimedTokenSetEventArgs = EParams<typeof events.TotalVotersclaimedTokenSet>
export type VoterAddedEventArgs = EParams<typeof events.VoterAdded>
export type VoterRemovedEventArgs = EParams<typeof events.VoterRemoved>
export type VoterRewardClaimedEventArgs = EParams<typeof events.VoterRewardClaimed>
export type VoterWeightUpdatedEventArgs = EParams<typeof events.VoterWeightUpdated>
export type VotersRegistrarTransferredEventArgs = EParams<typeof events.VotersRegistrarTransferred>
export type VotersRemovedEventArgs = EParams<typeof events.VotersRemoved>

/// Function types
export type AddClaimedOperatorRewardParams = FunctionArguments<typeof functions.addClaimedOperatorReward>
export type AddClaimedOperatorRewardReturn = FunctionReturn<typeof functions.addClaimedOperatorReward>

export type AddMinerClaimedRewardParams = FunctionArguments<typeof functions.addMinerClaimedReward>
export type AddMinerClaimedRewardReturn = FunctionReturn<typeof functions.addMinerClaimedReward>

export type AddMinerClaimedRewardProfileParams = FunctionArguments<typeof functions.addMinerClaimedRewardProfile>
export type AddMinerClaimedRewardProfileReturn = FunctionReturn<typeof functions.addMinerClaimedRewardProfile>

export type AddOperatorClaimedRewardsProfileParams = FunctionArguments<typeof functions.addOperatorClaimedRewardsProfile>
export type AddOperatorClaimedRewardsProfileReturn = FunctionReturn<typeof functions.addOperatorClaimedRewardsProfile>

export type AddTotalMinersclaimedTokenParams = FunctionArguments<typeof functions.addTotalMinersclaimedToken>
export type AddTotalMinersclaimedTokenReturn = FunctionReturn<typeof functions.addTotalMinersclaimedToken>

export type AddTotalOperatorsclaimedTokenParams = FunctionArguments<typeof functions.addTotalOperatorsclaimedToken>
export type AddTotalOperatorsclaimedTokenReturn = FunctionReturn<typeof functions.addTotalOperatorsclaimedToken>

export type AddTotalVotersclaimedTokenParams = FunctionArguments<typeof functions.addTotalVotersclaimedToken>
export type AddTotalVotersclaimedTokenReturn = FunctionReturn<typeof functions.addTotalVotersclaimedToken>

export type AddVoterClaimedTokenParams = FunctionArguments<typeof functions.addVoterClaimedToken>
export type AddVoterClaimedTokenReturn = FunctionReturn<typeof functions.addVoterClaimedToken>

export type AddVotersParams = FunctionArguments<typeof functions.addVoters>
export type AddVotersReturn = FunctionReturn<typeof functions.addVoters>

export type ClaimedMinerRewardsParams = FunctionArguments<typeof functions.claimedMinerRewards>
export type ClaimedMinerRewardsReturn = FunctionReturn<typeof functions.claimedMinerRewards>

export type ClaimedMinerRewardsIndexesParams = FunctionArguments<typeof functions.claimedMinerRewardsIndexes>
export type ClaimedMinerRewardsIndexesReturn = FunctionReturn<typeof functions.claimedMinerRewardsIndexes>

export type ClaimedOperatorRewardsParams = FunctionArguments<typeof functions.claimedOperatorRewards>
export type ClaimedOperatorRewardsReturn = FunctionReturn<typeof functions.claimedOperatorRewards>

export type ClaimedOperatorRewardsIndexesParams = FunctionArguments<typeof functions.claimedOperatorRewardsIndexes>
export type ClaimedOperatorRewardsIndexesReturn = FunctionReturn<typeof functions.claimedOperatorRewardsIndexes>

export type CumulativeVotersWeightParams = FunctionArguments<typeof functions.cumulativeVotersWeight>
export type CumulativeVotersWeightReturn = FunctionReturn<typeof functions.cumulativeVotersWeight>

export type DecrementTotalMinersclaimedTokenParams = FunctionArguments<typeof functions.decrementTotalMinersclaimedToken>
export type DecrementTotalMinersclaimedTokenReturn = FunctionReturn<typeof functions.decrementTotalMinersclaimedToken>

export type DecrementTotalOperatorsclaimedTokenParams = FunctionArguments<typeof functions.decrementTotalOperatorsclaimedToken>
export type DecrementTotalOperatorsclaimedTokenReturn = FunctionReturn<typeof functions.decrementTotalOperatorsclaimedToken>

export type DecrementTotalVotersclaimedTokenParams = FunctionArguments<typeof functions.decrementTotalVotersclaimedToken>
export type DecrementTotalVotersclaimedTokenReturn = FunctionReturn<typeof functions.decrementTotalVotersclaimedToken>

export type GetAllRewardedMinersParams = FunctionArguments<typeof functions.getAllRewardedMiners>
export type GetAllRewardedMinersReturn = FunctionReturn<typeof functions.getAllRewardedMiners>

export type GetAllRewardedOperatorsParams = FunctionArguments<typeof functions.getAllRewardedOperators>
export type GetAllRewardedOperatorsReturn = FunctionReturn<typeof functions.getAllRewardedOperators>

export type GetBalanceParams = FunctionArguments<typeof functions.getBalance>
export type GetBalanceReturn = FunctionReturn<typeof functions.getBalance>

export type GetClaimedMinerRewardsAtIndexParams = FunctionArguments<typeof functions.getClaimedMinerRewardsAtIndex>
export type GetClaimedMinerRewardsAtIndexReturn = FunctionReturn<typeof functions.getClaimedMinerRewardsAtIndex>

export type GetClaimedMinerRewardsLengthParams = FunctionArguments<typeof functions.getClaimedMinerRewardsLength>
export type GetClaimedMinerRewardsLengthReturn = FunctionReturn<typeof functions.getClaimedMinerRewardsLength>

export type GetClaimedOperatorRewardsAtIndexParams = FunctionArguments<typeof functions.getClaimedOperatorRewardsAtIndex>
export type GetClaimedOperatorRewardsAtIndexReturn = FunctionReturn<typeof functions.getClaimedOperatorRewardsAtIndex>

export type GetClaimedOperatorRewardsLengthParams = FunctionArguments<typeof functions.getClaimedOperatorRewardsLength>
export type GetClaimedOperatorRewardsLengthReturn = FunctionReturn<typeof functions.getClaimedOperatorRewardsLength>

export type GetPaginatedClaimedMinerRewardsParams = FunctionArguments<typeof functions.getPaginatedClaimedMinerRewards>
export type GetPaginatedClaimedMinerRewardsReturn = FunctionReturn<typeof functions.getPaginatedClaimedMinerRewards>

export type GetPaginatedClaimedOperatorRewardsParams = FunctionArguments<typeof functions.getPaginatedClaimedOperatorRewards>
export type GetPaginatedClaimedOperatorRewardsReturn = FunctionReturn<typeof functions.getPaginatedClaimedOperatorRewards>

export type GetPaginatedVotersParams = FunctionArguments<typeof functions.getPaginatedVoters>
export type GetPaginatedVotersReturn = FunctionReturn<typeof functions.getPaginatedVoters>

export type GetVoterParams = FunctionArguments<typeof functions.getVoter>
export type GetVoterReturn = FunctionReturn<typeof functions.getVoter>

export type GetVoterAtIndexParams = FunctionArguments<typeof functions.getVoterAtIndex>
export type GetVoterAtIndexReturn = FunctionReturn<typeof functions.getVoterAtIndex>

export type GetVotersParams = FunctionArguments<typeof functions.getVoters>
export type GetVotersReturn = FunctionReturn<typeof functions.getVoters>

export type GetVotersCountParams = FunctionArguments<typeof functions.getVotersCount>
export type GetVotersCountReturn = FunctionReturn<typeof functions.getVotersCount>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type IsProposalVoterParams = FunctionArguments<typeof functions.isProposalVoter>
export type IsProposalVoterReturn = FunctionReturn<typeof functions.isProposalVoter>

export type MinerclaimedTokenParams = FunctionArguments<typeof functions.minerclaimedToken>
export type MinerclaimedTokenReturn = FunctionReturn<typeof functions.minerclaimedToken>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type OperatorclaimedTokenParams = FunctionArguments<typeof functions.operatorclaimedToken>
export type OperatorclaimedTokenReturn = FunctionReturn<typeof functions.operatorclaimedToken>

export type ParanetIdParams = FunctionArguments<typeof functions.paranetId>
export type ParanetIdReturn = FunctionReturn<typeof functions.paranetId>

export type ParanetIncentivesPoolAddressParams = FunctionArguments<typeof functions.paranetIncentivesPoolAddress>
export type ParanetIncentivesPoolAddressReturn = FunctionReturn<typeof functions.paranetIncentivesPoolAddress>

export type ParanetIncentivizationProposalVotersRewardPercentageParams = FunctionArguments<typeof functions.paranetIncentivizationProposalVotersRewardPercentage>
export type ParanetIncentivizationProposalVotersRewardPercentageReturn = FunctionReturn<typeof functions.paranetIncentivizationProposalVotersRewardPercentage>

export type ParanetOperatorRewardPercentageParams = FunctionArguments<typeof functions.paranetOperatorRewardPercentage>
export type ParanetOperatorRewardPercentageReturn = FunctionReturn<typeof functions.paranetOperatorRewardPercentage>

export type ParanetsRegistryParams = FunctionArguments<typeof functions.paranetsRegistry>
export type ParanetsRegistryReturn = FunctionReturn<typeof functions.paranetsRegistry>

export type RemoveVoterParams = FunctionArguments<typeof functions.removeVoter>
export type RemoveVoterReturn = FunctionReturn<typeof functions.removeVoter>

export type RemoveVotersParams = FunctionArguments<typeof functions.removeVoters>
export type RemoveVotersReturn = FunctionReturn<typeof functions.removeVoters>

export type SetParanetIncentivesPoolParams = FunctionArguments<typeof functions.setParanetIncentivesPool>
export type SetParanetIncentivesPoolReturn = FunctionReturn<typeof functions.setParanetIncentivesPool>

export type SetTokenOriginParams = FunctionArguments<typeof functions.setTokenOrigin>
export type SetTokenOriginReturn = FunctionReturn<typeof functions.setTokenOrigin>

export type SetTotalMinersclaimedTokenParams = FunctionArguments<typeof functions.setTotalMinersclaimedToken>
export type SetTotalMinersclaimedTokenReturn = FunctionReturn<typeof functions.setTotalMinersclaimedToken>

export type SetTotalOperatorsclaimedTokenParams = FunctionArguments<typeof functions.setTotalOperatorsclaimedToken>
export type SetTotalOperatorsclaimedTokenReturn = FunctionReturn<typeof functions.setTotalOperatorsclaimedToken>

export type SetTotalVotersclaimedTokenParams = FunctionArguments<typeof functions.setTotalVotersclaimedToken>
export type SetTotalVotersclaimedTokenReturn = FunctionReturn<typeof functions.setTotalVotersclaimedToken>

export type TokenParams = FunctionArguments<typeof functions.token>
export type TokenReturn = FunctionReturn<typeof functions.token>

export type TokenOriginParams = FunctionArguments<typeof functions.tokenOrigin>
export type TokenOriginReturn = FunctionReturn<typeof functions.tokenOrigin>

export type TotalMinersclaimedTokenParams = FunctionArguments<typeof functions.totalMinersclaimedToken>
export type TotalMinersclaimedTokenReturn = FunctionReturn<typeof functions.totalMinersclaimedToken>

export type TotalOperatorsclaimedTokenParams = FunctionArguments<typeof functions.totalOperatorsclaimedToken>
export type TotalOperatorsclaimedTokenReturn = FunctionReturn<typeof functions.totalOperatorsclaimedToken>

export type TotalReceivedParams = FunctionArguments<typeof functions.totalReceived>
export type TotalReceivedReturn = FunctionReturn<typeof functions.totalReceived>

export type TotalVotersclaimedTokenParams = FunctionArguments<typeof functions.totalVotersclaimedToken>
export type TotalVotersclaimedTokenReturn = FunctionReturn<typeof functions.totalVotersclaimedToken>

export type TransferRewardParams = FunctionArguments<typeof functions.transferReward>
export type TransferRewardReturn = FunctionReturn<typeof functions.transferReward>

export type TransferVotersRegistrarRoleParams = FunctionArguments<typeof functions.transferVotersRegistrarRole>
export type TransferVotersRegistrarRoleReturn = FunctionReturn<typeof functions.transferVotersRegistrarRole>

export type UpdateVoterWeightParams = FunctionArguments<typeof functions.updateVoterWeight>
export type UpdateVoterWeightReturn = FunctionReturn<typeof functions.updateVoterWeight>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type VotersParams = FunctionArguments<typeof functions.voters>
export type VotersReturn = FunctionReturn<typeof functions.voters>

export type VotersIndexesParams = FunctionArguments<typeof functions.votersIndexes>
export type VotersIndexesReturn = FunctionReturn<typeof functions.votersIndexes>

export type VotersRegistrarParams = FunctionArguments<typeof functions.votersRegistrar>
export type VotersRegistrarReturn = FunctionReturn<typeof functions.votersRegistrar>

