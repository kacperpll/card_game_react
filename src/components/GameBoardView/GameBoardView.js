import React, { useEffect, useState } from "react"
import GameCard from "./GameCard/GameCard"

const GameBoardView = ({
    starships,
}) => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        const deafaultCards = starships.slice(0,2)

        setCards(deafaultCards)
    }, [starships])

    return (
        <div>
            <div>Game Board Title</div>
            <GameCard starship={cards[0]}/>
            <GameCard starship={cards[1]}/>
        </div>
    )
}

export default GameBoardView