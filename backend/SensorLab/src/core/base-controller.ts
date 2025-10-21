import { Request, Response } from "express";

export abstract class BaseController<TService> {
    protected service: TService;

    constructor(service: TService) {
        this.service = service;
    }

    async create(req: Request, res: Response) {
        try {
            const result = await (this.service as any).create(req.body);
            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const result = await (this.service as any).findAll();
            res.json(result);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const result = await (this.service as any).findOne(id);
            if (!result) return res.status(404).json({ message: "Not found" });
            res.json(result);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const result = await (this.service as any).update(id, req.body);
            if (!result) return res.status(404).json({ message: "Not found" });
            res.json(result);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const ok = await (this.service as any).remove(id);
            if (!ok) return res.status(404).json({ message: "Not found" });
            res.status(204).send();
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }
}