import { MigrationInterface, QueryRunner } from "typeorm";

export class AddinImagenOnProjectEntity1716337507628 implements MigrationInterface {
    name = 'AddinImagenOnProjectEntity1716337507628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ADD "imagen" character varying(100)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "imagen"`);
    }

}
