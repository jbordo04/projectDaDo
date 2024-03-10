import { Request, Response } from "express"
import { App_Games } from "../../application/usecases/gameUsecase"

export class GameController {
  constructor(private readonly app_game: App_Games) {}

  async newRollDice(req: Request, res: Response) {
    // const createdRollDice = createRollDiceUsecase.execute(newRollDice)
    // res.status(201).json(createdRollDice)
  }

  async getRollDiceList(req: Request, res: Response) {
    // const rollDiceList = getRollDiceUsecase.executeGetAll()
    // res.status(200).json(rollDiceList)
  }

  async deleteRollDice(req: Request, res: Response) {
    const rollDiceId: string = req.params.id
    try {
      // await deleteRollDiceUsecase.execute(rollDiceId) // Esperar l'execució i gestionar errors
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ error: "Internal server error" })
    }
  }
}
