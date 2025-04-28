import { requireJwtAuth } from "@/common/middleware/requireJwtAuth";
import { logger } from "@/server";
import { Router } from "express";

export const usersRouter: Router = Router();

usersRouter.get("/me", requireJwtAuth, (req, res) => {
  const user = req.user;

  if (user) {
    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        image: user.image,
        name: user.name,
      },
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});
