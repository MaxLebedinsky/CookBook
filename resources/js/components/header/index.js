import React, {useState} from 'react';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo';
import {useStyles} from "./styled";
import Access from './access';
import {Filters} from './filters';
import {Box, Button, Collapse, Modal, ThemeProvider, Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {myTheme} from '../adddishform/styled';

const Header = () => {

    const classes = useStyles();
    const loginStatus = useSelector(state => state.access.loginStatus)
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const headerStatus = useSelector(state => state.header.headerStatus)

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
        <ThemeProvider theme={myTheme}>
            <div className={classes.root}>
                <Modal open={modal} onClose={handleCloseModal}>
                    <div className={classes.modal}>{modalText}</div>
                </Modal>
                <AppBar position="static">
                    <Box className={classes.topNav}>
                        <Access/>
                        <Button href="/add-dish" onClick={addClickHandler} className={classes.addButton}
                                variant="contained">
                            Добавить рецепт
                        </Button>
                    </Box>
                    <Logo/>
                    <Typography color="textPrimary" className={classes.title}>Книга кулинарных рецептов</Typography>
                    <Collapse in={headerStatus}>
                        <Toolbar className={classes.toolbar}>
                            <SearchField/>
                        </Toolbar>
                        <Filters/>
                    </Collapse>
                </AppBar>
            </div>
        </ThemeProvider>
    );
}

export default Header
