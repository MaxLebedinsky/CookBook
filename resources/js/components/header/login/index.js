import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import {useStyles} from "./styled";


const LoginButton = (props) => {

    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };
    const classes = useStyles();
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Login</DialogTitle>
            <form className={classes.loginForm}>
                <TextField id="standard-basic" label="Email"/>
                <TextField id="standard-basic" label="Password"/>
                <div className={classes.loginButtonsContainer}>
                    <Button variant='outlined'>Login</Button>
                    <Button variant='outlined'>Sign in</Button>
                </div>
            </form>
        </Dialog>
    );
}

LoginButton.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

const Login = () => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={classes.loginButton} variant="text" onClick={handleClickOpen}>
                Login
            </Button>
            <LoginButton selectedValue='hello' open={open} onClose={handleClose}/>
        </div>
    );
}
export default Login;