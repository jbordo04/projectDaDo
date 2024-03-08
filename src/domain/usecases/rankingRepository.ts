export interface IrankingRepository {
  getAllRanking: () => Promise<void>
  getLosersRanking: () => Promise<void>
  getWinnersRanking: () => Promise<void>
}
