import jwt from "jsonwebtoken";
import { env } from "./envConfig";

export function generateJwt(id: string, email: string) {
  const token = jwt.sign({ id, email }, env.JWT_SECRET, {
    expiresIn: "12h",
  });
  return token;
}
