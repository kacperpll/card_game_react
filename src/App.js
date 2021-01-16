import React, { useEffect, useState } from "react"
import { getStarships } from "./services/services"
import GameBoardView from "./components/GameBoardView/GameBoardView"

function App() {

    const [starships, setStarships] = useState([])

    const fetchStarshipsData = async (url) => {
        const starshipsData = await getStarships(url)

        setStarships((prevStarships)=>([...prevStarships, ...starshipsData.results]))

        if (starshipsData.next !== null) fetchStarshipsData(starshipsData.next.substring(21))
    }

    useEffect(() => {
        fetchStarshipsData("starships")
    }, [])

    return (
        <div>
            <GameBoardView
                starships={starships} />
        </div>
    )
}

export default App
