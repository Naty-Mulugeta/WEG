import { Router } from "express";
import { protectRoute } from "../middleware/protectRoute";
import { getMessages } from "../controllers/messageController";

const router=Router()

router.get("/chat/:chatId",protectRoute,getMessages)

export default router