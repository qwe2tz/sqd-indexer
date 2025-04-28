import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class KnowledgeCollectionCreated {
    constructor(props?: Partial<KnowledgeCollectionCreated>) {
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
    @BigIntColumn_({nullable: false})
    eventId!: bigint

    @StringColumn_({nullable: true})
    publishOperationId!: string | undefined | null

    @StringColumn_({nullable: false})
    merkleRoot!: string

    @BigIntColumn_({nullable: false})
    byteSize!: bigint

    @BigIntColumn_({nullable: false})
    startEpoch!: bigint

    @BigIntColumn_({nullable: false})
    endEpoch!: bigint

    @BigIntColumn_({nullable: false})
    tokenAmount!: bigint

    @BooleanColumn_({nullable: false})
    isImmutable!: boolean
}
