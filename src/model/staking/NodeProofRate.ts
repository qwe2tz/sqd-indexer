import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: "node_proof_rates", schema: "computed" })
@Unique(["identityId", "epoch"])
export class NodeProofRate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("numeric")
  identityId: number;

  @Column("numeric")
  epoch: number;

  @Column("numeric")
  validProofsSubmitted: number;

  @Column("numeric")
  challengesCreated: number;

  @Column("decimal")
  successRate: number;

  @Column({ type: "timestamp", default: () => "now()" })
  createdAt: Date;
}