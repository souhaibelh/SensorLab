import { DeviceRepository } from "./device.repository";
import { Device } from "../../entities/device.entity"
import { CreateDeviceDto } from "./dto/create-device.dto"
import { UpdateDeviceDto } from "./dto/update-device.dto"

export class DeviceService {
    async create(dto : CreateDeviceDto) : Promise<Device> {
        const device = DeviceRepository.create(dto);
        return DeviceRepository.save(device);
    }

    async findAll(): Promise<Device[]> {
        return DeviceRepository.find();
    }

    async findOne(id: number): Promise<Device | null> {
        return DeviceRepository.findOneBy({ id })
    }

    async update(id: number, dto: UpdateDeviceDto): Promise<Device | null> {
        const device = await DeviceRepository.findOneBy({ id });
        if (!device) return null;

        Object.assign(device, dto);
        return DeviceRepository.save(device);
    }

    async remove(id: number): Promise<boolean> {
        const result = await DeviceRepository.delete(id);
        return result.affected !== undefined && (result.affected ?? 0) > 0;
    }
}