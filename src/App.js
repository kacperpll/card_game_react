import React, { useEffect, useState } from "react"
import './App.css'
import { getStarships } from "./services/services"
import GameBoardView from "./components/GameBoardView/GameBoardView"

function App() {

    const [starships, setStarships] = useState([])
    const [url, setUrl] = useState("starships")

    const fetchStarshipsData = async () => {
        const starshipsData = await getStarships(url)

        setStarships([...starships, ...starshipsData.results])

        if (starshipsData.next !== null) setUrl(starshipsData.next.substring(21))
    }

    useEffect(() => {
        fetchStarshipsData()
    }, [url])

    return (
        <div className="App" style={{overflow:"hidden"}}>
            <GameBoardView
                starships={starships} />
        </div>
    )
}

export default App
