import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Transaction } from "./model";
import { EventRegistry, EventType } from "./constants/types";
import { serializeWithBigInt } from "./utils";

// TODO: Call HUB contract and check for address of existing contracts dynamicaly

const topics0List = Object.keys(EventRegistry).map((topic) => topic);
const processor = new EvmBatchProcessor()
  .setRpcEndpoint({
    url: "https://lofar-testnet.origin-trail.network",
    rateLimit: 100,
  })
  .setBlockRange({ from: 7064034 })
  .setFinalityConfirmation(75)
  .addLog({
    address: process.env.CONTRACTS.split(";"),
    topic0: topics0List,
  })
  .addTransaction({});

if (process.env.GATEWAY) {
  processor.setGateway(process.env.GATEWAY);
}

const db = new TypeormDatabase();
processor.run(db, async (ctx) => {
  const transactions: Transaction[] = [];
  // const logs: LogModel[] = [];

  for (let block of ctx.blocks) {
    for (const log of block.logs) {
      const event = EventRegistry[log.topics[0]] as EventType;
      const decoded = event.abi.decode(log);

      if (!decoded) {
        continue;
      }

      // logs.push(
      //   new LogModel({
      //     id: log.transaction.hash + log.logIndex,
      //     contract: event.contract,
      //     name: event.name,
      //     blockHash: block.header.hash,
      //     blockNumber: BigInt(block.header.height),
      //     transactionHash: log.transaction.hash,
      //     timestamp: BigInt(block.header.timestamp),
      //     address: log.address,
      //     data: serializeWithBigInt(decoded),
      //     createdAt: new Date(),
      //   })
      // );
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
          createdAt: new Date(),
        })
      );
    }
  }

  // Save everything to the database
  await ctx.store.insert(transactions);
  // await ctx.store.insert(logs);
});
