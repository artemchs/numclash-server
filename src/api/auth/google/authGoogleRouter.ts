import { URL } from "node:url"; // Import URL
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
      const clientUrl = new URL(env.CLIENT_URL);
      const domain = clientUrl.hostname;

      res.cookie("x-auth-token", token, {
        domain: domain,
        httpOnly: true, // Prevent client-side script access
        secure: true,
        sameSite: "none", // Mitigate CSRF attacks
        path: "/", // Ensure cookie is accessible across the client domain
      });
      res.redirect(env.CLIENT_URL);
    } else {
      res.redirect(`${env.CLIENT_URL}/login`);
    }
  }
);
