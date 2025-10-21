import { DeviceController } from "./device.controller";
import { createCrudRoutes } from "../../core/base-router"

export default createCrudRoutes(new DeviceController())