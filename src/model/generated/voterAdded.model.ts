import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, BigIntColumn as BigIntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class VoterAdded {
    constructor(props?: Partial<VoterAdded>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: true})
    contract!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    voter!: string | undefined | null

    @IntColumn_({nullable: true})
    weight!: number | undefined | null

    @StringColumn_({nullable: true})
    transactionHash!: string | undefined | null

    @BigIntColumn_({nullable: true})
    blockNumber!: bigint | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
