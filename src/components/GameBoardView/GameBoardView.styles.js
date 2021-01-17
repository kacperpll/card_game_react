import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    orange: {
        backgroundColor: "red",
    },
    cardsWrapper: {
        display: "flex",
        justifyContent: "center",
        padding: 20,
    },
    titleWrapper: {
        display: "flex",
        justifyContent: "center",
        padding: 20,
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "center",
        padding: 20,
    },
    scoreWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
    }
}))

export default useStyles