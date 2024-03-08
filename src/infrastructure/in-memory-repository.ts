import { Iplayer } from "../domain/entities/types"

export class InMemoryPlayerRepository {
  async createPlayer(data: Iplayer) {
    const name = data.name

    const existingPlayer = getPlayerUsecase.executeByName(name)
    if (existingPlayer) {
      return { error: "Aquest nom de jugador ja està registrat" }
    } else {
      // TODO
      //consulta datos
    }
  }
  async putPlayerName() {}
  async getPlayersList() {}
}
