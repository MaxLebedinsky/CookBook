import {makeStyles} from "@material-ui/core/styles";
import { myTheme } from "../../adddishform/styled";

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
        backgroundColor: myTheme.palette.text.secondary,
        margin: '16px',
        '&:hover': {
            backgroundColor: myTheme.palette.secondary.main,
        },
    },
    loginButtonsContainer: {
        margin: '16px',
        display: "flex",
        justifyContent: "space-between"
    },
    circular: {
        position: 'fixed',
        top: '40%',
        left: '48%',
        zIndex: 99,
    },
    modalLink: {
        '&:hover': {
            color: myTheme.palette.secondary.main,
            textDecoration: 'none',
            cursor: 'pointer',
        }
    },
    modalInput: {
        margin: '0, 0, 24px',
    }
}));