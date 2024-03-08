import { App_Games } from "../application/games/game-controllers"
import { App_Player } from "../application/player/player-controllers"
import { App_Ranking } from "../application/ranking/ranking-controller"

import { PlayerController } from "./interfaces/controllers/playerControllers"
import { GameController } from "./interfaces/controllers/gamesControllers"
import { InMemoryPlayerRepository } from "./in-memory-repository"

export const inMemoryPlayerRepository = new InMemoryPlayerRepository()

export const app_player = new App_Player(inMemoryPlayerRepository)
export const app_game = new App_Games(inMemoryPlayerRepository)
export const app_ranking = new App_Ranking(inMemoryPlayerRep)

export const playerController = new PlayerController(app_player)
export const gameController = new GameController(app_game)
export const rankingController = new PlayerController(app_ranking)
