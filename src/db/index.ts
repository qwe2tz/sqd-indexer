import { initDatabase } from "./typeormDataSource";
import { processStakingData } from "./computed/staking";

export async function processData(blocks: Number[]) {
  const db = initDatabase();

  await processStakingData(db, blocks);
}
