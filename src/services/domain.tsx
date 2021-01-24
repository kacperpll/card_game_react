import axios from "axios"

const baseURL: string = "https://swapi.dev/api/"

const instance = axios.create({
    baseURL: baseURL,
})

export default instance