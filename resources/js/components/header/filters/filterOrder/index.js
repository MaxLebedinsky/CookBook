import React, { useEffect } from 'react';
import { useStyles } from '../styled';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux';
import { filterOrder, filterOrderValue } from '../../../../redux/filters/actions';


const ordersList = [
   { name: "Рейтинг", value: "rating" },
   { name: "Новизна", value: "created_at" },
]


export const FilterOrder = () => {

   const classes = useStyles();
   const dispatch = useDispatch();
   const order = useSelector(state => state.filters.filterOrderValue);

   useEffect(() => {
      dispatch(filterOrder(order))
   }, [order])

   const handleChange = (event) => {
      dispatch(filterOrderValue(event.target.value));
   };

   return (
      <FormControl className={ classes.formControl }>
         <Select
            value={ order }
            onChange={ handleChange }
            displayEmpty
            className={ classes.selectEmpty }
            inputProps={ { 'aria-label': 'Without label' } }
         >
            <MenuItem value="created_at" disabled>
               Сортировка
            </MenuItem>
            {
               ordersList.map(order => (
                  <MenuItem
                     value={ order.value }
                     key={ order.value }
                  >
                     { order.name }
                  </MenuItem>
               ))
            }
         </Select>
      </FormControl>
   )
}