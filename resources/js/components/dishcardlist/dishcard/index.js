import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import {DishRating} from './dishrating';
import {DishComplexity} from './dishcomplexity';
import {MAX_CAT_NAME_LENGTH, MAX_TITLE_LENGTH} from '../../dish/const';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useStyles} from './styled';
import {useDispatch} from "react-redux";
import {chooseDish} from "../../../redux/dish/actions";

// преобразование данных из поля created_at в строку вида "23.12.2020 17:53"
export const getDateString = (string) => {
    let date = new Date(Date.parse(string));
    return (`${('0'+date.getDate()).slice(-2)}.${('0'+(date.getMonth()+1)).slice(-2)}.${date.getFullYear()} в 
    ${('0'+date.getHours()).slice(-2)}:${('0'+date.getMinutes()).slice(-2)}`);
}

export const DishCard = ({dish}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleSelectedDish = (dish) => {
        dispatch(chooseDish(dish))
    }

    DishCard.propTypes = {
        dish: PropTypes.object,
    }

    return (
        <Link to={`/dish/${dish.id}`} onClick={() => handleSelectedDish(dish)} className={classes.noUnderline}>
            <Card className={classes.root}>
                <CardMedia className={classes.image}
                           component="img"
                           alt={dish.title}
                           image={dish.small_img}
                />
                <CardContent className={classes.desc}>
                    <Typography component="h3" className={classes.title}>
                        {dish.title.slice(0, MAX_TITLE_LENGTH - 1)}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        className={classes.data}>
                        Рейтинг:<DishRating rating={+dish.rating.toFixed(1)} changeable={false}/><br/>
                        Сложность:<DishComplexity complexity={dish.complexity}/><br/>
                        <b>{dish.category.name.slice(0, MAX_CAT_NAME_LENGTH - 1)}</b><br/>
                        Автор: <b>{dish.user.name}</b><br/>
                        Опубликовано: {getDateString(dish.created_at)}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}