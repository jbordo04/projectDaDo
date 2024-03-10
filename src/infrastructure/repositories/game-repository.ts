import { IgameRepository } from "../../domain/intefaces/gameRepository"

export class GameRepository implements IgameRepository {
  async newRollDice(id: number) {}
  async deleteRollDice(id: number) {}
  async getRollDiceList(id: number) {}
}
