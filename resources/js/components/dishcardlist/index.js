import React from 'react';
import "./styles.css"
import { DishCard } from './dishcard';

export const DishCardList = () => {
   return (
      <ul className="list">
         <li className="list-item">
            <DishCard />
         </li>
      </ul>
   )
}