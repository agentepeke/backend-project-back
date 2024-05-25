import { MigrationInterface, QueryRunner } from "typeorm";

export class AddinGitlinkOnProjects1716614751563 implements MigrationInterface {
    name = 'AddinGitlinkOnProjects1716614751563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ADD "gitlink" character varying(200)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
