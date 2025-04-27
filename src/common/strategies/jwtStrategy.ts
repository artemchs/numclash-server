import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { env } from "../utils/envConfig";
import passport from "passport";
import { prismaClient } from "../lib/prismaClient";

const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromHeader("x-auth-token"),
    secretOrKey: env.JWT_SECRET,
  },
  async (payload, done) => {
    try {
      const user = await prismaClient.user.findUnique({
        where: {
          id: payload.id,
        },
      });

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      done(err, false);
    }
  }
);

passport.use(jwtLogin);
