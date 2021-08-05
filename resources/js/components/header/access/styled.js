import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    loginForm: {
        minWidth: '200px',
        margin: '16px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    loginButton: {
        color: 'white',
        backgroundColor: 'transparent'
    },
    loginButtonsContainer: {
        margin: '16px',
        display: "flex",
        justifyContent: "space-between"
    }
}));