"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddinImgBlogAgain1716611792889 = void 0;
class AddinImgBlogAgain1716611792889 {
    constructor() {
        this.name = 'AddinImgBlogAgain1716611792889';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "imagen"`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "imagen" character varying(100) `);
    }
    async down(queryRunner) {
    }
}
exports.AddinImgBlogAgain1716611792889 = AddinImgBlogAgain1716611792889;
//# sourceMappingURL=1716611792889-addin-img-blog-again.js.map