import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import * as hub from "./abi/hub";



const processor = new EvmBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/base-sepolia")
  .setRpcEndpoint(process.env.RPC_ENDPOINT)
  .setBlockRange({ from: 24_598_957 })
  .setFinalityConfirmation(75)
  .addLog({
    address: ["0xf21CE8f8b01548D97DCFb36869f1ccB0814a4e05"],
    topic0: [], // Empty = all logs from this address
  })
  .addTransaction({
    to: ["0xf21CE8f8b01548D97DCFb36869f1ccB0814a4e05"],
    from: ["0xf21CE8f8b01548D97DCFb36869f1ccB0814a4e05"],
  });


const db = new TypeormDatabase();
processor.run(db, async (ctx) => {
  // const transactions: Transaction[] = [];
  for (let block of ctx.blocks) {
    // for (let log of block.logs) {
      // const { contractName } = hub.events.NewContract.decode(log);
      // const { newContractAddress } = hub.events.NewAssetStorage.decode(log);
      // transfers.push(
      //   new Transaction({
      //     id: log.id,
      //     from,
      //     to,
      //     value,
      //   })
      // );
    // }
    // for (const tx of block.transactions) {
    //   transactions.push(
    //     new Transaction({
    //       contractName,
    //       newContractAddress,
    //     })
    //   );
      
    // }
  }
  // await ctx.store.insert(transfers);
});
