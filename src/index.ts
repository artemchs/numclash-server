import { env } from "@/common/utils/envConfig";
import { app, logger } from "@/server";
import { initializeWebSocketServer } from "@/websocketServer"; // Import the initializer

const server = app.listen(env.PORT, () => {
  const { NODE_ENV, HOST, PORT } = env;
  logger.info(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
});

// Initialize WebSocket Server and attach it to the HTTP server
const wss = initializeWebSocketServer(server);

logger.info("WebSocket server initialized and attached.");

// Graceful shutdown handling (optional but recommended)
const signals = ["SIGINT", "SIGTERM", "SIGQUIT"];
for (const signal of signals) {
  process.on(signal, () => {
    logger.info(`Received ${signal}, shutting down gracefully...`);
    wss.close(() => {
      logger.info("WebSocket server closed.");
    });
    server.close(() => {
      logger.info("HTTP server closed.");
      // Close database connections if necessary
      // prismaClient.$disconnect(); // Uncomment if using Prisma client directly here
      process.exit(0);
    });
  });
}
