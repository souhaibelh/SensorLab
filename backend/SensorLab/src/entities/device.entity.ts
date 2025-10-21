import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn, ManyToOne, JoinColumn
}
    from "typeorm";
import {DeviceCategory} from "./device-category";
import {DeviceType} from "./device-type.entity";

@Entity({ name: "device" })
export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "int" })
    type_id: number;

    @Column({ type: "tinyint", default: true })
    isActive: boolean;

    @UpdateDateColumn({ name: "lastUpdated", type: "timestamp", nullable: false })
    updated_at: Date;

    @CreateDateColumn({ name: "createdAt", type: "timestamp", nullable: false })
    create_at: Date;

    @ManyToOne(() => DeviceType, (deviceType) => deviceType.devices)
    @JoinColumn({ name: "type_id" })
    deviceType: DeviceType;
}