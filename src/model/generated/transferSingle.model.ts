import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class TransferSingle {
    constructor(props?: Partial<TransferSingle>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: true})
    contract!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    operator!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    from!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    to!: string | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    tokenIds!: bigint | undefined | null

    @StringColumn_({nullable: true})
    amount!: string | undefined | null

    @StringColumn_({nullable: true})
    transactionHash!: string | undefined | null

    @StringColumn_({nullable: true})
    blockNumber!: string | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
