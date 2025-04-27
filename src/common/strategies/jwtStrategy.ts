import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { env } from "../utils/envConfig";
import passport from "passport";
import { prismaClient } from "../lib/prismaClient";
import { Request } from "express"; // Import Request type

// Custom extractor function to get the token from cookies
const cookieExtractor = (req: Request): string | null => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["x-auth-token"];
  }
  return token;
};

const jwtLogin = new JwtStrategy(
  {
    // Use the custom cookie extractor
    jwtFromRequest: cookieExtractor,
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
