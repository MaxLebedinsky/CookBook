import { Button } from '@material-ui/core';
import React from 'react';
// import { TEST_FULL_DISH } from '../dish/const';

const postDish = () => {
    console.log('click!');
};

export const AddDishForm = () => {
    return (
    <>
        <div>Here will be the FORM</div>
        <Button variant="contained" onClick={postDish}>Add test dish</Button>
    </>
    )
}