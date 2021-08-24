import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
   wrap: {
      display: 'flex',
   },
   root: {
      '& > *': {
         margin: theme.spacing(1),
         width: '25ch',
      },
   },
   formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
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
   },
   button: {
      minWidth: 150,
      minHeight: 32,
   },
}));