"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddinGitlinkOnProjects1716614751563 = void 0;
class AddinGitlinkOnProjects1716614751563 {
    constructor() {
        this.name = 'AddinGitlinkOnProjects1716614751563';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "projects" ADD "gitlink" character varying(200)`);
    }
    async down(queryRunner) {
    }
}
exports.AddinGitlinkOnProjects1716614751563 = AddinGitlinkOnProjects1716614751563;
//# sourceMappingURL=1716614751563-addin-gitlink-on-projects.js.map