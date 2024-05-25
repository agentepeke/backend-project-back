import { ProjectService } from './project.service';
import CreateProjectDto from './dtos/create-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    findOne(id: number): Promise<import("./entities/project.entity").default>;
    findAll(): Promise<import("./entities/project.entity").default[]>;
    create(body: CreateProjectDto): Promise<import("./entities/project.entity").default>;
    update(id: number, body: any): Promise<import("./entities/project.entity").default>;
    destroy(id: number): Promise<import("./entities/project.entity").default>;
}
