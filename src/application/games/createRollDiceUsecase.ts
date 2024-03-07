import { RollDice } from "../../domain/entities/game"
import { RollDiceRpository } from "../../domain/usecases/rollDiceRepository"

export interface RollDice {
    dice1: number;
    dice2: number;
    result: number;
    winner: boolean;
}

export class RollDiceUsecase {
    constructor (private rollDiceRepository: RollDiceRepository) {}

    public asyn rollDice(playerId: number):
    Promise<void> {
        const rollResult = this.rollDiceInternally();
        await this.saveRollResult(rollResult, playerId);
    }
    private rollDiceInternally(): DiceRollResult {
        const dice1 = Math.floor(Math.random() * 6) +1
        const dice2 = Math.floor(Math.random() * 6) +1
        const result = dice1 + dice2
        const winner = result === 7
        return { dice1, dice2, result, winner}
    }
}