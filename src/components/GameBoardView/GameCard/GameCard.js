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
import { checkIfExist } from "../../../helpers/smallFunctions"


const GameCard = ({
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
                        {checkIfExist(starships[id].name)[0].toUpperCase()}
                    </Avatar>
                }
                title={checkIfExist(starships[id].name)}
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
                        Price: {checkIfExist(starships[id].cost_in_credits)}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Capacity: {checkIfExist(starships[id].cargo_capacity)}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Crew: {checkIfExist(starships[id].crew)}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        MGLT: {checkIfExist(starships[id].MGLT)}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Speed: {checkIfExist(starships[id].max_atmosphering_speed)}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Class: {starships[id].starship_class || "No data"}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Id: {checkIfExist(starships[id].url).substring(31).replace("/", "")}
                    </Typography>
                </CardActionArea>
            </CardContent>
        </Card>
    )
}

export default GameCard