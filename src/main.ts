import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Transaction } from "./model";
import { initEventRegistry, EventType } from "./events";
import { serializeWithBigInt } from "./utils";

async function runProcessor() {
  const EventRegistry = await initEventRegistry();
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

  if (process.env.SQD_GATEWAY) {
    processor.setGateway(process.env.SQD_GATEWAY);
  }

  const db = new TypeormDatabase();
  processor.run(db, async (ctx) => {
    const transactions: Transaction[] = [];
    const eventPromises: Promise<any>[] = [];

    for (let block of ctx.blocks) {
      for (const log of block.logs) {
        const event = EventRegistry[log.topics[0]] as EventType;

        console.log("Processing event:", event.name);

        if (!event.ORMModel) {
          console.error(`No ORM model found for event ${event.name}`);
          continue;
        }

        const decoded = event.abi.decode(log);

        const eventData = {
          id: log.id,
          contract: event.contract,
          name: event.name,
          createdAt: new Date(),
          ...decoded,
        };

        const model = event.ORMModel;
        if (model) {
          const eventInstance = Object.assign(new event.ORMModel(), eventData);
          eventPromises.push(ctx.store.insert([eventInstance]));
        }
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
            to: tx.to,
            createdAt: new Date(),
          })
        );
      }
    }

    await Promise.all(eventPromises);
    await ctx.store.insert(transactions);
  });
}

runProcessor().catch((err) => {
  console.error("Error running processor:", err);
});
