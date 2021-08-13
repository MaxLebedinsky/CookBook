import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles.css'
import Header from '../header'
import { DishCardList } from '../dishcardlist';
import { Dish } from '../dish';
import { useDispatch, useSelector } from 'react-redux';
import { getDishes } from '../../redux/dishes/actions';

const Layout = () => {
    const dishes = useSelector(state => state.dishes.dishList)
    const [dish, setDish] = useState([]);
    const { dishId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishes());
    }, [])

    useEffect(() => {
        setDish(() => dishes.find(dish => dish.id === +dishId))
    }, []);

    return (
        <>
            <Header />
            <main className='layout-content'>
                { dishId === undefined ?
                    <DishCardList /> :
                    <Dish dish={dish} /> }
            </main>
        </>
    )
}

export default Layout;