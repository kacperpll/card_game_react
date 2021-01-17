import React, { useEffect, useState } from "react"
import GameCard from "./GameCard/GameCard"
import Button from "@material-ui/core/Button"
import useStyles from "./GameBoardView.styles"
import {
    battleResult
} from "../../functions/functions.js"

const GameBoardView = ({
    starships,
    cards,
    setCards,
}) => {

    const styles = useStyles({})

    const [score, setScore] = useState({
        firstCard: 0,
        secondCard: 0,
    })

    const newStarships = (starships) => {
        const starshipsAmount = starships.length
        let newStarships = []
        for (let i = 0; i < 2; i++) {
            const randomNum = Math.floor(Math.random() * starshipsAmount) + 1
            newStarships = [...newStarships, starships[randomNum]]
        }

        setCards([...newStarships])
    }

    const battleHandler = () => {
        newStarships(starships)
        console.log("cards", cards)
        setScore(() => battleResult(score, cards))
    }
    useEffect(() => {
    }, [])

    return (
        <div>
            <div className={styles.titleWrapper}>
                <p>Star wars</p>
                <span>Black rebelion</span>
                <span>{cards[0].name}</span>
            </div>

            <div className={styles.cardsWrapper}>
                <GameCard starship={cards[0]}/>
                <GameCard starship={cards[1]}/>
            </div>

            <div className={styles.buttonWrapper}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {battleHandler()}}>
                    Fight
                </Button>
            </div>
            <div className={styles.scoreWrapper}>
                <span>Score</span>
                <span>Left: {score.firstCard} - Right: {score.secondCard}</span>
            </div>
        </div>
    )
}

export default GameBoardView