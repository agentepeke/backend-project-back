import { MigrationInterface, QueryRunner } from "typeorm";

export class AddinImgProyectAgain1716613492298 implements MigrationInterface {
    name = 'AddinImgProyectAgain1716613492298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ADD "imagen" character varying(100)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
