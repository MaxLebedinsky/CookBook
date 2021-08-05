import React from 'react';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo'
import { useStyles } from "./styled";
import { Button } from '@material-ui/core';

const Header = () => {

    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Logo />
                <Toolbar className={ classes.toolbar }>
                    <SearchField />
                </Toolbar>
                <Button href="/add-dish" className={ classes.add_button } variant="contained">Добавить рецепт</Button>
            </AppBar>
        </div>
    );
}

export default Header
