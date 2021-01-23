import $api from "./domain"
import { IGetStarshipsResponse } from "../models/starships"

export const getStarships = async (url: string): Promise<IGetStarshipsResponse> => (
    await $api({
        method: "get",
        url: "starships/" + url
    })
)