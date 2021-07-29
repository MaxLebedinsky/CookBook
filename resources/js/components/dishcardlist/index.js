import React from 'react';
import "./styles.css"
import { DishCard } from './dishcard';
import PropTypes from 'prop-types';


export const DishCardList = ({ dishes, category, dishSearch }) => {

   DishCardList.propTypes = {
      dishes: PropTypes.array,
      category: PropTypes.string,
      dishSearch: PropTypes.string
   }

   if (category === '' && dishSearch === '') {
      return (
         <ul className="list">
            { dishes.map(dish => (
               <li className="list-item" key={ dish.dish.id }>
                  <DishCard dish={ dish } />
               </li>
            )) }
         </ul>
      )
   }
   else if (category === '' && dishSearch != '') {
      return (
         <ul className="list">
            { dishes.filter(dish => dish.dish.title.match(dishSearch) != null).map((dish) => (
               <li className="list-item" key={ dish.dish.id }>
                  <DishCard dish={ dish } />
               </li>
            )) }
         </ul>
      )
   }
   else if (category != '' && dishSearch === '') {
      return (
         <ul className="list">
            { dishes.filter(dish => dish.category.name === category).map((dish) => (
               <li className="list-item" key={ dish.dish.id }>
                  <DishCard dish={ dish } />
               </li>
            )) }
         </ul>
      )
   }

   return (
      <ul className="list">
         { dishes.filter(dish => dish.category.name === category).filter(dish => dish.dish.title.match(dishSearch) != null).map((dish) => (
            <li className="list-item" key={ dish.dish.id }>
               <DishCard dish={ dish } />
            </li>
         )) }
      </ul>
   )
};