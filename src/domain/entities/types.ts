interface IRoll {
  id: number
  dice1: number
  dice2: number
  is_winner: boolean
}
interface IPlayer {
  id: number
  name: string
  created_at: Date
}

interface IRollDice {
  id: number
  dice1: number
  dice2: number
  is_winner: boolean
  player_id: number
}
interface IPlayerWithRolls {
  id: number
  name: string
  rolls: IRoll[]
}

interface IrouterPlayer {
  createPlayerUseCase: (name: string) => Promise<IPlayer | null>
  getAllPlayersUseCase: (name: string) => Promise<object | null>
  renamePlayerUseCase: (
    name: string,
    playerId: number
  ) => Promise<IPlayer | null>
}
interface IrouterGame {
  // newRollDice: (playerId: number) => void
  rollDiceUseCase: (playerId: number) => Promise<IRollDice | null>
  deleteRollUseCase: (playerId: number) => void
  getRollUseCase: (playerId: number) => void
}
interface IrouterRanking {
  getAllRankingsUseCase: () => object
  getWorstPlayerUseCase: () => object
  getBestPlayerUseCase: () => object
}

export {
  IPlayer,
  IRollDice,
  IrouterGame,
  IrouterPlayer,
  IrouterRanking,
  IPlayerWithRolls,
}
