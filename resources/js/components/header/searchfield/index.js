import React, { useEffect, useState } from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from "./filtericon";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
    button: {
        backgroundColor: '#757de8',
        padding: '4px',
        minWidth: 0,
        marginRight: '8px'
    }
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={ 0 }
        getContentAnchorEl={ null }
        anchorOrigin={ {
            vertical: 'bottom',
            horizontal: 'center',
        } }
        transformOrigin={ {
            vertical: 'top',
            horizontal: 'center',
        } }
        { ...props }
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const SearchField = ({ handleSetCategory }) => {

    SearchField.propTypes = {
        handleSetCategory: PropTypes.func
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const [categories, setCategories] = useState([])
    const [value, setValue] = useState('');

    const getCategories = () =>
        window.axios.get('/categories')
            .then(json => setCategories(json.data.data))

    useEffect(() => {
        getCategories()
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCategory = (categoryName) => {
        handleSetCategory(categoryName)
        handleClose()
    }

    return (
        <div className='search-box'>
            <div className="search">
                <form className="search-form" onSubmit={ handleSubmit }>
                    <SearchIcon className="search-icon" />
                    <input
                        className='filter-icon-input'
                        value={ value }
                        onChange={ handleChange }
                        type="text"
                        placeholder="Search ..." /
                    >
                    <Button
                        className={ classes.button }
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        onClick={ handleClick }
                    >
                        <FilterIcon />
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={ anchorEl }
                        keepMounted
                        open={ Boolean(anchorEl) }
                        onClose={ handleClose }
                    >
                        { categories.map((category, index) => (
                            <StyledMenuItem key={ index }>
                                <ListItemText
                                    onClick={ () => handleCategory(category.name) }
                                    primary={ category.name } />
                            </StyledMenuItem>
                        )
                        ) }
                    </StyledMenu>
                </form>
            </div>
        </div>
    )
};

export default SearchField;