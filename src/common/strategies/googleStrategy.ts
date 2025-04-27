import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { env } from "../utils/envConfig";
import { prismaClient } from "../lib/prismaClient";

const googleLogin = new GoogleStrategy(
  {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${env.SERVER_URL}${env.GOOGLE_CALLBACK_ROUTE}`,
    proxy: true,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const oldUser = await prismaClient.user.findUnique({
        where: {
          email: profile.email,
        },
      });

      if (oldUser) {
        return done(null, {
          id: oldUser.id,
          email: oldUser.email,
          name: oldUser.name,
          image: oldUser.image,
        });
      }
    } catch (err) {
      console.log(err);
    }

    try {
      const newUser = await prismaClient.user.create({
        data: {
          email: profile.email,
          name: profile.displayName,
          image: profile.picture,
        },
      });
      done(null, {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        image: newUser.image,
      });
    } catch (err) {
      console.log(err);
    }
  }
);

passport.use(googleLogin);
