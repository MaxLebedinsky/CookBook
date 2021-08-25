import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
   wrap: {
      display: 'flex',
      margin: '0 auto',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 120,
      [theme.breakpoints.up(768)]: {
         minWidth: 490,
         flexDirection: 'initial',
         minHeight: 'auto',
      },
   },
   root: {
      '& > *': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
   formControl: {
      // margin: theme.spacing(1),
      minWidth: 150,
   },
   selectEmpty: {
      // marginTop: theme.spacing(2),
      backgroundColor: "#fff",
      paddingLeft: 5,
   },
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: 'flex',
      justifyContent: 'space-around',
      minWidth: '40%',
      minHeight: 220,
      flexDirection: 'column',
      [theme.breakpoints.up(768)]: {
         minWidth: 460,
         flexDirection: 'initial',
         minHeight: 'auto',
      },
   },
   ingredientsWrap: {
      margin: '0 auto',
   },
   button: {
      minWidth: 150,
      minHeight: 32,
   },
   ingredientsLabel: {
      display: 'block',
      marginBottom: 15,
      letterSpacing: 1,
      textTransform: 'uppercase',
      font: '700 10px/13px PT Serif,Georgia,serif',
   },
   // [theme.breakpoints,up]
}));