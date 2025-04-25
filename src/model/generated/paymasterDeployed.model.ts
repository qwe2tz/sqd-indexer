import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class PaymasterDeployed {
    constructor(props?: Partial<PaymasterDeployed>) {
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
    deployer!: string

    @Index_()
    @StringColumn_({nullable: false})
    paymasterAddress!: string
}
