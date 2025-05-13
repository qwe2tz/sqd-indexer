import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "node_proof_rates", schema: "staking" })
export class NodeProofRate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("bigint")
  identityId: number;

  @Column("bigint")
  epoch: number;

  @Column("int")
  validProofs: number;

  @Column("int")
  totalChallenges: number;

  @Column({ type: "timestamp", default: () => "now()" })
  createdAt: Date;
}
