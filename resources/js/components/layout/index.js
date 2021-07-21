import React from 'react';
import './styles.css'
import Header from '../header'
import { DishCardList } from '../dishcardlist';

const Layout = () => {
    return (<>
        <Header />
        <main>
            <DishCardList />
        </main>
        {/* Нам нужно создать стили для основного контента(main), чтобы текст лорем ипсум был адаптивным. Можешь почитать информацию тут:https://material.io/design/layout/responsive-layout-grid.html#breakpoints  */ }
    </>)
}

export default Layout