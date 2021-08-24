import React from 'react';
import { useStyles } from './styled';
import { FilterCategory } from './filterCategory';
import { FilterOrder } from './filterOrder';
import { FilterIngredients } from './filterIngredients';

export const Filters = () => {

   const classes = useStyles();

   return (
      <div className={ classes.wrap }>
         <FilterCategory />
         <FilterOrder />
         <FilterIngredients />
      </div>
   )
}