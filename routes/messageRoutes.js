import { Router } from "express";
import { sendMessageController } from "../controllers/messageController.js";

const router = Router();

router.post("/send", sendMessageController);

export default router;
