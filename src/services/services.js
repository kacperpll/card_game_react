import $api from "./domain"

export const getStarships = async (url) => {
    const responsesData = await $api({
        method: "get",
        url: "starships/" + url
    })

    return responsesData.data
}