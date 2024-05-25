import { BlogService } from './blog.service';
import CreateBlogDto from './dtos/create-blog.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    findOne(id: number): Promise<import("./entities/blog.entity").default>;
    findAll(): Promise<import("./entities/blog.entity").default[]>;
    create(body: CreateBlogDto): Promise<import("./entities/blog.entity").default>;
    update(id: number, body: any): Promise<import("./entities/blog.entity").default>;
    destroy(id: number): Promise<import("./entities/blog.entity").default>;
}
