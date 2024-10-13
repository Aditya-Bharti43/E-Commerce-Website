import { Router } from "express";
import { signupController } from "../controllers/user.controller.js"
import { loginController } from "../controllers/user.controller.js";

const router = Router()

router.route("/signup").post(signupController)
router.route("/login").post(loginController)

export default router