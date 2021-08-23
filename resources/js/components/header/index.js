import React from 'react';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo';
import { useStyles } from "./styled";
import { Button } from '@material-ui/core';
import Access from './access';
import { Filters } from './filters';

const Header = () => {

    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Access />
                <Logo />
                <Toolbar className={ classes.toolbar }>
                    <SearchField />
                </Toolbar>
                <Filters />
                <Button href="/add-dish" className={ classes.add_button } variant="contained">Добавить рецепт</Button>
            </AppBar>
        </div>
    );
}

export default Header
