import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles.css'
import Header from '../header'
import { DishCardList } from '../dishcardlist';
import { Dish } from '../dish';

const Layout = () => {

    const [dishes, setDishes] = useState([]);
    const [dish, setDish] = useState([]);
    const { dishId } = useParams();

    const getDishes = () =>
        window.axios.get('/full-dishes')
            .then(json => setDishes(json.data.data));

    useEffect(() => {
        getDishes()
        console.log("fetching")
    }, []);

    useEffect(() => {
        setDish(() => (dishes[dishId - 1]))
        console.log(dish)
    }, [dishes]);

    console.log(dishes)
    console.log(dish)
    // console.log(dishes[dishId - 1])

    return (
        <>
            <Header />
            <main className='layout-content'>
                { dishId == undefined ? <DishCardList dishes={ dishes } /> : <Dish dish={ dish } /> }
            </main>
        </>)
}

export default Layout