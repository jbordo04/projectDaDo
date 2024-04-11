import { IrouterPlayer, datos, IPlayer } from "../../domain/entities/types"
import { IPlayerRepository } from "../../domain/intefaces/playerRepository"
export class App_Player implements IrouterPlayer {
  constructor(private readonly app_repository: IPlayerRepository) {}

  // async checkPlayer(name: string): Promise<void> {
  //   const result = await this.app_repository.checkPlayer(name)
  //   return result
  // }

  async createPlayerUseCase(name: string): Promise<void> {
    const result = await this.app_repository.createPlayer(name)
    return result
  }

  async getAllPlayersUseCase(data: datos): Promise<void> {
    const result = await this.app_repository.putPlayerName(data)
    console.log("Cambiado el nombre")
    return result
  }

  async renamePlayerUseCase(name: string, playerId: number): Promise<void> {
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
