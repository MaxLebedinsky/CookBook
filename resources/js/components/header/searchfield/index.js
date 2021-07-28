import React, {useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from "./filtericon";
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import {useStyles, StyledMenu, StyledMenuItem} from "./styled";

const SearchField = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const [categories, setCategories] = useState([])

    const getCategories = () =>
        window.axios.get('/categories')
            .then(json => setCategories(json.data.data))

    useEffect(() => {
        getCategories()
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.searchBox}>
            <div className={classes.search}>
                <form className={classes.searchForm}>
                    <SearchIcon className={classes.searchIcon}/>
                    <input className={classes.filterIconInput} type="text" placeholder="Search ..."/>
                    <Button
                        className={classes.button}
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <FilterIcon/>
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {categories.map((category, index) => (
                                <StyledMenuItem key={index}>
                                    <ListItemText
                                        onClick={handleClose}
                                        primary={category.name}/>
                                </StyledMenuItem>
                            )
                        )}
                    </StyledMenu>

                </form>
            </div>
        </div>
    )
};

export default SearchField;