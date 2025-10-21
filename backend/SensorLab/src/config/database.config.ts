import "reflect-metadata"
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const isProd = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    logging: !isProd,
    entities: [path.join(__dirname, "..", "entities", "**", "*.entity.{ts,js}")],
    migrationsRun: false,
    migrations: [path.join(__dirname, "..", "database", "migrations", "*.{ts,js}")],
    subscribers: [],
    ssl: isProd ? {
        rejectUnauthorized: false,
    } : false,
})