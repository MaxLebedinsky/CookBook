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
    const dishes = useSelector(state => state.dishes.dishes);
    const links = useSelector(state => state.dishes.links);
    const [loadedDishes, setLoadedDishes] = useState([]);
    const [isLastPage, setIsLastPage] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFilter, setIsFilter] = useState(false);

    const filterCategory = useSelector(state => state.filters.filterCategory);
    const filterOrder = useSelector(state => state.filters.filterOrder);
    const searchTitle = useSelector(state => state.filters.searchTitle);
    const includeIngredients = useSelector(state => state.filters.includeIngredients);
    const excludeIngredients = useSelector(state => state.filters.excludeIngredietns);
    const userId = useSelector(state => state.filters.userId);

    const handleShowMore = () => {
        setIsFilter(false)
        if (links.next === null) {
            setIsLastPage(true)
        } else {
            setIsLastPage(false)
            dispatch(getDishes(links.next))
        }
    }

    useEffect(() => {
        setIsFilter(true)
        const filterEndpoint = `/full-dishes/search?sort=-${filterOrder}${filterCategory === "" ? "" : `&category_id=${filterCategory}`}${searchTitle === "" ? "" : `&title=${searchTitle}`}${includeIngredients.length === 0 ? "" : `&includes=${includeIngredients}`}${excludeIngredients.length === 0 ? "" : `&excludes=${excludeIngredients}`}`;
        dispatch(getDishes(filterEndpoint))
    }, [filterCategory, filterOrder, searchTitle, includeIngredients, excludeIngredients, userId])

    useEffect(() => {
        if (links.next === null) {
            setIsLastPage(true)
        } else {
            setIsLastPage(false)
        }
        if (loadedDishes !== undefined) {
            if (loadedDishes.length > 0) {
                setIsLoaded(true)
            }
        }
    }, [loadedDishes])

    useEffect(() => {
        setIsLastPage(false)
        setLoadedDishes(dishes)
    }, [])

    useEffect(() => {
        if (isFilter) {
            setLoadedDishes(dishes)
        } else {
            setLoadedDishes(previousDishes => previousDishes.concat(dishes))
        }
    }, [dishes])

    return (
        <Layout>
            {isLoaded ?
                <>
                    <ul className={classes.list}>
                        {
                            loadedDishes.map((dish, index) => (
                                <li className={classes.listItem} key={index}>
                                    <DishCard dish={dish}/>
                                </li>
                            ))
                        }
                    </ul>
                    {isLastPage ? <></> :
                        <Button className={classes.showMoreButton} onClick={handleShowMore} variant="contained">Больше
                            рецептов</Button>
                    }</>
                :
                <></>
            }
        </Layout>
    )
};
