import { AppDataSource } from "../../config/database.config"
import { DeviceCategory } from "../../entities/device-category";

export const DeviceCategoryRepository = AppDataSource.getRepository(DeviceCategory);