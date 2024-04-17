import express from "express"
import {
  playerController,
  rankingController,
  gameController,
} from "./dependencias"
import { authenticateMiddleware } from "../config/authenticate"

const router = express.Router()

router.post("/players", playerController.createPlayer.bind(playerController))

router.put(
  "/players/:id",
  authenticateMiddleware,
  playerController.renamePlayer.bind(playerController)
)

router.get("/players", playerController.getAllPlayers.bind(playerController))

router.post(
  "/games/:id",
  authenticateMiddleware,
  gameController.rollDice.bind(gameController)
)

router.delete("/games/:id", gameController.deleteRollsById.bind(gameController))

router.get("/games/:id", gameController.getRolls.bind(gameController))

router.get("/ranking", rankingController.getAllRankings.bind(rankingController))

router.get(
  "/ranking/loser",
  rankingController.getWorstPlayer.bind(rankingController)
)

router.get(
  "/ranking/winner",
  rankingController.getBestPlayer.bind(rankingController)
)

export { router }
