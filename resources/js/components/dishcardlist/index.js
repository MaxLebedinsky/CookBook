import React, {useEffect, useState} from 'react';
import {useStyles} from './styled';
import {DishCard} from './dishcard';
import {useDispatch, useSelector} from 'react-redux';
import Layout from "../layout";
import {Button} from '@material-ui/core';
import {getDishes} from "../../redux/dishes/actions";

export const DishCardList = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const dishes = useSelector(state => state.dishes.dishList.data);
    const links = useSelector(state => state.dishes.dishList.links);
    const category = useSelector(state => state.categories.categoryFilter);
    const dishSearch = useSelector(state => state.dishes.search);
    const [filteredDishes, setFilteredDishes] = useState([])
    const [loadedDishes, setLoadedDishes] = useState([]);
    const [isLastPage, setIsLastPage] = useState(false);

    const handleShowMore = () => {
        if (links.next === null) {
            setIsLastPage(true)
        } else {
            dispatch(getDishes(links.next))
            setLoadedDishes(previousDishes => previousDishes.concat(dishes))
        }
    }

    useEffect(() => {
        setIsLastPage(false)
        setLoadedDishes(dishes)
    }, [])

    useEffect(() => {
            switch (true) {
                case category === '' && dishSearch !== '':
                    setFilteredDishes(loadedDishes.filter(dish => dish.title.match(dishSearch) != null));
                    break
                case category !== '' && dishSearch === '':
                    setFilteredDishes(loadedDishes.filter(dish => dish.category.name === category))
                    break
                case category !== '' && dishSearch !== '':
                    setFilteredDishes(loadedDishes.filter(dish => dish.category.name === category).filter(dish => dish.title.match(dishSearch) !== null))
                    break;
                default:
                    setFilteredDishes(loadedDishes);
                    break
            }
        }, [category, dishSearch, dishes]
    );

    return (
        <Layout>
            <ul className={classes.list}>
                {
                    filteredDishes.map((dish, index) => (
                        <li className={classes.listItem} key={index}>
                            <DishCard dish={dish}/>
                        </li>
                    ))
                }
            </ul>
            {isLastPage ? <></> :
                <Button className={classes.showMoreButton} onClick={handleShowMore} variant="contained">Больше
                    рецептов</Button>
            }
        </Layout>
    )
};