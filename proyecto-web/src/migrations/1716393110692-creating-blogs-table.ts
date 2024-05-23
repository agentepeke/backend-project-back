import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatingBlogsTable1716393110692 implements MigrationInterface {
    name = 'CreatingBlogsTable1716393110692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blogs" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "description" text NOT NULL, "creationDate" date NOT NULL, "imagen" character varying(100) NOT NULL, CONSTRAINT "PK_e113335f11c926da929a625f118" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blogs"`);
    }

}
