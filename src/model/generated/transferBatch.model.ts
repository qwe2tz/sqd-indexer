import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class TransferBatch {
    constructor(props?: Partial<TransferBatch>) {
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
    operator!: string

    @Index_()
    @StringColumn_({nullable: false})
    from!: string

    @StringColumn_({array: true, nullable: false})
    tokenIds!: (string)[]

    @StringColumn_({array: true, nullable: false})
    amounts!: (string)[]
}
