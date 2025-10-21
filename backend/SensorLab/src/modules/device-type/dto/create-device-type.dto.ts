import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsOptional,
} from "class-validator"

export class CreateDeviceTypeDto {
    @IsNotEmpty()
    @IsNumber()
    category_id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;
}