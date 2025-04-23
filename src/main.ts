import { EvmBatchProcessor, Log } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Transaction, Log as LogModel } from "./model";
import * as hubAbi from "./abi/hub";
import * as randomSamplingAbi from "./abi/random-sampling";

const eventRegistry = {
  NewContract: hubAbi.events.NewContract,
  NewAssetStorage: hubAbi.events.NewAssetStorage,
  ContractChanged: hubAbi.events.ContractChanged,
  ContractRemoved: hubAbi.events.ContractRemoved,
  OwnershipTransferred: hubAbi.events.OwnershipTransferred,
  ChallengeCreated: randomSamplingAbi.events.ChallengeCreated,
  ValidProofSubmitted: randomSamplingAbi.events.ValidProofSubmitted,
  AvgBlockTimeUpdated: randomSamplingAbi.events.AvgBlockTimeUpdated,
  ProofingPeriodDurationInBlocksUpdated:
    randomSamplingAbi.events.ProofingPeriodDurationInBlocksUpdated,
};

const extractLog = (evmLog: Log) => {
  let result = {
    contract: "",
    name: "",
    decoded: {},
  };
  if (evmLog.topics[0] === eventRegistry.NewContract.topic) {
    result["decoded"] = eventRegistry.NewContract.decode(evmLog);
    result["contract"] = "Hub";
    result["name"] = "NewContract";
  } else if (evmLog.topics[0] === eventRegistry.ContractChanged.topic) {
    result["decoded"] = eventRegistry.ContractChanged.decode(evmLog);
    result["contract"] = "Hub";
    result["name"] = "ContractChanged";
  } else if (evmLog.topics[0] === eventRegistry.ContractRemoved.topic) {
    result["decoded"] = eventRegistry.ContractRemoved.decode(evmLog);
    result["contract"] = "Hub";
    result["name"] = "ContractChanged";
  }

  return result;
};

const processor = new EvmBatchProcessor()
  // .setGateway("https://v2.archive.subsquid.io/network/base-sepolia")
  .setRpcEndpoint({ url: process.env.RPC_ENDPOINT, rateLimit: 100 })
  .setBlockRange({ from: 7064034 })
  .setFinalityConfirmation(75)
  .addLog({
    address: process.env.CONTRACTS.split(";"),
    topic0: Object.keys(eventRegistry).map((e) => eventRegistry[e].topic),
  })
  .addTransaction({});

const db = new TypeormDatabase();
processor.run(db, async (ctx) => {
  const transactions: Transaction[] = [];
  const logs: LogModel[] = [];

  for (let block of ctx.blocks) {
    for (const log of block.logs) {
      const decodedLog = extractLog(log);
      if (!decodedLog) {
        continue;
      }
      logs.push(
        new LogModel({
          id: log.transaction.hash + log.logIndex,
          contract: decodedLog.contract,
          name: decodedLog.name,
          blockHash: block.header.hash,
          blockNumber: BigInt(block.header.height),
          transactionHash: log.transaction.hash,
          timestamp: BigInt(block.header.timestamp),
          address: log.address,
          data: JSON.stringify(decodedLog.decoded),
        })
      );
    }

    for (const tx of block.transactions) {
      transactions.push(
        new Transaction({
          id: tx.hash,
          blockHash: block.header.hash,
          blockNumber: BigInt(block.header.height),
          transactionHash: tx.hash,
          timestamp: BigInt(block.header.timestamp),
          from: tx.from,
        })
      );
    }
  }

  // Save everything to the database
  await ctx.store.insert(transactions);
  await ctx.store.insert(logs);
});
