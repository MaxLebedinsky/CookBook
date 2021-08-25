import {makeStyles} from "@material-ui/core/styles";
import { myTheme } from "../../../adddishform/styled";

export const useStyles = makeStyles(() => ({
    registerForm: {
        minWidth: '200px',
        margin: '16px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    registerButton:{
        margin:'16px'
    },
    modalLink: {
        '&:hover': {
            color: myTheme.palette.secondary.main,
            textDecoration: 'none',
            cursor: 'pointer',
        }
    },
}));