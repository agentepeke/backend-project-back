import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Blog from './entities/blog.entity';
import { Repository } from 'typeorm';
import UpdateProjectDto from 'src/project/dtos/update-project.dto';
import CreateProjectDto from 'src/project/dtos/create-project.dto';
import UpdateBlogDto from './dtos/update-blog.dto';
import CreateBlogDto from './dtos/create-blog.dto';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private readonly blogRepository: Repository<Blog>,
    ) {};

    findAll(){
        return this.blogRepository.find();
    };

    async findOne(id: number){
        const record = await this.blogRepository.findOne({where: {id}});
        if (!record) {
            throw new Error(`Record with id ${id} not found`);
        }

        return record;
    };

    async update(id: number, update_blog: UpdateBlogDto){
        const blog = await this.findOne(id);

        this.blogRepository.merge(blog, update_blog);

        return this.blogRepository.save(blog);
    };

    create(new_blog: CreateBlogDto){
        const blog = this.blogRepository.create(new_blog);

        return this.blogRepository.save(blog);
    };

    async remove(id: number){
        const blog = await this.findOne(id);

        return this.blogRepository.remove(blog);
    };}
