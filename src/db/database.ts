import { DataSource } from "typeorm";
import { CollectedReward } from "../model/staking/CollectedRewards";
import { NodeProofRate } from "../model/staking/NodeProofRate";
import { EstimatedReward } from "../model/staking/EstimatedRewards";


let AppDataSource: DataSource = null;

export async function initOrGetDatabase() {
  const schema = process.env.DB_SCHEMA || "computed";

  if (!AppDataSource) {
    AppDataSource = new DataSource({
      type: "postgres",
      host: process.env.DB_HOST || "postgres",
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [CollectedReward, EstimatedReward, NodeProofRate],
      // This means we always update the database schema to match the entities
      synchronize: true,
    });

    await AppDataSource.initialize()
      .then(() => {
        console.log("Agreggator database initialized. Using schema:", schema);
      })
      .catch((error) => console.log(error));
  }

  return AppDataSource;
}