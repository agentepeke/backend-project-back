"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const create_blog_dto_1 = require("./create-blog.dto");
class UpdateBlogDto extends (0, swagger_1.PartialType)(create_blog_dto_1.default) {
}
exports.default = UpdateBlogDto;
//# sourceMappingURL=update-blog.dto.js.map