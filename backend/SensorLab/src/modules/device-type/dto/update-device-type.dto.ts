import {
    IsOptional,
    IsString,
    IsNumber
} from "class-validator";

export class UpdateDeviceTypeDto {
    @IsOptional()
    @IsNumber()
    category_id?: number;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;
}