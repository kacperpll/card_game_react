import React, { useEffect, useState } from "react"
import { getStarships } from "./services/services"
import extractPathFromUrl from "./helpers/extractPathFromUrl"
import GameBoardView from "./views/GameBoardView/GameBoardView"
import * as data from "./mockdata/starships.json"
import useStyles from "./App.styles"
import { IGetStarshipsResponse, IStarship } from "./models/starships.models"

function App() {

    const [starships, setStarships] = useState<IStarship[]>([])
    const [cards, setCards] = useState<IStarship[]>(data.starships)

    const styles = useStyles({})

    useEffect(() => {
        const fetchStarshipsData = async (url: string = ""): Promise<void> => {
            const starshipsData: IGetStarshipsResponse = await getStarships(url)
            setStarships((prevStarships: IStarship[]): IStarship[] => ([...prevStarships, ...starshipsData.data.results]))

            if (starshipsData.data.next !== null) fetchStarshipsData(extractPathFromUrl(starshipsData.data.next))
        }

        fetchStarshipsData()
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
