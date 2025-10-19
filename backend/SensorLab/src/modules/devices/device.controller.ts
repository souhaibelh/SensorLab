import { Request, Response } from "express";
import { DevicesService } from "./devices.service";
import { validateOrReject } from "class-validator"
import { plainToInstance } from "class-transformer";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";

const devicesService = new DevicesService();

export class DevicesController {
    async create(req: Request, res: Response) {
        try {
            const dto = plainToInstance(CreateDeviceDto, req.body);
            await validateOrReject(dto);
            const device = await devicesService.create(dto);
            res.status(201).json(device);
        } catch (error) {
            res.status(400).json({ message: "Invalid input", error });
        }
    }

    async findAll(req: Request, res: Response) {
        const devices = await devicesService.findAll();
        res.json(devices);
    }

    async findOne(req: Request, res: Response) {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid input" });
        }
        const device = await devicesService.findOne(id);
        if (!device) return res.status(404).json({ message: "Device not found" });
        res.json(device);
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ message: "Invalid input" });
            }
            const dto = plainToInstance(UpdateDeviceDto, req.body);
            await validateOrReject(dto);
            const device = await devicesService.update(id, dto);
            if (!device) return res.status(404).json({ message: "Device not found" });
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

        const result = await devicesService.remove(id);
        if (!result) {
            return res.status(404).json({ message: "Device not found" });
        }

        res.status(204).send();
    }
}