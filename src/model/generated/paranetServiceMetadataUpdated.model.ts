import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class ParanetServiceMetadataUpdated {
    constructor(props?: Partial<ParanetServiceMetadataUpdated>) {
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
    paranetServiceKCStorageContract!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    paranetServiceKCTokenId!: bigint

    @Index_()
    @BigIntColumn_({nullable: false})
    paranetServiceKATokenId!: bigint

    @StringColumn_({nullable: false})
    newParanetServiceName!: string

    @StringColumn_({nullable: false})
    newParanetServiceDescription!: string

    @StringColumn_({array: true, nullable: false})
    newParanetServiceAddresses!: (string)[]
}
