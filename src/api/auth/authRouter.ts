import { Router } from "express";
import { authGoogleRouter } from "./google/authGoogleRouter";

export const authRouter = Router();

authRouter.use("/google", authGoogleRouter);

authRouter.post("/logout", (req, res) => {
  res.clearCookie("x-auth-token");
  res.status(200).json({ message: "Logged out successfully" });
});
