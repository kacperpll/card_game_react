import { randomNum } from "./smallFunctions"

export const battleResult = (score, cards, battleOption) => {
    let newScore = score
    let battleResult
    const firstCardValue = parseInt(cards[0][battleOption]) ? parseInt(cards[0][battleOption]) : 0
    const secondCardValue = parseInt(cards[1][battleOption]) ? parseInt(cards[1][battleOption]) : 0

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

export const newStarships = (starships, score, setCards) => {
    const starshipsAmount = starships.length
    const newStarships = Object.keys(score).map(() => starships[randomNum(starshipsAmount)])

    setCards(newStarships)
}