import { Iplayer } from "../entities/types"
import { datos } from "../entities/types"

export interface IplayerRepository {
  checkPlayer: (name: string) => void
  createPlayer: (name: string) => void
  putPlayerName: (data: datos) => void
  getPlayersList: () => void
}
