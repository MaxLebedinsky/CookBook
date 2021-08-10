import {makeStyles} from "@material-ui/core/styles";

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
    }
}));