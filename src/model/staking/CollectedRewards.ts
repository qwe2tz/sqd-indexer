import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({ name: "collected_rewards", schema: "staking" })
export class CollectedReward {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("bigint")
  identityId: number;

  @Column("bigint")
  epoch: number;

  @Column("numeric")
  amount: number;

  @CreateDateColumn()
  calculatedAt: Date;

  @Column({ type: "timestamp", default: () => "now()" })
  createdAt: Date;
}
