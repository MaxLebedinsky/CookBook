import React, {useState} from "react";
import {useStyles} from "../styled";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import Register from "../register";

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {onClose, open} = props;
    const [isRegisterPressed, setIsRegisterPressed] = useState(false);
    const handleShowRegisterForm = (e) => {
        e.preventDefault()
        setIsRegisterPressed(true)
    }
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
            }
        )
            .then((response) => {
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
            {isRegisterPressed ?
                <Register setIsRegisterPressed={setIsRegisterPressed} handleLogin={handleLogin} onClose={handleClose}
                          open={open} setToken={props.setToken} token={props.token}/>
                :
                <>
                    <DialogTitle id="simple-dialog-title">Вход</DialogTitle>
                    <form className={classes.loginForm} onSubmit={handleLogin}>
                        <TextField type="email" id="email-input" label="Email" value={email} 
                                onChange={handleEmail} color="secondary" className={ classes.modalInput }/> <br/>
                        <TextField type="password" id="password-input" label="Password" value={password}
                                onChange={handlePassword} color="secondary" className={ classes.modalInput }/> <br/>
                        <div className={classes.loginButtonsContainer}>
                            <Button variant='contained' type="submit" color="secondary">Войти</Button>
                        </div>
                        <Typography>
                            <Link onClick={handleShowRegisterForm} color="textPrimary" className={ classes.modalLink }>
                                Зарегистрироваться
                            </Link>
                        </Typography>
                    </form>
                </>}
        </Dialog>
    );
}

Login.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setToken: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
};
export default Login;