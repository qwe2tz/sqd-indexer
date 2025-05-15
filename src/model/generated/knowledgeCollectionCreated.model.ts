import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class KnowledgeCollectionCreated {
    constructor(props?: Partial<KnowledgeCollectionCreated>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: true})
    contract!: string | undefined | null

    @Index_()
    @BigIntColumn_({nullable: true})
    knowledgeCollectionId!: bigint | undefined | null

    @StringColumn_({nullable: true})
    publishOperationId!: string | undefined | null

    @StringColumn_({nullable: true})
    merkleRoot!: string | undefined | null

    @BigIntColumn_({nullable: true})
    byteSize!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    startEpoch!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    endEpoch!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    tokenAmount!: bigint | undefined | null

    @BooleanColumn_({nullable: true})
    isImmutable!: boolean | undefined | null

    @StringColumn_({nullable: true})
    transactionHash!: string | undefined | null

    @BigIntColumn_({nullable: true})
    blockNumber!: bigint | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
