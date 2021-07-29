import React from 'react';
import { Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStyles } from './styled';

export const DishRating = (props) => {
    const baseValue = {...props}.rating;
    const changeable = {...props}.changeable;
    const [value, setValue] = React.useState(baseValue);
    const classes = useStyles();

    return (
        <span className={classes.root}>
            <Rating className={classes.ratingStars}
                name="rating-stars"
                readOnly={!changeable}
                value={value}
                precision={0.5}
                size="small"
                onChange={(event, newValue) => {
                    event.preventDefault();
                    setValue(newValue);
                }}
            />
            <Typography 
                component="span" 
                className={classes.ratingLabel}
                color="textSecondary">
                ( {value} из 5 )
            </Typography>
        </span>
    );
    }