import React, { useEffect, useState } from 'react';
import { useStyles } from './styled';
import { DishCard } from './dishcard';
import { useDispatch, useSelector } from 'react-redux';
import Layout from "../layout";
import { Button } from '@material-ui/core';
import { getDishes } from "../../redux/dishes/actions";

export const DishCardList = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const dishes = useSelector(state => state.dishes.dishes);
    const links = useSelector(state => state.dishes.links);
    const category = useSelector(state => state.categories.categoryFilter);
    const dishSearch = useSelector(state => state.dishes.search);
    const [filteredDishes, setFilteredDishes] = useState([])
    const [loadedDishes, setLoadedDishes] = useState([]);
    const [isLastPage, setIsLastPage] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const filterCategory = useSelecor(state => state.filters.filterCategory);
    const filterOrder = useSelecor(state => state.filters.filterOrder);
    const searchTitle = useSelecor(state => state.filters.searchTitle);
    const includeIngredients = useSelecor(state => state.filters.includeIngredients);
    const excludeIngredietns = useSelecor(state => state.filters.excludeIngredietns);
    const userId = useSelecor(state => state.filters.userId);


    useEffect(() => {
        const filterEndpoint = `/api/full-dishes/search?
        sort=-${filterOrder}
        ${filterCategory === "" ? "" : `&category_id=${filterCategory}`}
        ${searchTitle === "" ? "" : `&title=${searchTitle}`}
        ${includeIngredients === [] ? "" : `&includes=${includeIngredients}`}
        ${excludeIngredietns === [] ? "" : `&excludes=${excludeIngredietns}`}
        `;
        dispatch(getDishes(filterEndpoint))
    }, [filterCategory, filterOrder, searchTitle, includeIngredients, excludeIngredietns, userId])

    const handleShowMore = () => {
        if (links.next === null) {
            setIsLastPage(true)
        } else {
            dispatch(getDishes(links.next))
        }
    }

    useEffect(() => {
        if (filteredDishes !== undefined) {
            if (filteredDishes.length > 0) {
                setIsLoaded(true)
            }
        }
    }, [filteredDishes])

    useEffect(() => {
        setIsLastPage(false)
        setFilteredDishes(dishes)
    }, [])

    useEffect(() => {
        setLoadedDishes(previousDishes => previousDishes.concat(dishes))
    }, [dishes])

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
    }, [category, dishSearch, loadedDishes]
    );

    return (
        <Layout>
            { isLoaded ?
                <>
                    <ul className={ classes.list }>
                        {
                            filteredDishes.map((dish, index) => (
                                <li className={ classes.listItem } key={ index }>
                                    <DishCard dish={ dish } />
                                </li>
                            ))
                        }
                    </ul>
                    { isLastPage ? <></> :
                        <Button className={ classes.showMoreButton } onClick={ handleShowMore } variant="contained">Больше
                            рецептов</Button>
                    }</>
                :
                <></>
            }
        </Layout>
    )
};
