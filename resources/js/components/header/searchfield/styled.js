import {makeStyles, withStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import { myTheme } from "../../adddishform/styled";

export const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#757de8',
        padding:'4px',
        minWidth:0,
        marginRight:'8px'
    },
    search:{
        // border: '2px solid #002984',
        border: `1px solid ${myTheme.palette.text.primary}`,
        overflow: 'auto',
        width: '100%',
        borderRadius: '5px',
        [theme.breakpoints.up(150)]:{
            margin: '0 auto',
        }
    },
    searchForm:{
        backgroundColor: myTheme.palette.primary.light,
        display: 'flex',
        alignItems: 'center',
    },
    searchIcon:{
        marginLeft: '4px',
        backgroundColor: 'transparent',
    },
    filterIconInput:{
        backgroundColor: myTheme.palette.primary.light,
        border: 0,
        width: '100%',
        height: '100%',
        padding: '8px 10px',
        fontSize: '1.2em',
        color: myTheme.palette.text.primary,
        '&:focus': {
            color: myTheme.palette.text.primary,
            outline: 0,
        },
        '&::placeholder':{
            color: myTheme.palette.text.primary,
        }
    },
    searchBox:{
        margin: '0 auto',
        maxWidth: 800,
        [theme.breakpoints.up(600)]:{
            padding:'0 24px',
        }
    }
}));

export const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

export const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);