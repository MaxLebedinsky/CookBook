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

const Header = ({ handleSetCategory }) => {

    Header.propTypes = {
        handleSetCategory: PropTypes.func
    }

    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Logo />
                <Toolbar className={ classes.toolbar }>
                    <SearchField handleSetCategory={ handleSetCategory } />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
// import React from 'react';
// import './styles.css';
// import SearchField from "./searchfield";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import { alpha, makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import classNames from 'classnames'
// import Logo from './logo'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     toolbar: {
//         display:'block',
//         width: '70%',
//         minHeight: 128,
//         margin: '0 auto',
//         [theme.breakpoints.up('md')]: {
//             width: '50%',
//         },
//     }
// }));

// const Header = () => {
//     const classes = useStyles();
//     return (
//         <div className={ classes.root }>
//             <AppBar position="static">
//                 <Logo />
//                 <Toolbar className={ classes.toolbar }>
//                     <div className={ classNames(classes.search, classes.title) }>
//                         <div className={ classes.search }>
//                             <div className={ classes.searchIcon }>
//                                 <SearchIcon />
//                             </div>
//                             <InputBase
//                                 fullWidth="true"
//                                 placeholder="Search…"
//                                 classes={ {
//                                     root: classes.inputRoot,
//                                     input: classes.inputInput,
//                                 } }
//                                 inputProps={ { 'aria-label': 'search' } }
//                             />
//                         </div>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }

// export default Header