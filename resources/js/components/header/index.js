import React from 'react';
import './styles.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import classNames from 'classnames'
import Logo from './logo'
const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(0),
        paddingLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%'
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        width: '50%',
        minHeight: 128,
        alignItems: 'flex-center',
        margin: '0 auto',
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Logo />
                <Toolbar className={ classes.toolbar }>
                    <div className={ classNames(classes.search, classes.title) }>
                        <div className={ classes.search }>
                            <div className={ classes.searchIcon }>
                                <SearchIcon />
                            </div>
                            <InputBase
                                fullWidth="true"
                                placeholder="Search…"
                                classes={ {
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                } }
                                inputProps={ { 'aria-label': 'search' } }
                            />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header