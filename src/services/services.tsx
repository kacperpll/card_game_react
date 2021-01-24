import $api from "./domain"
import { IGetStarshipsResponse } from "../models/starships.models"

export const getStarships = async (url: string): Promise<IGetStarshipsResponse> => (
    await $api({
        method: "get",
        url: "starships/" + url
    })
)