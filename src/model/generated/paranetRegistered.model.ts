import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class ParanetRegistered {
    constructor(props?: Partial<ParanetRegistered>) {
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
    @StringColumn_({nullable: true})
    paranetKCStorageContract!: string | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    paranetKCTokenId!: bigint | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    paranetKATokenId!: bigint | undefined | null

    @StringColumn_({nullable: true})
    paranetName!: string | undefined | null

    @StringColumn_({nullable: true})
    paranetDescription!: string | undefined | null

    @BigIntColumn_({nullable: true})
    nodesAccessPolicy!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    minersAccessPolicy!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    knowledgeCollectionsSubmissionPolicy!: bigint | undefined | null
}
