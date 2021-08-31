import {useStyles} from "./styled";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {Link, Typography} from "@material-ui/core";

const Register = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirm_password] = useState("")

    const handleShowLoginForm = (e) => {
        e.preventDefault()
        props.setIsRegisterPressed(false)
    }

    const handleName =(e)=>{
        setName(e.target.value)
    }
    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    const handleRepeatPassword =(e)=>{
        setConfirm_password(e.target.value)
    }
    const {onClose, open} = props;
    const handleClose = () => {
        onClose();
    };

    const handleRegister = (e) => {
        e.preventDefault()
        window.axios.post('/auth/register', {
            name: `${name}`,
            email: `${email}`,
            password: `${password}`,
            confirm_password: `${confirm_password}`

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
            <DialogTitle id="simple-dialog-title">Регистрация</DialogTitle>
            <form className={classes.registerForm} onSubmit={handleRegister}>
                <TextField type="text" id="name-input" label="Имя" value={name} 
                        onChange={handleName} color="secondary"/><br/>
                <TextField type="email" id="email-input" label="Email" value={email} 
                        onChange={handleEmail} color="secondary"/><br/>
                <TextField type="password" id="password-input" label="Пароль" value={password} 
                        onChange={handlePassword} color="secondary"/>
                <TextField type="password" id="password-repeat-input" label="Повторите пароль" value={confirm_password} 
                        onChange={handleRepeatPassword} color="secondary"/><br/>
                <Button className={classes.registerButton} variant='contained' color="secondary" type="submit">Регистрация</Button>
                <Typography>
                    <Link onClick={handleShowLoginForm} color="textPrimary" className={ classes.modalLink }>
                        Войти
                    </Link>
                </Typography>
            </form>
        </Dialog>
    );
}

Register.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setToken: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    setIsRegisterPressed: PropTypes.func.isRequired
};

export default Register;
