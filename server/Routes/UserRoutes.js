import express from "express";
import verifyToken from "../Middleware/authenticate.js";
import { login, Register } from "../Controllers/UserController.js";
import {
  RetrieveUrl,
  Shortener,
} from "../Controllers/UrlshortenerController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", login);

router.post("/shortener", verifyToken, Shortener);
router.get("/url", verifyToken, RetrieveUrl);

export default router;
