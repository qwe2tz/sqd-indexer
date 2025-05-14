import { DataSource } from "typeorm";
import { CollectedReward } from "../../model/staking/CollectedRewards";
import { NodeProofRate } from "../../model/staking/NodeProofRate";
import { getEpochProgress } from "../chronos";

async function _processCollectedReward(AppDataSource: DataSource, blocks: Number[]) {
  const repo = AppDataSource.getRepository(CollectedReward);
  const result = await AppDataSource.query(
    `SELECT identity_id, epoch, SUM(amount) AS total FROM rewards_claimed
     WHERE block_number IN (${blocks.join(",")})
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

export async function _processNodeProofRate(AppDataSource: DataSource, blocks: Number[]) {
  const repo = AppDataSource.getRepository(NodeProofRate);

  const epochProgress = await getEpochProgress();
  const expected_challenged_per_epoch = process.env.EXPECTED_CHALLENGES_PER_EPOCH || 50;

  const result = await AppDataSource.query(
    `SELECT
        c.identity_id, 
        c.epoch,
        COUNT(DISTINCT v.id) AS valid_proof_count,
        COUNT(DISTINCT c.id) AS challenge_count,
        (COUNT(DISTINCT v.id) / ($1 * $2)) AS success_rate
      FROM challenge_created c
      LEFT JOIN valid_proof_submitted v
        ON c.identity_id = v.identity_id AND c.epoch = v.epoch
      WHERE c.block_number IN (${blocks.join(",")})
      GROUP BY c.identity_id, c.epoch
      ORDER BY c.identity_id, c.epoch;
    `,
    [expected_challenged_per_epoch, epochProgress]
  );

  for (const row of result) {
    const data = {
      identityId: row.identity_id,
      epoch: row.epoch,
      validProofs: row.valid_proof_count,
      totalChallenges: row.challenge_count,
      // Could also be inferred by the caller
      successRatePercentage: row.success_rate_percentage,
    };

    const successRate = repo.create(data);
    await repo.upsert(successRate, ["identityId", "epoch"]);
  }
}

export async function processStakingData(AppDataSource: DataSource, blocks: Number[]) {
  await _processCollectedReward(AppDataSource, blocks);
  await _processNodeProofRate(AppDataSource, blocks);
}
