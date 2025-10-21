import { IsBoolean, IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateDeviceDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    type_id: number;

    @IsBoolean()
    isActive?: boolean;
}

