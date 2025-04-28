import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class ChallengeCreated {
    constructor(props?: Partial<ChallengeCreated>) {
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
    identityId!: bigint

    @Index_()
    @BigIntColumn_({nullable: false})
    epoch!: bigint

    @BigIntColumn_({nullable: false})
    knowledgeCollectionId!: bigint

    @BigIntColumn_({nullable: false})
    chunkId!: bigint

    @Index_()
    @BigIntColumn_({nullable: false})
    activeProofPeriodBlock!: bigint

    @BigIntColumn_({nullable: false})
    proofingPeriodDurationInBlocks!: bigint
}
