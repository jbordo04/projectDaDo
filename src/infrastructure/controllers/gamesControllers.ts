import { Request, Response } from "express"
import { App_Games } from "../../application/usecases/gameUsecase"

export class GameController {
  constructor(private readonly app_game: App_Games) {}

  async newRollDice(req: Request, res: Response) {
    try {
      const playerId = Number(req.params.id)

      const rollDiceResult = await this.app_game.rollDiceUseCase(playerId)

      res.status(201).send(rollDiceResult)
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error interno del servidor:", error: error })
    }
  }

  async getRollDiceList(req: Request, res: Response) {
    try {
      const playerId = Number(req.params.id)
      const playerRolls = await this.app_game.getRollUseCase(playerId)
      res.status(200).send(playerRolls)
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error interno del servidor:", error: error })
    }
  }

  async deleteRollDice(req: Request, res: Response) {
    const rollDiceId = Number(req.params.id)
    try {
      await this.app_game.deleteRollUseCase(rollDiceId) // Esperar l'execució i gestionar errors
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ error: "Internal server error" })
    }
  }
}
