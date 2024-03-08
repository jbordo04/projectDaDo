import { IrollDice } from "../../domain/entities/types"
import { RollDiceRpository } from "../../domain/usecases/gameRepository"

// export class RollDiceUsecase {
//     constructor (private rollDiceRepository: RollDiceRepository) {}

//     public asyn rollDice(playerId: number):
//     Promise<void> {
//         const rollResult = this.rollDiceInternally();
//         await this.saveRollResult(rollResult, playerId);
//     }
//     private rollDiceInternally(): IrollDice {
//         const dice1 = Math.floor(Math.random() * 6) +1
//         const dice2 = Math.floor(Math.random() * 6) +1
//         const result = dice1 + dice2
//         const winner = result === 7
//         return { dice1, dice2, result, winner}
//     }
// }
