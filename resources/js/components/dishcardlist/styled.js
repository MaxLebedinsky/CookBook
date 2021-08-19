import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
   list:{
      padding: '5px',
      listStyle: 'none'
   },
   listItem:{
      marginBottom: '10px',
      flexGrow: '1',
   },
   showMoreButton:{
      backgroundColor:'#3F51B5',
      color:'white'
   },
   [theme.breakpoints.up(768)]: {
      list:{
         display: 'flex',
         flexWrap: 'wrap',
         justifyContent: 'space-between',
      }
   }
}))