import React from 'react';
import './styles.css';

export const TEST_DISH = {
    id: 1,
    name: "Мясо по-французски",
    category: "Мясные блюда",
    author: "Иванов",
    level: 2,
    rating: 4.3,
    photo: "https://via.placeholder.com/140x100",
};

export const DishCard = (props) => {
    const {dish} = {...props};
    const clickHandler = () => {
        // здесь будет вызов компонента Dish c id = dish.id
        console.log(`calling component Dish with id=${dish.id}`)
    };
    return (
        <div className="dish-card" onClick={clickHandler}>
            <img src={dish.photo} alt={dish.name} width="140"/>
            <div className="dish-card-desc">
                <h3>{dish.name}</h3>
                <p>{dish.category}</p>
                <p>Автор: {dish.author}</p>
                <p>Сложность: {dish.level}</p>
                <p>Рейтинг: {dish.rating}</p>
            </div>
        </div>
    );
}