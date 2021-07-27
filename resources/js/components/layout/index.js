import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles.css'
import Header from '../header'
import { DishCardList } from '../dishcardlist';
import { Dish } from '../dish';

const Layout = () => {

    const [dishes, setDishes] = useState([]);
    const [dish, setDish] = useState([]);
    const [loading, setLoading] = useState(true);
    const { dishId } = useParams();

    const getDishes = () => {
        // setLoading(true);
        console.log(loading);
        window.axios.get('/full-dishes')
            .then(json => setDishes(json.data.data));
        console.log("fetching dishes")
        setLoading(false);
        console.log(loading)
    }

    useEffect(() => {
        getDishes()
    }, []);

    // const handleSetDish = useCallback((dishid) => {
    //     setDish(() => (dishes[dishid - 1]))
    // }, [dishId])

    useEffect(() => {
        setDish(() => (dishes[dishId - 1]))
        console.log(dish)
    }, [dishId, dish]);

    // console.log(dishId)
    console.log(dishes)
    console.log(dish)

    if (loading) {
        return (
            <>
                <Header />
                <main className='layout-content'>
                    <p>Here suppose to be loader</p>
                </main>
            </>)
    }

    return (
        <>
            <Header />
            <main className='layout-content'>
                { dishId == undefined ? <DishCardList dishes={ dishes } /> : <Dish dish={ dish } /> }
            </main>
        </>)
}

export default Layout