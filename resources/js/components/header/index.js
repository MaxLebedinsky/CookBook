import React, { useState } from 'react';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo';
import { useStyles } from "./styled";
import Access from './access';
import { Filters } from './filters';
import { Box, Button, Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Header = () => {

    const classes = useStyles();
    const loginStatus = useSelector(state => state.access.loginStatus)
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('');

    const handleOpenModal = (text) => {
        setModalText(text);
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false)
    };

    const addClickHandler = (event) => {
        if (!loginStatus) {
            handleOpenModal('Для добавления рецептов необходимо войти или зарегистрироваться');
            event.preventDefault();
        }
    }

    return (
        <div className={ classes.root }>
            <Modal open={ modal } onClose={ handleCloseModal }>
                <div className={ classes.modal }>{ modalText }</div>
            </Modal>
            <AppBar position="static">
                <Box className={ classes.topNav }>
                    <Access/>
                    <Button href="/add-dish" onClick={ addClickHandler } className={ classes.addButton } variant="text">
                        Добавить рецепт
                    </Button>
                </Box>
                <Logo/>
                <Toolbar className={ classes.toolbar }>
                    <SearchField />
                </Toolbar>
                <Filters />
            </AppBar>
        </div>
    );
}

export default Header
