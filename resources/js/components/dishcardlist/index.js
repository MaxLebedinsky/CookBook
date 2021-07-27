import React from 'react';
import "./styles.css"
import { DishCard } from './dishcard';
import PropTypes from 'prop-types';


export const DishCardList = ({ dishes }) => {

   DishCardList.propTypes = {
      dishes: PropTypes.array
   }

   return (
      <ul className="list">
         { dishes.map((dish) => (
            <li className="list-item" key={ dish.dish.id }>
               <DishCard dish={ dish } />
            </li>
         )) }
      </ul>
   )


};