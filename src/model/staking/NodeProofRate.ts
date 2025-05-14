import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "node_proof_rates", schema: "computed" })
@Unique(["identityId", "epoch"])
export class NodeProofRate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("bigint")
  identityId: number;

  @Column("bigint")
  epoch: number;

  @Column("decimal")
  successRate: number;

  @Column({ type: "timestamp", default: () => "now()" })
  createdAt: Date;
}
