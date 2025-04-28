import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class TokensAddedToEpochRange {
    constructor(props?: Partial<TokensAddedToEpochRange>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    contract!: string

    @Index_()
    @StringColumn_({nullable: false})
    name!: string

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @Index_()
    @BigIntColumn_({nullable: false})
    shardId!: bigint

    @BigIntColumn_({nullable: false})
    startEpoch!: bigint

    @BigIntColumn_({nullable: false})
    endEpoch!: bigint

    @BigIntColumn_({nullable: false})
    tokenAmount!: bigint

    @BigIntColumn_({nullable: false})
    remainder!: bigint
}
