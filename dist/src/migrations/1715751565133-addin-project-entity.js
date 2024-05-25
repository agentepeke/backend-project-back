"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddinProjectEntity1715751565133 = void 0;
class AddinProjectEntity1715751565133 {
    constructor() {
        this.name = 'AddinProjectEntity1715751565133';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "description" text NOT NULL, "creationDate" date NOT NULL, "updateDate" date NOT NULL, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "projects"`);
    }
}
exports.AddinProjectEntity1715751565133 = AddinProjectEntity1715751565133;
//# sourceMappingURL=1715751565133-addin-project-entity.js.map