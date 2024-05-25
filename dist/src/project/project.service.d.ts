import { Repository } from 'typeorm';
import Project from './entities/project.entity';
import CreateProjectDto from './dtos/create-project.dto';
import UpdateProjectDto from './dtos/update-project.dto';
export declare class ProjectService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    update(id: number, update_project: UpdateProjectDto): Promise<Project>;
    create(new_project: CreateProjectDto): Promise<Project>;
    remove(id: number): Promise<Project>;
}
