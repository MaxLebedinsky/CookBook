import React from 'react';
import { useStyles } from '../styled';
import { CircularProgress, Modal } from '@material-ui/core';

export const LoaderModal = (props) => {
    const classes = useStyles();
    const {open, message} = {...props};
    return (
        <Modal open={ open }>
            <div className={ classes.modal }>
                <CircularProgress className= { classes.loader } disableShrink color="secondary" thickness={5}/>
                <p>{ message }</p> 
            </div>
        </Modal>
    )
}