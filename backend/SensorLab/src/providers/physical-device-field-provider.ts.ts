import { AppDataSource } from "../config/database.config";
import { InputProvider } from "./base";
import { PhysicalDeviceField } from "../entities/physical-device-field.entity";

export class PhysicalDeviceInputProvider implements InputProvider {
    constructor(private deviceFieldId: number) {}

    async getValue(): Promise<number> {
        const repo = AppDataSource.getRepository(PhysicalDeviceField);

        const field = await repo.findOne({
            where: { id: this.deviceFieldId },
            select: ["id", "name", "value", "timestamp"],
        });

        if (!field) {
            throw new Error(`Physical device field with ID ${this.deviceFieldId} not found`);
        }

        const value = Number(field.value);
        if (Number.isNaN(value)) {
            throw new Error(`Invalid numeric value for field ID ${this.deviceFieldId}`);
        }
        return value;
    }
}
