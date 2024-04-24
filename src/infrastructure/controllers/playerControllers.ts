import { Request, Response } from "express"
import { App_Player } from "../../application/usecases/playerUsecase"
import jwt from "jsonwebtoken"
export class PlayerController {
  constructor(readonly appPlayer: App_Player) {}

  async createPlayer(req: Request, res: Response) {
    try {
      const { name } = req.body
      // console.log("nombrePOST", typeof name)
      const newPlayer = await this.appPlayer.createPlayerUseCase(name)
      const newToken = jwt.sign(
        {
          id: newPlayer?.id,
          name: newPlayer?.name,
        },
        "secret",
        { expiresIn: "5m" }
      )

      return res.status(201).send({ player: newPlayer, token: newToken })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({ error: error.message })
      }
    }
  }

  async renamePlayer(req: Request, res: Response) {
    const token = req.headers.authorization?.split(" ")[1]

    try {
      if (!token) {
        throw new Error("Token no proporcionado")
      }
      jwt.verify(token, "secret")

      const playerId = Number(req.params.id)
      const { name } = req.body
      const renamePlayer = await this.appPlayer.renamePlayerUseCase(
        name,
        playerId
      )

      return res.status(201).send(renamePlayer)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).send({ error: error.message })
      }
    }
  }

  async getAllPlayers(_req: Request, res: Response) {
    try {
      console.log("hola")
      const allPlayers = await this.appPlayer.getAllPlayersUseCase()
      return res.status(200).send(allPlayers)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({ error: error.message })
      }
    }
  }
}
