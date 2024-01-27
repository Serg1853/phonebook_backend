import express from "express";
import { register } from "../controllers/usersControllers.js";
import validateBody from "../helpers/validateBody.js";
import { registerSchema } from "../schemas/userSchemas.js";

export const usersRouter = express.Router();

usersRouter.post("/signup", validateBody(registerSchema), register);

usersRouter.post("/login");

usersRouter.post("/logout");

usersRouter.get("/current");
