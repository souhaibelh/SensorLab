import { DeviceCategoryController } from "./device-category.controller";
import { createCrudRoutes } from "../../core/base-router";

export default createCrudRoutes(new DeviceCategoryController());