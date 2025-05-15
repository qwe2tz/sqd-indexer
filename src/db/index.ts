import { DataSource } from "typeorm";

import { initOrGetDatabase } from "./database";
import { processStakingData } from "./procedures/staking";
import { DbBlock } from "./types";

export async function processData() {
  const db = await initOrGetDatabase();
  const unprocessedBlocks: DbBlock[] = await fetchUnprocessedBlocks(db);

  if (unprocessedBlocks.length == 0) {
    return;
  }

  // NOTE: DATA PROCEDURES
  await processStakingData(db, unprocessedBlocks);

  await updateBlockStatus(db, unprocessedBlocks);
}

const fetchUnprocessedBlocks = async (db: DataSource) => {
  const blocks: DbBlock[] = await db.query(
    `SELECT * FROM block WHERE processed = false ORDER BY block_number ASC`
  );
  return blocks;
};

const updateBlockStatus = async (db: DataSource, blocks: DbBlock[]) => {
  await db.query(
    `UPDATE block SET processed = true WHERE block_number IN (${blocks
      .map((b) => BigInt(b.block_number))
      .join(",")})`
  );
};
