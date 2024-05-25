"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteImgBlog1716453010625 = void 0;
class DeleteImgBlog1716453010625 {
    constructor() {
        this.name = 'DeleteImgBlog1716453010625';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "blogs" DROP COLUMN "imagen"`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "imagen" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "imagen" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD "imagen" character varying(100) NOT NULL`);
    }
}
exports.DeleteImgBlog1716453010625 = DeleteImgBlog1716453010625;
//# sourceMappingURL=1716453010625-delete-img-blog.js.map