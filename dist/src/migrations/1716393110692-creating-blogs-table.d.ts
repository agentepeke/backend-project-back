import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreatingBlogsTable1716393110692 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
