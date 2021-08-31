import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from "./styled";
import Login from "./login"
import Logout from "./logout";
import {useDispatch, useSelector} from "react-redux";
import {isLogin, isLogout, loggedUserData} from "../../../redux/access/actions";
import { CircularProgress } from '@material-ui/core';

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
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('authToken')) {
            setLoader(true);
            setToken(sessionStorage.getItem('authToken'))
            window.axios.get('/auth/me', {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
                    }
                }
            )
                .then((response) => {
                    dispatch(loggedUserData(response.data.data))
                    setLoader(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoader(false);
                });
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
            {
                loader ?
                    <div className={ classes.circular }>
                        <CircularProgress color="secondary" />
                    </div>
                    :
                    <></>
            }
</div>
    );
}
export default Access;