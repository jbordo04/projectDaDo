import { IrouterRanking } from "../../domain/entities/types"
import { IrankingRepository } from "../../domain/usecases/rankingRepository"

export class App_Ranking implements IrouterRanking {
  constructor(private readonly app_repository: IrankingRepository) {}

  async getAllRanking(): Promise<void> {
    const ranking = await this.app_repository.getAllRanking()
    return ranking
  }
  async getLosersRanking(): Promise<void> {
    const rankingLoser = await this.app_repository.getLosersRanking()
    return rankingLoser
  }
  async getWinnersRanking(): Promise<void> {
    const rankingWinners = await this.app_repository.getWinnersRanking()
    return rankingWinners
  }
}
