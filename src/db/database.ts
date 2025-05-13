import { DataSource } from "typeorm";
import { CollectedReward } from "../model/staking/CollectedRewards";
import { NodeProofRate } from "../model/staking/NodeProofRate";
import { EstimatedReward } from "../model/staking/EstimatedRewards";


let AppDataSource: DataSource;

export async function initDatabase() {
  const schema = process.env.DB_SCHEMA || "computed";

  AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [CollectedReward, EstimatedReward, NodeProofRate],
    // This means we always update the database schema to match the entities
    synchronize: true,
    schema,
  });

  await AppDataSource.initialize()
    .then(() => {
      console.log("[✔] Type ORM Data Source initialized. Using schema:", schema);
    })
    .catch((error) => console.log(error));
  
  return AppDataSource;
}