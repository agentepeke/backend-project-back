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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_entity_1 = require("./entities/blog.entity");
const typeorm_2 = require("typeorm");
let BlogService = class BlogService {
    constructor(blogRepository) {
        this.blogRepository = blogRepository;
    }
    ;
    findAll() {
        return this.blogRepository.find();
    }
    ;
    async findOne(id) {
        const record = await this.blogRepository.findOne({ where: { id } });
        if (!record) {
            throw new Error(`Record with id ${id} not found`);
        }
        return record;
    }
    ;
    async update(id, update_blog) {
        const blog = await this.findOne(id);
        this.blogRepository.merge(blog, update_blog);
        return this.blogRepository.save(blog);
    }
    ;
    create(new_blog) {
        const blog = this.blogRepository.create(new_blog);
        return this.blogRepository.save(blog);
    }
    ;
    async remove(id) {
        const blog = await this.findOne(id);
        return this.blogRepository.remove(blog);
    }
    ;
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BlogService);
//# sourceMappingURL=blog.service.js.map