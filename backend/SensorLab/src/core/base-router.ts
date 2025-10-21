import { Router } from "express";

export function createCrudRoutes(controller: any): Router {
    const router = Router();

    router.post("/", controller.create.bind(controller));
    router.get("/", controller.findAll.bind(controller));
    router.get("/:id", controller.findOne.bind(controller));
    router.patch("/:id", controller.update.bind(controller));
    router.delete("/:id", controller.remove.bind(controller));

    return router;
}
