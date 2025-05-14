import { DataSource } from "typeorm";
import { CollectedReward } from "../../model/staking/CollectedRewards";
import { NodeProofRate } from "../../model/staking/NodeProofRate";
import { getCurrentEpoch, getEpochProgress, getTimestampForEpoch } from "../chronos";
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

  const epochProgress = await getEpochProgress();
  const currentEpoch = await getCurrentEpoch();
  const currentEpochTimeStamp = await getTimestampForEpoch(currentEpoch);
  const expected_challenged_per_epoch = process.env.EXPECTED_CHALLENGES_PER_EPOCH || 50;

  const epochs = blocks.map((b) => {
    return parseInt(b.timestamp) <= currentEpochTimeStamp ? currentEpoch - 1 : currentEpoch;
  });

  const params = epochs.join(",");

  const finalizedEpochQuery =
    finalizedEpochsQ.length > 0
      ? `SELECT
      v.identity_id, 
      v.epoch,
      COUNT(DISTINCT v.id) AS valid_proof_count,
      (COUNT(DISTINCT v.id) / $3::NUMERIC) AS success_rate
    FROM valid_proof_submitted v
    LEFT JOIN challenge_created c
      ON c.identity_id = v.identity_id AND c.epoch = v.epoch
    WHERE v.epoch IN (${params})
    GROUP BY v.identity_id, v.epoch
  `
      : "";

  const currentEpochQuery = `SELECT
      v.identity_id, 
      v.epoch,
      COUNT(DISTINCT v.id) AS valid_proof_count,
      COUNT(DISTINCT c.id) AS challenge_count,
      (COUNT(DISTINCT v.id) / (($1::NUMERIC) * ($2::NUMERIC))) AS success_rate
    FROM valid_proof_submitted v
    LEFT JOIN challenge_created c
      ON c.identity_id = v.identity_id AND c.epoch = v.epoch
    WHERE v.epoch IN (${currentEpochQ})
    GROUP BY v.identity_id, v.epoch
  `;

  const queryParts = [currentEpochQuery, finalizedEpochQuery].filter(Boolean);
  const queryParams = [expected_challenged_per_epoch, epochProgress];
  if (finalizedEpochQuery.length > 0) {
    queryParams.push(expected_challenged_per_epoch);
  }

  const query = queryParts.join(" UNION ALL ");
  const result = await AppDataSource.query(query, queryParams);

  // console.log("Node proof rate result", result);
  // console.log(query);
  console.log(expected_challenged_per_epoch, epochProgress);

  // identity_id: '2',
  // epoch: '115',
  // valid_proof_count: '1',
  // challenge_count: '1',
  // success_rate: '1'

  for (const row of result) {
    // console.log("Inserting node proof rate", row);
    console.log("Row", row.success_rate);
    const data = {
      identityId: row.identity_id,
      epoch: row.epoch,
      // Could also be inferred by the caller
      successRate: row.success_rate,
    };

    const successRate = repo.create(data);

    // console.log("Success rate", successRate);
    await repo.upsert(successRate, ["identityId", "epoch"]);
  }
}

export async function processStakingData(AppDataSource: DataSource, blocks: DbBlock[]) {
  await _processCollectedReward(AppDataSource, blocks);
  await _processNodeProofRate(AppDataSource, blocks);
}
