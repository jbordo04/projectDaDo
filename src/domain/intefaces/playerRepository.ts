import { IPlayerWithRolls, IPlayer } from "../entities/types"
import { PrismaClient } from "../../../prisma/geneated/client"

export interface IplayerRepository {
  prisma: PrismaClient
  findPlayerByName(name: string): Promise<IPlayer | null>
  findPlayerByID(playerId: number): Promise<IPlayer | null>
  createPlayer(name: string): Promise<IPlayer>
  existingPlayer(id: number): Promise<IPlayer | null>
  existingName(name: string, playerId: number): Promise<IPlayer | null>
  updatePlayerName(name: string, playerId: number): Promise<IPlayer | null>
  getAllPlayersAndRolls(): Promise<IPlayerWithRolls[] | null>
}
