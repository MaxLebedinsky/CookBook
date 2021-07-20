import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import StopIcon from '@material-ui/icons/Stop';

const useStyles = makeStyles({
    ratingLabel: {
      fontSize: '0.8em',
    },
    ratingStars: {
      margin: '0 7px',
      top: '0.2em',
    },
  });

const StyledRating = withStyles ({
  iconFilled: {
    color: '#B00000DD',
  },
  icon: {
    fontSize: '0.9rem',
  },
})(Rating);

export const DishLevel = (props) => {
  const value = {...props}.level
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <StyledRating className={classes.ratingStars}
          readOnly={true}
          max={3}
          icon={<StopIcon fontSize="inherit" />}
          name="level"
          value={value}
          size="small"
      />
      <Typography 
          component="span" 
          className={classes.ratingLabel}
          color="textSecondary">
          ( {value} из 3 )
      </Typography>
    </span>
  );
  }