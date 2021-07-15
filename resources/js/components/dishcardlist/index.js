import React, { useEffect } from 'react';
import "./styles.css"
import { DishCard } from './dishcard';

// const API_URL = 'http://localhost:8000';

export const DishCardList = () => {

   useEffect(() => {
      fetch({
         url: 'http://localhost:8000/api/v1/dishes',
         headers: {
            'Access-Control-Allow-Origin': '*',
         }
      })
         .then(response => {
            console.log(response);
            return response.json();
         })
         .then(data => console.log(data))
   }, [])

   return (
      <ul className="list">
         <li className="list-item">
            <DishCard />
         </li>
      </ul>
   )
}