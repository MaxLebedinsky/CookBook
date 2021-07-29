import React from 'react';
import { Typography } from '@material-ui/core';
import StopIcon from '@material-ui/icons/Stop';
import { StyledRating, useStyles } from './styled';

export const DishComplexity = (props) => {
  const value = {...props}.complexity
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <StyledRating className={classes.ratingStars}
          readOnly={true}
          max={3}
          icon={<StopIcon fontSize="inherit" />}
          name="complexity"
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