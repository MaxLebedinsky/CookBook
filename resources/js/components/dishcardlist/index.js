import React from 'react';
import "./styles.css"
import { DishCard } from './dishcard';


export const DishCardList = () => {

   return (
      <ul className="list">
         { dishes.map((dish) => (
            <li className="list-item" key={ dish.dish.id }>
               <DishCard dish={ dish } />
            </li>
         )) }
      </ul>
   )
}