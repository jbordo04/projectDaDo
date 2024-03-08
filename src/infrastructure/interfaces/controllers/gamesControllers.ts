import { Request, Response } from "express"

import { RollDice } from "../../../domain/entities/game" // Ruta per a RollDice
import { RollDiceRepositoryImpl } from "../../database/rollDiceRepositoryImpl" // Ruta per a RollDiceRepositoryImpl

import { CreateRollDiceUsecase } from "../../../application/games/createRollDiceUsecase" // Ruta per a CreateRollDiceUsecase
import { DeleteRollDiceUsecase } from "../../../application/games/deleteRollDiceUsecase" // Ruta per a DeleteRollDiceUsecase
import { GetRollDiceListUsecase } from "../../../application/games/getRollDiceListUsecase" // Ruta per a GetRollDiceListUsecase
import { IgameRepository } from "../../../domain/usecases/gameRepository"

// Per a interactuar amb la capa de dades. Es passa a cada cas d'ús com a dependència.
const rollDiceRepository = new RollDiceRepositoryImpl()
// Els casos d'us es creen utilitzant el repositori anteriorment creat. Això permet que interactuïn amb el repositori quan sigui necessari.
const createRollDiceUsecase = new CreateRollDiceUsecase(rollDiceRepository)
const deleteRollDiceUsecase = new DeleteRollDiceUsecase(rollDiceRepository)
const getRollDiceUsecase = new GetRollDiceListUsecase(rollDiceRepository)

export class GameController {
  constructor(private readonly app_repository: IgameRepository) {}

  async newRollDice(req: Request, res: Response) {
    const newRollDice = new RollDice()
    const createdRollDice = createRollDiceUsecase.execute(newRollDice)
    res.status(201).json(createdRollDice)
  }

  async getRollDiceList(req: Request, res: Response) {
    const rollDiceList = getRollDiceUsecase.executeGetAll()
    res.status(200).json(rollDiceList)
  }

  async deleteRollDice(req: Request, res: Response) {
    const rollDiceId: string = req.params.id
    try {
      await deleteRollDiceUsecase.execute(rollDiceId) // Esperar l'execució i gestionar errors
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ error: "Internal server error" })
    }
  }
}
