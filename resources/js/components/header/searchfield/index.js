import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from "./filtericon";
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles, StyledMenu, StyledMenuItem } from "./styled";
import { useDispatch, useSelector } from 'react-redux';
import { categoriesFilter, getCategories } from '../../../redux/categories/actions';
import { dishesSearchField } from '../../../redux/dishes/actions';


const SearchField = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const [value, setValue] = useState('');
    const categories = useSelector(state => state.categories.categoryList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(dishesSearchField(value));
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCategory = (categoryName) => {
        dispatch(categoriesFilter(categoryName));
        handleClose();
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
                        placeholder="Search ..." />
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
                        {
                            categories.map((category, index) => (
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