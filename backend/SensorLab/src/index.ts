import express, { Request, Response } from "express";
import "reflect-metadata";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("🚀 Hello from Node.js + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});