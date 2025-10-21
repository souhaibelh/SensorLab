import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn, OneToMany,
} from "typeorm";
import {DeviceType} from "./device-type.entity";

@Entity({ name: "device_category" })
export class DeviceCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "varchar", length: 255 })
    icon: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @CreateDateColumn({ name: "createdAt", type: "timestamp", nullable: false })
    created_at: Date;

    @OneToMany(() => DeviceType, (type) => type.category_id)
    types: DeviceType[];
}