import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Transaction } from "./model";
import { initEventRegistry, EventType } from "./events";

type EventInstance = Object & {
  id: string;
  contract: string;
  name: string;
  createdAt: Date;
};

async function runProcessor() {
  const EventRegistry = await initEventRegistry();

  const topics0List = Object.keys(EventRegistry).map((topic) => topic);

  const processor = new EvmBatchProcessor()
    .setRpcEndpoint({
      url: process.env.RPC_ENDPOINT,
      rateLimit: 50,
      capacity: 1,
    })
    .setBlockRange({ from: parseInt(process.env.START_BLOCK) })
    .setFinalityConfirmation(75)
    .addLog({
      address: process.env.CONTRACTS.split(";"),
      topic0: topics0List,
    })
    .addTransaction({
      from: process.env.CONTRACTS.split(";"),
      to: process.env.CONTRACTS.split(";"),
    });

  if (process.env.ARCHIVE) {
    processor.setGateway(process.env.ARCHIVE);
  }

  const db = new TypeormDatabase({ stateSchema: process.env.INDEXER_NAME });
  processor.run(db, async (ctx) => {
    const transactions: Transaction[] = [];
    const eventPromises: Promise<void>[] = [];

    for (let block of ctx.blocks) {
      for (const log of block.logs) {
        const event = EventRegistry[log.topics[0]] as EventType;

        if (!event.DBModel) {
          console.error(
            `[${new Date().toISOString()}][CRITICAL]: No ORM model found for event ${
              event.name
            } at block ${block.header.height}`
          );
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

        const model = event.DBModel;
        if (model) {
          const eventInstance: EventInstance = Object.assign(new event.DBModel(), eventData);
          eventPromises.push(ctx.store.upsert([eventInstance]));
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
    await ctx.store.upsert(transactions);
  });
}

runProcessor().catch((err) => {
  console.error("Error running processor:", err);
});
