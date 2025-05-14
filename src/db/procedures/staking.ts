import { DataSource } from "typeorm";
import { CollectedReward } from "../../model/staking/CollectedRewards";
import { NodeProofRate } from "../../model/staking/NodeProofRate";
import {
  getCurrentEpoch,
  getEpochProgress,
  getTimestampForEpoch,
  getEpochAtTimestamp,
  getEpochLength,
  getChronosStartTime,
} from "../chronos";
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

  const epochLength = await getEpochLength();
  const startTime = await getChronosStartTime();
  const epochProgress = await getEpochProgress(startTime);
  const expected_challenged_per_epoch = process.env.EXPECTED_CHALLENGES_PER_EPOCH || 50;

  const finalizedEpochs = [];
  const unfinalizedEpochs = [];

  for (const block of blocks) {
    const blockEpoch = await getEpochAtTimestamp(parseInt(block.timestamp));
    if (parseInt(block.timestamp) <= startTime * (blockEpoch - 1) * epochLength) {
      unfinalizedEpochs.push(blockEpoch);
    } else {
      finalizedEpochs.push(blockEpoch);
    }
  }

  const unfinalizedEpochsQ = `SELECT
      v.identity_id, 
      COUNT(DISTINCT v.id) AS valid_proof_count,
      (COUNT(DISTINCT v.id) / ($1::NUMERIC * $2::NUMERIC)) AS success_rate
    FROM valid_proof_submitted v
    LEFT JOIN challenge_created c
      ON c.identity_id = v.identity_id AND c.epoch = v.epoch
    WHERE v.epoch IN (${finalizedEpochs})
    GROUP BY v.identity_id, v.epoch
  `;

  const finalizedEpochsQ =
    unfinalizedEpochs.length > 0
      ? `
    SELECT
      v.identity_id, 
      COUNT(DISTINCT v.id) AS valid_proof_count,
      (COUNT(DISTINCT v.id) / $3::NUMERIC) AS success_rate
    FROM valid_proof_submitted v
    LEFT JOIN challenge_created c
      ON c.identity_id = v.identity_id AND c.epoch = v.epoch
    WHERE v.epoch IN (${finalizedEpochs})
    GROUP BY v.identity_id, v.epoch
  `
      : "";

  const queryParts = [finalizedEpochsQ, unfinalizedEpochsQ].filter(Boolean);
  const queryParams = [expected_challenged_per_epoch, epochProgress];
  if (finalizedEpochsQ.length > 0) {
    queryParams.push(expected_challenged_per_epoch);
  }

  const query = queryParts.join(" UNION ALL ");
  const result = await AppDataSource.query(query, queryParams);

  for (const row of result) {
    const data = {
      identityId: row.identity_id,
      epoch: row.epoch,
      successRate: row.success_rate,
    };

    const successRate = repo.create(data);
    await repo.upsert(successRate, ["identityId", "epoch"]);
  }
}

export async function processStakingData(AppDataSource: DataSource, blocks: DbBlock[]) {
  await _processCollectedReward(AppDataSource, blocks);
  await _processNodeProofRate(AppDataSource, blocks);
}
