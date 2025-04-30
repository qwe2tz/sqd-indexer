import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class TransferBatch {
    constructor(props?: Partial<TransferBatch>) {
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
    operator!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    from!: string | undefined | null

    @StringColumn_({array: true, nullable: true})
    tokenIds!: (string | undefined | null)[] | undefined | null

    @StringColumn_({array: true, nullable: true})
    amounts!: (string | undefined | null)[] | undefined | null
}
