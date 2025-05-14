import { BlockData, EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { Block, Transaction } from "./model";
import { initEventRegistry, EventType } from "./events";
import { processData } from "./db";
import { time } from "console";

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
      rateLimit: parseInt(process.env.RATE_LIMIT) || 100,
      maxBatchCallSize: parseInt(process.env.MAX_BATCH_SIZE) || 1,
      capacity: parseInt(process.env.RPC_CAPACITY) || 10,
    })
    .setFinalityConfirmation(parseInt(process.env.FINALITY_CONFIRMATIONS) || 50)
    .setBlockRange({ from: parseInt(process.env.START_BLOCK) })
    .addLog({
      address: process.env.CONTRACTS.split(";"),
      topic0: topics0List,
      // TODO: Check if this is the most efficient way to do this
      transaction: true,
    })
    .addTransaction({
      from: process.env.CONTRACTS.split(";"),
      to: process.env.CONTRACTS.split(";"),
    });

  if (process.env.ARCHIVE) {
    processor.setGateway(process.env.ARCHIVE);
  }

  // Database instance used for subsquid processor
  const db = new TypeormDatabase({
    stateSchema: process.env.INDEXER_NAME,
    supportHotBlocks: false,
  });

  processor.run(db, async (ctx) => {
    const transactions: Transaction[] = [];
    const eventPromises: Promise<void>[] = [];

    for (let block of ctx.blocks) {
      for (const tx of block.transactions) {
        try {
          transactions.push(
            new Transaction({
              id: tx.hash,
              blockHash: block.header.hash,
              blockNumber: BigInt(block.header.height),
              transactionHash: tx.hash,
              timestamp: String(block.header.timestamp),
              from: tx.from,
              to: tx.to,
              createdAt: new Date(),
            })
          );
        } catch (error) {
          console.error(
            `[${new Date().toISOString()}][CRITICAL]: Error creating transaction instance for ${
              tx.hash
            }:`,
            error
          );
        }
      }

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
          transactionHash: log.transaction.hash,
          blockNumber: block.header.height,
          ...decoded,
        };

        const model = event.DBModel;
        if (model) {
          const eventInstance: EventInstance = Object.assign(new event.DBModel(), eventData);
          eventPromises.push(ctx.store.upsert([eventInstance]));
        }
      }

      try {
        await ctx.store.upsert(
          new Block({
            id: block.header.hash,
            blockNumber: BigInt(block.header.height),
            blockHash: block.header.hash,
            timestamp: String(block.header.timestamp),
            createdAt: new Date(),
          })
        );
      } catch (error) {
        console.error(
          `[${new Date().toISOString()}][CRITICAL]: Error upserting block ${block.header.height}:`,
          error
        );
      }
    }

    try {
      await Promise.all(eventPromises);
      await ctx.store.upsert(transactions);
    } catch (error) {
      console.error(
        `[${new Date().toISOString()}][CRITICAL]: Error upserting events or transactions:`,
        error
      );
    }

    // Process, compute, aggregate all data for external consumption
    await processData(
      ctx.blocks.map((block: BlockData<{}>) => {
        return Number(block.header.height);
      })
    );
  });
}

runProcessor().catch((err) => {
  console.error("Error running processor:", err);
});
