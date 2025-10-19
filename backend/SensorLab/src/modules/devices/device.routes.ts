import { Router } from "express";
import { DevicesController } from "./devices.controller";

const router = Router();
const controller = new DevicesController();

router.post("/", controller.create.bind(controller));
router.get("/", controller.findAll.bind(controller));
router.get("/:id", controller.findOne.bind(controller));
router.patch("/:id", controller.update.bind(controller));
router.delete("/:id", controller.remove.bind(controller));

export default router;