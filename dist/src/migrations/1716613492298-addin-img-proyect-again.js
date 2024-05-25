"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddinImgProyectAgain1716613492298 = void 0;
class AddinImgProyectAgain1716613492298 {
    constructor() {
        this.name = 'AddinImgProyectAgain1716613492298';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "projects" ADD "imagen" character varying(100)`);
    }
    async down(queryRunner) {
    }
}
exports.AddinImgProyectAgain1716613492298 = AddinImgProyectAgain1716613492298;
//# sourceMappingURL=1716613492298-addin-img-proyect-again.js.map