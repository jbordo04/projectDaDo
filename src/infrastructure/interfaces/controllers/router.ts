import express from "express"
import {
  playerController,
  rankingController,
  gameController,
} from "../../dependencias"

export const routerDado = express.Router()

// Rutes per a players
routerDado.post("/players", playerController.createPlayer)
routerDado.put("/players/:id", playerController.putPlayerName)
routerDado.get("/players", playerController.getPlayersList)

// Rutes per a games
routerDado.post("/games/:id", gameController.newRollDice)
routerDado.delete("/games/:id", gameController.deleteRollDice)
routerDado.get("/games/:id", gameController.getRollDiceList)

// Rutes per a ranking
routerDado.get("/ranking", rankingController.getAllRanking)
routerDado.get("/ranking/loser", rankingController.getLosersRanking)
routerDado.get("/ranking/winner", rankingController.getWinnersRanking)
