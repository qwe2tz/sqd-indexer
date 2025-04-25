import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class ParanetPermissionedNodeJoinRequestCreated {
    constructor(props?: Partial<ParanetPermissionedNodeJoinRequestCreated>) {
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
    paranetKCStorageContract!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    paranetKCTokenId!: bigint

    @Index_()
    @BigIntColumn_({nullable: false})
    paranetKATokenId!: bigint

    @Index_()
    @BigIntColumn_({nullable: false})
    identityId!: bigint
}
