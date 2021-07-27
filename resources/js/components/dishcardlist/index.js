import React, { useEffect, useState } from 'react';
import "./styles.css"
import { DishCard } from './dishcard';


export const DishCardList = () => {

   const [dishes, setDishes] = useState([])

   const getDishes = () =>
      window.axios.get('/full-dishes')
         .then(json => setDishes(json.data.data))


   useEffect(() => {
      getDishes()
   }, [])   

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