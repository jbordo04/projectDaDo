import { IgameRepository } from "../../domain/intefaces/gameRepository"
import { PrismaClient } from "../../../prisma/generated/client"
import { IPlayer, IRollDice } from "../../domain/entities/types"

export class GameRepository implements IgameRepository {
  prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }
  async rollDice(
    dice1: number,
    dice2: number,
    is_winner: boolean,
    playerId: number
  ): Promise<IRollDice | null> {
    return await this.prisma.roll.create({
      data: {
        dice1: dice1,
        dice2: dice2,
        is_winner: is_winner,
        player_id: playerId,
      },
    })
  }

  async getRollsById(playerId: number): Promise<IRollDice[]> {
    return await this.prisma.roll.findMany({
      where: {
        player_id: playerId,
      },
      orderBy: {
        created_at: "desc",
      },
    })
  }

  async deleteRollsById(playerId: number): Promise<void> {
    await this.prisma.roll.deleteMany({
      where: {
        id: playerId,
      },
    })
  }

  async getPlayerById(playerId: number): Promise<IPlayer | null> {
    return await this.prisma.player.findFirst({
      where: {
        id: playerId,
      },
    })
  }
}
