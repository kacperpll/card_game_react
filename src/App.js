import React, { useEffect, useState } from "react"
import logo from './logo.svg'
import './App.css'
import { getStarships } from "./services/services"

function App() {

    const [starships, setStarships] = useState([])
    const [url, setUrl] = useState("starships")

    const fetchStarshipsData = async () => {
        const starshipsData = await getStarships(url)

        setStarships([...starships, ...starshipsData.results])

        if(starshipsData.next !== null) setUrl(starshipsData.next.substring(21))
    }

    useEffect(() => {
        fetchStarshipsData()
    }, [url])

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
