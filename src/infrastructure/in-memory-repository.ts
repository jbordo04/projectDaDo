import { Iplayer } from "../domain/entities/types"
import { IgameRepository } from "../domain/usecases/gameRepository"
import { IplayerRepository } from "../domain/usecases/playerRepository"
import { IrankingRepository } from "../domain/usecases/rankingRepository"

//Aqui van las persistencias/consultas posibles de cada metodo
export class InMemoryPlayerRepository implements IplayerRepository {
  async createPlayer(data: Iplayer) {
    const name = data.name

    const existingPlayer = getPlayerUsecase.executeByName(name)
    if (existingPlayer) {
      return { error: "Aquest nom de jugador ja està registrat" }
    } else {
      //consulta datos
    }
  }
  async putPlayerName() {}
  async getPlayersList() {}
}

export class InMemoryGameRepository implements IgameRepository {
  async newRollDice(id: number) {}
  async deleteRollDice(id: number) {}
  async getRollDiceList(id: number) {}
}

export class InMemoryRankingRepository implements IrankingRepository {
  async getAllRanking() {}
  async getLosersRanking() {}
  async getWinnersRanking() {}
}
