import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import './styles.css'
import Header from '../header'
import { DishCardList } from '../dishcardlist';
import { Dish } from '../dish';

const API_URL = 'http://localhost:8000/api/v1/full-dishes'

const Layout = () => {

    const [dishes, setDishes] = useState([]);
    const [dish, setDish] = useState([]);
    const [loading, setLoading] = useState(false);
    const { dishId } = useParams();
    const [category, setCategory] = useState('');

    const getDishes = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL);
            const data = await response.json();
            setDishes(data.data);
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    }

    const handleSetCategory = useCallback((newCategory) => {
        setCategory(() => newCategory);
    }, [])

    useEffect(() => {
        getDishes()
    }, []);

    useEffect(() => {
        setDish(() => (dishes[dishId - 1]))
    });


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
            <Header handleSetCategory={ handleSetCategory } />
            <main className='layout-content'>
                { dishId == undefined ?
                    <DishCardList dishes={ dishes } category={ category } /> :
                    <Dish dish={ dish } /> }
            </main>
        </>)
}

export default Layout