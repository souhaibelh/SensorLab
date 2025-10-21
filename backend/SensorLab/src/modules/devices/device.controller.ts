import { Request, Response } from "express";
import { DeviceService } from "./device.service";
import { validateOrReject } from "class-validator"
import { plainToInstance } from "class-transformer";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import {BaseController} from "../../core/base-controller";

const devicesService = new DeviceService();

export class DeviceController extends BaseController<DeviceService> {
    constructor() {
        super(devicesService);
    }

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
}