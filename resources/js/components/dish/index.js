import React from 'react';
import { CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { Card } from 'reactstrap';
import { DishRating } from '../dishcardlist/dishcard/dishrating';
import { DishComplexity } from '../dishcardlist/dishcard/dishcomplexity';
import { getDateString } from '../dishcardlist/dishcard';
import { MAX_CAT_NAME_LENGTH, MAX_TITLE_LENGTH } from './const';

const useStyles = makeStyles (() => ({
    root: {
        minWidth: 300,
        maxWidth: 370,
        margin: '20px auto',
        // textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 400,

    },
    title: {
        fontWeight: 700,
        marginBottom: 6,
        lineHeight: '1.3em',
    },
    desc: {
        padding: 0,
        margin: "10px 0 0",
        '&:last-child': {
            paddingBottom: 10,
        },
    },
    data: {
        fontSize: '0.8em',
        lineHeight: '1.8em',
    },
}));

export const Dish = (props) => {
    const {dish} = {...props};
    const classes = useStyles();

    return (
        <>
        <Card className = {classes.root}>
            <CardMedia className={classes.image}
                    component="img"
                    alt={dish.dish.title}
                    image={dish.dish.big_img}
                />
            <CardContent className={classes.desc}>
                <Typography component="h3" className={classes.title}>
                    {dish.dish.title.slice(0, MAX_TITLE_LENGTH - 1)}
                </Typography>
                <Typography 
                    color="textSecondary" 
                    className={classes.data}>
                    Рейтинг:<DishRating rating={+dish.dish.rating.toFixed(1)}/><br/>
                    Сложность:<DishComplexity complexity={dish.dish.complexity}/><br/>
                    <b><u>{dish.category.name.slice(0, MAX_CAT_NAME_LENGTH - 1)}</u></b><br/>
                    Автор: <b><u>{dish.author.name}</u></b><br/>
                    Опубликовано: {getDateString(dish.dish.created_at)}
                </Typography>
            </CardContent>
        </Card>
            <ul className="list">
              { dish.ingredients.map((item) => (
                 <li className="list-item" key={ item.id }>
                    { item.ingredients_name }
                 </li>
              )) }
           </ul>
           <ul className="list">
              { dish.dish_steps.map((item) => (
                 <li className="list-item" key={ item.id }>
                    { item.text }
                 </li>
              )) }
           </ul>

        </>
    )
}