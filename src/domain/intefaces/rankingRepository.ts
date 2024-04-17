import { PrismaClient } from "../../../prisma/generated/client"
import { IPlayerWithRolls } from "../entities/types"
export interface IrankingRepository {
  prisma: PrismaClient
  getAllPlayersAndRolls(): Promise<IPlayerWithRolls[]>
  getAllPlayers(): Promise<IPlayerWithRolls[]>
}
