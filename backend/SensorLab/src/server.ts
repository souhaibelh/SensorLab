import "reflect-metadata"
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database.config";
import { routes } from "./routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.APP_PORT || 5000;

AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("Database connection error:", err));