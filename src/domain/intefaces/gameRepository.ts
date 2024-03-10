export interface IgameRepository {
  newRollDice: (id: number) => Promise<void>
  deleteRollDice: (id: number) => Promise<void>
  getRollDiceList: (id: number) => Promise<void>
}
