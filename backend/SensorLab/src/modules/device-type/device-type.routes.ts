import { DeviceTypeController } from "./device-type.controller";
import { createCrudRoutes } from "../../core/base-router";

export default createCrudRoutes(new DeviceTypeController());