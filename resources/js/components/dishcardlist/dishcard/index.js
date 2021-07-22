import React from 'react';
import './styles.css';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { DishRating } from './dishrating';
import { DishComplexity } from './dishcomplexity';

const useStyles = makeStyles((theme) => ({
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
        '&:hover': {
            boxShadow: '4px 4px 15px rgba(0,0,0,0.4)',
        },
    },
    image: {
        width: 130,
    },
    title: {
        fontWeight: 700,
        marginBottom: 6,
        lineHeight: '1.3em',
    },
    desc: {
        padding: 0,
        margin: "0 0 0 10px",
        '&:last-child': {
            paddingBottom: 10,
        },
    },
    data: {
        fontSize: '0.8em',
        lineHeight: '1.8em',
    },

    // media queries:
    [theme.breakpoints.down(374)]: {
        root: {
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 300,
        },
        title: {
            marginTop: 10,
        },
        desc: {
            textAlign: 'center',
        },
    },
    [theme.breakpoints.up(425)]: {
        root: {
            maxWidth: 400
        },
        desc : {
            marginLeft: 20,
        },
    },
}));

// тестовые данные; в "боевом" режиме будут передаваться из компонента DishCardList
export const TEST_DISH = {
    id: 1,
    name: "Мясо по-французски с сыром и картофелем",
    category: "Мясные блюда",
    author: "Иванов",
    complexity: 2,
    rating: 3.4,
    // photo: "https://via.placeholder.com/130x100",
    photo: "https://eda.ru/img/eda/-x900i/s1.eda.ru/StaticContent/Photos/160406123417/160413162850/p_O.jpg",
    // photo: '../../../../images/dishes/1/main.jpg',
    pubdate: "2021-07-10 23:12:59",
};

// преобразование данных из поля pubdate в строку вида "23.12.2020 17:53"
const getDateString = (string) => {
    console.log(string);
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
                    alt={dish.title}
                    image='https://via.placeholder.com/130x100'
                />
                <CardContent className={classes.desc}>
                    <Typography component="h3" className={classes.title}>
                        {dish.title}
                    </Typography>
                    <Typography 
                        color="textSecondary" 
                        className={classes.data}>
                        Рейтинг:<DishRating rating={TEST_DISH.rating}/><br/>
                        Сложность:<DishComplexity complexity={TEST_DISH.complexity}/><br/>
                        <b><u>Мясные блюда</u></b><br/>
                        Автор: <b><u>Иванов</u></b><br/>
                        Опубликовано: {getDateString(TEST_DISH.pubdate)}
                    </Typography>
                </CardContent>
        </Card>
    );
}