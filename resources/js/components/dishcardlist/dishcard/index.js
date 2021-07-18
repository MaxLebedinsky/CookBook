import React from 'react';
import './styles.css';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { DishRating } from './dishrating';
import { DishLevel } from './dishlevel';

const useStyles = makeStyles(() => ({
    root: {
        minWidth: 300,
        maxWidth: 370,
        margin: '15px auto 0',
        borderRadius: 10,
        padding: '10px',
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: 0,
        boxSizing: 'border-box',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        cursor: 'pointer',
    },
    image: {
        width: 130,
        // height: 100,
    },
    title: {
        fontWeight: 700,
        marginBottom: 8
    },
    desc: {
        padding: 0,
        margin: "0 0 0 10px",
    },
    data: {
        fontSize: '0.8em',
        lineHeight: '1.8em',
    }
}));

export const TEST_DISH = {
    id: 1,
    name: "Мясо по-французски",
    category: "Мясные блюда",
    author: "Иванов",
    level: 2,
    rating: 3.4,
    // photo: "https://via.placeholder.com/130x100",
    photo: "https://eda.ru/img/eda/-x900i/s1.eda.ru/StaticContent/Photos/160406123417/160413162850/p_O.jpg",
    // photo: '../../../../images/dishes/1/main.jpg',
    pubdate: "2021-07-10 23:12:59",
};

const getDateString = (string) => {
    let date = new Date(Date.parse(string));
    return(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}
     ${date.getHours()}:${date.getMinutes()}`);
}

export const DishCard = (props) => {
    const {dish} = {...props};
    const classes = useStyles();
    const clickHandler = (event) => {
        if (!event.target.classList.contains('MuiRating-label')&&
            !event.target.classList.contains('MuiRating-visuallyhidden')) 
        // здесь будет вызов компонента Dish c id = dish.id
        console.log(`calling component Dish with id=${dish.id}`);
    };
    
    return (
        <Card 
            className={classes.root} 
            onClick={(event) => clickHandler(event)}>    
                <CardMedia className={classes.image}
                    component="img"
                    alt={dish.name}
                    image={dish.photo}
                />
                <CardContent className={classes.desc}>
                    <Typography component="h3" className={classes.title}>
                        {dish.name}
                    </Typography>
                    <Typography 
                        color="textSecondary" 
                        className={classes.data}>
                        Рейтинг: <DishRating rating={dish.rating}/><br/>
                        Сложность: <DishLevel level={dish.level}/><br/>
                        <b><u>{dish.category}</u></b><br/>
                        Автор: <b><u>{dish.author}</u></b><br/>
                        Опубликовано: {getDateString(dish.pubdate)}
                    </Typography>
                </CardContent>
        </Card>
    );
}