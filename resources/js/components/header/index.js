import React from 'react';
import SearchField from "./searchfield";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo'
import {useStyles} from "./styled";

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
