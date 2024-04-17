import { IrankingRepository } from "../../domain/intefaces/rankingRepository"
import { PrismaClient } from "../../../prisma/generated/client"
import { IPlayerWithRolls } from "../../domain/entities/types"

export class RankingRepository implements IrankingRepository {
  prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }

  async getAllPlayersAndRolls(): Promise<IPlayerWithRolls[]> {
    return await this.prisma.player.findMany({
      include: {
        rolls: true,
      },
    })
  }

  async getAllPlayers(): Promise<IPlayerWithRolls[]> {
    return await this.prisma.player.findMany({
      include: {
        rolls: true,
      },
    })
  }
}
