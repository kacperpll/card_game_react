import { IStarship } from "./starships.models"

export interface IGameBoardView {
    starships: IStarship[];
    cards: IStarship[];
    setCards: React.Dispatch<React.SetStateAction<IStarship[]>>;
}

export interface IGameCard {
    starships: IStarship[];
    id: number;
}

export interface IScore {
    firstCard: number;
    secondCard: number;
}

export interface IBattleResult {
    newScore: IScore;
    battleResult: string;
}