import { Request, Response } from "express"
import { App_Player } from "../../../application/player/playerUsecase"

export class PlayerController {
  constructor(readonly app_player: App_Player) {}

  async createPlayer(req: Request, res: Response) {
    const datos = req.body.data

    // Verifica si el nom ja existeix
    if (!datos) return res.status(400)
    else {
      const result = await this.app_player.createPlayer(datos)
      res.status(400).json({ error: "Aquest nom de jugador ja està registrat" })
    }
  }
  async putPlayerName(req: Request, res: Response) {
    const data = req.body.data
    await this.app_player.putPlayerName(data)
    res.status(200).send("Actualizado")
  }

  async getPlayersList(req: Request, res: Response) {
    const players = await this.app_player.getPlayersList()
    res.status(200).send(players)
  }
}
