import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
       maxWidth: 370,
       margin: '0 auto',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
    },
    imageContainer: {
      width: 365,
      height: 273,
      margin: theme.spacing(2, 0),
      overflow: 'hidden',
    },
    image: {
      objectFit: 'cover',
    },
    title: {
       fontWeight: 700,
       margin: theme.spacing(2, 0, 4),
       fontSize: '1.5em',
       textTransform: 'uppercase',
    },
    desc: {
       padding: 16,
      //  margin: "0 auto",
       textAlign: 'left',
       alignSelf: 'flex-start',
    },
    data: {
       lineHeight: '1.8em',
    },
    list: {
       margin: '0 auto 20px',
    },
    listTitle: {
       textAlign: 'center',
       fontWeight: 700,
       margin: theme.spacing(2, 0),
       textTransform: 'uppercase',
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
    stepImageContainer: {
      width: 150,
      height: 112,
      overflow: 'hidden',
      marginBottom: 8,
    },
    stepImage: {
       objectFit: 'cover',
    },
    stepText: {
       padding: 0,
       maxWidth: '80%'
    },
    
    [theme.breakpoints.down(374)]: {
       root: {
          maxWidth: 300,
       },
       title: {
          fontSize: '1.2em',
       },
       imageContainer: {
          width: 300,
          height: 225,
       }
    },
    [theme.breakpoints.up(425)]: {
       root: {
          maxWidth: 800,
       },
       imageContainer: {
          width: 400,
          height: 300,
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
       stepImageContainer: {
          marginRight: '20px',
       },
       imageContainer: {
         width: 640,
         height: 480,
      },
    },
 }));