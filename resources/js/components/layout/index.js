import React, { useEffect } from 'react';
import './styles.css'
import Header from '../header'
import { getCategories } from "../../redux/categories/actions";
import { useDispatch } from "react-redux";
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { myTheme } from '../adddishform/styled';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return (
        <>
            <ThemeProvider theme={ myTheme }>
                <Header />
                <main className='layout-content'>
                    { children }
                </main>
            </ThemeProvider>
        </>
    )
}

export default Layout;