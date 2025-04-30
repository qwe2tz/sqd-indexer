import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class RewardsClaimed {
    constructor(props?: Partial<RewardsClaimed>) {
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
    @StringColumn_({nullable: false})
    identityId!: string

    @Index_()
    @StringColumn_({nullable: false})
    epoch!: string

    @Index_()
    @StringColumn_({nullable: false})
    delegator!: string

    @StringColumn_({nullable: false})
    amount!: string
}
