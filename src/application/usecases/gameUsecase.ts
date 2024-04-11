import { IrouterGame } from "../../domain/entities/types"
import { IgameRepository } from "../../domain/intefaces/gameRepository"

export class App_Games implements IrouterGame {
  constructor(private readonly app_repository: IgameRepository) {}

  async rollDiceUseCase(playerId: number) {
    // Realizar la tirada de dos dados
    const dice1 = Math.floor(Math.random() * 6) + 1
    const dice2 = Math.floor(Math.random() * 6) + 1
    const total = dice1 + dice2
    const win = total === 7

    // Guardar la tirada en la base de datos
    return await this.app_repository.rollDice(dice1, dice2, win, playerId)
  }

  async deleteRollUseCase(playerId: number) {
    const checkPlayer = await this.app_repository.getPlayerById(playerId)
    if (!checkPlayer) throw new Error("No existe este jugador")
    await this.app_repository.deleteRollsById(playerId)
  }

  async getRollUseCase(playerId: number) {
    return await this.app_repository.getRollsById(playerId)
  }
}
