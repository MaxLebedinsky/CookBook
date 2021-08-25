import React from 'react';
import {Box, CardContent, CardMedia, List, ListItem, Typography} from '@material-ui/core';
import {Card} from 'reactstrap';
import {DishRating} from '../dishcardlist/dishcard/dishrating';
import {DishComplexity} from '../dishcardlist/dishcard/dishcomplexity';
import {getDateString} from '../dishcardlist/dishcard';
import {MAX_CAT_NAME_LENGTH, MAX_TITLE_LENGTH} from './const';
import {useStyles} from './styled';
import Layout from "../layout";
import {useSelector} from "react-redux";

export const Dish = () => {
    const classes = useStyles();
    const dish = useSelector(state => state.dish.chosenDish);

    return (
        <Layout>
            <Card className={classes.root}>
                <CardMedia className={classes.image}
                           component="img"
                           alt={dish.title}
                           image={dish.big_img}
                />
                <CardContent className={classes.desc}>
                    <Typography component="h1" className={classes.title}>
                        {dish.title.slice(0, MAX_TITLE_LENGTH - 1)}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        className={classes.data}>
                        {dish.description}<br/><br/>
                        Рейтинг:<DishRating rating={+dish.rating.toFixed(1)} changeable={true}/><br/>
                        Сложность:<DishComplexity complexity={dish.complexity}/><br/>
                        <b>{dish.category.name.slice(0, MAX_CAT_NAME_LENGTH - 1)}</b><br/>
                        Автор: {dish.user.name}<br/>
                        Опубликовано: {getDateString(dish.created_at)}
                    </Typography>
                </CardContent>
            </Card>

            <Typography component="h2" className={classes.listTitle}>
                Ингредиенты:
            </Typography>

            <List className={classes.list}>
                {dish.ingredients.map((item) => (
                    <ListItem className={classes.listItem} key={item.id}>
                        {item.ingredients_name}
                        <Box className={classes.dots}/>
                        <Box className={classes.amount}>
                            {item.quantity} {` `}
                            {item.measure.name}
                        </Box>
                    </ListItem>
                ))}
            </List>

            <Typography component="h2" className={classes.listTitle}>
                Рецепт:
            </Typography>

            <List className={classes.list}>
                {dish.dish_steps.map((item) => (
                    <ListItem className={classes.stepItem} key={item.id}>
                        <Card className={classes.stepItem}>
                            <CardMedia className={classes.stepImage}
                                       component="img"
                                       alt={`шаг №${item.step_number}`}
                                       image={item.img}/>
                            <CardContent className={classes.stepText}>
                                {item.step_number}{`. `}
                                {item.text}
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Layout>
    )
}