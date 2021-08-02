import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { TEST_DISH_FOR_POST } from '../dish/const';

export const AddDishForm = () => {

    const [id, setId] = useState('');

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
          console.log(result);
    };

    const deleteDish = async (id) => {
        let response = await fetch(`/api/v1/full-dishes/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
          });
          
          let result = await response.json();
          console.log(result);
    };
    
    const handleDelete = (event) => {
        event.preventDefault();
        if (id) {
            console.log('deleting dish with id: '+id);
            deleteDish(id);
        }
        setId('');
    }

    const handleChange = (event) => {
        setId(event.target.value);
    }

    return (
    <>
        <div>Добавление блюда:</div>
        <Button variant="contained" onClick={postDish}>Добавить TEST_DISH_FOR_POST</Button>
        <br/><br/><hr/><br/>
        <p>Удаление блюда:</p>
        <form onSubmit={handleDelete}>
            <TextField
                type="text" 
                label="id удаляемого блюда" 
                variant="outlined" 
                value={id}
                onChange={handleChange}/>
            <Button type="submit" variant="contained">Удалить</Button>
        </form>
    </>
    )
}