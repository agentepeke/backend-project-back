import { MigrationInterface, QueryRunner } from "typeorm";

export class AddinImgBlogAgain1716611792889 implements MigrationInterface {
    name = 'AddinImgBlogAgain1716611792889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "imagen"`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "imagen" character varying(100) `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
