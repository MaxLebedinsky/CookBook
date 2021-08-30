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
            fontSize: '0.83rem',
        },
    },
    modal: {
      margin: '20% auto',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      textAlign: 'center',
      lineHeight: '1.5em',
      borderRadius: 10,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(6, 2, 6),
      boxSizing: 'border-box',
      '&:focus': {
        border: 'none',
        outline: 'none',
      }
    },
    circular: {
      position: 'fixed',
      top: '50%',
      left: '48%',
    }
  }));