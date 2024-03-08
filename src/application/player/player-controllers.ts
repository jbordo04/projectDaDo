import { IrouterPlayer, datos, Iplayer } from "../../domain/entities/types"
import { IplayerRepository } from "../../domain/usecases/playerRepository"

export class App_Player implements IrouterPlayer {
  constructor(private readonly app_repository: IplayerRepository) {}

  async createPlayer(data: Iplayer): Promise<void> {
    const result = await this.app_repository.createPlayer(data)
    return result
  }

  async putPlayerName(data: datos): Promise<void> {
    const result = await this.app_repository.putPlayerName(
      data.id,
      data.new_name
    )
    console.log("Cambiado el nombre")
    return result
  }

  async getPlayersList(): Promise<void> {
    const result = await this.app_repository.getPlayersList()
    return result
  }
}
