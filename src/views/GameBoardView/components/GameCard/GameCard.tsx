import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography"
import { Avatar } from "@material-ui/core"
import useStyles from "./GameCard.styles"
import starshipImage1 from "../../../../assets/images/1.png"
import starshipImage0 from "../../../../assets/images/0.png"
import { IGameCard } from "../../../../models/GameBoardView.models"

const GameCard: React.FC<IGameCard> = ({
    starships,
    id,
}) => {

    const styles = useStyles({})

    return (
        <Card className={styles.root}>
            <CardHeader
                avatar={
                    <Avatar
                        aria-label="recipe"
                        className={styles.purple}
                        data-testid="avatar">
                        {starships[id]?.name[0]?.toUpperCase() || "N"}
                    </Avatar>
                }
                title={starships[id]?.name || "No data"}
            />
            <CardMedia
                    className={styles.media}
                    image={id ? starshipImage1 : starshipImage0}
                    title="Starship"
            />
            <CardContent>
                <Typography className={styles.title} gutterBottom>
                    Stats
                </Typography>
                <CardActionArea>
                    <Typography variant="h5" component="h3" data-testid="price">
                        Price: {starships[id]?.cost_in_credits || "No data"}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Capacity: {starships[id]?.cargo_capacity || "No data"}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Crew: {starships[id]?.crew || "No data"}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        MGLT: {starships[id]?.MGLT || "No data"}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Speed: {starships[id]?.max_atmosphering_speed || "No data"}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Class: {starships[id]?.starship_class || "No data"}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Id: {starships[id]?.url?.substring(31).replace("/", "") || "No data"}
                    </Typography>
                </CardActionArea>
            </CardContent>
        </Card>
    )
}

export default GameCard