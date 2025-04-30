import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class ContractRemoved {
    constructor(props?: Partial<ContractRemoved>) {
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

    @StringColumn_({nullable: true})
    contractName!: string | undefined | null

    @StringColumn_({nullable: true})
    contractAddress!: string | undefined | null

    @StringColumn_({nullable: true})
    transactionHash!: string | undefined | null

    @StringColumn_({nullable: true})
    blockNumber!: string | undefined | null
}
