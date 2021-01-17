export const battleResult = (score, cards) => {
    console.log("cards", cards)
    let newScore = score
    const firstCardValue = parseInt(cards[0]?.cost_in_credits) ? parseInt(cards[0]?.cost_in_credits) : 0
    const secondCardValue = parseInt(cards[1]?.cost_in_credits) ? parseInt(cards[1]?.cost_in_credits) : 0

    if (firstCardValue === secondCardValue) {
        console.log("all won")
        console.log("firstCardValue", firstCardValue)
        console.log("secondCardValue", secondCardValue)

        newScore.firstCard = newScore.firstCard + 1
        newScore.secondCard = newScore.secondCard + 1
        console.log("newScore", newScore)
    } else if (firstCardValue > secondCardValue) {
        console.log("left won")
        console.log("firstCardValue", firstCardValue)
        console.log("secondCardValue", secondCardValue)

        newScore.firstCard = newScore.firstCard + 1
        console.log("newScore", newScore)
    } else {
        console.log("right won")
        console.log("firstCardValue", firstCardValue)
        console.log("secondCardValue", secondCardValue)

        newScore.secondCard = newScore.secondCard + 1
        console.log("newScore", newScore)
    }

    return newScore
}