import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { IsPublic } from 'src/common/is-public.decorator';
import { BlogService } from './blog.service';
import CreateBlogDto from './dtos/create-blog.dto';

@Controller('blog')
export class BlogController {
    constructor(
        private readonly blogService: BlogService
    ) {}
    //Metodo para buscar un proyecto por id
    @Get(':id')
    @IsPublic()
    findOne(@Param('id') id: number){
        return this.blogService.findOne(id);
    }
    //Metodo para buscar todos los proyectos
    @Get()
    @IsPublic()
    findAll(){
        const blogs = this.blogService.findAll();
        return blogs;
    }
    //Metodo para crear un proyecto
    @Post()
    @IsPublic()
    create(@Body() body: CreateBlogDto){
        return this.blogService.create(body);
    }
    //Metodo para actualizar un proyecto
    @Patch(':id')
    @IsPublic()
    update(@Param('id') id: number, @Body() body) {
        return this.blogService.update(id, body);
    }
    //Metodo para eliminar un proyecto
    @Delete(':id')
    @IsPublic()
    @HttpCode(HttpStatus.NO_CONTENT)
    destroy(@Param('id') id: number) {
        return this.blogService.remove(id);
    }   }
