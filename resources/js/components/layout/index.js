import React from 'react';
import './styles.css'
import Header from '../header'
// импорт компонента DishCard и объекта для тестового блюда
import { DishCard, TEST_DISH } from '../dishcardlist/dishcard';

const  Layout =()=>{
    return(<>
        <Header />
        <main>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit! 
                Amet consequatur consequuntur cupiditate earum error et itaque magni maiores minima pariatur possimus, 
                praesentium quaerat saepe sed sint veniam, voluptatem voluptatum. Ab adipisci animi, autem corporis cum 
                debitis deleniti doloribus, ducimus esse fuga illo ipsum, iure maxime minima modi necessitatibus nemo 
                neque nostrum omnis optio provident reiciendis repellendus similique sit totam ut vitae voluptates. 
                Amet ducimus officia pariatur perspiciatis placeat possimus repellat saepe? Accusantium adipisci architecto 
                aut, autem beatae deserunt doloremque ducimus eaque eligendi est labore laboriosam modi, mollitia nemo 
                pariatur possimus, quaerat quas totam! Beatae ducimus ex similique.</p>
                <DishCard dish={TEST_DISH}/>
        </main>
        {/* Нам нужно создать стили для основного контента(main), чтобы текст лорем ипсум был адаптивным. Можешь почитать информацию тут:https://material.io/design/layout/responsive-layout-grid.html#breakpoints  */}
    </>)
}

export default Layout