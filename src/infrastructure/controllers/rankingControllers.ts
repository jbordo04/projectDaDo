import { Request, Response } from "express"
import { App_Ranking } from "../../application/usecases/rankingUsecase"

export class RankingController {
  constructor(readonly app_ranking: App_Ranking) {}

  async getAllRanking(req: Request, res: Response): Promise<void> {
    const ranking = await this.app_ranking.getAllRanking()
    res.status(200).send(ranking)
  }

  async getLosersRanking(req: Request, res: Response): Promise<void> {
    const rankingLoser = await this.app_ranking.getLosersRanking()
    res.status(200).send(rankingLoser)
  }

  async getWinnersRanking(req: Request, res: Response): Promise<void> {
    const rankingWinners = await this.app_ranking.getWinnersRanking()
    res.status(200).send(rankingWinners)
  }
}
