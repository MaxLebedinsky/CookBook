import React, {useEffect, useState} from 'react';
import "./styles.css"
import {DishCard} from './dishcard';
import {useSelector} from 'react-redux';
import Layout from "../layout";

export const DishCardList = () => {

        const dishes = useSelector(state => state.dishes.dishList);
        const category = useSelector(state => state.categories.categoryFilter);
        const dishSearch = useSelector(state => state.dishes.search);
        const [filteredDishes, setFilteredDishes] = useState([])

        useEffect(() => {
            switch (true) {
                case category === '' && dishSearch !== '':
                    setFilteredDishes(dishes.filter(dish => dish.title.match(dishSearch) != null));
                    break
                case category !== '' && dishSearch === '':
                    setFilteredDishes(dishes.filter(dish => dish.category.name === category))
                    break
                case category !== '' && dishSearch !== '':
                    setFilteredDishes(dishes.filter(dish => dish.category.name === category).filter(dish => dish.title.match(dishSearch) !== null))
                    break;
                default:
                    setFilteredDishes(dishes);
                    break
            }
        }, [category, dishSearch, dishes]);

        return (
            <Layout>
                <ul className="list">
                    {
                        filteredDishes.map(dish => (
                            <li className="list-item" key={dish.id}>
                                <DishCard dish={dish}/>
                            </li>
                        ))
                    }
                </ul>
            </Layout>
        )
    }
;