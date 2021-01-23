import React, { useEffect, useState } from "react"
import { getStarships } from "./services/services"
import { extractPathFromUrl } from "./helpers/smallFunctions"
import GameBoardView from "./components/GameBoardView/GameBoardView"
import * as data from "./mockdata/starships.json"
import useStyles from "./App.styles"
import { IGetStarshipsResponse, IStarship } from "./models/starships"

function App() {

    const [starships, setStarships]: [IStarship[], React.Dispatch<React.SetStateAction<IStarship[]>>] = useState([] as IStarship[])
    const [cards, setCards]: [IStarship[], React.Dispatch<React.SetStateAction<IStarship[]>>] = useState(data.starships as IStarship[])

    const styles = useStyles({})

    useEffect(() => {
        const fetchStarshipsData = async (url: string) => {
            const starshipsData: IGetStarshipsResponse = await getStarships(url)
            setStarships((prevStarships: IStarship[]): IStarship[] => ([...prevStarships, ...starshipsData.data.results]))

            if (starshipsData.data.next !== null) fetchStarshipsData(extractPathFromUrl(starshipsData.data.next))
        }

        fetchStarshipsData("")
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
