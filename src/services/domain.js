import axios from "axios"

const baseURL = "https://swapi.dev/api/"

const instance = axios.create({
    baseURL: baseURL,
})

export default instance