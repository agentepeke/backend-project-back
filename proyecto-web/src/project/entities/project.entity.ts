import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('projects')
class Project {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({type: 'varchar', length: 100})
    @ApiProperty()
    title: string;

    @Column({type: 'text'})
    @ApiProperty()
    description: string;

    @Column({type: 'date'})
    @ApiProperty()
    creationDate: Date;

    @Column({type: 'date'})
    @ApiProperty()
    updateDate: Date;

    @Column({type: 'varchar', length: 100})
    @ApiProperty()
    imagen: string;

    @Column({type: 'varchar', length: 200})
    @ApiProperty()
    gitlink: string;

}
export default Project;