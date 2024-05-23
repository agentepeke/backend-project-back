import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Project from './entities/project.entity';
import CreateProjectDto from './dtos/create-project.dto';
import UpdateProjectDto from './dtos/update-project.dto';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
    ) {};

    findAll(){
        return this.projectRepository.find();
    };

    async findOne(id: number){
        const record = await this.projectRepository.findOne({where: {id}});
        if (!record) {
            throw new Error(`Record with id ${id} not found`);
        }

        return record;
    };

    async update(id: number, update_project: UpdateProjectDto){
        const proyect = await this.findOne(id);

        this.projectRepository.merge(proyect, update_project);

        return this.projectRepository.save(proyect);
    };

    create(new_project: CreateProjectDto){
        const project = this.projectRepository.create(new_project);

        return this.projectRepository.save(project);
    };

    async remove(id: number){
        const project = await this.findOne(id);

        return this.projectRepository.remove(project);
    };
}
