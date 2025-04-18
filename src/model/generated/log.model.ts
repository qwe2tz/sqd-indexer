import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Log {
    constructor(props?: Partial<Log>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    transactionHash!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    blockNumber!: bigint

    @Index_()
    @StringColumn_({nullable: false})
    blockHash!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    timestamp!: bigint

    @Index_()
    @StringColumn_({nullable: false})
    address!: string

    @StringColumn_({nullable: true})
    data!: string | undefined | null
}
