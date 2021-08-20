import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
   list:{
      // padding: '5px',
      listStyle: 'none'
   },
   listItem:{
      margin: '0 auto 10px',
      // flexGrow: '1',
   },
   showMoreButton:{
      backgroundColor:'#3F51B5',
      color:'white'
   },
   [theme.breakpoints.down(374)]: {
      listItem:{
         maxWidth: 300,
      }
   },
   [theme.breakpoints.up(425)]: {
      listItem:{
         maxWidth: 400,
      }
   },
   [theme.breakpoints.up(768)]: {
      list:{
         display: 'flex',
         flexWrap: 'wrap',
         justifyContent: 'space-between',
      }
   }
}))