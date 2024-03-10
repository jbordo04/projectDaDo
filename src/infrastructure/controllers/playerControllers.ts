import { Request, Response } from "express"
import { App_Player } from "../../application/usecases/playerUsecase"
// import { IrouterPlayer } from "../../../domain/entities/types"

export class PlayerController {
  constructor(readonly appPlayer: App_Player) {}

  async createPlayer(req: Request, res: Response) {
    const name = req.body.data
    console.log("aqui", name)
    // Verifica si el nom ja existeix
    if (!name) return res.status(400).send("Error en la solicitud")

    await this.appPlayer.checkPlayer(name)
    // const result = await this.app_player.checkPlayer(name)
    // if (result == undefined)
    res.status(400).json({ error: "Aquest nom de jugador ja està registrat" })

    await this.appPlayer.createPlayer(name)
    res.status(200).send("Usuari creat")
  }
  async putPlayerName(req: Request, res: Response) {
    const id = Number(req.params.id)
    const name = req.body.data
    if (!id || !name) res.status(404).send("Error en la solicitud")
    await this.appPlayer.putPlayerName({ id: id, new_name: name })
    res.status(200).send("Actualizado")
  }

  async getPlayersList(req: Request, res: Response) {
    const players = await this.appPlayer.getPlayersList()
    res.status(200).send(players)
  }
}
