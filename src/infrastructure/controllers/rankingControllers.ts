import { Request, Response } from "express"
import { App_Ranking } from "../../application/usecases/rankingUsecase"

export class RankingController {
  constructor(readonly app_ranking: App_Ranking) {}

  async getAllRankings(_req: Request, res: Response) {
    try {
      const ranking = await this.app_ranking.getAllRankingsUseCase()
      res.status(200).send(ranking)
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: "Error interno del servidor", error: error })
      }
    }
  }

  async getWorstPlayer(_req: Request, res: Response) {
    try {
      const worstPlayer = await this.app_ranking.getWorstPlayerUseCase()
      res.status(200).send(worstPlayer)
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: "Error interno del servidor", error: error })
      }
    }
  }

  async getBestPlayer(_req: Request, res: Response) {
    try {
      const bestPlayer = await this.app_ranking.getBestPlayerUseCase()
      res.status(200).send(bestPlayer)
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: "Error interno del servidor", error: error })
      }
    }
  }
}
