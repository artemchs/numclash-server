import jwt from "jsonwebtoken";
import { env } from "./envConfig";

export function generateJwt(user: Express.User) {
  const token = jwt.sign(user, env.JWT_SECRET, {
    expiresIn: "12h",
  });
  return token;
}
