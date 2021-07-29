import { makeStyles, withStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

export const useStyles = makeStyles({
    ratingLabel: {
      fontSize: '0.8em',
    },
    ratingStars: {
      margin: '0 7px',
      top: '0.2em',
    },
  });

export const StyledRating = withStyles ({
  iconFilled: {
    color: '#B00000DD',
  },
  icon: {
    fontSize: '0.9rem',
  },
})(Rating);