import { Iplayer } from "../entities/types"

export interface IplayerRepository {
  createPlayer: (data: Iplayer) => void
  putPlayerName: (id: number, new_name: string) => void
  getPlayersList: () => void
}
