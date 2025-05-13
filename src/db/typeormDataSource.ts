import { DataSource } from "typeorm";
import { CollectedReward } from "@/model/staking/CollectedRewards";
import { EstimatedReward } from "@/model/staking/EstimatedRewards";
import { NodeProofRate } from "@/model/staking/NodeProofRate";

let AppDataSource: DataSource;

export function initDatabase() {
  AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST,
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [CollectedReward, EstimatedReward, NodeProofRate],
    // This means we always update the database schema to match the entities
    synchronize: true,
    schema: process.env.DB_SCHEMA || "computed",
  });

  AppDataSource.initialize().catch((error) => console.log(error));
  console.log("[✔] Type ORM Data Source initialized. Using schema:", process.env.DB_SCHEMA);
  return AppDataSource;
}