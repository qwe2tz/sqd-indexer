import { CollectedReward } from "@/model/staking/CollectedRewards";
import { NodeProofRate } from "@/model/staking/NodeProofRate";
import { EstimatedReward } from "@/model/staking/EstimatedRewards";
import { DataSource } from "typeorm";


async function _processCollectedReward(AppDataSource: DataSource, blocks: {}) {
  const repo = AppDataSource.getRepository(CollectedReward);
  // const reward = repo.create(data);
  // await repo.save(reward);
}

export async function _processEstimatedReward(AppDataSource: DataSource, blocks: {}) {
  const repo = AppDataSource.getRepository(EstimatedReward);
  // const estimate = repo.create(data);
  // await repo.save(estimate);
}

// export async function processNodeProofRate(data: {
//   identityId: number;
//   epoch: number;
//   validProofs: number;
//   totalChallenges: number;
// }) {
//   const repo = AppDataSource.getRepository(NodeProofRate);
//   const rate = repo.create({
//     ...data,
//     successRate: data.totalChallenges > 0 ? (data.validProofs * 100) / data.totalChallenges : 0,
//   });
//   await repo.save(rate);
// }

export async function processStakingData(AppDataSource: DataSource, blocks: {}) {
  console.log("Processing staking data...");
  await _processCollectedReward(AppDataSource, blocks);
  await _processEstimatedReward(AppDataSource, blocks);
}