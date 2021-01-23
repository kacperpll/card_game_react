import React, { useEffect, useState, useRef } from "react"
import GameCard from "./GameCard/GameCard"
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import useStyles from "./GameBoardView.styles"
import {
    battleResult,
    newStarships,
} from "../../helpers/gameBoardFunctions"
import { IGameBoardView, IScore } from "../../models/starships"

const GameBoardView = ({
    starships,
    cards,
    setCards,
}: IGameBoardView) => {

    const [battleScore, setBattleScore]: [string, React.Dispatch<React.SetStateAction<string>>] = useState("")
    const [battleOption, setBattleOption]: [string, React.Dispatch<React.SetStateAction<string>>] = useState("cost_in_credits")
    const [score, setScore]: [IScore, React.Dispatch<React.SetStateAction<IScore>>] = useState({
        firstCard: 0,
        secondCard: 0,
    })

    const styles = useStyles({})
    const isFirstRun = useRef(true)

    const newBattle = (): void => {
        newStarships(starships, score, setCards)
    }

    const handleChange = (event: any) => {
        setBattleOption(event.target.value);
    }

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false
            return
        }

        const result = battleResult(score, cards, battleOption)

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
                <div className={styles.actions}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={newBattle}>
                        Fight
                    </Button>
                    <FormControl variant="filled" className={styles.formControl}>
                        <InputLabel className={styles.colorWhite} id="demo-simple-select-required-label">Choose Stat</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={battleOption}
                            onChange={handleChange}
                            className={styles.colorWhite}
                            >
                            <MenuItem value={"cost_in_credits"}>Price</MenuItem>
                            <MenuItem value={"cargo_capacity"}>Capacity</MenuItem>
                            <MenuItem value={"max_atmosphering_speed"}>Speed</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <span>Score</span>
                <span>Left: {score.firstCard} - Right: {score.secondCard}</span>
                {battleScore && <span>Winner: {battleScore}</span>}
            </div>
        </div>
    )
}

export default GameBoardView