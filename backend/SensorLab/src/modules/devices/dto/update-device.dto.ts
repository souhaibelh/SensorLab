import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateDeviceDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    type_id?: number;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}