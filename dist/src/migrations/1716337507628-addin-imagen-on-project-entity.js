"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddinImagenOnProjectEntity1716337507628 = void 0;
class AddinImagenOnProjectEntity1716337507628 {
    constructor() {
        this.name = 'AddinImagenOnProjectEntity1716337507628';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "projects" ADD "imagen" character varying(100)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "imagen"`);
    }
}
exports.AddinImagenOnProjectEntity1716337507628 = AddinImagenOnProjectEntity1716337507628;
//# sourceMappingURL=1716337507628-addin-imagen-on-project-entity.js.map