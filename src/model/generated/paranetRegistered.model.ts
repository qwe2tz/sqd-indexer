import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

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
    paranetKCStorageContract!: string | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    paranetKCTokenId!: bigint | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    parnetKATokenId!: bigint | undefined | null

    @StringColumn_({nullable: true})
    paranetName!: string | undefined | null

    @StringColumn_({nullable: true})
    paranetDescription!: string | undefined | null

    @IntColumn_({nullable: true})
    nodesAccessPolicy!: number | undefined | null

    @IntColumn_({nullable: true})
    minersAccessPolicy!: number | undefined | null

    @IntColumn_({nullable: true})
    knowledgeCollectionsSubmissionPolicy!: number | undefined | null

    @StringColumn_({nullable: true})
    transactionHash!: string | undefined | null

    @BigIntColumn_({nullable: true})
    blockNumber!: bigint | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
