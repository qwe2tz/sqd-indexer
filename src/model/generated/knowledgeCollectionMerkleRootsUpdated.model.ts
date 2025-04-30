import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class KnowledgeCollectionMerkleRootsUpdated {
    constructor(props?: Partial<KnowledgeCollectionMerkleRootsUpdated>) {
        Object.assign(this, props)
    }

    @StringColumn_({array: true, nullable: true})
    merkleRoots!: (string | undefined | null)[] | undefined | null

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
    eventId!: bigint | undefined | null
}
