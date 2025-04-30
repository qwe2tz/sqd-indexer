import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Transaction {
    constructor(props?: Partial<Transaction>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: true})
    transactionHash!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    blockHash!: string | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    blockNumber!: bigint | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    timestamp!: bigint | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    from!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    to!: string | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
