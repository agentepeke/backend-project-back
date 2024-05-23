import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteImgBlog1716453010625 implements MigrationInterface {
    name = 'DeleteImgBlog1716453010625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blogs" DROP COLUMN "imagen"`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "imagen" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "imagen" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "imagen" character varying(100) NOT NULL`);
    }

}
