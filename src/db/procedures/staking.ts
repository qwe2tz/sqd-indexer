import { DataSource } from "typeorm";
import { CollectedReward } from "../../model/staking/CollectedRewards";
import { NodeProofRate } from "../../model/staking/NodeProofRate";
// import { EstimatedReward } from "@/model/staking/EstimatedRewards";

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


// SR =
//   count(valid_proof) /
//   ((EXPECTED_CHALLENGES_PER_EPOCH * (currentTime - epochStartTime)) / epochLength);
export async function _processNodeProofRate(AppDataSource: DataSource, blocks: Number[]) {
  const repo = AppDataSource.getRepository(NodeProofRate);
  const result = await AppDataSource.query(
    `SELECT
      c.identity_id, 
      c.epoch,
      COUNT(DISTINCT v.id) AS valid_proof_count,
      COUNT(DISTINCT c.id) AS challenge_count,
      (COUNT(DISTINCT v.id) / (${process.env.EXPECTED_CHALLENGES_PER_EPOCH})
    `
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
