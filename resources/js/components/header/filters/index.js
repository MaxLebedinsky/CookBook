import React from 'react';
import {FilterCategory} from './filterCategory';
import {FilterOrder} from './filterOrder';
import {FilterIngredients} from './filterIngredients';

export const Filters = () => {
   return (
      <div>
         <FilterCategory />
         <FilterOrder />
         <FilterIngredients />
      </div>
   )
}