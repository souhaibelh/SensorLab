import { Request, Response } from "express";
import { DeviceTypeService} from "./device-type.service";
import { validateOrReject } from "class-validator"
import { plainToInstance } from "class-transformer";
import { CreateDeviceTypeDto } from "./dto/create-device-type.dto";
import { UpdateDeviceTypeDto } from "./dto/update-device-type.dto";
import {BaseController} from "../../core/base-controller";

const devicesTypeService = new DeviceTypeService();

export class DeviceTypeController extends BaseController<DeviceTypeService> {
    constructor() {
        super(devicesTypeService);
    }

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
}