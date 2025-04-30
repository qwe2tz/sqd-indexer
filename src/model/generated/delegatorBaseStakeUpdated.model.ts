import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class DelegatorBaseStakeUpdated {
    constructor(props?: Partial<DelegatorBaseStakeUpdated>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: true})
    contract!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    name!: string | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @Index_()
    @BigIntColumn_({nullable: true})
    identityId!: bigint | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    delegatorKey!: string | undefined | null

    @BigIntColumn_({nullable: true})
    stakeBase!: bigint | undefined | null
}
