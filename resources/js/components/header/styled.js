import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'block',
        width: '70%',
        // minHeight: 128,
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    logo: {
        margin: 'auto',
        padding: '24px',
    },
    add_button: {
        position: 'absolute',
        right: '10px',
        top: '10px',
        textTransform: 'none',
    }
}));