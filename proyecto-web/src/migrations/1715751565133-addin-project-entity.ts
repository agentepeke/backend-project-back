import { MigrationInterface, QueryRunner } from "typeorm";

export class AddinProjectEntity1715751565133 implements MigrationInterface {
    name = 'AddinProjectEntity1715751565133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "description" text NOT NULL, "creationDate" date NOT NULL, "updateDate" date NOT NULL, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
