import { makeStyles } from "@material-ui/core"
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 400,
        margin: 10,
        backgroundColor: "#201d1dbf",
        color: theme.palette.getContrastText(deepPurple[500]),
    },
    title: {
        fontSize: 16,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
        backgroundSize: "contain",
    },
    purple: {
        backgroundColor: deepPurple[500],
    },
}))

export default useStyles