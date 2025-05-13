import { initOrGetDatabase } from "./database";
import { processStakingData } from "./procedures/staking";

export async function processData(blocks: Number[]) {
  const db = await initOrGetDatabase();
  await processStakingData(db, blocks);
}
