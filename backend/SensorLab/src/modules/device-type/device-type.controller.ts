import { Request, Response } from "express";
import { DeviceTypeService} from "./device.service";
import { validateOrReject } from "class-validator"
import { plainToInstance } from "class-transformer";
import { CreateDeviceTypeDto } from "./dto/create-device-type.dto";
import { UpdateDeviceTypeDto } from "./dto/update-device-type.dto";

const devicesTypeService = new DeviceTypeService();

export class DeviceTypeController {
    async create(req: Request, res: Response) {
        try {
            const dto = plainToInstance(CreateDeviceTypeDto, req.body);
            await validateOrReject(dto);
            const device = await devicesTypeService.create(dto);
            res.status(201).json(device);
        } catch (error) {
            res.status(400).json({ message: "Invalid input", error });
        }
    }

    async findAll(req: Request, res: Response) {
        const devices = await devicesTypeService.findAll();
        res.json(devices);
    }

    async findOne(req: Request, res: Response) {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid input" });
        }
        const device = await devicesTypeService.findOne(id);
        if (!device) return res.status(404).json({ message: "Device type not found" });
        res.json(device);
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ message: "Invalid input" });
            }
            const dto = plainToInstance(UpdateDeviceTypeDto, req.body);
            await validateOrReject(dto);
            const device = await devicesTypeService.update(id, dto);
            if (!device) return res.status(404).json({ message: "Device type not found" });
            res.json(device);
        } catch (error) {
            res.status(400).json({ message: "Invalid input", error })
        }
    }

    async remove(req: Request, res: Response) {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid input" });
        }

        const result = await devicesTypeService.remove(id);
        if (!result) {
            return res.status(404).json({ message: "Device type not found" });
        }

        res.status(204).send();
    }
}