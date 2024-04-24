import {
  IrouterPlayer,
  IPlayer,
  IPlayerWithRolls,
} from "../../domain/entities/types"
import { PlayerRepository } from "../../infrastructure/repositories/player-repository"
export class App_Player implements IrouterPlayer {
  constructor(private readonly app_repository: PlayerRepository) {}

  async createPlayerUseCase(name: string): Promise<IPlayer | null> {
    console.log("createPlayerUseCase", name)
    const existingPlayer = await this.app_repository.findPlayerByName(name)

    if (!existingPlayer) {
      return await this.app_repository.createPlayer(name)
    } else {
      throw new Error("Ya existe un jugador con este nombre!")
    }
  }

  async getAllPlayersUseCase(): Promise<object | null> {
    const allPlayersAndRolls = await this.app_repository.getAllPlayersAndRolls()
    if (!allPlayersAndRolls) {
      return null
    }
    const playersWithSuccessPercentage = allPlayersAndRolls.map(
      (player: IPlayerWithRolls) => {
        const totalRolls = player.rolls.length
        const successfulRolls = player.rolls.filter(
          (roll) => roll.is_winner === true
        ).length

        const successPercentage = (successfulRolls / totalRolls) * 100

        return {
          id: player.id,
          name: player.name,
          successPercentage: successPercentage || "Sin partidas ganadas",
        }
      }
    )
    return playersWithSuccessPercentage
  }

  async renamePlayerUseCase(
    name: string,
    playerId: number
  ): Promise<IPlayer | null> {
    const existingPlayer = await this.app_repository.existingPlayer(playerId)

    if (!existingPlayer) {
      throw new Error("Jugador no encontrado")
    }
    const existingName = await this.app_repository.existingName(name, playerId)
    if (existingName) {
      throw new Error("Ya existe un jugador con este nombre!")
    }

    return await this.app_repository.updatePlayerName(name, playerId)
  }
}
