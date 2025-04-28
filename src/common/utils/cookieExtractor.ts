import type { Request } from "express";

export const cookieExtractor = (req: Request): string | null => {
  let token = null;
  if (req?.cookies) {
    token = req.cookies["x-auth-token"];
  }
  return token;
};
