import { makeStyles } from "@material-ui/core"
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        padding: 10,
    },
    scoreWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 15,
        height: 130,
        position: "absolute",
        bottom: 10,
        left: "calc(50% - 80px)",
        color: theme.palette.getContrastText(deepPurple[500]),
    },
}))

export default useStyles