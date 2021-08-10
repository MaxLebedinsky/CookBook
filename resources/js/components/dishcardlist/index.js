import React from 'react';
import "./styles.css"
import { DishCard } from './dishcard';
import { useSelector } from 'react-redux';


export const DishCardList = () => {

   const dishes = useSelector(state => state.dishes.dishList);
   const category = useSelector(state => state.categories.categoryFilter);
   const dishSearch = useSelector(state => state.dishes.search);

   if (category === '' && dishSearch === '') {
      return (
         <ul className="list">
            { dishes.map(dish => (
               <li className="list-item" key={ dish.id }>
                  <DishCard dish={ dish } />
               </li>
            )) }
         </ul>
      )
   }
   else if (category === '' && dishSearch != '') {
      return (
         <ul className="list">
            { dishes.filter(dish => dish.title.match(dishSearch) != null).map((dish) => (
               <li className="list-item" key={ dish.id }>
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
               <li className="list-item" key={ dish.id }>
                  <DishCard dish={ dish } />
               </li>
            )) }
         </ul>
      )
   }

   return (
      <ul className="list">
         { dishes.filter(dish => dish.category.name === category).filter(dish => dish.title.match(dishSearch) != null).map((dish) => (
            <li className="list-item" key={ dish.id }>
               <DishCard dish={ dish } />
            </li>
         )) }
      </ul>
   )
};