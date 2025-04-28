import { prismaClient } from "@/common/lib/prismaClient";
import { requireJwtAuth } from "@/common/middleware/requireJwtAuth";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { generateArithmeticsQuestion } from "@/common/utils/mathQuestions";
// Make sure GameStatus is imported correctly
import {
  GameStatus,
  MathQuestionStatus,
  MathQuestionType,
  type User,
} from "@/generated/prisma";
import { sendToUser } from "@/websocketServer";
import { Router } from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const MAX_ROUNDS = 3;

const gamesRouter: Router = Router();

// Define the schema for the request body directly
const createGameBodySchema = z.object({
  player2Email: z.string().email(),
  questionsType: z.nativeEnum(MathQuestionType),
});

gamesRouter.post(
  "/",
  requireJwtAuth, // Ensure user is authenticated
  // Pass an object with the 'body' key pointing to the body schema
  validateRequest({ body: createGameBodySchema }),
  async (req, res) => {
    const player1 = req.user as User; // User is attached by requireJwtAuth middleware
    // req.body is now validated against createGameBodySchema
    const { player2Email, questionsType } = req.body;
    const player1Id = player1.id;

    try {
      const player2 = await prismaClient.user.findUnique({
        where: { email: player2Email },
      });

      if (!player2) {
        const response = ServiceResponse.failure(
          "Opponent user not found.",
          404
        );
        res.status(response.statusCode).send(response);
        return;
      }

      if (player1Id === player2.id) {
        const response = ServiceResponse.failure(
          "Cannot start a game with yourself.",
          400
        );
        res.status(response.statusCode).send(response);
        return;
      }

      // 2. Create the game
      const newGame = await prismaClient.game.create({
        data: {
          player1Id: player1Id,
          player2Id: player2.id,
          status: GameStatus.PENDING, // Use Prisma.GameStatus
          questionsType: questionsType,
          startedAt: new Date(), // Set startedAt time now
        },
        include: {
          // Include player details if needed for the response or WS message
          player1: { select: { id: true, name: true } },
          player2: { select: { id: true, name: true } },
        },
      });

      // 3. Send invitation via WebSocket to player2
      const invite = await prismaClient.invite.create({
        data: {
          fromId: player1Id,
          toId: player2.id,
          gameId: newGame.id,
        },
      });

      const invitationMessage = {
        type: "GAME_INVITATION",
        payload: {
          id: invite.id,
          gameId: newGame.id,
          inviteId: invite.id,
          from: { id: player1.id, name: player1.name },
          questionsType: newGame.questionsType,
        },
      };
      const sent = sendToUser(player2.id, invitationMessage);
      if (!sent) {
        // Optional: Handle case where player 2 is not connected via WS
        // Could potentially delete the game or mark it differently
        console.warn(
          `Could not send invitation to user ${player2.id}, not connected.`
        );
        // For now, we'll proceed but log a warning.
      }

      const response = ServiceResponse.success(
        "Game created and invitation sent.",
        newGame,
        201
      );
      res.status(response.statusCode).send(response);
    } catch (error) {
      console.error("Error creating game:", error);
      const response = ServiceResponse.failure("Error creating game.", 500);
      res.status(response.statusCode).send(response);
    }
  }
);

gamesRouter.get("/:gameId", requireJwtAuth, async (req, res) => {
  const gameId = req.params.gameId;
  const userId = req.user?.id;

  try {
    const game = await prismaClient.game.findUnique({
      where: { id: gameId },
      include: {
        player1: { select: { id: true, name: true } },
        player2: { select: { id: true, name: true } },
        questions: true,
        winner: { select: { id: true, name: true } }, // Include winner details
      },
    });

    if (!game) {
      const response = ServiceResponse.failure("Game not found.", 404);
      res.status(response.statusCode).send(response);
      return;
    }

    if (game.player1Id !== userId && game.player2Id !== userId) {
      const response = ServiceResponse.failure(
        "You are not a participant in this game.",
        403
      );
      res.status(response.statusCode).send(response);
      return;
    }

    const response = ServiceResponse.success("Game fetched.", game);
    res.status(response.statusCode).send(response);
  } catch (error) {
    console.error("Error fetching game:", error);
    const response = ServiceResponse.failure("Error fetching game.", 500);
    res.status(response.statusCode).send(response);
  }
});

gamesRouter.get("/:gameId/question", requireJwtAuth, async (req, res) => {
  const gameId = req.params.gameId;
  const userId = req.user?.id;

  try {
    const game = await prismaClient.game.findUnique({
      where: { id: gameId },
      include: {
        player1: { select: { id: true, name: true } },
        player2: { select: { id: true, name: true } },
      },
    });

    if (!game) {
      const response = ServiceResponse.failure("Game not found.", 404);
      res.status(response.statusCode).send(response);
      return;
    }

    if (game.player1Id !== userId && game.player2Id !== userId) {
      const response = ServiceResponse.failure(
        "You are not a participant in this game.",
        403
      );
      res.status(response.statusCode).send(response);
      return;
    }

    let mathQuestion: string | null = null;
    let questionId: string | null = null;

    const question = await prismaClient.mathQuestion.findFirst({
      where: {
        gameId: game.id,
        playerId: userId,
        status: "NOT_ANSWERED",
      },
      orderBy: { createdAt: "asc" }, // Get the first unanswered question
    });

    if (!question) {
      const generatedQuestion = generateArithmeticsQuestion();

      const newQuestion = await prismaClient.mathQuestion.create({
        data: {
          gameId: game.id,
          playerId: userId,
          question: generatedQuestion.question,
          correctAnswer: generatedQuestion.answer.toString(),
        },
      });

      mathQuestion = newQuestion.question;
      questionId = newQuestion.id;
    } else {
      mathQuestion = question.question;
      questionId = question.id;
    }

    const response = ServiceResponse.success("Question fetched.", {
      question: mathQuestion,
      id: questionId,
    });
    res.status(response.statusCode).send(response);
  } catch (error) {
    console.error("Error fetching question:", error);
    const response = ServiceResponse.failure("Error fetching question.", 500);
    res.status(response.statusCode).send(response);
  }
});

const answerQuestionBodySchema = z.object({
  answer: z.string(),
});

gamesRouter.post(
  "/:gameId/question/:questionId/answer",
  requireJwtAuth,
  validateRequest({ body: answerQuestionBodySchema }),
  async (req, res) => {
    const gameId = req.params.gameId;
    const questionId = req.params.questionId;
    const userId = req.user?.id as string; // Assume user ID is always present due to requireJwtAuth
    const { answer } = req.body;
    const answerReceivedTime = new Date();

    try {
      // Wrap logic in try-catch
      const game = await prismaClient.game.findUnique({
        where: { id: gameId },
        include: {
          // Include questions to avoid refetching later if possible
          questions: {
            where: { status: MathQuestionStatus.ANSWERED }, // Fetch only answered questions
          },
        },
      });

      if (!game) {
        const response = ServiceResponse.failure("Game not found.", 404);
        res.status(response.statusCode).send(response);
        return;
      }

      if (
        game.status !== GameStatus.IN_PROGRESS &&
        game.status !== GameStatus.PENDING
      ) {
        // Allow answers only if game is pending (first move) or in progress
        const response = ServiceResponse.failure(
          "Game is already finished or not started.",
          400
        );
        res.status(response.statusCode).send(response);
        return;
      }

      if (game.player1Id !== userId && game.player2Id !== userId) {
        const response = ServiceResponse.failure(
          "You are not a participant in this game.",
          403
        );
        res.status(response.statusCode).send(response);
        return;
      }

      const mathQuestion = await prismaClient.mathQuestion.findUnique({
        where: {
          id: questionId,
          gameId: gameId, // Ensure question belongs to the game
        },
      });

      if (!mathQuestion) {
        const response = ServiceResponse.failure("Question not found.", 404);
        res.status(response.statusCode).send(response);
        return;
      }

      if (mathQuestion.status !== MathQuestionStatus.NOT_ANSWERED) {
        const response = ServiceResponse.failure(
          "Question has already been answered.",
          400
        );
        res.status(response.statusCode).send(response);
        return;
      }

      if (mathQuestion.playerId !== userId) {
        const response = ServiceResponse.failure(
          "You are not authorized to answer this question.",
          403
        );
        res.status(response.statusCode).send(response);
        return;
      }

      // Calculate response time
      const responseTimeMs =
        answerReceivedTime.getTime() - mathQuestion.createdAt.getTime();
      const isCorrect = mathQuestion.correctAnswer === answer;

      // Update the question
      await prismaClient.mathQuestion.update({
        where: {
          id: questionId,
        },
        data: {
          status: MathQuestionStatus.ANSWERED,
          answer,
          score: isCorrect ? 1 : 0,
          responseTimeMs: responseTimeMs,
        },
      });

      // Check if the game needs to be marked as IN_PROGRESS (if it was PENDING)
      if (game.status === GameStatus.PENDING) {
        await prismaClient.game.update({
          where: { id: gameId },
          data: { status: GameStatus.IN_PROGRESS },
        });
      }

      // Check game completion status
      const allQuestions = await prismaClient.mathQuestion.findMany({
        where: { gameId: game.id },
        select: {
          playerId: true,
          status: true,
          score: true,
          responseTimeMs: true,
        }, // Select necessary fields
      });

      const player1Answered = allQuestions.filter(
        (q) =>
          q.playerId === game.player1Id &&
          q.status === MathQuestionStatus.ANSWERED
      );
      const player2Answered = allQuestions.filter(
        (q) =>
          q.playerId === game.player2Id &&
          q.status === MathQuestionStatus.ANSWERED
      );

      const currentPlayerFinished =
        (userId === game.player1Id && player1Answered.length === MAX_ROUNDS) ||
        (userId === game.player2Id && player2Answered.length === MAX_ROUNDS);
      const opponentPlayerFinished =
        (userId === game.player1Id && player2Answered.length === MAX_ROUNDS) ||
        (userId === game.player2Id && player1Answered.length === MAX_ROUNDS);

      if (currentPlayerFinished && opponentPlayerFinished) {
        // Both players finished, determine winner
        const player1Score = player1Answered.reduce(
          (sum, q) => sum + q.score,
          0
        );
        const player2Score = player2Answered.reduce(
          (sum, q) => sum + q.score,
          0
        );
        const player1Time = player1Answered.reduce(
          (sum, q) => sum + (q.responseTimeMs ?? 0),
          0
        );
        const player2Time = player2Answered.reduce(
          (sum, q) => sum + (q.responseTimeMs ?? 0),
          0
        );

        let finalStatus: GameStatus;
        let winnerId: string | null = null;

        if (player1Score > player2Score) {
          finalStatus = GameStatus.PLAYER1_WON;
          winnerId = game.player1Id;
        } else if (player2Score > player1Score) {
          finalStatus = GameStatus.PLAYER2_WON;
          winnerId = game.player2Id;
        } else {
          // Scores are equal, compare time
          if (player1Time < player2Time) {
            finalStatus = GameStatus.PLAYER1_WON;
            winnerId = game.player1Id;
          } else if (player2Time < player1Time) {
            finalStatus = GameStatus.PLAYER2_WON;
            winnerId = game.player2Id;
          } else {
            finalStatus = GameStatus.DRAW; // Scores and times are equal
          }
        }

        // Update game status
        const finishedGame = await prismaClient.game.update({
          where: { id: gameId },
          data: {
            status: finalStatus,
            winnerId: winnerId,
            finishedAt: new Date(),
          },
          include: {
            // Include players for notification payload
            player1: { select: { id: true, name: true } },
            player2: { select: { id: true, name: true } },
            winner: { select: { id: true, name: true } },
          },
        });

        // Notify both players
        const resultPayload = {
          gameId: finishedGame.id,
          status: finishedGame.status,
          winner: finishedGame.winner
            ? { id: finishedGame.winner.id, name: finishedGame.winner.name }
            : null,
          player1: {
            id: finishedGame.player1.id,
            name: finishedGame.player1.name,
            score: player1Score,
            time: player1Time,
          },
          player2: {
            id: finishedGame.player2.id,
            name: finishedGame.player2.name,
            score: player2Score,
            time: player2Time,
          },
        };

        sendToUser(game.player1Id, {
          type: "GAME_FINISHED",
          payload: resultPayload,
        });
        sendToUser(game.player2Id, {
          type: "GAME_FINISHED",
          payload: resultPayload,
        });

        const response = ServiceResponse.success(
          "Game finished.",
          resultPayload
        );
        res.status(response.statusCode).send(response);
      } else if (currentPlayerFinished && !opponentPlayerFinished) {
        // Current player finished, opponent hasn't
        const response = ServiceResponse.success(
          "Answer submitted. Waiting for opponent to finish.",
          { roundFinished: true, gameFinished: false }
        );
        res.status(response.statusCode).send(response);
      } else {
        // Game continues
        const response = ServiceResponse.success(
          "Answer submitted successfully.",
          { roundFinished: false, gameFinished: false }
        );
        res.status(response.statusCode).send(response);
      }
    } catch (error) {
      console.error("Error processing answer:", error);
      const response = ServiceResponse.failure("Error processing answer.", 500);
      res.status(response.statusCode).send(response);
    }
  }
);

export { gamesRouter };
