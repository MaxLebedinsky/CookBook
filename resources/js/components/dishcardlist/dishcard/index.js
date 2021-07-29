import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { DishRating } from './dishrating';
import { DishComplexity } from './dishcomplexity';
import { MAX_CAT_NAME_LENGTH, MAX_TITLE_LENGTH } from '../../dish/const';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useStyles } from './styled';

// преобразование данных из поля created_at в строку вида "23.12.2020 17:53"
export const getDateString = (string) => {
    let date = new Date(Date.parse(string));
    return (`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}
     ${date.getHours()}:${date.getMinutes()}`);
}

export const DishCard = ({ dish }) => {
    // const { dish } = { ...props };
    const classes = useStyles();

    DishCard.propTypes = {
        dish: PropTypes.object,
    }

    // функция для предотвращения ухода на страницу Dish при клике на рейтинг
    // const clickHandler = (event) => {
    //     if (!event.target.classList.contains('MuiRating-label')&&
    //         !event.target.classList.contains('MuiRating-visuallyhidden')) 
    //     console.log(`calling component Dish with id=${dish.dish.id}`);
    // };

    return (
        <Link to={ `/dish/${dish.dish.id}` } className={ classes.noUnderline }>
            <Card
                className={ classes.root }
            // onClick={(event) => clickHandler(event)}
            >
                <CardMedia className={ classes.image }
                    component="img"
                    alt={ dish.dish.title }
                    image={ dish.dish.small_img }
                />
                <CardContent className={ classes.desc }>
                    <Typography component="h3" className={ classes.title }>
                        { dish.dish.title.slice(0, MAX_TITLE_LENGTH - 1) }
                    </Typography>
                    <Typography
                        color="textSecondary"
                        className={ classes.data }>
                        Рейтинг:<DishRating rating={ +dish.dish.rating.toFixed(1) } changeable={false}/><br />
                        Сложность:<DishComplexity complexity={ dish.dish.complexity } /><br />
                        <b><u>{ dish.category.name.slice(0, MAX_CAT_NAME_LENGTH - 1) }</u></b><br />
                        Автор: <b><u>{ dish.author.name }</u></b><br />
                        Опубликовано: { getDateString(dish.dish.created_at) }
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}