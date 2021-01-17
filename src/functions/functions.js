export const battleResult = (score, cards) => {
    let newScore = score
    let battleResult
    const firstCardValue = parseInt(cards[0]?.cost_in_credits) ? parseInt(cards[0]?.cost_in_credits) : 0
    const secondCardValue = parseInt(cards[1]?.cost_in_credits) ? parseInt(cards[1]?.cost_in_credits) : 0

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

export const randomNum = (amount) => Math.floor(Math.random() * amount)