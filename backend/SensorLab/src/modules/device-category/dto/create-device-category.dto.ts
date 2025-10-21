import {
    IsNotEmpty,
    IsString,
    IsOptional,
    MaxLength,
} from "class-validator"

export class CreateDeviceCategoryDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    icon: string;

    @IsOptional()
    @IsString()
    description?: string;
}