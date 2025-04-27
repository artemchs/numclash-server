import { env } from "@/common/utils/envConfig";
import { generateJwt } from "@/common/utils/generateJwt";
import { Router } from "express";
import passport from "passport";

// Augment the Express User interface
declare global {
  namespace Express {
    interface User {
      id: string;
      email: string;
    }
  }
}

export const authGoogleRouter = Router();

authGoogleRouter.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authGoogleRouter.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: false,
  }),
  (req, res) => {
    const id = req.user?.id;
    const email = req.user?.email;

    if (id && email) {
      const token = generateJwt(id, email);
      res.cookie("x-auth-token", token);
      res.redirect(env.CLIENT_URL);
    } else {
      res.redirect(`${env.CLIENT_URL}/login`);
    }
  }
);
