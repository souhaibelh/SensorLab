import {
    IsString,
    IsOptional,
    MaxLength,
} from "class-validator"

export class UpdateDeviceCategoryDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    name?: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    icon?: string;

    @IsOptional()
    @IsString()
    description?: string;
}