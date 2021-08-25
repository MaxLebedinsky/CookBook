import React, { useEffect } from 'react';
import './styles.css'
import Header from '../header'
import {getCategories} from "../../redux/categories/actions";
import {useDispatch, useSelector} from "react-redux";
import {dishesSuccess, getDishes} from "../../redux/dishes/actions";
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { myTheme } from '../adddishform/styled';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    const dishes = useSelector(state => state.dishes.dishes);
    const filterOrder = useSelector(state => state.filters.filterOrder);
    const dispatch = useDispatch();
    useEffect(() => {
        if (dishes.length === 0) {
            dispatch(getDishes(`/full-dishes/search?sort=-${filterOrder}`));
        } else {
            dispatch(dishesSuccess([]))
        }
        dispatch(getCategories());
    }, [])

    return (
        <>
        <ThemeProvider theme={ myTheme }>
            <Header/>
            <main className='layout-content'>
                { children }
            </main>
        </ThemeProvider>
        </>
    )
}

export default Layout;