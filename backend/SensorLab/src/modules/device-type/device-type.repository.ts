import { AppDataSource } from "../../config/database.config"
import {DeviceType} from "../../entities/device-type.entity";

export const DeviceTypeRepository = AppDataSource.getRepository(DeviceType);