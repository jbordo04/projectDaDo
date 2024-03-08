import { App_Player } from "../application/player/playerUsecase"
import { App_Games } from "../application/games/gameUsecase"
import { App_Ranking } from "../application/ranking/rankingUsecase"

import { PlayerController } from "./interfaces/controllers/playerControllers"
import { GameController } from "./interfaces/controllers/gamesControllers"
import { RankingController } from "./interfaces/controllers/rankingControllers"

import { InMemoryPlayerRepository } from "./in-memory-repository"
import { InMemoryGameRepository } from "./in-memory-repository"
import { InMemoryRankingRepository } from "./in-memory-repository"

export const inMemoryPlayerRepository = new InMemoryPlayerRepository()
export const inMemoryGameRepository = new InMemoryGameRepository()
export const inMemoryRankingRepository = new InMemoryRankingRepository()

//
export const app_player = new App_Player(inMemoryPlayerRepository)
export const app_game = new App_Games(inMemoryGameRepository)
export const app_ranking = new App_Ranking(inMemoryRankingRepository)

//Aixo es el que es relaciona amb cada ruta, que s'injecta la estructura de la appplication pertinent
export const playerController = new PlayerController(app_player)
export const gameController = new GameController(app_game)
export const rankingController = new RankingController(app_ranking)
