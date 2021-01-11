import React, { useEffect, useState } from "react"
import logo from './logo.svg'
import './App.css'
import { getStarships } from "./services/services"

function App() {

    const [starships, setStarships] = useState([])

    const fetchStarshipsData = async () => {
        const starshipsData = await getStarships()

        setStarships(starshipsData.results)
        console.log("starship", starshipsData)
    }

    useEffect(() => {
        fetchStarshipsData()
    }, [])

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    )
}

export default App
