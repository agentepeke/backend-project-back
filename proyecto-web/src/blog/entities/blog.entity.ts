import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('blogs')
class Blog {
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
    
    @Column({type: 'varchar', length: 100})
    @ApiProperty()
    imagen: string;

}
export default Blog;