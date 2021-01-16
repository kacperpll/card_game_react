import React, { useEffect, useState } from "react"
import GameCard from "./GameCard/GameCard"
import * as data from "../../mockdata/starships.json"

const GameBoardView = ({
    starships,
}) => {

    const [cards, setCards] = useState([])

    console.log("starships", starships)

    useEffect(() => {
        setCards(data.starships)
    }, [])

    return (
        <div>
            <div>
                <p>Star wars</p>
                <span>Black rebelion</span>
            </div>

            <GameCard starship={cards[0]}/>
            <GameCard starship={cards[1]}/>
        </div>
    )
}

export default GameBoardView