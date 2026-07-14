import express, { json } from "express";
import dontenv from "dotenv";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import messageRoute from "./routes/messageRoutes.js";
import connectDB from "./config/db.js";
dontenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/message", messageRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
