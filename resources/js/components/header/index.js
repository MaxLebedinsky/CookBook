import React from 'react';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo';
import { useStyles } from "./styled";
import { Button } from '@material-ui/core';
import FiltersBar from './filtersBar';
import Access from './access'
import { useSelector } from 'react-redux';

const filters = [{ name: "По рейтингу" }, { name: "По новизне" }]

const Header = () => {

    const categories = useSelector(state => state.categories.categoryList)


    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Access />
                <Logo />
                <Toolbar className={ classes.toolbar }>
                    <SearchField />
                </Toolbar>
                <FiltersBar optionsList={ filters } />
                <FiltersBar optionsList={ categories } />
                <Button href="/add-dish" className={ classes.add_button } variant="contained">Добавить рецепт</Button>
            </AppBar>
        </div>
    );
}

export default Header
