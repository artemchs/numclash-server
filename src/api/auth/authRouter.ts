import { Router } from "express";
import { authGoogleRouter } from "./google/authGoogleRouter";

export const authRouter = Router();

authRouter.use("/google", authGoogleRouter);
