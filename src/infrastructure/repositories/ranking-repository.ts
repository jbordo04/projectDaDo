import { IrankingRepository } from "../../domain/intefaces/rankingRepository"

export class RankingRepository implements IrankingRepository {
  async getAllRanking() {}
  async getLosersRanking() {}
  async getWinnersRanking() {}
}
