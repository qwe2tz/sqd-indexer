import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Transaction } from "./model";
import { Log } from "./model";

const processor = new EvmBatchProcessor()
  // .setGateway("https://v2.archive.subsquid.io/network/base-sepolia")
  .setRpcEndpoint({ url: process.env.RPC_ENDPOINT, rateLimit: 100 })
  .setBlockRange({ from: 7066600 })
  .setFinalityConfirmation(75)
  .addLog({
    address: ["0x0957e25BD33034948abc28204ddA54b6E1142D6F"],
    topic0: [], // Empty = all logs from this address
  })
  .addTransaction({});

const db = new TypeormDatabase();
processor.run(db, async (ctx) => {
  const transactions: Transaction[] = [];
  const logs: Log[] = [];

  console.log("Processing blocks", ctx.blocks.length);
  for (let block of ctx.blocks) {
    console.log("Processing logs", block.logs.length);
    for (let log of block.logs) {
      logs.push(
        new Log({
          id: log.id,
          transactionHash: log.transaction.hash,
          blockHash: block.header.hash,
          blockNumber: BigInt(block.header.height),
          timestamp: BigInt(block.header.timestamp),
          address: log.address,
          data: log.data,
        })
      );
    }

    console.log("Processing transactions", block.transactions.length);
    for (const tx of block.transactions) {
      transactions.push(
        new Transaction({
          id: tx.hash,
          blockHash: block.header.hash,
          blockNumber: BigInt(block.header.height),
          timestamp: BigInt(block.header.timestamp),
          from: tx.from,
        })
      );
    }
  }

  await ctx.store.insert(transactions);
  await ctx.store.insert(logs);
});
