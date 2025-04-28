import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class KnowledgeCollectionMerkleRootAdded {
    constructor(props?: Partial<KnowledgeCollectionMerkleRootAdded>) {
        Object.assign(this, props)
    }

    @StringColumn_({nullable: true})
    merkleRoot!: string | undefined | null

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
}
