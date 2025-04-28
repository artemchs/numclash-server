import { prismaClient } from "@/common/lib/prismaClient";

export function getUserInvites(userId: string) {
  return prismaClient.invite.findMany({
    where: {
      toId: userId,
    },
    include: {
      from: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
