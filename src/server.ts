import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { pino } from "pino";
import cookieParser from "cookie-parser"; // Import cookie-parser
import errorHandler from "@/common/middleware/errorHandler";
import rateLimiter from "@/common/middleware/rateLimiter";
import requestLogger from "@/common/middleware/requestLogger";
import { env } from "@/common/utils/envConfig";
// Import strategies to register them with Passport
import "@/common/strategies/googleStrategy";
import "@/common/strategies/jwtStrategy";
import { pingRouter } from "./api/ping/pingRouter";
import { authRouter } from "./api/auth/authRouter";
import { usersRouter } from "./api/users/usersRouter";

const logger = pino({ name: "server start" });
const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(cookieParser()); // Use cookie-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Request logging
app.use(requestLogger);

// Routes
app.use("/ping", pingRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

// Error handlers
app.use(errorHandler());

export { app, logger };
