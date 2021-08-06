import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from "./styled";
import Login from "./login"
import Logout from "./logout";

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
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem('authToken')){
            setToken(sessionStorage.getItem('authToken'))
        }
        if (token !== "") {
            setIsLogged(true)
        }
        if (token === "") {
            setIsLogged(false)
        }
    }, [token]);

    return (
        <div>
            <Button className={classes.loginButton} variant="text" onClick={handleClickOpen}>
                {isLogged ? 'Выйти' : 'Войти'}
            </Button>
            {isLogged ? <Logout open={open} onClose={handleClose} setToken={setToken} token={token}/> :
                <Login setToken={setToken} isLogged={isLogged} open={open} onClose={handleClose} token={token}/>}
        </div>
    );
}
export default Access;