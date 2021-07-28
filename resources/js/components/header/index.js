import React from 'react';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo'
import {useStyles} from "./styled";

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Logo />
                <Toolbar className={ classes.toolbar }>
                    <SearchField />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
