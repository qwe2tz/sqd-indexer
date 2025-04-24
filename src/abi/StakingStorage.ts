import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DelegatorBaseStakeUpdated: event("0x25d7d31a0d1069c2b84bdf5b964be9b129a8a21b9a1643dde4f22030b80df449", "DelegatorBaseStakeUpdated(uint72,bytes32,uint96)", {"identityId": indexed(p.uint72), "delegatorKey": indexed(p.bytes32), "stakeBase": p.uint96}),
    DelegatorCountUpdated: event("0x4cdf174f542b345dbafd2aa7311d6f4f8363c706843b6a0c781ba86c1c54b52e", "DelegatorCountUpdated(uint72,uint256)", {"identityId": indexed(p.uint72), "delegatorsCount": p.uint256}),
    DelegatorCumulativeEarnedRewardsUpdated: event("0x91cc7988c08d1213a9683f31881c592ca8241fcc2c2af1c673a8f388eedab871", "DelegatorCumulativeEarnedRewardsUpdated(uint72,bytes32,uint96)", {"identityId": indexed(p.uint72), "delegatorKey": indexed(p.bytes32), "cumulativeEarnedRewards": p.uint96}),
    DelegatorCumulativePaidOutRewardsUpdated: event("0xccc4d7213eb34991baa8242fa2c24ca56bc74be0b8792e2472c06a77f68c55f8", "DelegatorCumulativePaidOutRewardsUpdated(uint72,bytes32,uint96)", {"identityId": indexed(p.uint72), "delegatorKey": indexed(p.bytes32), "cumulativePaidOutRewards": p.uint96}),
    DelegatorIndexedStakeUpdated: event("0x09d5a8bb34a193118439d34a094042c065f6385e5d413a05e39557785b3d1c0c", "DelegatorIndexedStakeUpdated(uint72,bytes32,uint96)", {"identityId": indexed(p.uint72), "delegatorKey": indexed(p.bytes32), "stakeIndexed": p.uint96}),
    DelegatorLastRewardIndexUpdated: event("0x8f3ced98cc4afa226582f6d70cbc855a791608450e9123ba15446607d932b9cd", "DelegatorLastRewardIndexUpdated(uint72,bytes32,uint256)", {"identityId": indexed(p.uint72), "delegatorKey": indexed(p.bytes32), "lastIndex": p.uint256}),
    DelegatorWithdrawalRequestCreated: event("0x21e5d28024880583f73bccd910c81fe75e7b2f421fe50d993748379ac600bdd6", "DelegatorWithdrawalRequestCreated(uint72,bytes32,uint96,uint96,uint256)", {"identityId": indexed(p.uint72), "delegatorKey": indexed(p.bytes32), "amount": p.uint96, "indexedOutAmount": p.uint96, "timestamp": p.uint256}),
    DelegatorWithdrawalRequestDeleted: event("0x616f04cc0a06ae75820361385d5a5ed1b4f9cb27039f85b693123c19eeb59167", "DelegatorWithdrawalRequestDeleted(uint72,bytes32)", {"identityId": indexed(p.uint72), "delegatorKey": indexed(p.bytes32)}),
    MisplacedERC20Withdrawn: event("0x22d23a6f2e04fcc6f26fd8541f87bdc28e2db7bc94ccacc4b08e71830097174d", "MisplacedERC20Withdrawn(address,address,uint256)", {"custodian": indexed(p.address), "tokenContract": p.address, "amount": p.uint256}),
    MisplacedEtherWithdrawn: event("0xa8137f25699fd32e117da110ee3f11175d638136bda01b31ec3e63023ac969ba", "MisplacedEtherWithdrawn(address,uint256)", {"custodian": indexed(p.address), "amount": p.uint256}),
    NodeCumulativeEarnedRewardsUpdated: event("0xaa35b9e2f75b83417aed2bcb9f3a8a3383d4d1ba1ca89e7977bcb35ad8cf071d", "NodeCumulativeEarnedRewardsUpdated(uint72,uint96)", {"identityId": indexed(p.uint72), "cumulativeEarnedRewards": p.uint96}),
    NodeCumulativePaidOutRewardsUpdated: event("0x734f282eb906c2ab80d8448c022024e307b422caaec7989b7175482e87a4d8ac", "NodeCumulativePaidOutRewardsUpdated(uint72,uint96)", {"identityId": indexed(p.uint72), "cumulativePaidOutRewards": p.uint96}),
    NodeRewardIndexUpdated: event("0xd0c0a4046bc43d8b62c776b322e3e251b23e09982de66430dc29e9352b792577", "NodeRewardIndexUpdated(uint72,uint256)", {"identityId": indexed(p.uint72), "rewardIndex": p.uint256}),
    NodeStakeUpdated: event("0xf146896444a940b5a59499296240c336a47ebe2692ec23d872a7b625251bb246", "NodeStakeUpdated(uint72,uint96)", {"identityId": indexed(p.uint72), "stake": p.uint96}),
    OperatorFeeBalanceUpdated: event("0xbd01d00beb5e0034685b6cfe29d738983a5de7977edd94ce8ade0cc3a26064bd", "OperatorFeeBalanceUpdated(uint72,uint96)", {"identityId": indexed(p.uint72), "feeBalance": p.uint96}),
    OperatorFeeCumulativeEarnedRewardsUpdated: event("0x50512bdb83ef5a7fe4e774681c40a403cc6c647e94ae5eeb8c565c6a93950ea2", "OperatorFeeCumulativeEarnedRewardsUpdated(uint72,uint96)", {"identityId": indexed(p.uint72), "cumulativeFeeEarnedRewards": p.uint96}),
    OperatorFeeCumulativePaidOutRewardsUpdated: event("0xae6b67c02fd45fb12986a1fa81c10384fe91293b08299a14ea9ffdfb557bae6f", "OperatorFeeCumulativePaidOutRewardsUpdated(uint72,uint96)", {"identityId": indexed(p.uint72), "cumulativeFeePaidOutRewards": p.uint96}),
    OperatorFeeWithdrawalRequestCreated: event("0xd4470529a8e3672033718f2654344543fce0f3968c0ff91e210a92bb87446c64", "OperatorFeeWithdrawalRequestCreated(uint72,uint96,uint96,uint256)", {"identityId": indexed(p.uint72), "amount": p.uint96, "indexedOutAmount": p.uint96, "timestamp": p.uint256}),
    OperatorFeeWithdrawalRequestDeleted: event("0xea94b7cedccb5fd49d4e00a6000e9c70123cc4f65358bc6c944eebb5a72d2a8a", "OperatorFeeWithdrawalRequestDeleted(uint72)", {"identityId": indexed(p.uint72)}),
    StakedTokensTransferred: event("0xcd99152a4d31d4cdb91c2425b98c62c87cd7ba61ed5aa69e61da82a25ed37e5a", "StakedTokensTransferred(address,uint96)", {"receiver": indexed(p.address), "amount": p.uint96}),
    TokenTransferred: event("0xefed6b8d78a916dbd402a323824ae4454c9214b8f3d05fa85b3bb7f30dc25c06", "TokenTransferred(address,uint256)", {"custodian": indexed(p.address), "amount": p.uint256}),
    TotalStakeUpdated: event("0x0d3c3f427588342fb9a793e31aacb7d3dddbb5b5d19ca0c90493cdb639245ec3", "TotalStakeUpdated(uint96)", {"totalStake": p.uint96}),
}

export const functions = {
    addDelegatorCumulativeEarnedRewards: fun("0x06683f82", "addDelegatorCumulativeEarnedRewards(uint72,bytes32,uint96)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "amount": p.uint96}, ),
    addDelegatorCumulativePaidOutRewards: fun("0x4a86d219", "addDelegatorCumulativePaidOutRewards(uint72,bytes32,uint96)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "amount": p.uint96}, ),
    addNodeCumulativeEarnedRewards: fun("0x9cea21f0", "addNodeCumulativeEarnedRewards(uint72,uint96)", {"identityId": p.uint72, "addedRewards": p.uint96}, ),
    addNodeCumulativePaidOutRewards: fun("0x81ef464e", "addNodeCumulativePaidOutRewards(uint72,uint96)", {"identityId": p.uint72, "addedRewards": p.uint96}, ),
    addOperatorFeeCumulativeEarnedRewards: fun("0x661ef2ec", "addOperatorFeeCumulativeEarnedRewards(uint72,uint96)", {"identityId": p.uint72, "amount": p.uint96}, ),
    addOperatorFeeCumulativePaidOutRewards: fun("0xe3106bd2", "addOperatorFeeCumulativePaidOutRewards(uint72,uint96)", {"identityId": p.uint72, "amount": p.uint96}, ),
    createDelegatorWithdrawalRequest: fun("0x0c2f1248", "createDelegatorWithdrawalRequest(uint72,bytes32,uint96,uint96,uint256)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "amount": p.uint96, "indexedOutAmount": p.uint96, "timestamp": p.uint256}, ),
    createOperatorFeeWithdrawalRequest: fun("0x55b26221", "createOperatorFeeWithdrawalRequest(uint72,uint96,uint96,uint256)", {"identityId": p.uint72, "amount": p.uint96, "indexedOutAmount": p.uint96, "timestamp": p.uint256}, ),
    decreaseDelegatorStakeBase: fun("0x18eee3df", "decreaseDelegatorStakeBase(uint72,bytes32,uint96)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "removedStake": p.uint96}, ),
    decreaseDelegatorStakeRewardIndexed: fun("0x6e34def1", "decreaseDelegatorStakeRewardIndexed(uint72,bytes32,uint96)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "removedStakeReward": p.uint96}, ),
    decreaseNodeStake: fun("0xa603ccc1", "decreaseNodeStake(uint72,uint96)", {"identityId": p.uint72, "removedNodeStake": p.uint96}, ),
    decreaseOperatorFeeBalance: fun("0xb5ba49e2", "decreaseOperatorFeeBalance(uint72,uint96)", {"identityId": p.uint72, "removedFee": p.uint96}, ),
    decreaseTotalStake: fun("0xe1d78b2b", "decreaseTotalStake(uint96)", {"removedStake": p.uint96}, ),
    delegatorWithdrawalRequestExists: viewFun("0xeaa21b35", "delegatorWithdrawalRequestExists(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.bool),
    delegators: viewFun("0x7d2ac8ce", "delegators(uint72,bytes32)", {"_0": p.uint72, "_1": p.bytes32}, {"stakeBase": p.uint96, "stakeRewardIndexed": p.uint96, "lastRewardIndex": p.uint256, "cumulativeEarnedRewards": p.uint96, "cumulativePaidOutRewards": p.uint96}),
    deleteDelegatorWithdrawalRequest: fun("0x2258b91c", "deleteDelegatorWithdrawalRequest(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, ),
    deleteOperatorFeeWithdrawalRequest: fun("0x9bd1c02b", "deleteOperatorFeeWithdrawalRequest(uint72)", {"identityId": p.uint72}, ),
    getDelegatorCount: viewFun("0xd27079a5", "getDelegatorCount(uint72)", {"identityId": p.uint72}, p.uint256),
    getDelegatorCumulativeEarnedRewards: viewFun("0xba6ccb06", "getDelegatorCumulativeEarnedRewards(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint96),
    getDelegatorCumulativePaidOutRewards: viewFun("0x6d7474d6", "getDelegatorCumulativePaidOutRewards(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint96),
    getDelegatorData: viewFun("0x1aff3bde", "getDelegatorData(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint256, "_3": p.uint96, "_4": p.uint96}),
    getDelegatorLastRewardIndex: viewFun("0x3951392c", "getDelegatorLastRewardIndex(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint256),
    getDelegatorNodes: viewFun("0xa2cd516e", "getDelegatorNodes(bytes32)", {"delegatorKey": p.bytes32}, p.array(p.uint72)),
    getDelegatorNodesCount: viewFun("0xc90259f2", "getDelegatorNodesCount(bytes32)", {"delegatorKey": p.bytes32}, p.uint256),
    getDelegatorNodesIn: viewFun("0x8563506a", "getDelegatorNodesIn(bytes32,uint256,uint256)", {"delegatorKey": p.bytes32, "start": p.uint256, "end": p.uint256}, p.array(p.uint72)),
    getDelegatorRewardsInfo: viewFun("0x433753e2", "getDelegatorRewardsInfo(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, {"_0": p.uint96, "_1": p.uint96}),
    getDelegatorStakeBase: viewFun("0xc6909561", "getDelegatorStakeBase(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint96),
    getDelegatorStakeInfo: viewFun("0x7faf3e94", "getDelegatorStakeInfo(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint256}),
    getDelegatorStakeRewardIndexed: viewFun("0x5c863da6", "getDelegatorStakeRewardIndexed(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint96),
    getDelegatorTotalStake: viewFun("0x90a94688", "getDelegatorTotalStake(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint96),
    getDelegatorWithdrawalRequest: viewFun("0x37e50bf1", "getDelegatorWithdrawalRequest(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint256}),
    getDelegatorWithdrawalRequestAmount: viewFun("0xb7e41c39", "getDelegatorWithdrawalRequestAmount(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint96),
    getDelegatorWithdrawalRequestIndexedOutAmount: viewFun("0xb7d871e0", "getDelegatorWithdrawalRequestIndexedOutAmount(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint96),
    getDelegatorWithdrawalRequestTimestamp: viewFun("0xd9cce3ec", "getDelegatorWithdrawalRequestTimestamp(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.uint256),
    getNodeCumulativeEarnedRewards: viewFun("0x15371d79", "getNodeCumulativeEarnedRewards(uint72)", {"identityId": p.uint72}, p.uint96),
    getNodeCumulativePaidOutRewards: viewFun("0xed3ed217", "getNodeCumulativePaidOutRewards(uint72)", {"identityId": p.uint72}, p.uint96),
    getNodeData: viewFun("0xdbdbb283", "getNodeData(uint72)", {"identityId": p.uint72}, {"_0": p.uint96, "_1": p.uint256, "_2": p.uint96, "_3": p.uint96, "_4": p.uint96, "_5": p.uint96, "_6": p.uint96, "_7": p.uint256}),
    getNodeOperatorFeesInfo: viewFun("0x291651ef", "getNodeOperatorFeesInfo(uint72)", {"identityId": p.uint72}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint96}),
    getNodeRewardIndex: viewFun("0xfe5eed01", "getNodeRewardIndex(uint72)", {"identityId": p.uint72}, p.uint256),
    getNodeRewardsInfo: viewFun("0x3548c84e", "getNodeRewardsInfo(uint72)", {"identityId": p.uint72}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint96}),
    getNodeStake: viewFun("0x13126ef4", "getNodeStake(uint72)", {"identityId": p.uint72}, p.uint96),
    getNodeStakeInfo: viewFun("0x771c96c1", "getNodeStakeInfo(uint72)", {"identityId": p.uint72}, {"_0": p.uint96, "_1": p.uint256}),
    getOperatorFeeBalance: viewFun("0xf28d24f2", "getOperatorFeeBalance(uint72)", {"identityId": p.uint72}, p.uint96),
    getOperatorFeeCumulativeEarnedRewards: viewFun("0x9c5a5bf8", "getOperatorFeeCumulativeEarnedRewards(uint72)", {"identityId": p.uint72}, p.uint96),
    getOperatorFeeCumulativePaidOutRewards: viewFun("0x6c467fd2", "getOperatorFeeCumulativePaidOutRewards(uint72)", {"identityId": p.uint72}, p.uint96),
    getOperatorFeeWithdrawalRequest: viewFun("0xff751376", "getOperatorFeeWithdrawalRequest(uint72)", {"identityId": p.uint72}, {"_0": p.uint96, "_1": p.uint96, "_2": p.uint256}),
    getOperatorFeeWithdrawalRequestAmount: viewFun("0x27ac00d1", "getOperatorFeeWithdrawalRequestAmount(uint72)", {"identityId": p.uint72}, p.uint96),
    getOperatorFeeWithdrawalRequestIndexedOutAmount: viewFun("0xb409638f", "getOperatorFeeWithdrawalRequestIndexedOutAmount(uint72)", {"identityId": p.uint72}, p.uint96),
    getOperatorFeeWithdrawalRequestTimestamp: viewFun("0x23ac2e76", "getOperatorFeeWithdrawalRequestTimestamp(uint72)", {"identityId": p.uint72}, p.uint256),
    getTotalStake: viewFun("0x7bc74225", "getTotalStake()", {}, p.uint96),
    hub: viewFun("0x365a86fc", "hub()", {}, p.address),
    increaseDelegatorStakeBase: fun("0xd946b0ba", "increaseDelegatorStakeBase(uint72,bytes32,uint96)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "addedStake": p.uint96}, ),
    increaseDelegatorStakeRewardIndexed: fun("0xf05f5999", "increaseDelegatorStakeRewardIndexed(uint72,bytes32,uint96)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "addedStakeReward": p.uint96}, ),
    increaseNodeRewardIndex: fun("0xa6af8e8b", "increaseNodeRewardIndex(uint72,uint256)", {"identityId": p.uint72, "addedIndex": p.uint256}, ),
    increaseNodeStake: fun("0x97d2904f", "increaseNodeStake(uint72,uint96)", {"identityId": p.uint72, "addedNodeStake": p.uint96}, ),
    increaseOperatorFeeBalance: fun("0x42d2e5ae", "increaseOperatorFeeBalance(uint72,uint96)", {"identityId": p.uint72, "addedFee": p.uint96}, ),
    increaseTotalStake: fun("0x3ada6a63", "increaseTotalStake(uint96)", {"addedStake": p.uint96}, ),
    initialize: fun("0x8129fc1c", "initialize()", {}, ),
    isDelegatingToNode: viewFun("0xf5b7ad8f", "isDelegatingToNode(uint72,bytes32)", {"identityId": p.uint72, "delegatorKey": p.bytes32}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nodes: viewFun("0x86c9ee75", "nodes(uint72)", {"_0": p.uint72}, {"stake": p.uint96, "rewardIndex": p.uint256, "cumulativeEarnedRewards": p.uint96, "cumulativePaidOutRewards": p.uint96, "operatorFeeBalance": p.uint96, "operatorFeeCumulativeEarnedRewards": p.uint96, "operatorFeeCumulativePaidOutRewards": p.uint96, "delegatorCount": p.uint256}),
    operatorFeeWithdrawalRequestExists: viewFun("0xbafcd688", "operatorFeeWithdrawalRequestExists(uint72)", {"identityId": p.uint72}, p.bool),
    operatorFeeWithdrawals: viewFun("0x2c90532a", "operatorFeeWithdrawals(uint72)", {"_0": p.uint72}, {"amount": p.uint96, "indexedOutAmount": p.uint96, "timestamp": p.uint256}),
    setDelegatorCount: fun("0xd03a37ba", "setDelegatorCount(uint72,uint256)", {"identityId": p.uint72, "delegatorCount": p.uint256}, ),
    setDelegatorLastRewardIndex: fun("0xec56b5e4", "setDelegatorLastRewardIndex(uint72,bytes32,uint256)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "lastRewardIndex": p.uint256}, ),
    setDelegatorStakeBase: fun("0x45b8d375", "setDelegatorStakeBase(uint72,bytes32,uint96)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "stakeBase": p.uint96}, ),
    setDelegatorStakeInfo: fun("0x284de633", "setDelegatorStakeInfo(uint72,bytes32,uint96,uint96)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "stakeBase": p.uint96, "stakeRewardIndexed": p.uint96}, ),
    setDelegatorStakeRewardIndexed: fun("0xcb52e751", "setDelegatorStakeRewardIndexed(uint72,bytes32,uint96)", {"identityId": p.uint72, "delegatorKey": p.bytes32, "stakeRewardIndexed": p.uint96}, ),
    setNodeCumulativeEarnedRewards: fun("0xf0cd351c", "setNodeCumulativeEarnedRewards(uint72,uint96)", {"identityId": p.uint72, "newEarnedRewards": p.uint96}, ),
    setNodeCumulativePaidOutRewards: fun("0x607c95de", "setNodeCumulativePaidOutRewards(uint72,uint96)", {"identityId": p.uint72, "newPaidOutRewards": p.uint96}, ),
    setNodeRewardIndex: fun("0xc6de208c", "setNodeRewardIndex(uint72,uint256)", {"identityId": p.uint72, "newIndex": p.uint256}, ),
    setNodeStake: fun("0x298a690b", "setNodeStake(uint72,uint96)", {"identityId": p.uint72, "newNodeStake": p.uint96}, ),
    setNodeStakeInfo: fun("0xe2473778", "setNodeStakeInfo(uint72,uint96,uint256)", {"identityId": p.uint72, "stake": p.uint96, "rewardIndex": p.uint256}, ),
    setOperatorFeeBalance: fun("0xaf48d7d2", "setOperatorFeeBalance(uint72,uint96)", {"identityId": p.uint72, "newBalance": p.uint96}, ),
    setOperatorFeeCumulativeEarnedRewards: fun("0x08275bb5", "setOperatorFeeCumulativeEarnedRewards(uint72,uint96)", {"identityId": p.uint72, "amount": p.uint96}, ),
    setOperatorFeeCumulativePaidOutRewards: fun("0x905ded9c", "setOperatorFeeCumulativePaidOutRewards(uint72,uint96)", {"identityId": p.uint72, "amount": p.uint96}, ),
    setTotalStake: fun("0x0e475089", "setTotalStake(uint96)", {"newTotalStake": p.uint96}, ),
    tokenContract: viewFun("0x55a373d6", "tokenContract()", {}, p.address),
    transferStake: fun("0xdedac1ae", "transferStake(address,uint96)", {"receiver": p.address, "stakeAmount": p.uint96}, ),
    transferTokens: fun("0x0c89a0df", "transferTokens(address)", {"custodian": p.address}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    withdrawMisplacedEther: fun("0x254cc46c", "withdrawMisplacedEther()", {}, ),
    withdrawMisplacedTokens: fun("0x9d7937b2", "withdrawMisplacedTokens(address)", {"tokenContractAddress": p.address}, ),
    withdrawals: viewFun("0x3d87ba2b", "withdrawals(uint72,bytes32)", {"_0": p.uint72, "_1": p.bytes32}, {"amount": p.uint96, "indexedOutAmount": p.uint96, "timestamp": p.uint256}),
}

export class Contract extends ContractBase {

    delegatorWithdrawalRequestExists(identityId: DelegatorWithdrawalRequestExistsParams["identityId"], delegatorKey: DelegatorWithdrawalRequestExistsParams["delegatorKey"]) {
        return this.eth_call(functions.delegatorWithdrawalRequestExists, {identityId, delegatorKey})
    }

    delegators(_0: DelegatorsParams["_0"], _1: DelegatorsParams["_1"]) {
        return this.eth_call(functions.delegators, {_0, _1})
    }

    getDelegatorCount(identityId: GetDelegatorCountParams["identityId"]) {
        return this.eth_call(functions.getDelegatorCount, {identityId})
    }

    getDelegatorCumulativeEarnedRewards(identityId: GetDelegatorCumulativeEarnedRewardsParams["identityId"], delegatorKey: GetDelegatorCumulativeEarnedRewardsParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorCumulativeEarnedRewards, {identityId, delegatorKey})
    }

    getDelegatorCumulativePaidOutRewards(identityId: GetDelegatorCumulativePaidOutRewardsParams["identityId"], delegatorKey: GetDelegatorCumulativePaidOutRewardsParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorCumulativePaidOutRewards, {identityId, delegatorKey})
    }

    getDelegatorData(identityId: GetDelegatorDataParams["identityId"], delegatorKey: GetDelegatorDataParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorData, {identityId, delegatorKey})
    }

    getDelegatorLastRewardIndex(identityId: GetDelegatorLastRewardIndexParams["identityId"], delegatorKey: GetDelegatorLastRewardIndexParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorLastRewardIndex, {identityId, delegatorKey})
    }

    getDelegatorNodes(delegatorKey: GetDelegatorNodesParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorNodes, {delegatorKey})
    }

    getDelegatorNodesCount(delegatorKey: GetDelegatorNodesCountParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorNodesCount, {delegatorKey})
    }

    getDelegatorNodesIn(delegatorKey: GetDelegatorNodesInParams["delegatorKey"], start: GetDelegatorNodesInParams["start"], end: GetDelegatorNodesInParams["end"]) {
        return this.eth_call(functions.getDelegatorNodesIn, {delegatorKey, start, end})
    }

    getDelegatorRewardsInfo(identityId: GetDelegatorRewardsInfoParams["identityId"], delegatorKey: GetDelegatorRewardsInfoParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorRewardsInfo, {identityId, delegatorKey})
    }

    getDelegatorStakeBase(identityId: GetDelegatorStakeBaseParams["identityId"], delegatorKey: GetDelegatorStakeBaseParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorStakeBase, {identityId, delegatorKey})
    }

    getDelegatorStakeInfo(identityId: GetDelegatorStakeInfoParams["identityId"], delegatorKey: GetDelegatorStakeInfoParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorStakeInfo, {identityId, delegatorKey})
    }

    getDelegatorStakeRewardIndexed(identityId: GetDelegatorStakeRewardIndexedParams["identityId"], delegatorKey: GetDelegatorStakeRewardIndexedParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorStakeRewardIndexed, {identityId, delegatorKey})
    }

    getDelegatorTotalStake(identityId: GetDelegatorTotalStakeParams["identityId"], delegatorKey: GetDelegatorTotalStakeParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorTotalStake, {identityId, delegatorKey})
    }

    getDelegatorWithdrawalRequest(identityId: GetDelegatorWithdrawalRequestParams["identityId"], delegatorKey: GetDelegatorWithdrawalRequestParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorWithdrawalRequest, {identityId, delegatorKey})
    }

    getDelegatorWithdrawalRequestAmount(identityId: GetDelegatorWithdrawalRequestAmountParams["identityId"], delegatorKey: GetDelegatorWithdrawalRequestAmountParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorWithdrawalRequestAmount, {identityId, delegatorKey})
    }

    getDelegatorWithdrawalRequestIndexedOutAmount(identityId: GetDelegatorWithdrawalRequestIndexedOutAmountParams["identityId"], delegatorKey: GetDelegatorWithdrawalRequestIndexedOutAmountParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorWithdrawalRequestIndexedOutAmount, {identityId, delegatorKey})
    }

    getDelegatorWithdrawalRequestTimestamp(identityId: GetDelegatorWithdrawalRequestTimestampParams["identityId"], delegatorKey: GetDelegatorWithdrawalRequestTimestampParams["delegatorKey"]) {
        return this.eth_call(functions.getDelegatorWithdrawalRequestTimestamp, {identityId, delegatorKey})
    }

    getNodeCumulativeEarnedRewards(identityId: GetNodeCumulativeEarnedRewardsParams["identityId"]) {
        return this.eth_call(functions.getNodeCumulativeEarnedRewards, {identityId})
    }

    getNodeCumulativePaidOutRewards(identityId: GetNodeCumulativePaidOutRewardsParams["identityId"]) {
        return this.eth_call(functions.getNodeCumulativePaidOutRewards, {identityId})
    }

    getNodeData(identityId: GetNodeDataParams["identityId"]) {
        return this.eth_call(functions.getNodeData, {identityId})
    }

    getNodeOperatorFeesInfo(identityId: GetNodeOperatorFeesInfoParams["identityId"]) {
        return this.eth_call(functions.getNodeOperatorFeesInfo, {identityId})
    }

    getNodeRewardIndex(identityId: GetNodeRewardIndexParams["identityId"]) {
        return this.eth_call(functions.getNodeRewardIndex, {identityId})
    }

    getNodeRewardsInfo(identityId: GetNodeRewardsInfoParams["identityId"]) {
        return this.eth_call(functions.getNodeRewardsInfo, {identityId})
    }

    getNodeStake(identityId: GetNodeStakeParams["identityId"]) {
        return this.eth_call(functions.getNodeStake, {identityId})
    }

    getNodeStakeInfo(identityId: GetNodeStakeInfoParams["identityId"]) {
        return this.eth_call(functions.getNodeStakeInfo, {identityId})
    }

    getOperatorFeeBalance(identityId: GetOperatorFeeBalanceParams["identityId"]) {
        return this.eth_call(functions.getOperatorFeeBalance, {identityId})
    }

    getOperatorFeeCumulativeEarnedRewards(identityId: GetOperatorFeeCumulativeEarnedRewardsParams["identityId"]) {
        return this.eth_call(functions.getOperatorFeeCumulativeEarnedRewards, {identityId})
    }

    getOperatorFeeCumulativePaidOutRewards(identityId: GetOperatorFeeCumulativePaidOutRewardsParams["identityId"]) {
        return this.eth_call(functions.getOperatorFeeCumulativePaidOutRewards, {identityId})
    }

    getOperatorFeeWithdrawalRequest(identityId: GetOperatorFeeWithdrawalRequestParams["identityId"]) {
        return this.eth_call(functions.getOperatorFeeWithdrawalRequest, {identityId})
    }

    getOperatorFeeWithdrawalRequestAmount(identityId: GetOperatorFeeWithdrawalRequestAmountParams["identityId"]) {
        return this.eth_call(functions.getOperatorFeeWithdrawalRequestAmount, {identityId})
    }

    getOperatorFeeWithdrawalRequestIndexedOutAmount(identityId: GetOperatorFeeWithdrawalRequestIndexedOutAmountParams["identityId"]) {
        return this.eth_call(functions.getOperatorFeeWithdrawalRequestIndexedOutAmount, {identityId})
    }

    getOperatorFeeWithdrawalRequestTimestamp(identityId: GetOperatorFeeWithdrawalRequestTimestampParams["identityId"]) {
        return this.eth_call(functions.getOperatorFeeWithdrawalRequestTimestamp, {identityId})
    }

    getTotalStake() {
        return this.eth_call(functions.getTotalStake, {})
    }

    hub() {
        return this.eth_call(functions.hub, {})
    }

    isDelegatingToNode(identityId: IsDelegatingToNodeParams["identityId"], delegatorKey: IsDelegatingToNodeParams["delegatorKey"]) {
        return this.eth_call(functions.isDelegatingToNode, {identityId, delegatorKey})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nodes(_0: NodesParams["_0"]) {
        return this.eth_call(functions.nodes, {_0})
    }

    operatorFeeWithdrawalRequestExists(identityId: OperatorFeeWithdrawalRequestExistsParams["identityId"]) {
        return this.eth_call(functions.operatorFeeWithdrawalRequestExists, {identityId})
    }

    operatorFeeWithdrawals(_0: OperatorFeeWithdrawalsParams["_0"]) {
        return this.eth_call(functions.operatorFeeWithdrawals, {_0})
    }

    tokenContract() {
        return this.eth_call(functions.tokenContract, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    withdrawals(_0: WithdrawalsParams["_0"], _1: WithdrawalsParams["_1"]) {
        return this.eth_call(functions.withdrawals, {_0, _1})
    }
}

/// Event types
export type DelegatorBaseStakeUpdatedEventArgs = EParams<typeof events.DelegatorBaseStakeUpdated>
export type DelegatorCountUpdatedEventArgs = EParams<typeof events.DelegatorCountUpdated>
export type DelegatorCumulativeEarnedRewardsUpdatedEventArgs = EParams<typeof events.DelegatorCumulativeEarnedRewardsUpdated>
export type DelegatorCumulativePaidOutRewardsUpdatedEventArgs = EParams<typeof events.DelegatorCumulativePaidOutRewardsUpdated>
export type DelegatorIndexedStakeUpdatedEventArgs = EParams<typeof events.DelegatorIndexedStakeUpdated>
export type DelegatorLastRewardIndexUpdatedEventArgs = EParams<typeof events.DelegatorLastRewardIndexUpdated>
export type DelegatorWithdrawalRequestCreatedEventArgs = EParams<typeof events.DelegatorWithdrawalRequestCreated>
export type DelegatorWithdrawalRequestDeletedEventArgs = EParams<typeof events.DelegatorWithdrawalRequestDeleted>
export type MisplacedERC20WithdrawnEventArgs = EParams<typeof events.MisplacedERC20Withdrawn>
export type MisplacedEtherWithdrawnEventArgs = EParams<typeof events.MisplacedEtherWithdrawn>
export type NodeCumulativeEarnedRewardsUpdatedEventArgs = EParams<typeof events.NodeCumulativeEarnedRewardsUpdated>
export type NodeCumulativePaidOutRewardsUpdatedEventArgs = EParams<typeof events.NodeCumulativePaidOutRewardsUpdated>
export type NodeRewardIndexUpdatedEventArgs = EParams<typeof events.NodeRewardIndexUpdated>
export type NodeStakeUpdatedEventArgs = EParams<typeof events.NodeStakeUpdated>
export type OperatorFeeBalanceUpdatedEventArgs = EParams<typeof events.OperatorFeeBalanceUpdated>
export type OperatorFeeCumulativeEarnedRewardsUpdatedEventArgs = EParams<typeof events.OperatorFeeCumulativeEarnedRewardsUpdated>
export type OperatorFeeCumulativePaidOutRewardsUpdatedEventArgs = EParams<typeof events.OperatorFeeCumulativePaidOutRewardsUpdated>
export type OperatorFeeWithdrawalRequestCreatedEventArgs = EParams<typeof events.OperatorFeeWithdrawalRequestCreated>
export type OperatorFeeWithdrawalRequestDeletedEventArgs = EParams<typeof events.OperatorFeeWithdrawalRequestDeleted>
export type StakedTokensTransferredEventArgs = EParams<typeof events.StakedTokensTransferred>
export type TokenTransferredEventArgs = EParams<typeof events.TokenTransferred>
export type TotalStakeUpdatedEventArgs = EParams<typeof events.TotalStakeUpdated>

/// Function types
export type AddDelegatorCumulativeEarnedRewardsParams = FunctionArguments<typeof functions.addDelegatorCumulativeEarnedRewards>
export type AddDelegatorCumulativeEarnedRewardsReturn = FunctionReturn<typeof functions.addDelegatorCumulativeEarnedRewards>

export type AddDelegatorCumulativePaidOutRewardsParams = FunctionArguments<typeof functions.addDelegatorCumulativePaidOutRewards>
export type AddDelegatorCumulativePaidOutRewardsReturn = FunctionReturn<typeof functions.addDelegatorCumulativePaidOutRewards>

export type AddNodeCumulativeEarnedRewardsParams = FunctionArguments<typeof functions.addNodeCumulativeEarnedRewards>
export type AddNodeCumulativeEarnedRewardsReturn = FunctionReturn<typeof functions.addNodeCumulativeEarnedRewards>

export type AddNodeCumulativePaidOutRewardsParams = FunctionArguments<typeof functions.addNodeCumulativePaidOutRewards>
export type AddNodeCumulativePaidOutRewardsReturn = FunctionReturn<typeof functions.addNodeCumulativePaidOutRewards>

export type AddOperatorFeeCumulativeEarnedRewardsParams = FunctionArguments<typeof functions.addOperatorFeeCumulativeEarnedRewards>
export type AddOperatorFeeCumulativeEarnedRewardsReturn = FunctionReturn<typeof functions.addOperatorFeeCumulativeEarnedRewards>

export type AddOperatorFeeCumulativePaidOutRewardsParams = FunctionArguments<typeof functions.addOperatorFeeCumulativePaidOutRewards>
export type AddOperatorFeeCumulativePaidOutRewardsReturn = FunctionReturn<typeof functions.addOperatorFeeCumulativePaidOutRewards>

export type CreateDelegatorWithdrawalRequestParams = FunctionArguments<typeof functions.createDelegatorWithdrawalRequest>
export type CreateDelegatorWithdrawalRequestReturn = FunctionReturn<typeof functions.createDelegatorWithdrawalRequest>

export type CreateOperatorFeeWithdrawalRequestParams = FunctionArguments<typeof functions.createOperatorFeeWithdrawalRequest>
export type CreateOperatorFeeWithdrawalRequestReturn = FunctionReturn<typeof functions.createOperatorFeeWithdrawalRequest>

export type DecreaseDelegatorStakeBaseParams = FunctionArguments<typeof functions.decreaseDelegatorStakeBase>
export type DecreaseDelegatorStakeBaseReturn = FunctionReturn<typeof functions.decreaseDelegatorStakeBase>

export type DecreaseDelegatorStakeRewardIndexedParams = FunctionArguments<typeof functions.decreaseDelegatorStakeRewardIndexed>
export type DecreaseDelegatorStakeRewardIndexedReturn = FunctionReturn<typeof functions.decreaseDelegatorStakeRewardIndexed>

export type DecreaseNodeStakeParams = FunctionArguments<typeof functions.decreaseNodeStake>
export type DecreaseNodeStakeReturn = FunctionReturn<typeof functions.decreaseNodeStake>

export type DecreaseOperatorFeeBalanceParams = FunctionArguments<typeof functions.decreaseOperatorFeeBalance>
export type DecreaseOperatorFeeBalanceReturn = FunctionReturn<typeof functions.decreaseOperatorFeeBalance>

export type DecreaseTotalStakeParams = FunctionArguments<typeof functions.decreaseTotalStake>
export type DecreaseTotalStakeReturn = FunctionReturn<typeof functions.decreaseTotalStake>

export type DelegatorWithdrawalRequestExistsParams = FunctionArguments<typeof functions.delegatorWithdrawalRequestExists>
export type DelegatorWithdrawalRequestExistsReturn = FunctionReturn<typeof functions.delegatorWithdrawalRequestExists>

export type DelegatorsParams = FunctionArguments<typeof functions.delegators>
export type DelegatorsReturn = FunctionReturn<typeof functions.delegators>

export type DeleteDelegatorWithdrawalRequestParams = FunctionArguments<typeof functions.deleteDelegatorWithdrawalRequest>
export type DeleteDelegatorWithdrawalRequestReturn = FunctionReturn<typeof functions.deleteDelegatorWithdrawalRequest>

export type DeleteOperatorFeeWithdrawalRequestParams = FunctionArguments<typeof functions.deleteOperatorFeeWithdrawalRequest>
export type DeleteOperatorFeeWithdrawalRequestReturn = FunctionReturn<typeof functions.deleteOperatorFeeWithdrawalRequest>

export type GetDelegatorCountParams = FunctionArguments<typeof functions.getDelegatorCount>
export type GetDelegatorCountReturn = FunctionReturn<typeof functions.getDelegatorCount>

export type GetDelegatorCumulativeEarnedRewardsParams = FunctionArguments<typeof functions.getDelegatorCumulativeEarnedRewards>
export type GetDelegatorCumulativeEarnedRewardsReturn = FunctionReturn<typeof functions.getDelegatorCumulativeEarnedRewards>

export type GetDelegatorCumulativePaidOutRewardsParams = FunctionArguments<typeof functions.getDelegatorCumulativePaidOutRewards>
export type GetDelegatorCumulativePaidOutRewardsReturn = FunctionReturn<typeof functions.getDelegatorCumulativePaidOutRewards>

export type GetDelegatorDataParams = FunctionArguments<typeof functions.getDelegatorData>
export type GetDelegatorDataReturn = FunctionReturn<typeof functions.getDelegatorData>

export type GetDelegatorLastRewardIndexParams = FunctionArguments<typeof functions.getDelegatorLastRewardIndex>
export type GetDelegatorLastRewardIndexReturn = FunctionReturn<typeof functions.getDelegatorLastRewardIndex>

export type GetDelegatorNodesParams = FunctionArguments<typeof functions.getDelegatorNodes>
export type GetDelegatorNodesReturn = FunctionReturn<typeof functions.getDelegatorNodes>

export type GetDelegatorNodesCountParams = FunctionArguments<typeof functions.getDelegatorNodesCount>
export type GetDelegatorNodesCountReturn = FunctionReturn<typeof functions.getDelegatorNodesCount>

export type GetDelegatorNodesInParams = FunctionArguments<typeof functions.getDelegatorNodesIn>
export type GetDelegatorNodesInReturn = FunctionReturn<typeof functions.getDelegatorNodesIn>

export type GetDelegatorRewardsInfoParams = FunctionArguments<typeof functions.getDelegatorRewardsInfo>
export type GetDelegatorRewardsInfoReturn = FunctionReturn<typeof functions.getDelegatorRewardsInfo>

export type GetDelegatorStakeBaseParams = FunctionArguments<typeof functions.getDelegatorStakeBase>
export type GetDelegatorStakeBaseReturn = FunctionReturn<typeof functions.getDelegatorStakeBase>

export type GetDelegatorStakeInfoParams = FunctionArguments<typeof functions.getDelegatorStakeInfo>
export type GetDelegatorStakeInfoReturn = FunctionReturn<typeof functions.getDelegatorStakeInfo>

export type GetDelegatorStakeRewardIndexedParams = FunctionArguments<typeof functions.getDelegatorStakeRewardIndexed>
export type GetDelegatorStakeRewardIndexedReturn = FunctionReturn<typeof functions.getDelegatorStakeRewardIndexed>

export type GetDelegatorTotalStakeParams = FunctionArguments<typeof functions.getDelegatorTotalStake>
export type GetDelegatorTotalStakeReturn = FunctionReturn<typeof functions.getDelegatorTotalStake>

export type GetDelegatorWithdrawalRequestParams = FunctionArguments<typeof functions.getDelegatorWithdrawalRequest>
export type GetDelegatorWithdrawalRequestReturn = FunctionReturn<typeof functions.getDelegatorWithdrawalRequest>

export type GetDelegatorWithdrawalRequestAmountParams = FunctionArguments<typeof functions.getDelegatorWithdrawalRequestAmount>
export type GetDelegatorWithdrawalRequestAmountReturn = FunctionReturn<typeof functions.getDelegatorWithdrawalRequestAmount>

export type GetDelegatorWithdrawalRequestIndexedOutAmountParams = FunctionArguments<typeof functions.getDelegatorWithdrawalRequestIndexedOutAmount>
export type GetDelegatorWithdrawalRequestIndexedOutAmountReturn = FunctionReturn<typeof functions.getDelegatorWithdrawalRequestIndexedOutAmount>

export type GetDelegatorWithdrawalRequestTimestampParams = FunctionArguments<typeof functions.getDelegatorWithdrawalRequestTimestamp>
export type GetDelegatorWithdrawalRequestTimestampReturn = FunctionReturn<typeof functions.getDelegatorWithdrawalRequestTimestamp>

export type GetNodeCumulativeEarnedRewardsParams = FunctionArguments<typeof functions.getNodeCumulativeEarnedRewards>
export type GetNodeCumulativeEarnedRewardsReturn = FunctionReturn<typeof functions.getNodeCumulativeEarnedRewards>

export type GetNodeCumulativePaidOutRewardsParams = FunctionArguments<typeof functions.getNodeCumulativePaidOutRewards>
export type GetNodeCumulativePaidOutRewardsReturn = FunctionReturn<typeof functions.getNodeCumulativePaidOutRewards>

export type GetNodeDataParams = FunctionArguments<typeof functions.getNodeData>
export type GetNodeDataReturn = FunctionReturn<typeof functions.getNodeData>

export type GetNodeOperatorFeesInfoParams = FunctionArguments<typeof functions.getNodeOperatorFeesInfo>
export type GetNodeOperatorFeesInfoReturn = FunctionReturn<typeof functions.getNodeOperatorFeesInfo>

export type GetNodeRewardIndexParams = FunctionArguments<typeof functions.getNodeRewardIndex>
export type GetNodeRewardIndexReturn = FunctionReturn<typeof functions.getNodeRewardIndex>

export type GetNodeRewardsInfoParams = FunctionArguments<typeof functions.getNodeRewardsInfo>
export type GetNodeRewardsInfoReturn = FunctionReturn<typeof functions.getNodeRewardsInfo>

export type GetNodeStakeParams = FunctionArguments<typeof functions.getNodeStake>
export type GetNodeStakeReturn = FunctionReturn<typeof functions.getNodeStake>

export type GetNodeStakeInfoParams = FunctionArguments<typeof functions.getNodeStakeInfo>
export type GetNodeStakeInfoReturn = FunctionReturn<typeof functions.getNodeStakeInfo>

export type GetOperatorFeeBalanceParams = FunctionArguments<typeof functions.getOperatorFeeBalance>
export type GetOperatorFeeBalanceReturn = FunctionReturn<typeof functions.getOperatorFeeBalance>

export type GetOperatorFeeCumulativeEarnedRewardsParams = FunctionArguments<typeof functions.getOperatorFeeCumulativeEarnedRewards>
export type GetOperatorFeeCumulativeEarnedRewardsReturn = FunctionReturn<typeof functions.getOperatorFeeCumulativeEarnedRewards>

export type GetOperatorFeeCumulativePaidOutRewardsParams = FunctionArguments<typeof functions.getOperatorFeeCumulativePaidOutRewards>
export type GetOperatorFeeCumulativePaidOutRewardsReturn = FunctionReturn<typeof functions.getOperatorFeeCumulativePaidOutRewards>

export type GetOperatorFeeWithdrawalRequestParams = FunctionArguments<typeof functions.getOperatorFeeWithdrawalRequest>
export type GetOperatorFeeWithdrawalRequestReturn = FunctionReturn<typeof functions.getOperatorFeeWithdrawalRequest>

export type GetOperatorFeeWithdrawalRequestAmountParams = FunctionArguments<typeof functions.getOperatorFeeWithdrawalRequestAmount>
export type GetOperatorFeeWithdrawalRequestAmountReturn = FunctionReturn<typeof functions.getOperatorFeeWithdrawalRequestAmount>

export type GetOperatorFeeWithdrawalRequestIndexedOutAmountParams = FunctionArguments<typeof functions.getOperatorFeeWithdrawalRequestIndexedOutAmount>
export type GetOperatorFeeWithdrawalRequestIndexedOutAmountReturn = FunctionReturn<typeof functions.getOperatorFeeWithdrawalRequestIndexedOutAmount>

export type GetOperatorFeeWithdrawalRequestTimestampParams = FunctionArguments<typeof functions.getOperatorFeeWithdrawalRequestTimestamp>
export type GetOperatorFeeWithdrawalRequestTimestampReturn = FunctionReturn<typeof functions.getOperatorFeeWithdrawalRequestTimestamp>

export type GetTotalStakeParams = FunctionArguments<typeof functions.getTotalStake>
export type GetTotalStakeReturn = FunctionReturn<typeof functions.getTotalStake>

export type HubParams = FunctionArguments<typeof functions.hub>
export type HubReturn = FunctionReturn<typeof functions.hub>

export type IncreaseDelegatorStakeBaseParams = FunctionArguments<typeof functions.increaseDelegatorStakeBase>
export type IncreaseDelegatorStakeBaseReturn = FunctionReturn<typeof functions.increaseDelegatorStakeBase>

export type IncreaseDelegatorStakeRewardIndexedParams = FunctionArguments<typeof functions.increaseDelegatorStakeRewardIndexed>
export type IncreaseDelegatorStakeRewardIndexedReturn = FunctionReturn<typeof functions.increaseDelegatorStakeRewardIndexed>

export type IncreaseNodeRewardIndexParams = FunctionArguments<typeof functions.increaseNodeRewardIndex>
export type IncreaseNodeRewardIndexReturn = FunctionReturn<typeof functions.increaseNodeRewardIndex>

export type IncreaseNodeStakeParams = FunctionArguments<typeof functions.increaseNodeStake>
export type IncreaseNodeStakeReturn = FunctionReturn<typeof functions.increaseNodeStake>

export type IncreaseOperatorFeeBalanceParams = FunctionArguments<typeof functions.increaseOperatorFeeBalance>
export type IncreaseOperatorFeeBalanceReturn = FunctionReturn<typeof functions.increaseOperatorFeeBalance>

export type IncreaseTotalStakeParams = FunctionArguments<typeof functions.increaseTotalStake>
export type IncreaseTotalStakeReturn = FunctionReturn<typeof functions.increaseTotalStake>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type IsDelegatingToNodeParams = FunctionArguments<typeof functions.isDelegatingToNode>
export type IsDelegatingToNodeReturn = FunctionReturn<typeof functions.isDelegatingToNode>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NodesParams = FunctionArguments<typeof functions.nodes>
export type NodesReturn = FunctionReturn<typeof functions.nodes>

export type OperatorFeeWithdrawalRequestExistsParams = FunctionArguments<typeof functions.operatorFeeWithdrawalRequestExists>
export type OperatorFeeWithdrawalRequestExistsReturn = FunctionReturn<typeof functions.operatorFeeWithdrawalRequestExists>

export type OperatorFeeWithdrawalsParams = FunctionArguments<typeof functions.operatorFeeWithdrawals>
export type OperatorFeeWithdrawalsReturn = FunctionReturn<typeof functions.operatorFeeWithdrawals>

export type SetDelegatorCountParams = FunctionArguments<typeof functions.setDelegatorCount>
export type SetDelegatorCountReturn = FunctionReturn<typeof functions.setDelegatorCount>

export type SetDelegatorLastRewardIndexParams = FunctionArguments<typeof functions.setDelegatorLastRewardIndex>
export type SetDelegatorLastRewardIndexReturn = FunctionReturn<typeof functions.setDelegatorLastRewardIndex>

export type SetDelegatorStakeBaseParams = FunctionArguments<typeof functions.setDelegatorStakeBase>
export type SetDelegatorStakeBaseReturn = FunctionReturn<typeof functions.setDelegatorStakeBase>

export type SetDelegatorStakeInfoParams = FunctionArguments<typeof functions.setDelegatorStakeInfo>
export type SetDelegatorStakeInfoReturn = FunctionReturn<typeof functions.setDelegatorStakeInfo>

export type SetDelegatorStakeRewardIndexedParams = FunctionArguments<typeof functions.setDelegatorStakeRewardIndexed>
export type SetDelegatorStakeRewardIndexedReturn = FunctionReturn<typeof functions.setDelegatorStakeRewardIndexed>

export type SetNodeCumulativeEarnedRewardsParams = FunctionArguments<typeof functions.setNodeCumulativeEarnedRewards>
export type SetNodeCumulativeEarnedRewardsReturn = FunctionReturn<typeof functions.setNodeCumulativeEarnedRewards>

export type SetNodeCumulativePaidOutRewardsParams = FunctionArguments<typeof functions.setNodeCumulativePaidOutRewards>
export type SetNodeCumulativePaidOutRewardsReturn = FunctionReturn<typeof functions.setNodeCumulativePaidOutRewards>

export type SetNodeRewardIndexParams = FunctionArguments<typeof functions.setNodeRewardIndex>
export type SetNodeRewardIndexReturn = FunctionReturn<typeof functions.setNodeRewardIndex>

export type SetNodeStakeParams = FunctionArguments<typeof functions.setNodeStake>
export type SetNodeStakeReturn = FunctionReturn<typeof functions.setNodeStake>

export type SetNodeStakeInfoParams = FunctionArguments<typeof functions.setNodeStakeInfo>
export type SetNodeStakeInfoReturn = FunctionReturn<typeof functions.setNodeStakeInfo>

export type SetOperatorFeeBalanceParams = FunctionArguments<typeof functions.setOperatorFeeBalance>
export type SetOperatorFeeBalanceReturn = FunctionReturn<typeof functions.setOperatorFeeBalance>

export type SetOperatorFeeCumulativeEarnedRewardsParams = FunctionArguments<typeof functions.setOperatorFeeCumulativeEarnedRewards>
export type SetOperatorFeeCumulativeEarnedRewardsReturn = FunctionReturn<typeof functions.setOperatorFeeCumulativeEarnedRewards>

export type SetOperatorFeeCumulativePaidOutRewardsParams = FunctionArguments<typeof functions.setOperatorFeeCumulativePaidOutRewards>
export type SetOperatorFeeCumulativePaidOutRewardsReturn = FunctionReturn<typeof functions.setOperatorFeeCumulativePaidOutRewards>

export type SetTotalStakeParams = FunctionArguments<typeof functions.setTotalStake>
export type SetTotalStakeReturn = FunctionReturn<typeof functions.setTotalStake>

export type TokenContractParams = FunctionArguments<typeof functions.tokenContract>
export type TokenContractReturn = FunctionReturn<typeof functions.tokenContract>

export type TransferStakeParams = FunctionArguments<typeof functions.transferStake>
export type TransferStakeReturn = FunctionReturn<typeof functions.transferStake>

export type TransferTokensParams = FunctionArguments<typeof functions.transferTokens>
export type TransferTokensReturn = FunctionReturn<typeof functions.transferTokens>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type WithdrawMisplacedEtherParams = FunctionArguments<typeof functions.withdrawMisplacedEther>
export type WithdrawMisplacedEtherReturn = FunctionReturn<typeof functions.withdrawMisplacedEther>

export type WithdrawMisplacedTokensParams = FunctionArguments<typeof functions.withdrawMisplacedTokens>
export type WithdrawMisplacedTokensReturn = FunctionReturn<typeof functions.withdrawMisplacedTokens>

export type WithdrawalsParams = FunctionArguments<typeof functions.withdrawals>
export type WithdrawalsReturn = FunctionReturn<typeof functions.withdrawals>

