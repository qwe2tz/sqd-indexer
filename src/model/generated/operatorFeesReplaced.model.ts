import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class OperatorFeesReplaced {
    constructor(props?: Partial<OperatorFeesReplaced>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: true})
    contract!: string | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    identityId!: bigint | undefined | null

    @IntColumn_({nullable: true})
    oldFeePercentage!: number | undefined | null

    @IntColumn_({nullable: true})
    newFeePercentage!: number | undefined | null

    @BigIntColumn_({nullable: true})
    effectiveDate!: bigint | undefined | null

    @StringColumn_({nullable: true})
    transactionHash!: string | undefined | null

    @BigIntColumn_({nullable: true})
    blockNumber!: bigint | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
