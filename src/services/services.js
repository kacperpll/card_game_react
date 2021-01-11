import $api from "./domain"

export const getStarships = async () => {
    const responsesData = await $api({
        method: "get",
        url: "starships"
    })

    return responsesData.data
}