import { initDatabase } from "./database";
import { processStakingData } from "./procedures/staking";

export async function processData(blocks: Number[]) {
  const db = await initDatabase();
  await processStakingData(db, blocks);
}
