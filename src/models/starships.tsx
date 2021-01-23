export interface IStarship {
    name:string;
    model:string;
    manufacturer:string;
    cost_in_credits:string;
    length:string;
    max_atmosphering_speed:string;
    crew:string;
    passengers:string;
    cargo_capacity:string;
    consumables:string;
    hyperdrive_rating:string;
    MGLT:string;
    starship_class:string;
    pilots:any[];
    films:string[];
    created:string;
    edited:string;
    url:string;
}

export interface IGetStarshipsResponse {
    data: {
        count: number;
        next: string;
        previous: string;
        results: IStarship[];
    }
}

export interface IGameBoardView {
    starships: IStarship[];
    cards: IStarship[];
    setCards: React.Dispatch<React.SetStateAction<IStarship[]>>;
}

export interface IScore {
    firstCard: number;
    secondCard: number;
}