import {makeStyles} from "@material-ui/core/styles";
import { myTheme } from "../adddishform/styled";

export  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'block',
        width: '70%',
        // minHeight: 128,
        margin: '0 auto',
        minHeight: '56px',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    logo:{
        margin: 'auto',
        padding: '0 24px 24px',
    },
    addButton: {
        color: 'white',
        backgroundColor: myTheme.palette.text.secondary,
        margin: '16px',
        '&:hover': {
            backgroundColor: myTheme.palette.secondary.main,
        },
    },
    topNav: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
    },
    modal: {
        margin: '20% auto',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        lineHeight: '1.5em',
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 2, 6),
        boxSizing: 'border-box'
    },
}));