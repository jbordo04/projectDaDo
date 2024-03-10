type datos = {
  id: number
  new_name: string
}
interface Iplayer {
  id: number
  name: string
  createdAt: Date
}

interface IrollDice {
  id: number
  dice1: number
  dice2: number
  result: number
  winner: boolean
}

interface IrouterPlayer {
  checkPlayer: (name: string) => void
  createPlayer: (name: string) => void
  putPlayerName: (data: datos) => void
  getPlayersList: () => void
}
interface IrouterGame {
  newRollDice: (id: number) => void
  deleteRollDice: (id: number) => void
  getRollDiceList: (id: number) => void
}
interface IrouterRanking {
  getAllRanking: () => void
  getLosersRanking: () => void
  getWinnersRanking: () => void
}

interface Igame<T extends IrollDice> {
  id: number
  hisotryPlays: T[]
  winRate: number
}

interface Igames {
  listLastPlays: () => number[]
  result: string
  winRate: number
}

interface Isystem {
  listPlayers: () => void
  winRateplayer: () => void
  winRateGlobal: () => number
}

export {
  Iplayer,
  IrollDice,
  Igame,
  Igames,
  Isystem,
  IrouterGame,
  IrouterPlayer,
  IrouterRanking,
  datos,
}
