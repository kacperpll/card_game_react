import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"


const useStyles = makeStyles({
    root: {
        width: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const GameCard = ({
    starship
}) => {

    const styles = useStyles()
    console.log("starship card", starship)

    return (
        <Card className={styles.root}>
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
                </CardActionArea>
            </CardContent>
        </Card>
    )
}

export default GameCard