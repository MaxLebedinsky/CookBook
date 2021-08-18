import React, {useEffect} from 'react';

import './styles.css'
import Header from '../header'
import {getCategories} from "../../redux/categories/actions";
import {useDispatch} from "react-redux";
import {getDishes} from "../../redux/dishes/actions";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getDishes());
    }, [])

    return (
        <>
            <Header/>
            <main className='layout-content'>
                {children}
            </main>
        </>
    )
}

export default Layout;