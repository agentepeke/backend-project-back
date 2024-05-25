import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';
import CreateProjectDto from './dtos/create-project.dto';
import { IsPublic } from 'src/common/is-public.decorator';


@ApiTags('projects')
@Controller('project')
export class ProjectController {
    constructor(
        private readonly projectService: ProjectService
    ) {}
    //Metodo para buscar un proyecto por id
    @Get(':id')
    @IsPublic()
    findOne(@Param('id') id: number){
        return this.projectService.findOne(id);
    }
    //Metodo para buscar todos los proyectos
    @Get()
    @IsPublic()
    findAll(){
        const projects = this.projectService.findAll();
        return projects;
    }
    //Metodo para crear un proyecto
    @Post()
    @IsPublic()
    create(@Body() body: CreateProjectDto){
        return this.projectService.create(body);
    }
    //Metodo para actualizar un proyecto
    @Patch(':id')
    @IsPublic()
    update(@Param('id') id: number, @Body() body) {
        return this.projectService.update(id, body);
    }
    //Metodo para eliminar un proyecto
    @Delete(':id')
    @IsPublic()
    @HttpCode(HttpStatus.NO_CONTENT)
    destroy(@Param('id') id: number) {
        return this.projectService.remove(id);
    }   
}


