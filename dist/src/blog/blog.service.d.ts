import Blog from './entities/blog.entity';
import { Repository } from 'typeorm';
import UpdateBlogDto from './dtos/update-blog.dto';
import CreateBlogDto from './dtos/create-blog.dto';
export declare class BlogService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<Blog>);
    findAll(): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    update(id: number, update_blog: UpdateBlogDto): Promise<Blog>;
    create(new_blog: CreateBlogDto): Promise<Blog>;
    remove(id: number): Promise<Blog>;
}
