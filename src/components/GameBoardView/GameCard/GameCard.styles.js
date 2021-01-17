import { makeStyles } from "@material-ui/core"
import { red } from "@material-ui/core/colors"
import { deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        margin: 10,
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
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}))

export default useStyles