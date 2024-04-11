interface IRoll {
  id: number
  dice1: number
  dice2: number
  isWinner: boolean
}
interface IPlayer {
  id: number
  name: string
  createdAt: Date
}

interface IRollDice {
  id: number
  dice1: number
  dice2: number
  isWinner: boolean
  playerId: number
}
interface IPlayerWithRolls {
  id: number
  name: string
  rolls: IRoll[]
}

interface IrouterPlayer {
  createPlayerUseCase: (name: string) => void
  getAllPlayersUseCase: (name: string) => void
  renamePlayerUseCase: (name: string, playerId: number) => Promise<IPlayer>
}
interface IrouterGame {
  // newRollDice: (playerId: number) => void
  rollDiceUseCase: (playerId: number) => Promise<IRollDice | null>
  deleteRollUseCase: (playerId: number) => void
  getRollUseCase: (playerId: number) => void
}
interface IrouterRanking {
  getAllRanking: () => void
  getLosersRanking: () => void
  getWinnersRanking: () => void
}

export {
  IPlayer,
  IRollDice,
  IrouterGame,
  IrouterPlayer,
  IrouterRanking,
  datos,
  IPlayerWithRolls,
}
