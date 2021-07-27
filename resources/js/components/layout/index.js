import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles.css'
import Header from '../header'
import { DishCardList } from '../dishcardlist';
// import { Dish } from '../dish';

const Layout = () => {

    const [dishes, setDishes] = useState([]);
    // const [dish, setDish] = useState([]);
    const dishId = useParams();

    const getDishes = () =>
        window.axios.get('/full-dishes')
            .then(json => setDishes(json.data.data));

    useEffect(() => {
        getDishes()
    }, []);

    console.log(dishId.length == 0)

    // useEffect(() => {
    //     setDish(() => (dishes.filter(() => dishes.dish.id == dishId)))
    // }, [dishId]);


    setTimeout(() => {
        console.log(dishes);
        // console.log(dish);
    }, 3000)

    console.log(dishId)


    return (
        <>
            <Header />
            <main className='layout-content'>
                { Object.keys(dishId).length === 0 ? <DishCardList dishes={ dishes } /> : "<Dish dishes={ dish } />" }
            </main>
        </>)
}

export default Layout