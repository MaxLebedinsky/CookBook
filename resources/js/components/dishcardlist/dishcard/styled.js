import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 370,
        borderRadius: 10,
        padding: '10px',
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: 0,
        boxSizing: 'border-box',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '4px 4px 15px rgba(0,0,0,0.4)',
        },
    },
    image: {
        width: 130,
    },
    title: {
        fontWeight: 700,
        marginBottom: 6,
        lineHeight: '1.3em',
    },
    desc: {
        padding: 0,
        margin: "0 0 0 10px",
        '&:last-child': {
            paddingBottom: 10,
        },
    },
    data: {
        fontSize: '0.8em',
        lineHeight: '1.8em',
    },
    noUnderline: {
        textDecoration: 'none',
    },

    // media queries:
    [theme.breakpoints.down(374)]: {
        root: {
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 300,
        },
        title: {
            marginTop: 10,
        },
        desc: {
            textAlign: 'center',
        },
    },
    [theme.breakpoints.up(425)]: {
        root: {
            maxWidth: 400
        },
        desc: {
            marginLeft: 20,
        },
    },
}));