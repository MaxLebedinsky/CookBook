import React from 'react';
import './styles.css';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './logo'
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'block',
        width: '70%',
        minHeight: 128,
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    }
}));

const Header = ({ handleSetCategory, handleSetDishSearch }) => {

    Header.propTypes = {
        handleSetCategory: PropTypes.func,
        handleSetDishSearch: PropTypes.func
    }

    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <AppBar position="static">
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
            </AppBar>
        </div>
    );
}

export default Header