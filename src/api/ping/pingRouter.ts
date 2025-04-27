import { ServiceResponse } from "@/common/models/serviceResponse";
import express, { type Request, type Response, type Router } from "express";

export const pingRouter: Router = express.Router();

pingRouter.get("/", (_req: Request, res: Response) => {
  const serviceResponse = ServiceResponse.success("pong", null);

  res.status(serviceResponse.statusCode).send(serviceResponse);
});
