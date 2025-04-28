import type http from "node:http";
import { env } from "@/common/utils/envConfig";
import { logger } from "@/server"; // Assuming logger is exported from server.ts
import * as cookie from "cookie";
import jwt from "jsonwebtoken";
import { WebSocket, WebSocketServer } from "ws";

interface AuthenticatedWebSocket extends WebSocket {
  userId?: string;
}

// Map to store active connections: userId -> WebSocket
const userConnections = new Map<string, AuthenticatedWebSocket>();

function onSocketPreError(e: Error) {
  logger.error({ error: e }, "WebSocket pre-error");
}

function onSocketPostError(e: Error) {
  logger.error({ error: e }, "WebSocket post-error");
}

export function initializeWebSocketServer(
  server: http.Server
): WebSocketServer {
  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (req: http.IncomingMessage, socket, head) => {
    socket.on("error", onSocketPreError);

    // --- Perform Auth ---
    let userId: string | undefined;
    try {
      const cookies = req.headers.cookie;
      let token: string | undefined;

      if (cookies) {
        const parsedCookies = cookie.parse(cookies);
        token = parsedCookies["x-auth-token"]; // Assuming token is stored in 'x-auth-token' cookie
      }

      if (token) {
        const decoded = jwt.verify(token, env.JWT_SECRET) as { id: string };
        userId = decoded.id;
      }
    } catch (err) {
      logger.warn({ error: err }, "WebSocket authentication failed");
      // Optionally destroy socket if auth fails strictly
      // socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n'); // Fixed typo
      // socket.destroy();
      // return;
    }

    // --- Handle Connection ---
    wss.handleUpgrade(req, socket, head, (ws: AuthenticatedWebSocket) => {
      socket.removeListener("error", onSocketPreError);
      ws.on("error", onSocketPostError);

      if (userId) {
        ws.userId = userId;
        userConnections.set(userId, ws);
        logger.info(`WebSocket connected for user: ${userId}`);

        ws.on("close", () => {
          if (ws.userId) {
            userConnections.delete(ws.userId);
            logger.info(`WebSocket disconnected for user: ${ws.userId}`);
          }
        });

        ws.on("message", (message) => {
          // Handle incoming messages if needed
          logger.info(`Received WS message from ${ws.userId}: ${message}`);
          // Example: ws.send(`Echo: ${message}`);
        });

        // Send a confirmation message or initial state if needed
        ws.send(JSON.stringify({ type: "CONNECTION_ACK" }));
      } else {
        // Handle unauthenticated connection attempt after upgrade
        logger.warn(
          "WebSocket connection attempt without valid authentication."
        );
        ws.close(1008, "Authentication required"); // 1008: Policy Violation
      }
    });
  });

  return wss;
}

/**
 * Sends a message to a specific user via WebSocket if they are connected.
 * @param userId The ID of the user to send the message to.
 * @param message The message object to send (will be stringified).
 * @returns True if the user was connected and the message was sent, false otherwise.
 */
export function sendToUser(userId: string, message: object): boolean {
  const ws = userConnections.get(userId);
  if (ws && ws.readyState === WebSocket.OPEN) {
    try {
      ws.send(JSON.stringify(message));
      logger.info(
        `Sent WS message to user ${userId}: ${JSON.stringify(message)}`
      );
      return true;
    } catch (error) {
      logger.error({ error, userId }, "Failed to send WS message");
      return false;
    }
  }
  logger.warn(
    `User ${userId} not connected via WebSocket or connection not open.`
  );
  return false;
}

// Optional: Function to broadcast to all connected users
export function broadcast(message: object) {
  const stringifiedMessage = JSON.stringify(message);
  logger.info(`Broadcasting WS message: ${stringifiedMessage}`);
  for (const [userId, ws] of userConnections) {
    if (ws.readyState === WebSocket.OPEN) {
      try {
        ws.send(stringifiedMessage);
      } catch (error) {
        logger.error(
          { error, userId },
          "Failed to broadcast WS message to user"
        );
      }
    }
  }
}
