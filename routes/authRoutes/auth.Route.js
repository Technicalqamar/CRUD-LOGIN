import express from "express";
import { registerUser } from "../../controllers/users.Controllers/user.Register.Controller.js";
import { loginUser } from "../../controllers/users.Controllers/user.Login.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;