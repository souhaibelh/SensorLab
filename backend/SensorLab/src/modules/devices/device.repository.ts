import { AppDataSource } from "../../config/database.config"
import { Device } from "../../entities/device.entity"

export const DeviceRepository = AppDataSource.getRepository(Device);