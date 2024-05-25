import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export default class CreateBlogDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsOptional()
    creationDate: Date;

    @IsString()
    @IsOptional()
    imagen: string;

}