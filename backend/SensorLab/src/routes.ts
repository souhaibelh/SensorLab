import { Router } from "express";
import deviceRoutes from "./modules/devices/device.routes";
import deviceTypeRoutes from "./modules/device-type/device-type.routes"
export const routes = Router();

routes.use("/device", deviceRoutes);
routes.use("/device-type", deviceTypeRoutes);