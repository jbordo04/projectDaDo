import { App_Player } from "../application/usecases/playerUsecase"
import { App_Games } from "../application/usecases/gameUsecase"
import { App_Ranking } from "../application/usecases/rankingUsecase"

import { PlayerController } from "./controllers/playerControllers"
import { GameController } from "./controllers/gamesControllers"
import { RankingController } from "./controllers/rankingControllers"

import { PlayerRepository } from "./repositories/player-repository"
import { GameRepository } from "./repositories/game-repository"
import { RankingRepository } from "./repositories/ranking-repository"

export const playerRepository = new PlayerRepository()
export const gameRepository = new GameRepository()
export const rankingRepository = new RankingRepository()

//
export const Appli_player = new App_Player(playerRepository)
export const Appli_game = new App_Games(gameRepository)
export const Appli_ranking = new App_Ranking(rankingRepository)

//Aixo es el que es relaciona amb cada ruta, que s'injecta la estructura de la appplication pertinent
export const playerController = new PlayerController(Appli_player)
export const gameController = new GameController(Appli_game)
export const rankingController = new RankingController(Appli_ranking)
