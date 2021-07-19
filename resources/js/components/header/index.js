import React from 'react';
import './styles.css';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import Logo from './logo'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        display:'block',
        width: '50%',
        minHeight: 128,
        margin: '0 auto',
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Logo/>
                <Toolbar className={classes.toolbar}>
                    <SearchField />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header