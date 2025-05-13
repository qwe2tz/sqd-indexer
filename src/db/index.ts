import { initAndGetDataSource } from "./typeormDataSource";
import { processStakingData } from "./processing/staking";
import { BlockData } from "@subsquid/evm-processor";


export async function processData(blocks: BlockData<{}>[]) {
  const db = initAndGetDataSource();

  await processStakingData(db, blocks);
}
