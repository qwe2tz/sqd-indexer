import { DataSource } from "typeorm";
import { CollectedReward } from "../../model/staking/CollectedRewards";
import { NodeProofRate } from "../../model/staking/NodeProofRate";
import { getEpochAtTimestamp } from "../chronos";
import { DbBlock } from "../types";

async function _processCollectedReward(AppDataSource: DataSource, blocks: DbBlock[]) {
  const repo = AppDataSource.getRepository(CollectedReward);
  const result = await AppDataSource.query(
    `SELECT identity_id, epoch, SUM(amount) AS total FROM rewards_claimed
     WHERE block_number IN (${blocks.map((b) => b.block_number).join(",")})
     GROUP BY identity_id, epoch`
  );

  for (const row of result) {
    const data = {
      identityId: row.identity_id,
      epoch: row.epoch,
      amount: row.total,
    };

    const reward = repo.create(data);
    await repo.upsert(reward, ["identityId", "epoch"]);
  }
}

export async function _processNodeProofRate(AppDataSource: DataSource, blocks: DbBlock[]) {
  const repo = AppDataSource.getRepository(NodeProofRate);

  const epochPromises = blocks.map((block) => getEpochAtTimestamp(Number(block.timestamp) / 1000));
  const epochResults = await Promise.all(epochPromises);
  const epochs = [...new Set(epochResults)];

  const successRates: {
    identity_id: number;
    valid_proof_count: number;
    epoch: number;
    challenge_count: number;
    success_rate_percentage: number;
  }[] = await AppDataSource.query(`
    SELECT
      v.identity_id,
      v.epoch,
      COUNT(DISTINCT v.id) AS valid_proof_count,
      COUNT(DISTINCT c.id) AS challenge_count,
      ROUND(COUNT(DISTINCT v.id) * 100 / COUNT(DISTINCT c.id), 4) AS success_rate_percentage
    FROM challenge_created c
    LEFT JOIN valid_proof_submitted v
      ON c.identity_id = v.identity_id
    WHERE v.epoch IN (${epochs.join(",")})
    GROUP BY v.identity_id, v.epoch
    ORDER BY v.identity_id, v.epoch;
  `);

  if (successRates.length === 0) return;

  for (const row of successRates) {
    const data = {
      identityId: row.identity_id,
      epoch: row.epoch,
      validProofsSubmitted: row.valid_proof_count,
      challengesCreated: row.challenge_count,
      successRate: row.success_rate_percentage,
    };

    const proofRate = repo.create(data);
    await repo.upsert(proofRate, ["identityId", "epoch"]);
  }
}

export async function processStakingData(AppDataSource: DataSource, blocks: DbBlock[]) {
  await _processCollectedReward(AppDataSource, blocks);
  await _processNodeProofRate(AppDataSource, blocks);
}
