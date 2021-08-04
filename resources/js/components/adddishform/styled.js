import {makeStyles} from "@material-ui/core/styles";

export  const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    form_button: {
        textTransform: 'none',
        margin: theme.spacing(2),
    },
    h2: {
        fontWeight: 700,
        margin: theme.spacing(2),
    }
}));