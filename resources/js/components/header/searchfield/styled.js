import {makeStyles, withStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

export const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#757de8',
        padding:'4px',
        minWidth:0,
        marginRight:'8px'
    },
    search:{
        border: '2px solid #002984',
        overflow: 'auto',
        width: '100%',
        borderRadius: '5px',
        [theme.breakpoints.up(150)]:{
            margin: '0 auto',
        }
    },
    searchForm:{
        backgroundColor: '#757de8',
        display: 'flex',
        alignItems: 'center',
    },
    searchIcon:{
        marginLeft: '4px',
        backgroundColor: 'transparent',
    },
    filterIconInput:{
        backgroundColor: '#757de8',
        border: 0,
        width: '100%',
        height: '100%',
        padding: '10px 10px',
        color:'#fff',
        '&:focus': {
            color: '#fff',
            outline: 0,
        },
        '&::placeholder':{
            color:' #fff',
        }
    },
    // searchBox:{
    //     [theme.breakpoints.up(600)]:{
    //         padding:'24px',
    //     }
    // }
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