import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
      backgroundColor: "#fff",
      paddingLeft: 5,
   },
}));

export const FilterOrder = () => {

   const classes = useStyles();
   const [category, setCategory] = useState('');
   const categories = useSelector(state => state.categories.categoryList)

   const handleChange = (event) => {
      setCategory(event.target.value);
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
            {
               categories.map(category => (
                  <MenuItem value={ category.name } key={ category.id }>{ category.name }</MenuItem>
               ))
            }
         </Select>
      </FormControl>
   )
}