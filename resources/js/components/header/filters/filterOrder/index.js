import React, { useEffect, useState } from 'react';
import { useStyles } from '../styled';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { filterOrder } from '../../../../redux/filters/actions';



export const FilterOrder = () => {

   const classes = useStyles();
   const dispatch = useDispatch();
   const [order, setOrder] = useState('rating');
   const ordersList = useState([
      { name: "Рейтинг", value: "rating" },
      { name: "Новизна", value: "date" },
      { name: "Просмотры", value: "views " }
   ]);

   useEffect(() => {
      dispatch(filterOrder(order))
   }, [order])

   const handleChange = (event) => {
      setOrder(event.target.value);
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
            <MenuItem value="rating" disabled>
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