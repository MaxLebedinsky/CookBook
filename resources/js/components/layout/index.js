import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import './styles.css'
import Header from '../header'
import { DishCardList } from '../dishcardlist';
import { Dish } from '../dish';

const Layout = () => {

    // const [dishes, setDishes] = useState([]);
    const [dish, setDish] = useState([]);
    // const [loading, setLoading] = useState(false);
    const { dishId } = useParams();
    const [category, setCategory] = useState('');
    const [dishSearch, setDishSearch] = useState('');

    // const getDishes = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await window.axios.get('/full-dishes');
    //         setDishes(response.data.data);
    //     } catch (err) {
    //         console.log(err.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     getDishes()
    // }, []);

    const handleSetCategory = useCallback((newCategory) => {
        setCategory(() => newCategory);
    }, [])

    const handleSetDishSearch = useCallback((newDishSearch) => {
        setDishSearch(() => newDishSearch);
    }, [])

    useEffect(() => {
        setDish(() => (dishes[dishId - 1]))
    });

    if (loading) {
        return (
            <>
                <Header />
                <main className='layout-content'>
                    <p>Loading cards...</p>
                </main>
            </>)
    }

    return (
        <>
            <Header
                handleSetCategory={ handleSetCategory }
                handleSetDishSearch={ handleSetDishSearch }
            />
            <main className='layout-content'>
                { dishId == undefined ?
                    <DishCardList
                        dishes={ dishes }
                        category={ category }
                        dishSearch={ dishSearch }
                    /> :
                    <Dish dish={ dish } /> }
            </main>
        </>)
}

export default Layout;