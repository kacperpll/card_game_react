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
        backgroundColor: "#201d1dbf",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: "white",
    },
    actions: {
        display: "flex",
        alignItems: "center"
    },
    colorWhite: {
        color: "white",
    },
    logoWrapper: {
        display: "flex",
        paddingTop: 10,
        minHeight: 80,
    },
    logo: {
        width: "100%",
        backgroundSize: "contain",
    }
}))

export default useStyles