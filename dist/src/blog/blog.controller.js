"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const is_public_decorator_1 = require("../common/is-public.decorator");
const blog_service_1 = require("./blog.service");
const create_blog_dto_1 = require("./dtos/create-blog.dto");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    findOne(id) {
        return this.blogService.findOne(id);
    }
    findAll() {
        const blogs = this.blogService.findAll();
        return blogs;
    }
    create(body) {
        return this.blogService.create(body);
    }
    update(id, body) {
        return this.blogService.update(id, body);
    }
    destroy(id) {
        return this.blogService.remove(id);
    }
};
exports.BlogController = BlogController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, is_public_decorator_1.IsPublic)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, is_public_decorator_1.IsPublic)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, is_public_decorator_1.IsPublic)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_dto_1.default]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, is_public_decorator_1.IsPublic)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, is_public_decorator_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "destroy", null);
exports.BlogController = BlogController = __decorate([
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
//# sourceMappingURL=blog.controller.js.map