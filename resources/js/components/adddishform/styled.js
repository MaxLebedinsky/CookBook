import {makeStyles} from "@material-ui/core/styles";

export  const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        display: 'flex',
        margin: theme.spacing(0, 1),
    },
    formControl: {
        margin: theme.spacing(1, 0),
    },
    form_button: {
        textTransform: 'none',
        margin: theme.spacing(2, 4),
    },
    back_button: {
        margin: theme.spacing(1, 'auto'),
    },
    h1: {
        fontWeight: 700,
        fontSize: '1.2em',
        margin: theme.spacing(3, 'auto'),
    },
    h2: {
        margin: theme.spacing(1, 'auto'),
    },
    modal: {
        margin: '20% auto',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 1, 6),
    },
    select: {
        minWidth: 100,
    },
    ingredientsList: {
        margin: theme.spacing(0, 0, 2),
    },
    ingredientsItem: {
        color: 'gray',
        margin: theme.spacing(1, 0),
    }
}));