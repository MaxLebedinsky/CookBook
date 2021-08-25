import React from "react";
import {useStyles} from "../styled";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {loggedUserData} from "../../../../redux/access/actions";

const Logout = (props) => {
    const {onClose, open} = props;
    const dispatch = useDispatch();

    const handleClose = () => {
        onClose();
    };

    const handleLogout = (e) => {
        e.preventDefault()
        window.axios.post('/auth/logout', {}, {
            headers: {Authorization: `Bearer ${sessionStorage.getItem('authToken')}`}
        })
            .then(function (response) {
                if (response.status === 200) {
                    sessionStorage.removeItem('authToken')
                    props.setToken("")
                    dispatch(loggedUserData({}))
                }
                handleClose()
            })
            .catch(function (error) {
                console.log(error);
            });

        handleClose()
    }
    const classes = useStyles();
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Выход</DialogTitle>
            <form className={classes.loginForm} onSubmit={handleLogout}>
                <Button variant='contained' color="secondary" type="submit">Выйти</Button>
            </form>
        </Dialog>
    );
}

Logout.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setToken: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
};

export default Logout;
