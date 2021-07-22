import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    top: '0.25em',
  },
  ratingLabel: {
    fontSize: '0.8em',
  },
  ratingStars: {
      margin: '0 7px',
      top: '0.2em',
      fontSize: '1rem',
      [theme.breakpoints.down(425)]: {
          margin: '0 2px',
      },
  }
}));

export const DishRating = (props) => {
    const baseValue = {...props}.rating
    const [value, setValue] = React.useState(baseValue);
    const classes = useStyles();

    return (
        <span className={classes.root}>
            <Rating className={classes.ratingStars}
                name="rating-stars"
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