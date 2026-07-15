import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import projectRoutes from "./routes/projectRoutes.js";
import messageRoute from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/message", messageRoute);

export default app;
