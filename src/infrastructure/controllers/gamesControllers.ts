import { Request, Response } from "express"
import { App_Games } from "../../application/usecases/gameUsecase"
import jwt from "jsonwebtoken"

export class GameController {
  constructor(private readonly app_game: App_Games) {}

  async rollDice(req: Request, res: Response) {
    const token = req.headers.authorization?.split(" ")[1]

    try {
      if (!token) {
        throw new Error("Token no proporcionado")
      }
      jwt.verify(token, "secret")
      const playerId = Number(req.params.id)
      const rollDiceResult = await this.app_game.rollDiceUseCase(playerId)

      res.status(201).send(rollDiceResult)
    } catch (error) {
      if (error instanceof Error) {
        return res
          .status(500)
          .send({ message: "Error interno del servidor:", error: error })
      }
    }
  }

  async deleteRollsById(req: Request, res: Response) {
    try {
      const playerId = Number(req.params.id)
      await this.app_game.deleteRollUseCase(playerId)
      res.status(200).send({ message: `Tiradas eliminadas exitosamente` })
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({
          message: "Error interno del servidor:",
          error: error.message,
        })
      }
    }
  }

  async getRolls(req: Request, res: Response) {
    try {
      const playerId = Number(req.params.id)
      const playerRolls = await this.app_game.getRollUseCase(playerId)
      res.status(201).send(playerRolls)
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .send({ message: "Error interno del servidor:", error: error })
      }
    }
  }
}
