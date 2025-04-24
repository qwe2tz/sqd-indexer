module.exports = class Data1745498392032 {
    name = 'Data1745498392032'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "block_number" numeric NOT NULL, "transaction_hash" text NOT NULL, "timestamp" numeric NOT NULL, "from" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_bfc0a8772e125ff10707b8a5a9" ON "transaction" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_2d99bb5a0ab5fb8cf8b746eb39" ON "transaction" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_d86c9069481cdeb4adb7199b86" ON "transaction" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_87f2932d4a558d44a2915f849a" ON "transaction" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_290df3897fac99713afb5f3d7a" ON "transaction" ("from") `)
        await db.query(`CREATE INDEX "IDX_bd4c360c8e5745e921df060744" ON "transaction" ("created_at") `)
        await db.query(`CREATE TABLE "log" ("id" character varying NOT NULL, "contract" text NOT NULL, "name" text NOT NULL, "transaction_hash" text NOT NULL, "block_number" numeric NOT NULL, "block_hash" text NOT NULL, "timestamp" numeric NOT NULL, "address" text NOT NULL, "data" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_350604cbdf991d5930d9e618fbd" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3766da89eb81a61c884cd5ff4e" ON "log" ("contract") `)
        await db.query(`CREATE INDEX "IDX_4dd55c826dbc6a5a24a7873bef" ON "log" ("name") `)
        await db.query(`CREATE INDEX "IDX_8021431f6496046a16710ac473" ON "log" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_6e175ae0cca1c916cfa90a16ac" ON "log" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_c6a227d3456f0c80a6be90bb01" ON "log" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_d8b227f0e8c205a131e303f3ce" ON "log" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_3c0c7daf3367f6c78f80bbcdbb" ON "log" ("address") `)
        await db.query(`CREATE INDEX "IDX_4f374d703b27856b9d43e79279" ON "log" ("data") `)
        await db.query(`CREATE INDEX "IDX_a64ab7c456e914191342cfd215" ON "log" ("created_at") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_bfc0a8772e125ff10707b8a5a9"`)
        await db.query(`DROP INDEX "public"."IDX_2d99bb5a0ab5fb8cf8b746eb39"`)
        await db.query(`DROP INDEX "public"."IDX_d86c9069481cdeb4adb7199b86"`)
        await db.query(`DROP INDEX "public"."IDX_87f2932d4a558d44a2915f849a"`)
        await db.query(`DROP INDEX "public"."IDX_290df3897fac99713afb5f3d7a"`)
        await db.query(`DROP INDEX "public"."IDX_bd4c360c8e5745e921df060744"`)
        await db.query(`DROP TABLE "log"`)
        await db.query(`DROP INDEX "public"."IDX_3766da89eb81a61c884cd5ff4e"`)
        await db.query(`DROP INDEX "public"."IDX_4dd55c826dbc6a5a24a7873bef"`)
        await db.query(`DROP INDEX "public"."IDX_8021431f6496046a16710ac473"`)
        await db.query(`DROP INDEX "public"."IDX_6e175ae0cca1c916cfa90a16ac"`)
        await db.query(`DROP INDEX "public"."IDX_c6a227d3456f0c80a6be90bb01"`)
        await db.query(`DROP INDEX "public"."IDX_d8b227f0e8c205a131e303f3ce"`)
        await db.query(`DROP INDEX "public"."IDX_3c0c7daf3367f6c78f80bbcdbb"`)
        await db.query(`DROP INDEX "public"."IDX_4f374d703b27856b9d43e79279"`)
        await db.query(`DROP INDEX "public"."IDX_a64ab7c456e914191342cfd215"`)
    }
}
