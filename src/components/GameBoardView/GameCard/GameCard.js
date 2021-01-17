import React, { useEffect, useState } from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardHeader from "@material-ui/core/CardHeader"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { Avatar } from "@material-ui/core"
import useStyles from "./GameCard.styles"


const GameCard = ({
    starship
}) => {

    const styles = useStyles({})
    // console.log("starship", starship)

    return (
        <Card className={styles.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={styles.orange}>
                        SW
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                    className={styles.media}
                    image="src/assets/images/Y-wing_small.png"
                    title="Paella dish"
            />
            <CardContent>
                <Typography className={styles.title} color="textSecondary" gutterBottom>
                    Starship Card
                </Typography>
                <CardActionArea>
                    <Typography variant="h5" component="h3">
                        Name: {starship?.name}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Price: {starship?.cost_in_credits}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        Id: {starship?.url?.substring(31).replace("/", "")}
                    </Typography>
                </CardActionArea>
            </CardContent>
        </Card>
    )
}

export default GameCard