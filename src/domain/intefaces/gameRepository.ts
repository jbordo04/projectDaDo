import { PrismaClient } from "../../../prisma/generated/client"
import { IRollDice, IPlayer } from "../entities/types"

export interface IgameRepository {
  prisma: PrismaClient
  rollDice: (
    dice1: number,
    dice2: number,
    isWinner: boolean,
    playerId: number
  ) => Promise<IRollDice | null>
  getRollsById: (playerId: number) => Promise<IRollDice[] | null>
  deleteRollsById: (playerId: number) => Promise<void>
  getPlayerById: (playerId: number) => Promise<IPlayer | null>
}
