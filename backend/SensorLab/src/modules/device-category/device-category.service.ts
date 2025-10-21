import { DeviceCategoryRepository } from "./device-category.repository";
import { DeviceCategory } from "../../entities/device-category";
import { CreateDeviceCategoryDto } from "./dto/create-device-category.dto";
import { UpdateDeviceCategoryDto } from "./dto/update-device-category.dto";

export class DeviceCategoryService {
    async create(dto : CreateDeviceCategoryDto) : Promise<DeviceCategory> {
        const device = DeviceCategoryRepository.create(dto);
        return DeviceCategoryRepository.save(device);
    }

    async findAll(): Promise<DeviceCategory[]> {
        return DeviceCategoryRepository.find();
    }

    async findOne(id: number): Promise<DeviceCategory | null> {
        return DeviceCategoryRepository.findOneBy({ id })
    }

    async update(id: number, dto: UpdateDeviceCategoryDto): Promise<DeviceCategory | null> {
        const device = await DeviceCategoryRepository.findOneBy({ id });
        if (!device) return null;

        Object.assign(device, dto);
        return DeviceCategoryRepository.save(device);
    }

    async remove(id: number): Promise<boolean> {
        const result = await DeviceCategoryRepository.delete(id);
        return result.affected !== undefined && (result.affected ?? 0) > 0;
    }
}