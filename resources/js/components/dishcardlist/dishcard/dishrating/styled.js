import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
            fontSize: '0.85rem',
        },
    }
  }));