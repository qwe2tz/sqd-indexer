import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({ name: "estimated_rewards", schema: "staking" })
export class EstimatedReward {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("bigint")
  identityId: number;

  @Column("bigint")
  epoch: number;

  @Column("numeric")
  estimatedAmount: number;

  @CreateDateColumn()
  calculatedAt: Date;

  @Column({ type: "timestamp", default: () => "now()" })
  createdAt: Date;
}
