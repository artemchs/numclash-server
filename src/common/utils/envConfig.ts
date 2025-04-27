import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  HOST: z.string().min(1).default("localhost"),

  PORT: z.coerce.number().int().positive().default(3000),

  SERVER_URL: z.string().url().default("http://localhost:3000"),

  CLIENT_URL: z.string().url().default("http://localhost:5173"),

  CORS_ORIGIN: z.string().default("http://localhost:3000"),

  COMMON_RATE_LIMIT_MAX_REQUESTS: z.coerce
    .number()
    .int()
    .positive()
    .default(1000),

  COMMON_RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(1000),

  DATABASE_URL: z.string().url().default(""),

  GOOGLE_CLIENT_ID: z.string().min(1).default(""),

  GOOGLE_CLIENT_SECRET: z.string().min(1).default(""),

  GOOGLE_CALLBACK_ROUTE: z.string().min(1).default(""),

  JWT_SECRET: z.string().min(1).default(""),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.format());
  throw new Error("Invalid environment variables");
}

export const env = {
  ...parsedEnv.data,
  isDevelopment: parsedEnv.data.NODE_ENV === "development",
  isProduction: parsedEnv.data.NODE_ENV === "production",
  isTest: parsedEnv.data.NODE_ENV === "test",
};
