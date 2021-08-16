import {makeStyles} from "@material-ui/core/styles";

export  const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        display: 'flex',
        margin: theme.spacing(0, 'auto'),
        padding: theme.spacing(0, 1),
    },
    formControl: {
        margin: theme.spacing(1, 0),
        width: '100%',
    },
    uploadDialog: {
        // display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        alignItems: 'center',
        margin: theme.spacing(1, 'auto'),
    },
    hidden: {
        display: 'none',
    },
    imagePreviewContainer: {
        width: 200,
        height: 150,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: '1px solid gray',
        background: 'lightgray',
        margin: theme.spacing(1),
        overflow: 'hidden',
    },
    imagePreview: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    fileName: {
        color: theme.palette.text.secondary,
        fontSize: '0.8em',
    },
    iconCamera: {
        color: theme.palette.text.secondary,
        fontSize: '2em',
    },
    form_button: {
        textTransform: 'none',
        display: 'flex',
        margin: theme.spacing(2, 4),
    },
    back_button: {
        margin: theme.spacing(1, 'auto'),
    },
    h1: {
        fontWeight: 700,
        fontSize: '1.2em',
        margin: theme.spacing(3, 'auto'),
    },
    h2: {
        margin: theme.spacing(3, 'auto'),
    },
    modal: {
        margin: '20% auto',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 1, 6),
    },
    select: {
        minWidth: 100,
    },
    ingredientsList: {
        margin: theme.spacing(0, 0, 3),
    },
    listItem: {
        paddingBottom: 0,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(1),
     },
     stepsListItem: {
         display: 'flex',
         marginBottom: theme.spacing(1),
     },
     dots: {
        flexGrow: 0.9,
        borderBottom: '2px dotted lightgray',
        alignSelf: 'flex-end',
        lineHeight: '1.3em',
        position: 'relative',
        bottom: 4,
     },
}));