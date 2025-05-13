import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique } from "typeorm";

@Entity({ name: "collected_rewards", schema: "computed" })
@Unique(["identityId", "epoch"])
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
