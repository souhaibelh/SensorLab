import { Request, Response } from "express";
import { DeviceCategoryService } from "./device-category.service";
import { validateOrReject } from "class-validator"
import { plainToInstance } from "class-transformer";
import { CreateDeviceCategoryDto } from "./dto/create-device-category.dto";
import { UpdateDeviceCategoryDto } from "./dto/update-device-category.dto";
import {BaseController} from "../../core/base-controller";

const devicesCategoryService = new DeviceCategoryService();

export class DeviceCategoryController extends BaseController<DeviceCategoryService> {
    constructor() {
        super(devicesCategoryService);
    }

    async create(req: Request, res: Response) {
        try {
            const dto = plainToInstance(CreateDeviceCategoryDto, req.body);
            await validateOrReject(dto);
            const device = await devicesCategoryService.create(dto);
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
            const dto = plainToInstance(UpdateDeviceCategoryDto, req.body);
            await validateOrReject(dto);
            const device = await devicesCategoryService.update(id, dto);
            if (!device) return res.status(404).json({ message: "Device category not found" });
            res.json(device);
        } catch (error) {
            res.status(400).json({ message: "Invalid input", error })
        }
    }
}