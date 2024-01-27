import express from "express";

export const usersRouter = express.Router();

usersRouter.post("/signup");

usersRouter.post("/login");

usersRouter.post("/logout");

usersRouter.get("/current");




