import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from "./styled";
import Login from "./login"
import Logout from "./logout";
import {useDispatch, useSelector} from "react-redux";
import {isLogin, isLogout} from "../../../redux/access/actions";

const Access = () => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [token, setToken] = useState("")
    const loginStatus = useSelector(state => state.access.loginStatus)
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionStorage.getItem('authToken')) {
            setToken(sessionStorage.getItem('authToken'))
        }
        if (token !== "") {
            dispatch(isLogin(true))
        }
        if (token === "") {
            dispatch(isLogout(false))
        }
    }, [token]);

    return (
        <div>
            <Button className={classes.loginButton} variant="contained" onClick={handleClickOpen}>
                {loginStatus ? 'Выйти' : 'Войти'}
            </Button>
            {loginStatus ? <Logout open={open} onClose={handleClose} setToken={setToken} token={token}/> :
                <Login open={open} onClose={handleClose} setToken={setToken} token={token}/>}
        </div>
    );
}
export default Access;