import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class W2Updated {
    constructor(props?: Partial<W2Updated>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: true})
    contract!: string | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    oldW2!: bigint | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    newW2!: bigint | undefined | null

    @StringColumn_({nullable: true})
    transactionHash!: string | undefined | null

    @BigIntColumn_({nullable: true})
    blockNumber!: bigint | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
