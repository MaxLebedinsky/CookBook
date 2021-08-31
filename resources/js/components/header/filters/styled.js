import {makeStyles} from '@material-ui/core/styles';
import {myTheme} from '../../adddishform/styled';

export const useStyles = makeStyles((theme) => ({
    wrap: {
        display: 'flex',
        margin: '0 auto 16px',
        flexDirection: 'column',
        width: '30%',
        justifyContent: 'space-between',
        minHeight: 120,
        [theme.breakpoints.up(768)]: {
            minWidth: 490,
            flexDirection: 'initial',
            minHeight: 'auto',
        },
        [theme.breakpoints.up(300)]: {
            alignItems: 'center',
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
        backgroundColor: myTheme.palette.primary.light,
        paddingLeft: 8,
        borderRadius: 5,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        // display: 'flex',
        // justifyContent: 'space-around',
        minWidth: '40%',
        minHeight: 220,
        flexDirection: 'column',
        [theme.breakpoints.up(768)]: {
            minWidth: 460,
            flexDirection: 'initial',
            minHeight: 'auto',
        },
    },
    filtersContainer: {
        [theme.breakpoints.up(768)]: {display: 'flex',
        justifyContent: 'space-around',
    },
    },modalTitle: {
        textAlign: 'center',
        margin: theme.spacing(1, 0, 3),
        textTransform: 'uppercase',
        fontSize: '1.2em',
        fontWeight: 'bold',
    },
    ingredientsWrap: {
        margin: '0 auto',
    },
    button: {
        minWidth: 150,
        minHeight: 32,
        textTransform: 'none',
        backgroundColor: myTheme.palette.primary.light,
        '&:hover': {
            backgroundColor: myTheme.palette.primary.dark,
        },
        padding: '0 16px',
        fontSize: '16px',
    },
    ingredientsLabel: {
        display: 'block',
        textAlign: 'center',
        marginBottom: 15,

        textTransform: 'uppercase',
        color: myTheme.palette.text.primary,
        },
   textfield: {
      display: 'block',
      margin: '0 auto',
      maxWidth: 210,
   },
   textfieldplus: {
      marginBottom: 30,
      [theme.breakpoints.up(768)]: {
         marginBottom: 0,
      },
   },
   prompt: {
      color: '#808080',
      fontSize: 'small',
    },
    ingredientsButtonsWrap: {
        display: 'flex',
        marginTop: 15,
        justifyContent: 'space-around',
        width: '100%',[theme.breakpoints.up(768)]: {
         justifyContent: 'initial',
      },
    },
    ingredientsButton: {
        display: 'block',
        color: myTheme.palette.primary.light,
        backgroundColor: myTheme.palette.text.secondary,
        '&:hover': {
            backgroundColor: myTheme.palette.secondary.main,
        },
    },
   ingredientsButtonReset: {
     [theme.breakpoints.up(768)]: {
         margin: '0 10px',
      },
   }
}));