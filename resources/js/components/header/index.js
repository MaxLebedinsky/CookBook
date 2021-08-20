import React, { useState } from 'react';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo'
import { useStyles } from "./styled";
import PropTypes from 'prop-types';
import Access from './access'
import { Button, Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Header = ({ handleSetCategory, handleSetDishSearch }) => {

    Header.propTypes = {
        handleSetCategory: PropTypes.func,
        handleSetDishSearch: PropTypes.func
    }

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
            console.log('user is not logged in');
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
                <Access/>
                <Logo
                    handleSetCategory={ handleSetCategory }
                    handleSetDishSearch={ handleSetDishSearch }
                />
                <Toolbar className={ classes.toolbar }>
                    <SearchField
                        handleSetCategory={ handleSetCategory }
                        handleSetDishSearch={ handleSetDishSearch }
                    />
                </Toolbar>
                <Button href="/add-dish" onClick={ addClickHandler } className={ classes.add_button } variant="contained">Добавить рецепт</Button>
            </AppBar>
        </div>
    );
}

export default Header
