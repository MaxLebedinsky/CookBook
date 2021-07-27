import React, { useEffect } from 'react';
import { Box, CardContent, CardMedia, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import { Card } from 'reactstrap';
import { DishRating } from '../dishcardlist/dishcard/dishrating';
import { DishComplexity } from '../dishcardlist/dishcard/dishcomplexity';
import { getDateString } from '../dishcardlist/dishcard';
import { MAX_CAT_NAME_LENGTH, MAX_TITLE_LENGTH } from './const';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
   root: {
      minWidth: 300,
      maxWidth: 370,
      // margin: '20px auto',
      // textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   image: {
      width: 365,

   },
   title: {
      fontWeight: 700,
      marginBottom: 6,
      // lineHeight: '1.3em',
      fontSize: '1.5em',
   },
   desc: {
      padding: 16,
      boxSizing: 'borderBox',
      margin: "0 auto",
      '&:last-child': {
         paddingBottom: 10,
      },
   },
   data: {
      fontSize: '0.8em',
      lineHeight: '1.8em',
   },
   list: {
      margin: '0 auto 20px',
   },
   listTitle: {
      textAlign: 'center',
      fontWeight: 700,
   },
   listItem: {
      paddingBottom: 0,
      display: 'flex',
      justifyContent: 'space-between',
   },
   dots: {
      flexGrow: 0.9,
      borderBottom: '2px dotted lightgray',
      alignSelf: 'flex-end',
      lineHeight: '1.3em',
      position: 'relative',
      bottom: 4,
   },
   stepImage: {
      // display: 'block',
      width: 150,
      marginBottom: 10,
   },
   stepText: {
      padding: 0,
   },
   [theme.breakpoints.down(374)]: {
      root: {
         // flexDirection: 'column',
         // alignItems: 'center',
         maxWidth: 300,
      },
      title: {
         fontSize: '1.2em',
      },
      image: {
         width: 300,
      }
   },
   [theme.breakpoints.up(425)]: {
      root: {
         maxWidth: 1200,
      },
      image: {
         width: 640,
         maxWidth: '90%',
      },
      list: {
         maxWidth: 800,
      }
   },
   [theme.breakpoints.up(768)]: {
      stepItem: {
         display: 'flex',
         alignItems: 'flex-start',
      },
      stepImage: {
         marginRight: '20px',
      },
   },
}));

export const Dish = ({ dish }) => {
   //  const {dish} = {...props};

   const classes = useStyles();



   Dish.propTypes = {
      dish: PropTypes.array,
   }

   useEffect(() => {
      console.log(dish)
   }, [dish])

   if (dish == undefined || dish.length == 0) {
      return (
         <h1>Loading card...</h1>
      )
   }

   return (
      <>
         <Card className={ classes.root }>
            <CardMedia className={ classes.image }
               component="img"
               alt={ dish.dish.title }
               image={ dish.dish.big_img }
            />
            <CardContent className={ classes.desc }>
               <Typography component="h1" className={ classes.title }>
                  { dish.dish.title.slice(0, MAX_TITLE_LENGTH - 1) }
               </Typography>
               <Typography
                  color="textSecondary"
                  className={ classes.data }>
                  Рейтинг:<DishRating rating={ +dish.dish.rating.toFixed(1) } /><br />
                  Сложность:<DishComplexity complexity={ dish.dish.complexity } /><br />
                  <b><u>{ dish.category.name.slice(0, MAX_CAT_NAME_LENGTH - 1) }</u></b><br />
                  Автор: <b><u>{ dish.author.name }</u></b><br />
                  Опубликовано: { getDateString(dish.dish.created_at) }
               </Typography>
            </CardContent>
         </Card>

         <Typography component="h2" className={ classes.title, classes.listTitle }>
            Ингредиенты:
         </Typography>

         <List className={ classes.list }>
            { dish.ingredients.map((item) => (
               <ListItem className={ classes.listItem } key={ item.id }>
                  { item.ingredients_name }
                  <Box className={ classes.dots }></Box>
                  <Box className={ classes.amount }>
                     { item.quantity } { ` ` }
                     { item.measure }
                  </Box>
               </ListItem>
            )) }
         </List>

         <Typography component="h2" className={ classes.title, classes.listTitle }>
            Рецепт:
         </Typography>

         <List className={ classes.list }>
            { dish.dish_steps.map((item) => (
               <ListItem className={ classes.listItem, classes.stepItem } key={ item.id }>
                  <Card className={ classes.stepItem }>
                     <CardMedia className={ classes.stepImage }
                        component="img"
                        alt={ `шаг №${item.id}` }
                        image={ item.img } />
                     <CardContent className={ classes.stepText }>
                        { item.id }{ `. ` }
                        { item.text }
                     </CardContent>
                  </Card>
               </ListItem>
            )) }
         </List>
      </>
   )
}