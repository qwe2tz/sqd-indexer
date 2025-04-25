import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class TotalVotersclaimedTokenSet {
    constructor(props?: Partial<TotalVotersclaimedTokenSet>) {
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

    @BigIntColumn_({nullable: false})
    oldAmount!: bigint

    @BigIntColumn_({nullable: false})
    newAmount!: bigint
}
