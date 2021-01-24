import randomNum from "../../../helpers/randomNumber"
import { IStarship } from "../../../models/starships.models"
import { IScore } from "../../../models/GameBoardView.models"

const newStarships = (starships: IStarship[], score: IScore, setCards: React.Dispatch<React.SetStateAction<IStarship[]>>): void => {
    const starshipsAmount: number = starships.length
    const newStarships: IStarship[] = Object.keys(score).map(() => starships[randomNum(starshipsAmount)])

    setCards(newStarships)
}

export default newStarships