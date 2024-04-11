import express from "express"
import {
  playerController,
  rankingController,
  gameController,
} from "./dependencias"

export const routerDado = express.Router()

routerDado.post("/players", playerController.createPlayer)
routerDado.put("/players/:id", playerController.renamePlayer)
routerDado.get("/players", playerController.getAllPlayers)

routerDado.post("/games/:id", gameController.rollDice)
routerDado.delete("/games/:id", gameController.deleteRollsById)
routerDado.get("/games/:id", gameController.getRolls)

routerDado.get("/ranking", rankingController.getAllRankings)
routerDado.get("/ranking/loser", rankingController.getWorstPlayer)
routerDado.get("/ranking/winner", rankingController.getBestPlayer)
