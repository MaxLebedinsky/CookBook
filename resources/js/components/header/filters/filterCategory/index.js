import React, { useEffect } from 'react';
import { useStyles } from '../styled';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, filterCategoryValue } from '../../../../redux/filters/actions';



export const FilterCategory = () => {

   const classes = useStyles();
   const dispatch = useDispatch();
   // const [category, setCategory] = useState('');
   const category = useSelector(state => state.filters.filterCategoryValue);
   const categories = useSelector(state => state.categories.categoryList);

   useEffect(() => {
      dispatch(filterCategory(category))
   }, [category])

   const handleChange = (event) => {
      dispatch(filterCategoryValue(event.target.value));
   };

   return (
      <FormControl className={ classes.formControl }>
         <Select
            value={ category }
            onChange={ handleChange }
            displayEmpty
            className={ classes.selectEmpty }
            inputProps={ { 'aria-label': 'Without label' } }
         >
            <MenuItem value="" disabled>
               Категория
            </MenuItem>
            <MenuItem value="">Все категории</MenuItem>
            {
               categories.map(category => (
                  <MenuItem
                     value={ category.id }
                     key={ category.id }
                  >
                     { category.name }
                  </MenuItem>
               ))
            }
         </Select>
      </FormControl>
   )
}