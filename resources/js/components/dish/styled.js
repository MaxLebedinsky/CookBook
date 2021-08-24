import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
       maxWidth: 370,
       margin: '0 auto',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
    },
    image: {
       width: 365,
 
    },
    title: {
       fontWeight: 700,
       marginBottom: 6,
       fontSize: '1.5em',
    },
    desc: {
       padding: 16,
       margin: "0 auto",
       textAlign: 'left',
    },
    data: {
       fontSize: '0.8em',
       lineHeight: '1.8em',
    },
    list: {
       margin: '0 auto 20px',
    },
    listTitle: {
       textAlign: 'center',
       fontWeight: 700,
    },
    listItem: {
       paddingBottom: 0,
       display: 'flex',
       justifyContent: 'space-between',
    },
    dots: {
       flexGrow: 0.9,
       borderBottom: '2px dotted lightgray',
       alignSelf: 'flex-end',
       lineHeight: '1.3em',
       position: 'relative',
       bottom: 4,
    },
    stepImage: {
       width: 150,
       marginBottom: 10,
    },
    stepText: {
       padding: 0,
    },
    
    [theme.breakpoints.down(374)]: {
       root: {
          maxWidth: 300,
       },
       title: {
          fontSize: '1.2em',
       },
       image: {
          width: 300,
       }
    },
    [theme.breakpoints.up(425)]: {
       root: {
          maxWidth: 800,
       },
       image: {
          width: 640,
          maxWidth: '90%',
       },
       list: {
          maxWidth: 800,
       }
    },
    [theme.breakpoints.up(768)]: {
       stepItem: {
          display: 'flex',
          alignItems: 'flex-start',
       },
       stepImage: {
          marginRight: '20px',
       },
    },
 }));