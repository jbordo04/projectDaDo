import { IrouterGame } from "../../domain/entities/types"
import { IgameRepository } from "../../domain/usecases/gameRepository"

export class App_Games implements IrouterGame {
  constructor(private readonly app_repository: IgameRepository) {}

  async newRollDice(id: number) {
    const newRollDice = await this.app_repository.newRollDice(id)
    console.log("La tirada ha sido realizada")
    return newRollDice
  }
  async deleteRollDice(id: number) {
    const deleteRollDice = await this.app_repository.deleteRollDice(id)
    console.log("La tirada ha sido borrada")
    return deleteRollDice
  }
  async getRollDiceList(id: number) {
    const getRollDiceList = await this.app_repository.getRollDiceList(id)
    console.log("La lista de tiradas ha sido obtenida")
    return getRollDiceList
  }
}
