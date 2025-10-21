import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn, ManyToOne, JoinColumn, OneToMany,
} from "typeorm";
import {DeviceCategory} from "./device-category";
import {Device} from "./device.entity";

@Entity({ name: "device_type" })
export class DeviceType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "int" })
    category_id: number;

    @Column({ type: "text", nullable: true })
    description: string;

    @CreateDateColumn({ name: "createdAt", type: "timestamp", nullable: false })
    created_at: Date;

    @ManyToOne(() => DeviceCategory, (category) => category.types, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({ name: "category_id" })
    category: DeviceCategory;

    @OneToMany(() => Device, (device) => device.type_id)
    devices: Device[];
}