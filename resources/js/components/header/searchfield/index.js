import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from "./filtericon";
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles, StyledMenu, StyledMenuItem } from "./styled";
import PropTypes from 'prop-types';

const SearchField = ({ handleSetCategory, handleSetDishSearch }) => {

    SearchField.propTypes = {
        handleSetCategory: PropTypes.func,
        handleSetDishSearch: PropTypes.func,
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState('');

    const getCategories = () =>
        window.axios.get('/categories')
            .then(json => setCategories(json.data.data));

    useEffect(() => {
        getCategories()
    }, []);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSetDishSearch(value);
        // setValue('');
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCategory = (categoryName) => {
        handleSetCategory(categoryName)
        handleClose()
    };

    return (
        <div className={ classes.searchBox }>
            <div className={ classes.search }>
                <form className={ classes.searchForm } onSubmit={ handleSubmit }>
                    <SearchIcon className={ classes.searchIcon } />
                    <input
                        className={ classes.filterIconInput }
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