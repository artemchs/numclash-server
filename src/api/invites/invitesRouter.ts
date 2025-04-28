import { prismaClient } from "@/common/lib/prismaClient";
import { requireJwtAuth } from "@/common/middleware/requireJwtAuth";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { sendToUser } from "@/websocketServer";
import { Router } from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { getUserInvites } from "./services/getUserInvites";

export const invitesRouter: Router = Router();

invitesRouter.get("/", requireJwtAuth, async (req, res) => {
  const userId = req.user?.id;

  if (!userId) return;

  const invites = await getUserInvites(userId);

  const response = ServiceResponse.success(
    "Invites retrieved successfully",
    invites
  );
  res.status(response.statusCode).json(response);
});

const acceptInviteBodySchema = z.object({
  inviteId: z.string(),
});

invitesRouter.post(
  "/accept",
  requireJwtAuth,
  validateRequest({ body: acceptInviteBodySchema }),
  async (req, res) => {
    const userId = req.user?.id;
    const { inviteId } = req.body;

    const invite = await prismaClient.invite.findUnique({
      where: { id: inviteId },
      include: {
        game: true,
      },
    });

    if (!invite) {
      const response = ServiceResponse.failure("Invite not found", 404);
      res.status(response.statusCode).json(response);
      return;
    }
    if (invite.toId !== userId) {
      const response = ServiceResponse.failure(
        "You are not authorized to accept this invite",
        403
      );
      res.status(response.statusCode).json(response);
      return;
    }
    if (invite.game.status !== "PENDING") {
      const response = ServiceResponse.failure(
        "Invite is not in a state that can be accepted",
        400
      );
      res.status(response.statusCode).json(response);
      return;
    }

    // Update the game status to "IN_PROGRESS"
    await prismaClient.game.update({
      where: { id: invite.game.id },
      data: { status: "IN_PROGRESS" },
    });

    const startGameMessage = {
      type: "START_GAME",
      gameId: invite.game.id,
    };
    const sentPlayer1 = sendToUser(invite.game.player1Id, startGameMessage);
    if (!sentPlayer1) {
      // Optional: Handle case where player 2 is not connected via WS
      // Could potentially delete the game or mark it differently
      console.warn(
        `Could not send invitation to user ${invite.game.player1Id}, not connected.`
      );
      // For now, we'll proceed but log a warning.
    }
    const sentPlayer2 = sendToUser(invite.game.player2Id, startGameMessage);
    if (!sentPlayer2) {
      // Optional: Handle case where player 2 is not connected via WS
      // Could potentially delete the game or mark it differently
      console.warn(
        `Could not send invitation to user ${invite.game.player2Id}, not connected.`
      );
      // For now, we'll proceed but log a warning.
    }

    const response = ServiceResponse.success(
      "Invite accepted successfully",
      invite
    );
    res.status(response.statusCode).json(response);
  }
);
