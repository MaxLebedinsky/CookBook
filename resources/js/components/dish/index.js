import React, {useEffect} from 'react';
import {Box, CardContent, CardMedia, List, ListItem, Typography} from '@material-ui/core';
import {Card} from 'reactstrap';
import {DishRating} from '../dishcardlist/dishcard/dishrating';
import {DishComplexity} from '../dishcardlist/dishcard/dishcomplexity';
import {getDateString} from '../dishcardlist/dishcard';
import {MAX_CAT_NAME_LENGTH} from './const';
import {useStyles} from './styled';
import Layout from "../layout";
import {useDispatch, useSelector} from "react-redux";
import {isHeaderSmall} from "../../redux/header/actions";

export const Dish = () => {
    const classes = useStyles();
    const dish = useSelector(state => state.dish.chosenDish);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isHeaderSmall(false))
    }, [])

    return (
        <Layout>
            <Card className={classes.root}>
                <Box className={classes.imageContainer}>
                    <CardMedia className={classes.image}
                            component="img"
                            alt={dish.title}
                            image={dish.big_img}
                    />
                </Box>
                <CardContent className={classes.desc}>
                    <Typography component="h1" className={classes.title} color="textPrimary">
                        {dish.title}
                    </Typography>
                    <Typography color="textSecondary" className={classes.data}>
                        {dish.description}<br/><br/>
                    </Typography>
                    <Typography component="div" color="textPrimary" className={classes.data}>
                        Рейтинг:<DishRating rating={+dish.rating.toFixed(1)} dishId={dish.id} changeable={true}/><br/>
                        Сложность:<DishComplexity complexity={dish.complexity}/><br/>
                        Категория: <b>{dish.category.name.slice(0, MAX_CAT_NAME_LENGTH - 1)}</b><br/>
                        Автор: <b>{dish.user.name}</b><br/>
                        Опубликовано: {getDateString(dish.created_at)}
                    </Typography>
                </CardContent>
            </Card>

            <Typography component="h2" className={classes.listTitle} color="textPrimary">
                Ингредиенты:
            </Typography>

            <List className={classes.list}>
                {dish.ingredients.map((item) => (
                    <ListItem className={classes.listItem} key={item.id}>
                        <Typography color="textPrimary">{item.ingredients_name}</Typography>
                        <Box className={classes.dots}/>
                        <Typography className={classes.amount} color="textPrimary">
                            {item.quantity} {` `}
                            {item.measure.name}
                        </Typography>
                    </ListItem>
                ))}
            </List>

            <Typography component="h2" className={classes.listTitle} color="textPrimary">
                Рецепт:
            </Typography>

            <List className={classes.list}>
                {dish.dish_steps.map((item) => (
                    <ListItem className={classes.stepItem} key={item.id}>
                        <Card className={classes.stepItem}>
                            <Box className={classes.stepImageContainer}>
                                <CardMedia className={classes.stepImage}
                                        component="img"
                                        width="150"
                                        height="112"
                                        alt={`шаг №${item.step_number}`}
                                        image={item.img}/>
                            </Box>
                            <CardContent className={classes.stepText}>
                                <Typography color="textPrimary">
                                    {item.step_number}{`. `}
                                    {item.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Layout>
    )
}