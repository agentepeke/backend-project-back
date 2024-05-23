import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export default class CreateProjectDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsOptional()
    creationDate: Date;

    @IsOptional()
    updateDate: Date;

    @IsString()
    @IsOptional()
    imagen: string;

}