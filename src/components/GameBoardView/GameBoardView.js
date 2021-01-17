import React, { useEffect, useState, useRef } from "react"
import GameCard from "./GameCard/GameCard"
import Button from "@material-ui/core/Button"
import useStyles from "./GameBoardView.styles"
import {
    battleResult,
    newStarships,
} from "../../functions/functions.js"

const GameBoardView = ({
    starships,
    cards,
    setCards,
}) => {

    const [battleScore, setBattleScore] = useState("")
    const [score, setScore] = useState({
        firstCard: 0,
        secondCard: 0,
    })

    const styles = useStyles({})
    const isFirstRun = useRef(true)

    const battleHandler = () => {
        newStarships(starships, score, setCards)
    }

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false
            return
        }

        const result = battleResult(score, cards)
        console.log("result", result)
        setBattleScore(result.battleResult)
        setScore({...result.newScore})
    }, [cards])

    return (
        <div>
            <div className={styles.wrapper}>
                <p>Star wars</p>
                <span>Black rebelion</span>
            </div>

            <div className={styles.wrapper}>
                {Object.keys(score).map((item, index) => (
                    <GameCard key={index} id={index} starships={cards}/>
                ))}
            </div>

            <div className={styles.scoreWrapper}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={battleHandler}>
                    Fight
                </Button>
                <span>Score</span>
                <span>Left: {score.firstCard} - Right: {score.secondCard}</span>
                {battleScore && <span>Winner: {battleScore}</span>}
            </div>
        </div>
    )
}

export default GameBoardView