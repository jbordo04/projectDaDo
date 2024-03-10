import { IrouterPlayer, datos, Iplayer } from "../../domain/entities/types"
import { IplayerRepository } from "../../domain/intefaces/playerRepository"

export class App_Player implements IrouterPlayer {
  constructor(private readonly app_repository: IplayerRepository) {}

  async checkPlayer(name: string): Promise<void> {
    const result = await this.app_repository.checkPlayer(name)
    return result
  }

  async createPlayer(name: string): Promise<void> {
    const result = await this.app_repository.createPlayer(name)
    return result
  }

  async putPlayerName(data: datos): Promise<void> {
    const result = await this.app_repository.putPlayerName(data)
    console.log("Cambiado el nombre")
    return result
  }

  async getPlayersList(): Promise<void> {
    const result = await this.app_repository.getPlayersList()
    return result
  }
}
