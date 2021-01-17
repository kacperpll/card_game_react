import React, { useEffect, useState } from "react"
import { getStarships } from "./services/services"
import GameBoardView from "./components/GameBoardView/GameBoardView"
import * as data from "./mockdata/starships.json"
import useStyles from "./App.styles"

function App() {

    const [starships, setStarships] = useState([])
    const [cards, setCards] = useState(data.starships)

    const styles = useStyles({})

    const fetchStarshipsData = async (url) => {
        const starshipsData = await getStarships(url)

        setStarships((prevStarships) => ([...prevStarships, ...starshipsData.results]))

        if (starshipsData.next !== null) fetchStarshipsData(starshipsData.next.substring(21))
    }

    useEffect(() => {
        fetchStarshipsData("starships")
    }, [])

    return (
        <div
            className={styles.root}>
            <GameBoardView
                starships={starships}
                cards={cards}
                setCards={setCards} />
        </div>
    )
}

export default App
