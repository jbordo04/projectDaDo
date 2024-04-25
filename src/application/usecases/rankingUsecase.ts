import { IPlayerWithRolls, IrouterRanking } from "../../domain/entities/types"
import { RankingRepository } from "../../infrastructure/repositories/ranking-repository"

export class App_Ranking implements IrouterRanking {
  constructor(private readonly app_repository: RankingRepository) {}

  async getAllRankingsUseCase(): Promise<object> {
    const allPlayersAndPlays = await this.app_repository.getAllPlayersAndRolls()

    // Calcular el porcentaje de exito medio del conjunto de todos los jugadores
    const totalRollsAllPlayers = allPlayersAndPlays.reduce(
      (acc, cur) => acc + cur.rolls.length,
      0
    )

    const totalWins = allPlayersAndPlays
      .map(
        (player) =>
          player.rolls.filter((roll) => roll.is_winner === true).length
      )
      .reduce((acc, cur) => acc + cur, 0)

    const averageSuccessRate = (totalWins / totalRollsAllPlayers) * 100

    // Función para obtener el porcentaje de exito de un jugador
    const getSuccessRate = (player: IPlayerWithRolls) => {
      const totalRolls = player.rolls.length
      if (totalRolls === 0) return 0
      const wins = player.rolls.filter((roll) => roll.is_winner === true).length
      return (wins / totalRolls) * 100
    }

    // Ordenar la lista de jugadores por porcentaje de exito
    const sortedPlayersBySuccess = allPlayersAndPlays.sort(
      (a, b) => getSuccessRate(b) - getSuccessRate(a)
    )

    // Crear el ranking con la informacion necesaria
    const ranking = sortedPlayersBySuccess.map((player) => ({
      id: player.id,
      name: player.name,
      successRate: getSuccessRate(player),
    }))

    return { ranking, averageSuccessRate }
  }

  async getWorstPlayerUseCase(): Promise<object> {
    const allPlayersAndPlays = await this.app_repository.getAllPlayers()

    // Funcion para obtener el porcentaje de exito de un jugador
    const getSuccessRate = (player: IPlayerWithRolls) => {
      const totalRolls = player.rolls.length
      if (totalRolls === 0) return 0
      const wins = player.rolls.filter((roll) => roll.is_winner === true).length
      return (wins / totalRolls) * 100
    }

    // Jugador con peor porcentaje de exito
    const loserPlayer = allPlayersAndPlays.reduce((prev, cur) => {
      const prevSuccessRate = getSuccessRate(prev)
      const currentSuccessRate = getSuccessRate(cur)
      return prevSuccessRate < currentSuccessRate ? prev : cur
    })

    return {
      loser: {
        id: loserPlayer.id,
        name: loserPlayer.name,
        successRate: getSuccessRate(loserPlayer),
      },
    }
  }

  async getBestPlayerUseCase(): Promise<object> {
    const allPlayersAndPlays = await this.app_repository.getAllPlayers()

    // Funcion para obtener el porcentaje de exito de un jugador
    const getSuccessRate = (player: IPlayerWithRolls) => {
      const totalRolls = player.rolls.length
      if (totalRolls === 0) return 0
      const wins = player.rolls.filter((roll) => roll.is_winner === true).length
      return (wins / totalRolls) * 100
    }

    // Jugador con mejor porcentaje de exito
    const winnerPlayer = allPlayersAndPlays.reduce((prev, cur) => {
      const prevSuccessRate = getSuccessRate(prev)
      const currentSuccessRate = getSuccessRate(cur)
      return prevSuccessRate > currentSuccessRate ? prev : cur
    })

    return {
      winner: {
        id: winnerPlayer.id,
        name: winnerPlayer.name,
        successRate: getSuccessRate(winnerPlayer),
      },
    }
  }
}
