import {makeStyles} from "@material-ui/core/styles";

export  const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        '& .MuiTextField-root, .MuiFormControl-root': {
            margin: theme.spacing(1),
        },
        display: 'block',
    },
    form_button: {
        textTransform: 'none',
        margin: theme.spacing(2),
    },
    h2: {
        fontWeight: 700,
        margin: theme.spacing(2),
    },
    modal: {
        margin: '20% auto',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 1, 6),
    }
}));