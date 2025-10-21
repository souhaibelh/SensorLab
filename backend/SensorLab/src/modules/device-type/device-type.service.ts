import { DeviceTypeRepository} from "./device-type.repository";
import { DeviceType} from "../../entities/device-type.entity";
import { CreateDeviceTypeDto } from "./dto/create-device-type.dto";
import { UpdateDeviceTypeDto} from "./dto/update-device-type.dto";

export class DeviceTypeService {
    async create(dto : CreateDeviceTypeDto) : Promise<DeviceType> {
        const device = DeviceTypeRepository.create(dto);
        return DeviceTypeRepository.save(device);
    }

    async findAll(): Promise<DeviceType[]> {
        return DeviceTypeRepository.find();
    }

    async findOne(id: number): Promise<DeviceType | null> {
        return DeviceTypeRepository.findOneBy({ id })
    }

    async update(id: number, dto: UpdateDeviceTypeDto): Promise<DeviceType | null> {
        const device = await DeviceTypeRepository.findOneBy({ id });
        if (!device) return null;

        Object.assign(device, dto);
        return DeviceTypeRepository.save(device);
    }

    async remove(id: number): Promise<boolean> {
        const result = await DeviceTypeRepository.delete(id);
        return result.affected !== undefined && (result.affected ?? 0) > 0;
    }
}