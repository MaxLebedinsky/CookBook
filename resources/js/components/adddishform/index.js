import { Button } from '@material-ui/core';
import React from 'react';
import { TEST_DISH_FOR_POST } from '../dish/const';

const postDish = async () => {
    console.log(JSON.stringify(TEST_DISH_FOR_POST));
    let response = await fetch('/api/v1/full-dishes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(TEST_DISH_FOR_POST)
      });
      
      let result = await response.json();
      console.log(result.message);
};

export const AddDishForm = () => {
    return (
    <>
        <div>Here will be the FORM</div>
        <Button variant="contained" onClick={postDish}>Add test dish</Button>
    </>
    )
}