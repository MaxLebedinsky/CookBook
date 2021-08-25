import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles} from "./styled";
import {useDispatch} from 'react-redux';
import {searchTitle} from '../../../redux/filters/actions';

const SearchField = () => {

    const classes = useStyles();
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchTitle(value));
    };

    return (
        <div className={classes.searchBox}>
            <div className={classes.search}>
                <form className={classes.searchForm} onSubmit={handleSubmit}>
                    <SearchIcon className={classes.searchIcon}/>
                    <input
                        className={classes.filterIconInput}
                        value={value}
                        onChange={handleChange}
                        type="text"
                        placeholder="Поиск ..."/>
                </form>
            </div>
        </div>
    )
};

export default SearchField;