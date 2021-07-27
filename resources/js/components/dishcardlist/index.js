import React from 'react';
import "./styles.css"
import { DishCard } from './dishcard';
import PropTypes from 'prop-types';


export const DishCardList = ({ dishes, category }) => {

   DishCardList.propTypes = {
      dishes: PropTypes.array,
      category: PropTypes.string
   }

   console.log(category)

   return (
      <ul className="list">
         { dishes.filter(dish => dish.category.name === category).map((dish) => (
            <li className="list-item" key={ dish.dish.id }>
               <DishCard dish={ dish } />
            </li>
         )) }
      </ul>
   )


};