import React, {useState} from "react";
import {useStyles} from "../styled";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, Typography} from "@material-ui/core";
import PropTypes from "prop-types";

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {onClose, open} = props;
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleClose = () => {
        onClose();
    };

    const handleLogin = (e) => {
        e.preventDefault()
        window.axios.post('/auth/login', {
            email: `${email}`,
            password: `${password}`
        })
            .then(function (response) {
                sessionStorage.setItem('authToken', response.data.data.token);
                props.setToken(response.data.data.token)
                handleClose()
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const classes = useStyles();
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Войти</DialogTitle>
            <form className={classes.loginForm} onSubmit={handleLogin}>
                <TextField type="email" id="email-input" label="Email" value={email} onChange={handleEmail}/>
                <TextField type="password" id="password-input" label="Password" value={password} onChange={handlePassword}/>
                <div className={classes.loginButtonsContainer}>
                    <Button variant='outlined' type="submit">Login</Button>
                </div>
                <Typography>
                    <Link href="#">
                        Зарегистрироваться
                    </Link>
                </Typography>
            </form>
        </Dialog>
    );
}

Login.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setToken: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
};
export default Login;