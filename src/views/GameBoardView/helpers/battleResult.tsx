import { IStarship } from "../../../models/starships.models"
import { IScore, IBattleResult } from "../../../models/GameBoardView.models"

const battleResult = (score: IScore, cards: IStarship[], battleOption: "cost_in_credits" | "cargo_capacity" | "max_atmosphering_speed"): IBattleResult => {
    let newScore: IScore = score
    let battleResult: string = ""
    const firstCardValue: number = parseInt(cards[0][battleOption]) ? parseInt(cards[0][battleOption]) : 0
    const secondCardValue: number = parseInt(cards[1][battleOption]) ? parseInt(cards[1][battleOption]) : 0

    if (firstCardValue === secondCardValue) {
        newScore.firstCard = newScore.firstCard + 1
        newScore.secondCard = newScore.secondCard + 1
        battleResult = "Draw"
    } else if (firstCardValue > secondCardValue) {
        newScore.firstCard = newScore.firstCard + 1
        battleResult = "Left"
    } else {
        newScore.secondCard = newScore.secondCard + 1
        battleResult = "Right"
    }

    return {newScore, battleResult}
}

export default battleResult