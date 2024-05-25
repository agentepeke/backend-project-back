"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatingBlogsTable1716393110692 = void 0;
class CreatingBlogsTable1716393110692 {
    constructor() {
        this.name = 'CreatingBlogsTable1716393110692';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "blogs" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "description" text NOT NULL, "creationDate" date NOT NULL, "imagen" character varying(100) NOT NULL, CONSTRAINT "PK_e113335f11c926da929a625f118" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "blogs"`);
    }
}
exports.CreatingBlogsTable1716393110692 = CreatingBlogsTable1716393110692;
//# sourceMappingURL=1716393110692-creating-blogs-table.js.map