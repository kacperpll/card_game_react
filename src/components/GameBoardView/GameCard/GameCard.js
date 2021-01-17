import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography"
import { Avatar } from "@material-ui/core"
import useStyles from "./GameCard.styles"
import starshipImage1 from "../../../assets/images/1.png"
import starshipImage0 from "../../../assets/images/0.png"


const GameCard = ({
    starships,
    id,
}) => {

    const styles = useStyles({})

    return (
        <Card className={styles.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={styles.purple}>
                        {starships[id]?.name[0].toUpperCase()}
                    </Avatar>
                }
                title={starships[id]?.name}
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
                    <Typography variant="h5" component="h3">
                        Price: {starships[id]?.cost_in_credits}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Capacity: {starships[id]?.cargo_capacity}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Crew: {starships[id]?.crew}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        MGLT: {starships[id]?.MGLT}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Spped: {starships[id]?.max_atmosphering_speed}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Class: {starships[id]?.starship_class}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Id: {starships[id]?.url?.substring(31).replace("/", "")}
                    </Typography>
                </CardActionArea>
            </CardContent>
        </Card>
    )
}

export default GameCard