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
      name: string;
      image?: string;
    }
  }
}

export const authGoogleRouter: Router = Router();

// Change from POST to GET for initiating OAuth flow via browser navigation
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
    if (req.user) {
      const token = generateJwt(req.user);
      res.cookie("x-auth-token", token);
      res.redirect(env.CLIENT_URL);
    } else {
      res.redirect(`${env.CLIENT_URL}/login`);
    }
  }
);
